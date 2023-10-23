class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() =>{
      this.currentTime ++
      if (printTimeCallback){
        printTimeCallback ()
    }
    }, 1000)
  }

  getMinutes() {
    let minutes = this.currentTime/60
    let minutesRounded = Math.floor (minutes)
    return minutesRounded
  }

  getSeconds() {
    let seconds = this.currentTime %60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let valueAsString = value.toString ()
    if (valueAsString.length <2){
      valueAsString = "0" + valueAsString.slice (0,1)
    }
    return valueAsString
  }

  stop() {
  clearInterval (this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    
  }
}
