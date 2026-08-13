export default function Home({ lang, t, lessons, completed, onOpen }) {
  const doneCount = lessons.filter((l) => completed.includes(l.id)).length
  const pct = Math.round((doneCount / lessons.length) * 100)

  return (
    <>
      <section className="hero">
        <h2>{t.heroTitle}</h2>
        <p>{t.heroSubtitle}</p>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="progress-label">
          {lang === 'bn' ? `${doneCount}/${lessons.length} ${t.lessonsDone}` : `${doneCount}/${lessons.length} ${t.lessonsDone}`}
        </div>
      </section>

      <div className="lesson-list">
        {lessons.map((lesson, index) => {
          const isDone = completed.includes(lesson.id)
          const isLocked = index > 0 && !completed.includes(lessons[index - 1].id)
          return (
            <button
              key={lesson.id}
              className={`lesson-card${isDone ? ' done' : ''}${isLocked ? ' locked' : ''}`}
              onClick={() => !isLocked && onOpen(lesson.id)}
              title={isLocked ? t.locked : undefined}
            >
              <span className="glyph">{lesson.glyph}</span>
              <span className="info">
                <h3>
                  {index + 1}. {lesson.title[lang]}
                </h3>
                <p>{isLocked ? t.locked : lesson.desc[lang]}</p>
              </span>
              <span className={`status${isLocked ? ' lock' : ''}`}>
                {isDone ? '\u2713' : isLocked ? '\u{1F512}' : '\u203A'}
              </span>
            </button>
          )
        })}
      </div>

      <p className="credit">
        {t.developedBy}{' '}
        <a href="https://github.com/firozkabirroz/" target="_blank" rel="noopener noreferrer">
          Firoz Kabir
        </a>
      </p>
    </>
  )
}
