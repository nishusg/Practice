let a = 0;
let b = null;
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");
start.addEventListener("click", () => {
  start.disabled = true;
  b = setInterval(() => {
    a++;
    document.getElementById("display").innerHTML = a;
  }, 1000);
});

stop.addEventListener("click", () => {
  start.disabled = false;
  clearInterval(b);
  a = document.getElementById("display").innerText;
});

restart.addEventListener("click", () => {
  start.disabled = false;
  a = 0;
  clearInterval(b);
  document.getElementById("display").innerHTML = a;
});
console.log("connected");
