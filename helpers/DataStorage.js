class DataStorage {
  constructor (storageKey) {
    this.storageKey = storageKey
    this.currentValue = null
  }

  getLatestValue () {
    let storageValue = localStorage.getItem(this.storageKey)
    if (!storageValue) {
      storageValue = null
    } else {
      storageValue = JSON.parse(storageValue)
    }
    return storageValue
  }

  forceClean () {
    localStorage.removeItem(this.storageKey)
    return null
  }

  commitLatestValue (latestValue) {
    localStorage.setItem(this.storageKey, JSON.stringify(latestValue))
  }
}

export default DataStorage
