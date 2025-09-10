// Part 2: Functions, Parameters, Return, and Scope

// Global variable
let globalMessage = "Hello from global scope!";

// Function with parameters & return value
function addNumbers(a, b) {
  // Local variable
  let sum = a + b;
  return sum;
}

// Function to show sum in the DOM
function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Reuse addNumbers function
  let result = addNumbers(num1, num2);

  document.getElementById("sumResult").innerText =
    globalMessage + " The sum is: " + result;
}

// Part 3: Trigger CSS animation via JS
function triggerBoxAnimation() {
  const box = document.getElementById("animatedBox");

  // Add class to trigger animation
  box.classList.add("animate");

  // Remove class after animation ends (so it can be reused)
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
}
