// Noorani Qaida lesson content.
// Every item: { ar: displayed Arabic, say: text sent to TTS, name: {en, bn}, tr: transliteration, desc: {en, bn} (optional) }

const L = (ar, say, en, bn, tr, descEn, descBn) => ({
  ar,
  say,
  name: { en, bn },
  tr,
  ...(descEn ? { desc: { en: descEn, bn: descBn } } : {})
})

export const lessons = [
  {
    id: 'alphabet',
    glyph: 'ا',
    title: { en: 'The Arabic Alphabet', bn: 'আরবি হরফ পরিচয়' },
    desc: {
      en: '28 letters of Horof-ul-Hija with their names',
      bn: 'হরফুল হিজার ২৮টি হরফ ও তাদের নাম'
    },
    items: [
      L('ا', 'أَلِف', 'Alif', 'আলিফ', 'a'),
      L('ب', 'بَاء', 'Ba', 'বা', 'b'),
      L('ت', 'تَاء', 'Ta', 'তা', 't'),
      L('ث', 'ثَاء', 'Tsa', 'ছা', 'th'),
      L('ج', 'جِيم', 'Jim', 'জীম', 'j'),
      L('ح', 'حَاء', 'Hha', 'হা', 'h'),
      L('خ', 'خَاء', 'Kha', 'খা', 'kh'),
      L('د', 'دَال', 'Dal', 'দাল', 'd'),
      L('ذ', 'ذَال', 'Dhal', 'যাল', 'dh'),
      L('ر', 'رَاء', 'Ra', 'রা', 'r'),
      L('ز', 'زَاي', 'Zay', 'যা', 'z'),
      L('س', 'سِين', 'Sin', 'সীন', 's'),
      L('ش', 'شِين', 'Shin', 'শীন', 'sh'),
      L('ص', 'صَاد', 'Sad', 'সোয়াদ', 's (heavy)'),
      L('ض', 'ضَاد', 'Dad', 'দোয়াদ', 'd (heavy)'),
      L('ط', 'طَاء', 'Tta', 'তোয়া', 't (heavy)'),
      L('ظ', 'ظَاء', 'Zza', 'যোয়া', 'z (heavy)'),
      L('ع', 'عَيْن', 'Ain', 'আইন', "'a"),
      L('غ', 'غَيْن', 'Ghain', 'গাইন', 'gh'),
      L('ف', 'فَاء', 'Fa', 'ফা', 'f'),
      L('ق', 'قَاف', 'Qaf', 'ক্বাফ', 'q'),
      L('ك', 'كَاف', 'Kaf', 'কাফ', 'k'),
      L('ل', 'لَام', 'Lam', 'লাম', 'l'),
      L('م', 'مِيم', 'Mim', 'মীম', 'm'),
      L('ن', 'نُون', 'Nun', 'নূন', 'n'),
      L('و', 'وَاو', 'Waw', 'ওয়াও', 'w'),
      L('ه', 'هَاء', 'Ha', 'হা', 'h (soft)'),
      L('ي', 'يَاء', 'Ya', 'ইয়া', 'y')
    ]
  },
  {
    id: 'forms',
    glyph: 'بـ',
    title: { en: 'Letter Shapes', bn: 'হরফের রূপ' },
    desc: {
      en: 'How letters look at the start, middle and end of a word',
      bn: 'শব্দের শুরুতে, মাঝে ও শেষে হরফ কেমন দেখায়'
    },
    formHeader: {
      en: 'Alone - Start - Middle - End',
      bn: 'একা - শুরুতে - মাঝে - শেষে'
    },
    items: [
      L('ب \u00A0 بـ \u00A0 ـبـ \u00A0 ـب', 'بَاء', 'Ba shapes', 'বা-এর রূপ', 'b'),
      L('ت \u00A0 تـ \u00A0 ـتـ \u00A0 ـت', 'تَاء', 'Ta shapes', 'তা-এর রূপ', 't'),
      L('ج \u00A0 جـ \u00A0 ـجـ \u00A0 ـج', 'جِيم', 'Jim shapes', 'জীম-এর রূপ', 'j'),
      L('س \u00A0 سـ \u00A0 ـسـ \u00A0 ـس', 'سِين', 'Sin shapes', 'সীন-এর রূপ', 's'),
      L('ص \u00A0 صـ \u00A0 ـصـ \u00A0 ـص', 'صَاد', 'Sad shapes', 'সোয়াদ-এর রূপ', 's'),
      L('ع \u00A0 عـ \u00A0 ـعـ \u00A0 ـع', 'عَيْن', 'Ain shapes', 'আইন-এর রূপ', "'a"),
      L('ف \u00A0 فـ \u00A0 ـفـ \u00A0 ـف', 'فَاء', 'Fa shapes', 'ফা-এর রূপ', 'f'),
      L('ك \u00A0 كـ \u00A0 ـكـ \u00A0 ـك', 'كَاف', 'Kaf shapes', 'কাফ-এর রূপ', 'k'),
      L('ل \u00A0 لـ \u00A0 ـلـ \u00A0 ـل', 'لَام', 'Lam shapes', 'লাম-এর রূপ', 'l'),
      L('م \u00A0 مـ \u00A0 ـمـ \u00A0 ـم', 'مِيم', 'Mim shapes', 'মীম-এর রূপ', 'm'),
      L('ن \u00A0 نـ \u00A0 ـنـ \u00A0 ـن', 'نُون', 'Nun shapes', 'নূন-এর রূপ', 'n'),
      L('ه \u00A0 هـ \u00A0 ـهـ \u00A0 ـه', 'هَاء', 'Ha shapes', 'হা-এর রূপ', 'h'),
      L('ي \u00A0 يـ \u00A0 ـيـ \u00A0 ـي', 'يَاء', 'Ya shapes', 'ইয়া-এর রূপ', 'y')
    ]
  },
  {
    id: 'harakat',
    glyph: 'بَ',
    title: { en: 'Harakat (Short Vowels)', bn: 'হরকত (যবর, যের, পেশ)' },
    desc: {
      en: 'Fatha, Kasra and Damma - the three short vowel signs',
      bn: 'ফাতহা (যবর), কাসরা (যের) ও দাম্মা (পেশ)'
    },
    items: [
      L('بَ', 'بَ', 'Ba (Fatha)', 'বা (যবর)', 'ba', 'The small line above is Fatha. It gives an "a" sound.', 'উপরের ছোট রেখাটি ফাতহা (যবর)। এটি "আ" ধ্বনি দেয়।'),
      L('بِ', 'بِ', 'Bi (Kasra)', 'বি (যের)', 'bi', 'The small line below is Kasra. It gives an "i" sound.', 'নিচের ছোট রেখাটি কাসরা (যের)। এটি "ই" ধ্বনি দেয়।'),
      L('بُ', 'بُ', 'Bu (Damma)', 'বু (পেশ)', 'bu', 'The small waw above is Damma. It gives a "u" sound.', 'উপরের ছোট ওয়াও চিহ্নটি দাম্মা (পেশ)। এটি "উ" ধ্বনি দেয়।'),
      L('تَ', 'تَ', 'Ta (Fatha)', 'তা (যবর)', 'ta'),
      L('تِ', 'تِ', 'Ti (Kasra)', 'তি (যের)', 'ti'),
      L('تُ', 'تُ', 'Tu (Damma)', 'তু (পেশ)', 'tu'),
      L('جَ', 'جَ', 'Ja (Fatha)', 'জা (যবর)', 'ja'),
      L('جِ', 'جِ', 'Ji (Kasra)', 'জি (যের)', 'ji'),
      L('جُ', 'جُ', 'Ju (Damma)', 'জু (পেশ)', 'ju'),
      L('سَ', 'سَ', 'Sa (Fatha)', 'সা (যবর)', 'sa'),
      L('سِ', 'سِ', 'Si (Kasra)', 'সি (যের)', 'si'),
      L('سُ', 'سُ', 'Su (Damma)', 'সু (পেশ)', 'su'),
      L('مَ', 'مَ', 'Ma (Fatha)', 'মা (যবর)', 'ma'),
      L('مِ', 'مِ', 'Mi (Kasra)', 'মি (যের)', 'mi'),
      L('مُ', 'مُ', 'Mu (Damma)', 'মু (পেশ)', 'mu'),
      L('نَ', 'نَ', 'Na (Fatha)', 'না (যবর)', 'na'),
      L('نِ', 'نِ', 'Ni (Kasra)', 'নি (যের)', 'ni'),
      L('نُ', 'نُ', 'Nu (Damma)', 'নু (পেশ)', 'nu')
    ]
  },
  {
    id: 'tanween',
    glyph: 'بً',
    title: { en: 'Tanween (Double Vowels)', bn: 'তানউইন (দুই যবর, দুই যের, দুই পেশ)' },
    desc: {
      en: 'Double Fatha, double Kasra and double Damma add an "n" sound',
      bn: 'দুই ফাতহা, দুই কাসরা ও দুই দাম্মা শেষে "ন" ধ্বনি যোগ করে'
    },
    items: [
      L('بًا', 'بًا', 'Ban (2 Fatha)', 'বান (দুই যবর)', 'ban', 'Two Fathas make "an" at the end.', 'দুই যবর শেষে "আন" ধ্বনি দেয়।'),
      L('بٍ', 'بٍ', 'Bin (2 Kasra)', 'বিন (দুই যের)', 'bin', 'Two Kasras make "in" at the end.', 'দুই যের শেষে "ইন" ধ্বনি দেয়।'),
      L('بٌ', 'بٌ', 'Bun (2 Damma)', 'বুন (দুই পেশ)', 'bun', 'Two Dammas make "un" at the end.', 'দুই পেশ শেষে "উন" ধ্বনি দেয়।'),
      L('تًا', 'تًا', 'Tan (2 Fatha)', 'তান (দুই যবর)', 'tan'),
      L('تٍ', 'تٍ', 'Tin (2 Kasra)', 'তিন (দুই যের)', 'tin'),
      L('تٌ', 'تٌ', 'Tun (2 Damma)', 'তুন (দুই পেশ)', 'tun'),
      L('دًا', 'دًا', 'Dan (2 Fatha)', 'দান (দুই যবর)', 'dan'),
      L('دٍ', 'دٍ', 'Din (2 Kasra)', 'দিন (দুই যের)', 'din'),
      L('دٌ', 'دٌ', 'Dun (2 Damma)', 'দুন (দুই পেশ)', 'dun'),
      L('رًا', 'رًا', 'Ran (2 Fatha)', 'রান (দুই যবর)', 'ran'),
      L('رٍ', 'رٍ', 'Rin (2 Kasra)', 'রিন (দুই যের)', 'rin'),
      L('رٌ', 'رٌ', 'Run (2 Damma)', 'রুন (দুই পেশ)', 'run')
    ]
  },
  {
    id: 'sukun',
    glyph: 'بْ',
    title: { en: 'Sukun (Jazm)', bn: 'সুকুন (জযম)' },
    desc: {
      en: 'The circle above stops the letter - read it with the previous letter',
      bn: 'উপরের গোল চিহ্নটি হরফকে থামিয়ে দেয় - আগের হরফের সাথে মিলিয়ে পড়তে হয়'
    },
    items: [
      L('اَبْ', 'اَبْ', 'Ab', 'আব', 'ab', 'Ba has Sukun, so it joins with the Alif before it: "ab".', 'বা-তে সুকুন আছে, তাই আগের আলিফের সাথে মিলে হয় "আব"।'),
      L('اَمْ', 'اَمْ', 'Am', 'আম', 'am'),
      L('اِنْ', 'اِنْ', 'In', 'ইন', 'in'),
      L('مِنْ', 'مِنْ', 'Min', 'মিন', 'min'),
      L('قُمْ', 'قُمْ', 'Qum', 'কুম', 'qum'),
      L('كُنْ', 'كُنْ', 'Kun', 'কুন', 'kun'),
      L('بَلْ', 'بَلْ', 'Bal', 'বাল', 'bal'),
      L('هَلْ', 'هَلْ', 'Hal', 'হাল', 'hal'),
      L('قُلْ', 'قُلْ', 'Qul', 'কুল', 'qul'),
      L('لَمْ', 'لَمْ', 'Lam', 'লাম', 'lam')
    ]
  },
  {
    id: 'madd',
    glyph: 'بَا',
    title: { en: 'Madd (Long Vowels)', bn: 'মাদ (টেনে পড়া)' },
    desc: {
      en: 'Alif, Waw and Ya stretch the sound long',
      bn: 'আলিফ, ওয়াও ও ইয়া দিয়ে ধ্বনি লম্বা করে টেনে পড়া হয়'
    },
    items: [
      L('بَا', 'بَا', 'Baa', 'বা-আ', 'baa', 'Fatha followed by Alif - stretch the "a" sound.', 'যবরের পরে আলিফ - "আ" ধ্বনি টেনে লম্বা হয়।'),
      L('بِي', 'بِي', 'Bii', 'বী', 'bii', 'Kasra followed by Ya - stretch the "i" sound.', 'যেরের পরে ইয়া - "ঈ" ধ্বনি টেনে লম্বা হয়।'),
      L('بُو', 'بُو', 'Buu', 'বূ', 'buu', 'Damma followed by Waw - stretch the "u" sound.', 'পেশের পরে ওয়াও - "ঊ" ধ্বনি টেনে লম্বা হয়।'),
      L('مَا', 'مَا', 'Maa', 'মা-আ', 'maa'),
      L('فِي', 'فِي', 'Fii', 'ফী', 'fii'),
      L('نُو', 'نُو', 'Nuu', 'নূ', 'nuu'),
      L('سَا', 'سَا', 'Saa', 'সা-আ', 'saa'),
      L('دِي', 'دِي', 'Dii', 'দী', 'dii'),
      L('قُو', 'قُو', 'Quu', 'কূ', 'quu'),
      L('لَا', 'لَا', 'Laa', 'লা-আ', 'laa')
    ]
  },
  {
    id: 'practice',
    glyph: 'قُلْ',
    title: { en: 'Word Practice', bn: 'শব্দ পড়ার অনুশীলন' },
    desc: {
      en: 'Read real Quranic words using everything you learned',
      bn: 'যা শিখেছেন তা দিয়ে কুরআনের সত্যিকারের শব্দ পড়ুন'
    },
    items: [
      L('بِسْمِ', 'بِسْمِ', 'Bismi', 'বিসমি', 'bis-mi', '"In the name of" - the first word of Bismillah.', '"নামে" - বিসমিল্লাহর প্রথম শব্দ।'),
      L('اَحَدٌ', 'اَحَدٌ', 'Ahadun', 'আহাদুন', 'a-ha-dun', '"One" - from Surah Ikhlas.', '"এক" - সূরা ইখলাস থেকে।'),
      L('خَلَقَ', 'خَلَقَ', 'Khalaqa', 'খালাক্বা', 'kha-la-qa', '"He created" - from Surah Alaq.', '"তিনি সৃষ্টি করেছেন" - সূরা আলাক থেকে।'),
      L('كَتَبَ', 'كَتَبَ', 'Kataba', 'কাতাবা', 'ka-ta-ba', '"He wrote".', '"তিনি লিখেছেন"।'),
      L('جَعَلَ', 'جَعَلَ', 'Ja\u2019ala', 'জাআলা', 'ja-a-la', '"He made".', '"তিনি বানিয়েছেন"।'),
      L('نُورٌ', 'نُورٌ', 'Nurun', 'নূরুন', 'nu-run', '"Light".', '"আলো"।'),
      L('قَمَرٌ', 'قَمَرٌ', 'Qamarun', 'ক্বামারুন', 'qa-ma-run', '"Moon".', '"চাঁদ"।'),
      L('كِتَابٌ', 'كِتَابٌ', 'Kitabun', 'কিতাবুন', 'ki-ta-bun', '"Book".', '"বই / কিতাব"।'),
      L('رَحِيمٌ', 'رَحِيمٌ', 'Rahimun', 'রাহীমুন', 'ra-hi-mun', '"Most Merciful".', '"পরম দয়ালু"।'),
      L('سَلَامٌ', 'سَلَامٌ', 'Salamun', 'সালামুন', 'sa-la-mun', '"Peace".', '"শান্তি"।'),
      L('قُلْ هُوَ اللّٰهُ اَحَدٌ', 'قُلْ هُوَ اللّٰهُ اَحَدٌ', 'Qul huwallahu ahad', 'কুল হুওয়াল্লাহু আহাদ', 'qul hu-wal-la-hu a-had', 'The first verse of Surah Ikhlas - you can read it now!', 'সূরা ইখলাসের প্রথম আয়াত - আপনি এখন এটা পড়তে পারেন!')
    ]
  }
]

// Each item gets a bundled MP3 (downloaded by scripts/download-audio.mjs).
for (const lesson of lessons) {
  lesson.items.forEach((item, i) => {
    item.audio = `/audio/${lesson.id}-${i}.mp3`
  })
}
