import { QURAN_API, QURAN_EDITIONS } from '../data/quranSchema.js'

const memoryCache = new Map()

function cacheKey(number) {
  return `quran-surah-v1-${number}`
}

function readCache(number) {
  if (memoryCache.has(number)) return memoryCache.get(number)
  try {
    const raw = localStorage.getItem(cacheKey(number))
    if (!raw) return null
    const data = JSON.parse(raw)
    memoryCache.set(number, data)
    return data
  } catch {
    return null
  }
}

function writeCache(number, data) {
  memoryCache.set(number, data)
  try {
    localStorage.setItem(cacheKey(number), JSON.stringify(data))
  } catch {
    // Quota exceeded — keep in-memory only.
  }
}

function pad3(n) {
  return String(n).padStart(3, '0')
}

function audioFallback(surahNumber, ayahNumber) {
  return `https://everyayah.com/data/Alafasy_128kbps/${pad3(surahNumber)}${pad3(ayahNumber)}.mp3`
}

export async function fetchSurah(number) {
  const cached = readCache(number)
  if (cached) return cached

  const editions = [
    QURAN_EDITIONS.uthmani,
    QURAN_EDITIONS.english,
    QURAN_EDITIONS.bangla,
    QURAN_EDITIONS.audio
  ].join(',')

  const res = await fetch(`${QURAN_API}/surah/${number}/editions/${editions}`)
  if (!res.ok) throw new Error(`Could not load Surah ${number}`)
  const json = await res.json()
  if (json.code !== 200 || !Array.isArray(json.data) || json.data.length < 3) {
    throw new Error('Unexpected Quran API response')
  }

  const [uthmani, english, bangla, audio] = json.data
  const mapped = {
    number: uthmani.number,
    nameAr: uthmani.name,
    nameEn: uthmani.englishName,
    revelation: uthmani.revelationType,
    ayahCount: uthmani.numberOfAyahs,
    ayahs: uthmani.ayahs.map((ayah, i) => ({
      number: ayah.numberInSurah,
      numberInQuran: ayah.number,
      juz: ayah.juz,
      arabic: ayah.text,
      translation: {
        en: english?.ayahs?.[i]?.text || '',
        bn: bangla?.ayahs?.[i]?.text || ''
      },
      audioUrl: audio?.ayahs?.[i]?.audio || audioFallback(number, ayah.numberInSurah)
    }))
  }

  writeCache(number, mapped)
  return mapped
}
