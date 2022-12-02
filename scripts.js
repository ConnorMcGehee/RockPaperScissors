let hand = 0;
let rock = 0;
let paper = 1;
let scissors = 2;

const $ = (id) => {
  return document.getElementById(id);
}

let hand1Element = $("hand1");
let hand2Element = $("hand2");
let resultElement = $("result");

const selectRock = () => {
  hand = rock;
  hand1Element.innerText = "You select: Rock";
  clear();
}
const selectPaper = () => {
  hand = paper;
  hand1Element.innerText = "You select: Paper";
  clear();
}
const selectScissors = () => {
  hand = scissors;
  hand1Element.innerText = "You select: Scissors";
  clear();
}
const clear = () => {
  hand2Element.innerText = "";
  resultElement.innerText = "";
}

const go = () => {

  let cpuHand = Math.floor(Math.random() * 3);
  let resultElement = $("result");

  switch (cpuHand) {
    case 0: {
      hand2Element.innerText = "CPU selected: Rock";
      break;
    }
    case 1: {
      hand2Element.innerText = "CPU selected: Paper";
      break;
    }
    case 2: {
      hand2Element.innerText = "CPU selected: Scissors";
      break;
    }
  }

  if (hand === cpuHand) {
    resultElement.innerText = "It's a tie!";
  }
  else if (hand === 0 && cpuHand === 2) {
    resultElement.innerText = "You win!";
  }
  else if (hand === 2 && cpuHand === 0) {
    resultElement.innerText = "You lose!";
  }
  else if (hand > cpuHand) {
    resultElement.innerText = "You win!";
  }
  else {
    resultElement.innerText = "You lose!";
  }
}