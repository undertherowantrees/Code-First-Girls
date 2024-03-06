const p = document.createElement("p");
p.innerText = "Hello World";
document.body.appendChild(p);
p.style.color = "red";
p.style.fontSize = "90px";
p.style.fontFamily = "Arial";
p.style.border = "1px solid black";
p.style.padding = "20px";

p.addEventListener("click", () => {
  p.style.color = "green";
  p.style.fonSize = "40px";

});

p.addEventListener("mouseover", () => {
  p.style.color = "purple";
  p.style.fonSize = "80px";

})