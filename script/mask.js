const input = document.querySelectorAll(".tel");

const prefixNumber = (str) => {
  if (str === "7" || str === "8" || str === "9" || str === "+") {
    return "+7 (";
  }
  return "7 (";
};

input.forEach((input) => {
  addEventListener("input", (e) => {
    const value = input.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ") ";
          break;
        case 7:
          result += " ";
          break;
        case 9:
          result += " ";
          break;
        default:
          break;
      }
      result += value[i];
    }

    if (input.value.length < 18) {
      input.classList.remove("input_right");
      input.classList.add("input_wrong");
    } else {
      input.classList.remove("input_wrong");
      input.classList.add("input_right");
    }
    input.value = result;
  });
});
