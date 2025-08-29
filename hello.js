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

const callBtns = document.querySelectorAll(".call-btn");
const coinCount = document.getElementById("coinCount");
const callHistory = document.getElementById("callHistoryContainer");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

let coins = 100;
let copyCount = 0;

for (let btn of callBtns) {
  btn.addEventListener("click", () => {
    const card = btn.closest(".item"); 
    const service = card.querySelector("h1").textContent;
    const number = card.querySelector("span.text-2xl").textContent;

    if (coins < 20) {
      alert("❌ Not enough coins!");
      return;
    }

    alert(`📞 Calling ${service} at ${number}`);

    coins -= 20;
    coinCount.textContent = `${coins} 💰`;

    // Add to history
    const now = new Date();
    const time = now.toLocaleTimeString();
    const div = document.createElement("div");
    div.classList.add('history_items','mb-2','mt-4','p-2','bg-white','rounded-md','shadow-sm');
    div.textContent = `${service} ${number} at ${time}`;
    callHistory.appendChild(div);
  });
}

const copyBtns = document.querySelectorAll(".copy-btn");
const copyCountEl = document.getElementById("copyCount");

for (let btn of copyBtns) {
  btn.addEventListener("click", () => {
    const card = btn.closest(".item");
    const number = card.querySelector("span.text-2xl").textContent;

    navigator.clipboard.writeText(number).then(() => {
      alert(`✅ Number ${number} copied!`);
      copyCount++;
      copyCountEl.textContent = `${copyCount} Copy`;
    });
  });
}
// clear history
clearHistoryBtn.addEventListener('click', () => {
  callHistory.innerHTML = '';
});
