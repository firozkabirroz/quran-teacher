/**
 * Quran JSON schema (all 114 Surahs)
 *
 * Surah {
 *   number: number,                 // 1–114
 *   nameAr: string,                 // Arabic name
 *   nameEn: string,                 // English transliteration
 *   nameBn: string,                 // Bangla name
 *   englishTitle: string,           // meaning, e.g. "The Opening"
 *   revelation: "Meccan" | "Medinan",
 *   ayahCount: number,
 *   ayahs: Ayah[]
 * }
 *
 * Ayah {
 *   number: number,                 // number in surah
 *   numberInQuran: number,          // 1–6236
 *   juz: number,                    // 1–30
 *   arabic: string,                 // Uthmani script
 *   translation: { en: string, bn: string },
 *   audioUrl: string                // recitation MP3
 * }
 */

export const QURAN_EDITIONS = {
  uthmani: 'quran-uthmani',
  english: 'en.sahih',
  bangla: 'bn.bengali',
  audio: 'ar.alafasy'
}

export const QURAN_API = 'https://api.alquran.cloud/v1'
