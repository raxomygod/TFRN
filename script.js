const productPresentation = document.getElementsByClassName(
  "product-presentation"
);

const getStarted = document.getElementsByClassName("get-started-btn");
const purchaseContainer = document.getElementsByClassName("purchase-container");
const purchaseBtn = document.getElementsByClassName("purchase-btn");
const purchaseCloseBtn = document.getElementsByClassName(
  "purchase-container-close-btn"
);

getStarted[0].addEventListener("click", () => {
  if (purchaseContainer[0].style.display === "flex") {
    purchaseContainer[0].style.display = "none";
  } else {
    purchaseContainer[0].style.display = "flex";
  }
});

purchaseCloseBtn[0].addEventListener("click", () => {
  purchaseContainer[0].style.display = "none";
});

let userMonthSelection;
purchaseBtn[0].addEventListener("click", () => {
  if (document.getElementById("month").checked) {
    userMonthSelection = 1;
  } else if (document.getElementById("months-6").checked) {
    userMonthSelection = 6;
  } else if (document.getElementById("months-12").checked) {
    userMonthSelection = 12;
  }
});

const showFeaturesChevron = document.getElementsByClassName(
  ".chevron-double-down"
);
const featuresContainer = document.getElementsByClassName("features-container");

showFeaturesChevron[0].addEventListener("click", () => {});
