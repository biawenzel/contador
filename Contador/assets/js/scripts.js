var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; //.innerHTML pq vai mexer diretamente no valor do HTML
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
