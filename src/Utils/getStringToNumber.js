export default function getStringToNumber(date, pos1, pos2) {
  const newDate = Number(date.slice(pos1, pos2));
  return newDate;
}