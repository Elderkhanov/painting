window.addEventListener("DOMContentLoaded", () => {
  // tabs

  const tabs = document.querySelectorAll(".reproduction__tabs-item");
  const tabsContent = document.querySelectorAll(".reproduction__wrapper");
  const tabsParent = document.querySelector(".reproduction__tabs-items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("reproduction__tabs-item_active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("reproduction__tabs-item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;

    if (target && target.classList.contains("reproduction__tabs-item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //modal

  const modalTrigger = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector("[data-close]");

  function modalOpen() {
    modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
  }

  function modalClose() {
    modal.classList.toggle("show");
    document.body.style.overflow = "";
  }

  modalTrigger.forEach((item) => {
    item.addEventListener("click", modalOpen);
  });

  modalCloseBtn.addEventListener("click", modalClose);

  // закрытие модалки при нажатии на экран
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalClose();
    }
  });

  // закрытие модалки на кнопку esc
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      modalClose();
    }
  });

  // появление модалки через 5 секунд после захода на сайт
  const modalTimerId = setTimeout(modalOpen, 5000);

  // появление модалки при долистывании страницы до конца
  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      modalOpen();
    }
  }
  window.addEventListener("scroll", showModalByScroll);
});

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();
