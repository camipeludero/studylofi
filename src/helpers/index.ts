export function formatNumberToCountdownTime(number: number) {
  const minutes = Math.floor(number / 60);
  const seconds = number % 60;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  const formattedTime = formattedMinutes + ":" + formattedSeconds;

  return formattedTime;
}
