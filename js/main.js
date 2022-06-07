V = {
  projects: undefined,
  projectId: 0,

  init: function () {
    V.bindEvent();
  },
  bindEvent: function () {
    document.querySelector(".navIconMenu").addEventListener("click", function() {
      document.querySelector(".menuContent").classList.add("menuActivated");
      document.querySelector(".menuFiltre").classList.remove("display");
    });
    document.querySelector(".menuCrossIcon").addEventListener("click", function() {
      document.querySelector(".menuContent").classList.remove("menuActivated");
      document.querySelector(".menuFiltre").classList.add("display");
    });
    document.querySelector(".menuFiltre").addEventListener("click", function() {
      document.querySelector(".menuContent").classList.remove("menuActivated");
      document.querySelector(".menuFiltre").classList.add("display");
    });
    for (let i = 0 ; i < document.querySelectorAll(".menuLink").length ; i ++) {
      document.querySelectorAll(".menuLink")[i].addEventListener("click", function() {
        document.querySelector(".menuContent").classList.remove("menuActivated");
        document.querySelector(".menuFiltre").classList.add("display");
      });
    }
  },
};

window.onload = V.init();
