const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 5;

refs.increment.addEventListener("click", addCounter);
refs.decrement.addEventListener("click", deleteCounter);

function addCounter() {
  console.log(counterValue);
  counterValue += 1;
}

function deleteCounter() {
  console.log(counterValue);
  return counterValue -= 1;
}

refs.counter.innerHTML = counterValue;

