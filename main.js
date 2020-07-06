const fadingToggle = () => {
  let targetBox = document.getElementById("navbar-menu");
  let burgerBtn = document.getElementById("burger-btn");
  let classes = targetBox.className.split(" ");
  console.log(classes);
  if (!classes.includes("closed")) {
    targetBox.classList.add("closing");
    targetBox.classList.remove("opening");
    burgerBtn.classList.remove("close");
    setTimeout(() => {
      targetBox.classList.add("closed");
      targetBox.classList.remove("closing");
    }, 500);
    return;
  }
  // open menu
  targetBox.classList.remove("closed");
  burgerBtn.classList.add("close");
  setTimeout(() => {
    targetBox.classList.add("opening");
  }, 100);
  console.log(targetBox.className);
  return;
};
