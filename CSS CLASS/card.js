const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const value = button.textContent;

    // Clear display
    if (value === "C") {
      display.value = "";
    }

    // Delete last character
    else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    }

    // Calculate result
    else if (value === "=") {

      try {
        display.value = eval(display.value);
      }

      catch {
        display.value = "Error";
      }

    }

    // Append values
    else {
      display.value += value;
    }

  });

});