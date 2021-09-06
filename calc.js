const x = document.querySelectorAll(".cc");
const result = document.querySelector("h2");

x.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});
const c = document.querySelector("#C");
c.addEventListener("click", () => {
  result.textContent = "";
});
