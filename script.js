const productPresentation = document.getElementsByClassName(
  "product-presentation"
);
const getStarted = document.getElementsByClassName("get-started-btn");
const purchaseContainer = document.getElementsByClassName("purchase-container");
console.log(getStarted);

getStarted[0].addEventListener("click", () => {
  if (purchaseContainer[0].style.display === "flex") {
    purchaseContainer[0].style.display = "none";
  } else {
    purchaseContainer[0].style.display = "flex";
  }
});
