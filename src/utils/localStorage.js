export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getData = (key, fallback = null) => {
  try {
    const rawValue = localStorage.getItem(key)
    return rawValue ? JSON.parse(rawValue) : fallback
  } catch (error) {
    console.error(`Unable to read localStorage key "${key}"`, error)
    return fallback
  }
}

export const updateData = (key, updater, fallback = {}) => {
  const currentValue = getData(key, fallback)
  const nextValue = updater(currentValue)
  saveData(key, nextValue)
  return nextValue
}
