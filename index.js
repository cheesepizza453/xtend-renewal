const gnb = document.getElementById("gnb");
let gnbScroll = window.scrollY;

const saleSection = document.querySelector(".sale_container");

const bestSellerSection = document.querySelector(".bestsellers_container");
const bestSellerName = document.querySelectorAll(".bestseller_item_name");
const bestSellerItem = document.querySelectorAll(".besteller_info");

const productSection = document.querySelector(".product_container");
const productTextArea = document.getElementById("product_text_area");
const productText = document.querySelectorAll(".product_text");

const tagSection = document.querySelector(".champion_container");

const userSection = document.querySelector(".user_img_area");

const joinSection = document.querySelector(".join_area");

const division = productTextArea.offsetHeight / productText.length;

window.addEventListener("scroll", () => {
  // GNB숨김 노출 토글
  if (gnbScroll < window.scrollY) {
    gnb.style.transform = `translateY(-100px)`;
  } else {
    gnb.style.transform = `translateY(0px)`;
  }
  gnbScroll = window.scrollY;

  // 세일 안내 영역 on 클래스 토글
  if (
    window.scrollY + window.innerHeight > saleSection.offsetTop + window.innerHeight / 2 &&
    window.scrollY + window.innerHeight < saleSection.offsetTop + window.innerHeight + saleSection.offsetHeight
  ) {
    saleSection.classList.add("on");
  }
  // 베스트셀러 영역 on 클래스 토글
  if (
    window.scrollY + window.innerHeight > bestSellerSection.offsetTop + window.innerHeight / 2 &&
    window.scrollY + window.innerHeight <
      bestSellerSection.offsetTop + window.innerHeight + bestSellerSection.offsetHeight
  ) {
    bestSellerSection.classList.add("on");
  }
  // 제품 소개 영역 on 클래스 토글
  if (
    window.scrollY + window.innerHeight > productSection.offsetTop + window.innerHeight / 2 &&
    window.scrollY + window.innerHeight < productSection.offsetTop + window.innerHeight + productSection.offsetHeight
  ) {
    productSection.classList.add("on");
    // 제품 소개 텍스트 인덱스 부여
    const targetIndex = Math.floor((window.scrollY - productSection.offsetTop) / division);

    // 스크롤 할 때마다 제품 소개 텍스트 on 클래스 삭제
    productText.forEach((element) => {
      element.classList.remove("on");
    });

    // 스크롤에 맞는 인덱스의 제품 소개 텍스트 클래스 on
    if (targetIndex >= 0 && targetIndex < productText.length) {
      productText[targetIndex].classList.add("on");
    }
  }
  if (window.scrollY + window.innerHeight > tagSection.offsetTop + window.innerHeight / 2) {
    tagSection.classList.add("on");
  }

  if (window.scrollY + window.innerHeight > userSection.offsetTop) {
    userSection.classList.add("on");
  }

  if (window.scrollY + window.innerHeight > joinSection.offsetTop) {
    joinSection.classList.add("on");
  }
});

// 베스트셀러 클릭할 때 해당 리스트 노출
function toggleClass(clickedElement) {
  for (let i = 0; i < bestSellerName.length; i++) {
    const element = bestSellerName[i];
    const liElement = bestSellerItem[i];
    if (element === clickedElement) {
      element.classList.add("on");
      liElement.classList.add("on");
    } else {
      element.classList.remove("on");
      liElement.classList.remove("on");
    }
  }
}

for (let i = 0; i < bestSellerName.length; i++) {
  const element = bestSellerName[i];
  element.addEventListener("click", () => {
    toggleClass(element);
  });
}
