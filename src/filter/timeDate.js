export default function (num) {
  const date = new Date(num * 1000);
  const Y = `${date.getFullYear()}-`;
  const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const D = `${date.getDate()} `;
  const Nowdate = Y + M + D;
  return Nowdate;
}
