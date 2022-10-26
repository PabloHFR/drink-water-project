const bigCupElement = document.querySelector(".big-cup");
const smallCupsElements = document.querySelectorAll(".small-cup");
const litersElement = document.querySelector(".liters");
const percentageElement = document.querySelector(".percentage");
const remainingElement = document.querySelector(".remaining");

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
}
