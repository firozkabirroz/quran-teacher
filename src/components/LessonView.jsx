import { useState } from 'react'
import { playItem } from '../audio.js'
import Quiz from './Quiz.jsx'

export default function LessonView({ lang, t, lesson, onComplete, onExit }) {
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState('learn') // 'learn' | 'quiz'

  if (mode === 'quiz') {
    return (
      <Quiz
        lang={lang}
        t={t}
        lesson={lesson}
        onPass={onComplete}
        onReview={() => {
          setMode('learn')
          setIndex(0)
        }}
        onExit={onExit}
      />
    )
  }

  const item = lesson.items[index]
  const isLast = index === lesson.items.length - 1
  const isFormLesson = lesson.id === 'forms'
  const pct = Math.round(((index + 1) / lesson.items.length) * 100)

  return (
    <>
      <div className="lesson-progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span>
          {index + 1} {t.lessonOf} {lesson.items.length}
        </span>
      </div>

      <div className="letter-card">
        {isFormLesson && lesson.formHeader && (
          <p className="translit">{lesson.formHeader[lang]}</p>
        )}
        <div className={`arabic${isFormLesson || item.ar.length > 6 ? ' small' : ''}`}>
          {item.ar}
        </div>
        <p className="name">{item.name[lang]}</p>
        <p className="translit">{item.tr}</p>
        {item.desc && <p className="desc">{item.desc[lang]}</p>}
        <button className="listen-btn" onClick={() => playItem(item)}>
          <span aria-hidden="true">&#128266;</span> {t.listen}
        </button>
      </div>

      <div className="nav-row">
        <button
          className="nav-btn"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          {t.prev}
        </button>
        {isLast ? (
          <button className="nav-btn gold" onClick={() => setMode('quiz')}>
            {t.startQuiz}
          </button>
        ) : (
          <button className="nav-btn primary" onClick={() => setIndex(index + 1)}>
            {t.next}
          </button>
        )}
      </div>
    </>
  )
}
