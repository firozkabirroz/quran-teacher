import { useEffect, useRef, useState } from 'react'
import { fetchSurah } from '../api/quran.js'
import { surahs } from '../data/surahs.js'

const LAYOUT_KEY = 'quranlearn-quran-layout'

function getSavedLayout() {
  const saved = localStorage.getItem(LAYOUT_KEY)
  return saved === 'off' || saved === 'split' || saved === 'line' ? saved : 'line'
}

export default function QuranReader({ lang, t, surahNumber, onChangeSurah }) {
  const meta = surahs.find((s) => s.number === surahNumber)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [layout, setLayout] = useState(getSavedLayout)
  const [active, setActive] = useState(null)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const ayahRefs = useRef({})

  useEffect(() => {
    let cancelled = false
    setData(null)
    setError('')
    setActive(null)
    setPlaying(false)
    fetchSurah(surahNumber)
      .then((surah) => {
        if (!cancelled) setData(surah)
      })
      .catch(() => {
        if (!cancelled) setError(t.loadError)
      })
    return () => {
      cancelled = true
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [surahNumber, t.loadError])

  useEffect(() => {
    localStorage.setItem(LAYOUT_KEY, layout)
  }, [layout])

  useEffect(() => {
    if (active == null) return
    ayahRefs.current[active]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [active])

  const playAyah = (index) => {
    if (!data?.ayahs[index]) return
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    const audio = new Audio(data.ayahs[index].audioUrl)
    audioRef.current = audio
    setActive(index)
    setPlaying(true)
    audio.play().catch(() => setPlaying(false))
    audio.onended = () => {
      if (index + 1 < data.ayahs.length) playAyah(index + 1)
      else setPlaying(false)
    }
    audio.onerror = () => setPlaying(false)
  }

  const togglePlay = () => {
    if (playing && audioRef.current) {
      audioRef.current.pause()
      setPlaying(false)
      return
    }
    playAyah(active ?? 0)
  }

  const stopPlay = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setPlaying(false)
  }

  const title = meta ? (lang === 'bn' ? meta.nameBn : meta.nameEn) : t.quranTitle

  return (
    <div className="quran-reader">
      <div className="reader-head">
        <div>
          <h2 className="reader-title">{title}</h2>
          {meta && (
            <p className="reader-meta">
              <span className="reader-name-ar">{meta.nameAr}</span>
              {' · '}
              {meta.ayahCount} {t.ayahs}
              {' · '}
              {lang === 'bn' ? (meta.revelation === 'Meccan' ? t.meccan : t.medinan) : meta.revelation}
            </p>
          )}
        </div>
      </div>

      <div className="choice-row reader-toggles" role="group" aria-label={t.translationLayout}>
        <button
          className={`choice-btn${layout === 'off' ? ' active' : ''}`}
          onClick={() => setLayout('off')}
        >
          {t.arabicOnly}
        </button>
        <button
          className={`choice-btn${layout === 'line' ? ' active' : ''}`}
          onClick={() => setLayout('line')}
        >
          {t.lineByLine}
        </button>
        <button
          className={`choice-btn${layout === 'split' ? ' active' : ''}`}
          onClick={() => setLayout('split')}
        >
          {t.sideBySide}
        </button>
      </div>

      {error && (
        <p className="hint" role="alert">
          {error}
        </p>
      )}
      {!data && !error && <p className="hint">{t.loading}</p>}

      {data && surahNumber !== 1 && surahNumber !== 9 && (
        <p className="bismillah quran-arabic" lang="ar" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      )}

      {data && (
        <ol className={`ayah-list layout-${layout}`}>
          {data.ayahs.map((ayah, index) => (
            <li
              key={ayah.numberInQuran}
              ref={(el) => {
                ayahRefs.current[index] = el
              }}
              className={`ayah-row${active === index ? ' active' : ''}`}
              onClick={() => playAyah(index)}
            >
              <span className="ayah-badge" aria-hidden="true">
                {ayah.number}
              </span>
              <div className="ayah-body">
                <p className="quran-arabic" lang="ar" dir="rtl">
                  {ayah.arabic}
                </p>
                {layout !== 'off' && (
                  <p className="ayah-translation" lang={lang === 'bn' ? 'bn' : 'en'}>
                    {ayah.translation[lang] || ayah.translation.en}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}

      {data && (
        <div className="audio-bar" role="region" aria-label={t.recitation}>
          <button className="icon-btn audio-ctrl" onClick={togglePlay} aria-label={playing ? t.pause : t.play}>
            {playing ? '\u23F8' : '\u25B6'}
          </button>
          <div className="audio-info">
            <strong>{t.recitation}</strong>
            <span>
              {t.ayah} {data.ayahs[active ?? 0]?.number || 1} / {data.ayahCount}
              {' · '}
              {t.audioSyncHint}
            </span>
          </div>
          <button className="icon-btn audio-ctrl" onClick={stopPlay} aria-label={t.stop}>
            {'\u23F9'}
          </button>
        </div>
      )}

      <div className="nav-row reader-nav">
        <button
          className="nav-btn"
          disabled={surahNumber <= 1}
          onClick={() => onChangeSurah(surahNumber - 1)}
        >
          {t.prevSurah}
        </button>
        <button
          className="nav-btn primary"
          disabled={surahNumber >= 114}
          onClick={() => onChangeSurah(surahNumber + 1)}
        >
          {t.nextSurah}
        </button>
      </div>
    </div>
  )
}
