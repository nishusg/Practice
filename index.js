let a = 0;
let b = null;
let i = 0;
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");
start.addEventListener("click", () => {
  i = i + 1;
  if (i == 1) {
    b = setInterval(() => {
      a++;
      document.getElementById("display").innerHTML = a;
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  i = 0;
  clearInterval(b);
  a = document.getElementById("display").innerText;
});

restart.addEventListener("click", () => {
  i = 0;
  a = 0;
  clearInterval(b);
  document.getElementById("display").innerHTML = a;
});
console.log("connected");
