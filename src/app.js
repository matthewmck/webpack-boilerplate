import elements from "./utils/elements";
import "./main.scss";

elements.addBTN.addEventListener("click", () => {
  let result = 0;
  const inputs = document.querySelectorAll(".num__input");
  inputs.forEach(item => (result += Number(item.value)));
  elements.output.innerText = result;
});
