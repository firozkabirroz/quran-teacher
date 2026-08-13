import { useState } from 'react'

export default function Settings({ lang, t, onChangeLang, onReset }) {
  const [resetMsg, setResetMsg] = useState('')

  const handleReset = () => {
    if (window.confirm(t.resetConfirm)) {
      onReset()
      setResetMsg(t.resetDone)
    }
  }

  return (
    <>
      <section className="settings-section">
        <h3>{t.language}</h3>
        <div className="choice-row">
          <button
            className={`choice-btn${lang === 'bn' ? ' active' : ''}`}
            onClick={() => onChangeLang('bn')}
          >
            বাংলা
          </button>
          <button
            className={`choice-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => onChangeLang('en')}
          >
            English
          </button>
        </div>
      </section>

      <section className="settings-section">
        <h3>{t.resetProgress}</h3>
        <button className="danger-btn" onClick={handleReset}>
          {t.resetProgress}
        </button>
        {resetMsg && <p className="hint">{resetMsg}</p>}
      </section>

      <section className="settings-section">
        <p className="hint" style={{ margin: 0 }}>
          {t.audioHint}
        </p>
      </section>

      <section className="settings-section">
        <h3>{t.developer}</h3>
        <p className="dev-name">Firoz Kabir</p>
        <div className="dev-links">
          <a href="https://github.com/firozkabirroz/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.facebook.com/flywithfiroz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a href="mailto:firozkabir.consultant@gmail.com">Email</a>
        </div>
        <a className="author-email" href="mailto:firozkabir.consultant@gmail.com">
          firozkabir.consultant@gmail.com
        </a>
      </section>
    </>
  )
}
