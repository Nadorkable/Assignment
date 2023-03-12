function change() {
  let newBody = `<section>
      <h1>“Java is to Javascript what car is to Carpet.”- Chris Heilmann</h1> 
   </section>`;
  setTimeout(() => {
    document.body.innerHTML = newBody;
  }, 600);
}
function animation() {
  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
    e.preventDefault;
    button.classList.add("animate");
    setTimeout(() => {
      button.classList.remove("animate");
    }, 600);
  });
}
