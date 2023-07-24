const saleSection = document.querySelector(".sale_container");
const bestSellerSection = document.querySelector(".bestsellers_container");

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight > saleSection.offsetTop + window.innerHeight / 2 &&
    window.scrollY + window.innerHeight < saleSection.offsetTop + window.innerHeight + saleSection.offsetHeight
  ) {
    saleSection.classList.add("on");
  } else {
    saleSection.classList.remove("on");
  }

  if (
    window.scrollY + window.innerHeight > bestSellerSection.offsetTop + window.innerHeight / 2 &&
    window.scrollY + window.innerHeight <
      bestSellerSection.offsetTop + window.innerHeight + bestSellerSection.offsetHeight
  ) {
    bestSellerSection.classList.add("on");
  } else {
    bestSellerSection.classList.remove("on");
  }
});
