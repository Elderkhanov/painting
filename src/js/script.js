window.addEventListener("DOMContentLoaded", () => {
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
});
