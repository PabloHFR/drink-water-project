const smallCupsElements = document.querySelectorAll(".small-cup");
const litersElement = document.querySelector(".liters");
const percentageElement = document.querySelector(".percentage");
const remainingElement = document.querySelector(".remaining");

updateBigCup();

smallCupsElements.forEach((cup, index) => {
  cup.addEventListener("click", () => fillSmallCups(index));
});

function fillSmallCups(index) {
  if (
    smallCupsElements[index].classList.contains("filled") &&
    !smallCupsElements[index].nextElementSibling.classList.contains("filled")
  ) {
    index--;
  }

  smallCupsElements.forEach((cup, index2) => {
    if (index2 <= index) cup.classList.add("filled");

    if (index2 > index) cup.classList.remove("filled");
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".small-cup.filled").length;
  const totalCups = smallCupsElements.length;

  if (fullCups === 0) {
    percentageElement.style.visibility = "hidden";
    percentageElement.style.height = 0;
  } else {
    percentageElement.style.visibility = "visible";
    percentageElement.style.height = `${(fullCups / totalCups) * 320}px`;
    percentageElement.textContent = `${(fullCups / totalCups) * 100}%`;
    remainingElement.style.height = "100%";
  }

  if (fullCups === totalCups) {
    remainingElement.style.visibility = "hidden";
    remainingElement.style.height = 0;
  } else {
    remainingElement.style.visibility = "visible";
    litersElement.textContent = `${2 - (250 * fullCups) / 1000}L`;
  }
}
