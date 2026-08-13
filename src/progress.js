const PROGRESS_KEY = 'quranlearn-progress'

export function getCompletedLessons() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function markLessonComplete(lessonId) {
  const completed = getCompletedLessons()
  if (!completed.includes(lessonId)) {
    completed.push(lessonId)
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed))
  }
  return completed
}

export function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY)
}
