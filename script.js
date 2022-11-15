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

const showFeaturesBtn = document.getElementsByClassName(
  "chevron-double-down-btn"
);
const chevronDown = document.getElementsByClassName("chevron-down");
const chevronUp = document.getElementsByClassName("chevron-up");
const downBtn = document.getElementsByClassName("chevron-btn-down");
const upBtn = document.getElementsByClassName("chevron-btn-up");
const featuresContainer = document.getElementsByClassName("features-container");
const productMainContainer = document.getElementsByClassName(
  "product-main-container"
);

chevronDown[0].addEventListener("click", () => {
  upBtn[0].style.display = "flex";
  downBtn[0].style.display = "none";
  featuresContainer[0].style.display = "flex";
  featuresContainer[0].style.flexDirection = "column";
  productMainContainer[0].style.marginBottom = "0";
});

chevronUp[0].addEventListener("click", () => {
  downBtn[0].style.display = "flex";
  upBtn[0].style.display = "none";
  featuresContainer[0].style.display = "none";
  productMainContainer[0].style.marginBottom = "48px";
});
