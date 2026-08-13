import { useEffect, useState } from 'react'
import { lessons } from './data/lessons.js'
import { translations, getSavedLang, saveLang } from './i18n.js'
import { getCompletedLessons, markLessonComplete, resetProgress } from './progress.js'
import Home from './components/Home.jsx'
import LessonView from './components/LessonView.jsx'
import Settings from './components/Settings.jsx'

export default function App() {
  const [lang, setLang] = useState(getSavedLang)
  const [screen, setScreen] = useState({ name: 'home' })
  const [completed, setCompleted] = useState(getCompletedLessons)

  const t = translations[lang]

  useEffect(() => {
    document.body.dataset.lang = lang
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    const next = lang === 'bn' ? 'en' : 'bn'
    setLang(next)
    saveLang(next)
  }

  const changeLang = (next) => {
    setLang(next)
    saveLang(next)
  }

  const openLesson = (lessonId) => setScreen({ name: 'lesson', lessonId })
  const goHome = () => setScreen({ name: 'home' })

  const completeLesson = (lessonId) => {
    setCompleted([...markLessonComplete(lessonId)])
  }

  const handleReset = () => {
    resetProgress()
    setCompleted([])
  }

  const activeLesson =
    screen.name === 'lesson' ? lessons.find((l) => l.id === screen.lessonId) : null

  const headerTitle =
    screen.name === 'lesson'
      ? activeLesson.title[lang]
      : screen.name === 'settings'
        ? t.settings
        : t.appName

  return (
    <>
      <header className="header">
        {screen.name !== 'home' && (
          <button className="icon-btn" onClick={goHome} aria-label={t.backHome}>
            &#8592;
          </button>
        )}
        <div className="title">{headerTitle}</div>
        <button className="lang-toggle" onClick={toggleLang}>
          {lang === 'bn' ? 'EN' : 'বাংলা'}
        </button>
        {screen.name === 'home' && (
          <button
            className="icon-btn"
            onClick={() => setScreen({ name: 'settings' })}
            aria-label={t.settings}
          >
            &#9881;
          </button>
        )}
      </header>

      <main className="main">
        {screen.name === 'home' && (
          <Home lang={lang} t={t} lessons={lessons} completed={completed} onOpen={openLesson} />
        )}
        {screen.name === 'lesson' && (
          <LessonView
            key={activeLesson.id}
            lang={lang}
            t={t}
            lesson={activeLesson}
            onComplete={() => completeLesson(activeLesson.id)}
            onExit={goHome}
          />
        )}
        {screen.name === 'settings' && (
          <Settings lang={lang} t={t} onChangeLang={changeLang} onReset={handleReset} />
        )}
      </main>
    </>
  )
}
