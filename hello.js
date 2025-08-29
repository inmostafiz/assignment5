// start heart count
let count = 0;
const heartCount = document.getElementById("heartCount");
const heartBtns = document.querySelectorAll(".heart-btn");
for (let btn of heartBtns) {
  btn.addEventListener("click", () => {
    count++;
    heartCount.textContent = `${count} 💗`;
  });
}

