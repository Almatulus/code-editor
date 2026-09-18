export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;
  console.log(minutes);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
