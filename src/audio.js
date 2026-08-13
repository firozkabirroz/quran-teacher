let arabicVoice = null

function pickArabicVoice() {
  const voices = window.speechSynthesis?.getVoices() || []
  arabicVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('ar')) || null
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  pickArabicVoice()
  window.speechSynthesis.onvoiceschanged = pickArabicVoice
}

let currentAudio = null

function speakWithDevice(text) {
  if (!window.speechSynthesis) return
  if (!arabicVoice) pickArabicVoice()
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = arabicVoice ? arabicVoice.lang : 'ar-SA'
  utterance.rate = 0.7
  if (arabicVoice) utterance.voice = arabicVoice
  // Chrome sometimes ignores speak() called right after cancel()
  setTimeout(() => window.speechSynthesis.speak(utterance), 60)
}

// Plays the bundled MP3 for a lesson item; falls back to device TTS.
export function playItem(item) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  if (item.audio) {
    currentAudio = new Audio(item.audio)
    currentAudio.play().catch(() => speakWithDevice(item.say))
    return
  }
  speakWithDevice(item.say)
}
