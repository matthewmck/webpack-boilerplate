const output = document.getElementById("amount");
const addBTN = document.getElementById("add");

addBTN.addEventListener("click", () => {
  let result = 0;
  const inputs = document.querySelectorAll(".num__input");
  inputs.forEach(item => (result += Number(item.value)));
  output.innerText = result;
});
