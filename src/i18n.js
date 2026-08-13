export const translations = {
  en: {
    appName: 'Quran Learn',
    heroTitle: 'Learn to Read the Quran',
    heroSubtitle: 'Step by step from the very basics - Noorani Qaida',
    lessonsDone: 'lessons completed',
    locked: 'Complete the previous lesson first',
    lessonOf: 'of',
    listen: 'Listen',
    prev: 'Previous',
    next: 'Next',
    startQuiz: 'Start Quiz',
    quizTitle: 'Quiz',
    whichIs: 'Which one is this?',
    question: 'Question',
    quizPassedTitle: 'Ma sha Allah!',
    quizPassedMsg: 'Lesson completed. The next lesson is now unlocked.',
    quizFailedTitle: 'Almost there!',
    quizFailedMsg: 'You need at least 4 correct answers. Review the lesson and try again.',
    score: 'Score',
    tryAgain: 'Try Again',
    reviewLesson: 'Review Lesson',
    backHome: 'Back to Home',
    settings: 'Settings',
    language: 'Language',
    resetProgress: 'Reset Progress',
    resetConfirm: 'Delete all your progress? This cannot be undone.',
    resetDone: 'Progress has been reset.',
    audioHint: 'Audio uses your device\u2019s Arabic voice. If you hear nothing, install an Arabic voice in your phone settings (Text-to-speech).',
    noAudio: 'Arabic voice not found on this device.',
    developer: 'Developer',
    developedBy: 'Developed by'
  },
  bn: {
    appName: 'কুরআন শিক্ষা',
    heroTitle: 'কুরআন পড়া শিখুন',
    heroSubtitle: 'একদম শুরু থেকে ধাপে ধাপে - নূরানী কায়দা',
    lessonsDone: 'টি পাঠ সম্পন্ন',
    locked: 'আগের পাঠটি আগে শেষ করুন',
    lessonOf: '/',
    listen: 'শুনুন',
    prev: 'আগে',
    next: 'পরে',
    startQuiz: 'কুইজ শুরু করুন',
    quizTitle: 'কুইজ',
    whichIs: 'এটি কোনটি?',
    question: 'প্রশ্ন',
    quizPassedTitle: 'মাশাআল্লাহ!',
    quizPassedMsg: 'পাঠ সম্পন্ন হয়েছে। পরের পাঠটি এখন খুলে গেছে।',
    quizFailedTitle: 'আরেকটু চেষ্টা করুন!',
    quizFailedMsg: 'কমপক্ষে ৪টি সঠিক উত্তর দরকার। পাঠটি আবার দেখে চেষ্টা করুন।',
    score: 'স্কোর',
    tryAgain: 'আবার চেষ্টা করুন',
    reviewLesson: 'পাঠটি আবার দেখুন',
    backHome: 'হোমে ফিরে যান',
    settings: 'সেটিংস',
    language: 'ভাষা',
    resetProgress: 'প্রগ্রেস মুছে ফেলুন',
    resetConfirm: 'আপনার সব প্রগ্রেস মুছে যাবে? এটি আর ফিরিয়ে আনা যাবে না।',
    resetDone: 'প্রগ্রেস মুছে ফেলা হয়েছে।',
    audioHint: 'অডিও আপনার ডিভাইসের আরবি ভয়েস ব্যবহার করে। কিছু না শুনলে ফোনের সেটিংসে (Text-to-speech) আরবি ভয়েস ইনস্টল করুন।',
    noAudio: 'এই ডিভাইসে আরবি ভয়েস পাওয়া যায়নি।',
    developer: 'ডেভেলপার',
    developedBy: 'তৈরি করেছেন'
  }
}

const LANG_KEY = 'quranlearn-lang'

export function getSavedLang() {
  const saved = localStorage.getItem(LANG_KEY)
  return saved === 'en' || saved === 'bn' ? saved : 'bn'
}

export function saveLang(lang) {
  localStorage.setItem(LANG_KEY, lang)
}
