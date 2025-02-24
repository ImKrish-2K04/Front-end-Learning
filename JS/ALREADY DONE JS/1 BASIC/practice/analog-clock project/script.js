let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

setInterval(function () {
  let dt = new Date();
  let hour = dt.getHours();
  let minute = dt.getMinutes();
  let second = dt.getSeconds();

  let hTime = 30 * hour + minute / 2;
  let mTime = 6 * minute;
  let sTime = 6 * second;

  h.style.transform = `rotate(${hTime}deg)`;
  m.style.transform = `rotate(${mTime}deg)`;
  s.style.transform = `rotate(${sTime}deg)`;
}, 1000);
