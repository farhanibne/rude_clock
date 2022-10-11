const h1 = document.getElementById("hours-first");
const h2 = document.getElementById("hours-second");
const m1 = document.getElementById("minutes-first");
const m2 = document.getElementById("minutes-second");
const s1 = document.getElementById("seconds-first");
const s2 = document.getElementById("seconds-second");
let hour1 = 0,
  hour2 = 0,
  minute1 = 0,
  minute2 = 0,
  second1 = 0;

function handleNumber(num) {
  if (num < 10) {
    return [0, num];
  } else {
    return [Math.floor(num / 10), num % 10];
  }
}

function changeTime() {
  let time = new Date();
  const [h_1, h_2] = handleNumber(time.getHours());
  const [m_1, m_2] = handleNumber(time.getMinutes());
  const [s_1, s_2] = handleNumber(time.getSeconds());
  if (h_1 !== hour1) {
    hour1 = h_1;
    h1.style.transform = `translateY(-${hour1 * 30}px)`;
  }
  if (h_2 !== hour2) {
    hour2 = h_2;
    h2.style.transform = `translateY(-${hour2 * 30}px)`;
  }
  if (m_1 !== minute1) {
    minute1 = m_1;
    m1.style.transform = `translateY(-${minute1 * 30}px)`;
  }
  if (m_2 !== minute2) {
    minute2 = m_2;
    m2.style.transform = `translateY(-${minute2 * 30}px)`;
  }
  if (s_1 !== second1) {
    second1 = s_1;
    s1.style.transform = `translateY(-${second1 * 30}px)`;
  }
  s2.style.transform = `translateY(-${s_2 * 30}px)`;
}
setInterval(changeTime);