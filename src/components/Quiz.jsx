import { useMemo, useState } from 'react'
import { playItem } from '../audio.js'

const QUESTION_COUNT = 5
const PASS_SCORE = 4

function shuffle(list) {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function buildQuestions(lesson, lang) {
  const pool = lesson.items.filter((item) => item.name[lang])
  const questions = shuffle(pool).slice(0, QUESTION_COUNT)
  return questions.map((item) => {
    const wrong = shuffle(pool.filter((other) => other !== item)).slice(0, 3)
    return {
      item,
      options: shuffle([item, ...wrong])
    }
  })
}

export default function Quiz({ lang, t, lesson, onPass, onReview, onExit }) {
  const [round, setRound] = useState(0)
  const questions = useMemo(() => buildQuestions(lesson, lang), [lesson, lang, round])
  const [qIndex, setQIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [passed, setPassed] = useState(false)

  const question = questions[qIndex]

  const pick = (option) => {
    if (picked !== null) return
    setPicked(option)
    const correct = option === question.item
    const newScore = correct ? score + 1 : score
    if (correct) setScore(newScore)

    setTimeout(() => {
      if (qIndex + 1 < questions.length) {
        setQIndex(qIndex + 1)
        setPicked(null)
      } else {
        const didPass = newScore >= PASS_SCORE
        setPassed(didPass)
        setFinished(true)
        if (didPass) onPass()
      }
    }, 900)
  }

  const restart = () => {
    setRound(round + 1)
    setQIndex(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
    setPassed(false)
  }

  if (finished) {
    return (
      <div className="quiz-result">
        <div className="big">{passed ? '\u2605\u2605\u2605' : '\u2605'}</div>
        <h3>{passed ? t.quizPassedTitle : t.quizFailedTitle}</h3>
        <p>
          {t.score}: {score}/{questions.length}
          <br />
          {passed ? t.quizPassedMsg : t.quizFailedMsg}
        </p>
        {passed ? (
          <button className="nav-btn primary" style={{ width: '100%' }} onClick={onExit}>
            {t.backHome}
          </button>
        ) : (
          <div className="nav-row" style={{ marginTop: 0 }}>
            <button className="nav-btn" onClick={onReview}>
              {t.reviewLesson}
            </button>
            <button className="nav-btn primary" onClick={restart}>
              {t.tryAgain}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <p className="quiz-question">
        {t.quizTitle} - {t.question} {qIndex + 1}/{questions.length}
      </p>

      <div className="letter-card">
        <p className="name">{t.whichIs}</p>
        <div className={`arabic${question.item.ar.length > 6 ? ' small' : ''}`}>
          {question.item.ar}
        </div>
        <button className="listen-btn" onClick={() => playItem(question.item)}>
          <span aria-hidden="true">&#128266;</span> {t.listen}
        </button>
      </div>

      <div className="quiz-options">
        {question.options.map((option) => {
          let cls = 'quiz-option'
          if (picked !== null) {
            if (option === question.item) cls += ' correct'
            else if (option === picked) cls += ' wrong'
          }
          return (
            <button key={option.name.en} className={cls} onClick={() => pick(option)}>
              {option.name[lang]}
            </button>
          )
        })}
      </div>
    </>
  )
}
