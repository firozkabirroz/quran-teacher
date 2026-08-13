// Downloads an MP3 pronunciation for every lesson item into public/audio/,
// so the app ships with its own audio files. Runs before every build;
// files that already exist are skipped, so local rebuilds are instant.
import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { lessons } from '../src/data/lessons.js'

const outDir = new URL('../public/audio/', import.meta.url)
await mkdir(outDir, { recursive: true })

let ok = 0
let skipped = 0
let fail = 0

async function download(url) {
  let lastErr
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return Buffer.from(await res.arrayBuffer())
    } catch (err) {
      lastErr = err
      await new Promise((r) => setTimeout(r, 1000 * attempt))
    }
  }
  throw lastErr
}

for (const lesson of lessons) {
  for (let i = 0; i < lesson.items.length; i++) {
    const dest = new URL(`${lesson.id}-${i}.mp3`, outDir)
    if (existsSync(dest)) {
      skipped++
      continue
    }
    const item = lesson.items[i]
    const url =
      'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ar&q=' +
      encodeURIComponent(item.say)
    try {
      const buf = await download(url)
      await writeFile(dest, buf)
      ok++
      console.log(`ok   ${lesson.id}-${i}.mp3 (${buf.length} bytes)`)
    } catch (err) {
      fail++
      console.error(`FAIL ${lesson.id}-${i}: ${err.message}`)
    }
    await new Promise((r) => setTimeout(r, 250))
  }
}

console.log(`\nDone. ${ok} downloaded, ${skipped} skipped (already exist), ${fail} failed.`)
if (fail > 0) process.exitCode = 1
