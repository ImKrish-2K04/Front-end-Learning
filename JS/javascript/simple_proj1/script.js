const container = document.querySelector(".container");

const btns = document.querySelectorAll(".button");

let activeBtn = null;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let color = e.target.classList[1];
    container.style.backgroundColor = color;

    if (activeBtn) {
      activeBtn.style.backgroundColor = "";
      activeBtn.style.color = "";
    }

    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";

    activeBtn = e.target;
  });
});
