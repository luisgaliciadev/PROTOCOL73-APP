document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  /*==================================
     START THE PAGE LOADER
    ==================================*/
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-page");
    loader.className += " hidden";
  });


  /*==================================
   ADD CLASS - VISITED IN LOCAL STORAGE
  ==================================*/
  let visitedStorKey = 'visited';

  let StartVisitedLinks = () => {
    let visited = JSON.parse(localStorage.getItem(visitedStorKey)) || [];

    visited.forEach((el) => {
      let currentLink = document.querySelector(`[href='${el}']`);

      if (currentLink) {
        currentLink.classList.add('visited');
      }
    })
  }

  let EnterVisitedListeners = () => {
    let links = document.querySelectorAll('a');
    let visited = JSON.parse(localStorage.getItem(visitedStorKey)) || [];

    for (let link of links) {
      link.addEventListener('click', function (ev) {
        if (visited.indexOf(this.getAttribute('href')) == -1) visited.push(this.getAttribute('href'));
        this.classList.add('visited');
        localStorage.setItem(visitedStorKey, JSON.stringify(visited));
      })
    }
  }

  StartVisitedLinks();
  EnterVisitedListeners();


  /*==================================
   START THE SWIPERCREATORES
  ==================================*/

  var swiper = new Swiper(".swiperCreators", {
    slidesPerView: "auto",
    spaceBetween: 20,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

  });


  /*==================================
   START THE NFTSWIPER
  ==================================*/
  var swiper = new Swiper(".nftSwiper", {
    spaceBetween: 15,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },


  });


  /*==================================
    START THE CARDGRADUAL
  ==================================*/

  var swiper = new Swiper(".cardGradual", {
    slidesPerView: "auto",
    spaceBetween: 0,

    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });


  /*==================================
   CREATE A CLICK EFFECT
  ==================================*/
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("animation_clickable");

    const ripple = button.getElementsByClassName("animation_clickable")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  const buttons = document.getElementsByClassName("effect-click");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }


  /*==================================
   MAKES THE CURRENT LINK CONTAINING A OF CLASS "ACTIVE"
  ==================================*/
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('.-active-links a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active');
    }
  });

  /*==================================
   OS PREFERS COLOR SCHEME
  ==================================*/

  //DETERMINES IF THE USER HAS A SET THEM 
  function detectColorScheme() {
    var theme = "light";    //DEFAULT TO LIGHT

    //LOCAL STORAGE IS USED TO OVERRIDE OS THEM SETTINGS
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        var theme = "dark";
      }
    } else if (!window.matchMedia) {
      //MATCHMEDIA METHOD NOT SUPPORTED
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS THEM SETTING DETECTED AS DARK
      var theme = "dark";
    }

    //DARK THEME PREFERRED, SET DOCUMENT WITH A 'data-theme' ATTRIBUTE 
    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }

  }
  detectColorScheme();


  /*==================================
   DARK MODE ACTIVATION - SWITCH
  ==================================*/

  //IDENTIFY THE TOGGLE SWITCH HTML ELEMENT
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  //FUNCTION THAT CHANGES THE THEME, AND SETS A LOCALSTORAGE VARIABLE TO TRACK THE THEME BETWEEN PAGE LOADS
  function switchTheme(e) {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      toggleSwitch.checked = false;
    }
  }

  //LISTENER FOR CHANGING THEMES
  toggleSwitch.addEventListener('change', switchTheme, false);

  //PRE-CHECK THE DARK-THEME CHECKBOX IF DARK-THEME IS SET
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    toggleSwitch.checked = true;
  }


  /*==================================
   OFFLINE MODE / ONLINE MODE DETECTION
  ==================================*/
  function hasNetWork(online) {
    const element = document.querySelector(".status-connection");

    //UPDATE THE DOM TO REFLECT THE CURRENT STATUS
    if (online) {

      // element.classList.remove("offline");
      // element.classList.add("online");

    } else {
      element.classList.remove("online");
      element.classList.add("offline");
      element.classList.add("show");
      element.innerHTML =
        "<div class='d-flex'>" +
        "<div class='toast-body'>" +
        "<div class='icon-status'>" +
        "<i class='ri-wifi-off-line'></i>" +
        "</div>" +
        "<p class='msg-status'>Internet disconnected</p>" +
        "</div>" +
        "<button type='button' class='btn-close me-2 m-auto' data-bs-dismiss='toast' aria-label='Close'><i class='ri-close-fill'></i></button>" +
        "</div>";
    }
  }

  window.addEventListener("load", () => {
    hasNetWork(navigator.onLine);

    window.addEventListener("online", () => {
      //SET HASNETWORK TO ONLINE WHEN THEY CHANGE TO ONLINE
      hasNetWork(true);
    });

    window.addEventListener("offline", () => {
      //SET HASNEWTWORK TO OFFLINE WHEN THEY CHANGE TO OFFLINE
      hasNetWork(false);
    });
  });

  /*==================================
   START THE SMOTH SCROLLING
  ==================================*/

  const links = document.querySelectorAll("#navbar-scrollspy ul a");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  /*==================================
   START THE STORIES
  ==================================*/
  var swiper = new Swiper(".myStories", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
  });


});

