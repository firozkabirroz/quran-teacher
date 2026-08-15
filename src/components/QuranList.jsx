import { useMemo, useState } from 'react'
import { surahs } from '../data/surahs.js'

export default function QuranList({ lang, t, onOpen }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return surahs
    return surahs.filter((s) => {
      const hay = `${s.number} ${s.nameEn} ${s.nameBn} ${s.nameAr} ${s.englishTitle}`.toLowerCase()
      return hay.includes(q)
    })
  }, [query])

  return (
    <>
      <section className="hero">
        <h2>{t.quranTitle}</h2>
        <p>{t.quranSubtitle}</p>
      </section>

      <label className="search-wrap">
        <span className="visually-hidden">{t.searchSurah}</span>
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchSurah}
        />
      </label>

      <div className="lesson-list">
        {filtered.map((surah) => (
          <button
            key={surah.number}
            className="lesson-card surah-card"
            onClick={() => onOpen(surah.number)}
          >
            <span className="surah-num">{surah.number}</span>
            <span className="info">
              <h3>{lang === 'bn' ? surah.nameBn : surah.nameEn}</h3>
              <p>
                {surah.englishTitle} · {surah.ayahCount} {t.ayahs} ·{' '}
                {lang === 'bn'
                  ? surah.revelation === 'Meccan'
                    ? t.meccan
                    : t.medinan
                  : surah.revelation}
              </p>
            </span>
            <span className="glyph surah-ar">{surah.nameAr}</span>
          </button>
        ))}
      </div>
    </>
  )
}
