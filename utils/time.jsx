export function millisToMinutesAndSeconds(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.round(sec % 60)
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  }