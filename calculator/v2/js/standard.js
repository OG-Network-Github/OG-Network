// Query the display element
let display = document.querySelector(".display");

// Event listeners for number buttons
document.querySelectorAll(".num").forEach(button => {
  button.addEventListener("click", () => {
    // display.value += button.innerText;
    display.value += button.innerText;
  });
});

// Event listener for plus button
document.querySelector(".plus").addEventListener("click", () => {
  check("+")
});

// Event listener for minus button (similar logic for other operations)
document.querySelector(".minus").addEventListener("click", () => {
    check("-")
});

document.querySelector(".multi").addEventListener("click", () => {
    check("*")
});

document.querySelector(".div").addEventListener("click", () => {
    check("/")
});

document.querySelector(".square").addEventListener("click", () => {
    check("**2")
});
document.querySelector(".fraction").addEventListener("click", () => {
    check("","1/")
});

// Clear and clearall buttons
document.querySelector(".clear").addEventListener("click", () => {
  display.value = "";
});
document.querySelector(".backspace").addEventListener("click", () =>{

   display.value = display.value.slice(0, -1);
});
document.querySelector(".clearall").addEventListener("click", () => {
    display.value = "";
});

// Event listener for solving the expression
document.querySelector(".solve").addEventListener("click", () => {
  display.value = result();
});
// Function to evaluate the expression
function result() {
  return eval(display.value);
}
// Function to check if the string ends with a sign or not
function check(sign,pre="") {
    let text = display.value.trim(); //will make it pure string
    if (text.endsWith("+")) {
      display.value = text.slice(0, -1);
    }
    else if (text.endsWith("-")) {
      display.value = text.slice(0, -1);
    }
    else if (text.endsWith("*")) {
          display.value = text.slice(0, -1);  
    }
    else if (text.endsWith("/")) {
      display.value = text.slice(0, -1);
    }
    else if (text.endsWith("**2")) {
        display.value = text.slice(0, -3);
    }
    display.value = pre + display.value + sign;
}
//
