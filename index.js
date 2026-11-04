let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector("#msg");

let turn0 = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked!");
    count++;
    console.log(count);

    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos1Val != "" && pos1Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        disabledBox();
        result.innerText = `Congratulatin! Winner is ${pos1Val}`;
        result.classList.remove("hide");
      }
    }
  }
};


let disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enabledBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

let resetGame = () => {
  turn0 = true;
  enabledBox();
  result.classList.add("hide");
};
resetBtn.addEventListener("click", resetGame);
