# Quran Learn - Noorani Qaida PWA

Quran pora shekhar mobile-first web app (PWA). Ekdom basic theke — Arabic horof, harakat, tanween, sukun, madd ebong word practice. Bangla o English duita bhashay cholbe.

## Features

- 7 ta lesson: Alphabet (28 horof), Letter Shapes, Harakat, Tanween, Sukun, Madd, Word Practice
- Prottek lesson sheshe 5 proshner quiz — pass korle porer lesson unlock hoy
- Tap korle audio uccharon (device er built-in Arabic text-to-speech voice)
- Bangla / English language switch (header er button e tap korun)
- Progress automatic save hoy (browser er localStorage e)
- PWA: phone e "Add to Home Screen" kore app er moto install kora jay, offline o chole

## Kivabe chalaben

```bash
npm install
npm run dev
```

Terminal e je address dekhabe (jemon `http://localhost:5173`) seta browser e khulun.

### Phone e test korte

1. Computer ar phone same WiFi te rakhun
2. `npm run dev` cholar somoy terminal e "Network:" er pashe je address dekhabe (jemon `http://192.168.0.105:5173`) seta phone er browser e khulun

### Production build

```bash
npm run build
npm run preview
```

`dist` folder ta Netlify / Vercel / GitHub Pages e free te host kora jay. Host korle phone theke "Add to Home Screen" diye install korun — tokhon offline o cholbe.

## Audio na shunle

App device er built-in Arabic voice babohar kore. Kono shobdo na shunle:

- **Android**: Settings > System > Languages > Text-to-speech e giye Arabic voice install korun (Google TTS)
- **iPhone**: Settings > Accessibility > Spoken Content > Voices > Arabic

## Tech Stack

- React + Vite
- vite-plugin-pwa (offline + installable)
- Bundled MP3 pronunciation audio (with device TTS fallback)
- localStorage (progress + language)

## Author

**Firoz Kabir**

- GitHub: [github.com/firozkabirroz](https://github.com/firozkabirroz/)
- Facebook: [facebook.com/flywithfiroz](https://www.facebook.com/flywithfiroz)
- Email: [firozkabir.consultant@gmail.com](mailto:firozkabir.consultant@gmail.com)
