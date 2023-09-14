//js preloader

var load = document.getElementById('loader');
// window.addEventListener('load',function(){
//   load.style.display='none';
//   document.getElementById('nav-bar').style.display = 'flex';
//   document.getElementById('main-content-div').style.display = 'block';
// });
setTimeout(() => {
  load.style.display = 'none';
  document.getElementById('nav-bar').style.display = 'flex';
  document.getElementById('main-content-div').style.display = 'block';

  // document.getElementById('nav-bar').style.display = 'flex';
}, 2500);
setTimeout(() => {
  document.getElementById('nav-bar').style.display = 'flex';
  document.getElementById('main-content-div').style.display = 'block';
}, 2500)

//-----------------------------------navbar scroll background change effect -----------------------------------

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('nav-bar'); // Replace 'navbar' with the ID of your navbar element
  var l = document.getElementById('logo-img');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    navbar.style.background= 'rgba(0, 0, 0, 0.5)'; // Replace 'red' with your desired background color
    navbar.style.height = '70px';
    l.style.height = '40px';
    navbar.style.transition = 'background 5s'; // Smooth transition duration
    navbar.style.transition = 'height 0.5s';
    l.style.transition='height 0.5s'
  } else {
    navbar.style.background= ''; // Set to the default background color when scrolling to the top
    navbar.style.height = '';
    l.style.height = '';
    navbar.style.transition = 'background 5s';
    navbar.style.transition = 'height 0.5s';
    l.style.transition='height 0.5s';

  }
});


//js preloader ends
// ----------------------------contact us email ---------------------------------



//------------------------------------- contact us email end --------------------------
//Javacript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});
//-------------------------------------------email message start-------------------------------

// ------------------------------------------email message ends -------------------------------

// ------------------------------service section images cahanges effect -------------------------------------
function changeImageSource(newSrc,gotcha) {
  gotcha.src = newSrc;
}
// ---------------------------services section images changes effects ends -----------------------------------

//-----------------------JS for Scroll Effect---------
var navMenuAnchorTags = document.querySelectorAll('.navigation-items a');
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function (event) {
    event.preventDefault();

    var targetSectionId = this.textContent.trim().toLowerCase();

    var targetSection = document.getElementById(targetSectionId);
    var prev = 0;
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top>0) {
      var interval = setInterval(function () {
        targetSectionCoordinates = targetSection.getBoundingClientRect();

        if (targetSectionCoordinates.top <= 0 || prev == targetSectionCoordinates.top) {
          clearInterval(interval);
          return;
        }
        prev = targetSectionCoordinates.top;
        window.scrollBy(0, 50);
      }, 20);
    } else {
      var interval = setInterval(function () {
        targetSectionCoordinates = targetSection.getBoundingClientRect();

        if (targetSectionCoordinates.top >= 0 || prev == targetSectionCoordinates.top) {
          clearInterval(interval);
          return;
        }
        prev = targetSectionCoordinates.top;
        window.scrollBy(0, -50);
      }, 20);
    }
  })
}



//-----------------------Javacript for video slider navigation-----------------------------
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});



// --------------------------------review scroll effect ----------------------------------
'use strict'
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
  testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
;

window.onload = function () {

  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide(currentSlide += 1);
    }, testimSpeed)
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
  })

  testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
  })

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide(currentSlide = testimDots.indexOf(this));
    })
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  })

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  })

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);


    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }

  })
}

/*contact us section starts here */
$(document).ready(function () {
  $('#toggle').click(function () {
    $('.sidebar-contact').toggleClass('active')
    $('#toggle').toggleClass('active')
  })
})
function sendUs() {
  $(document).ready(function () {

    $('.sidebar-contact').toggleClass('active')
    $('#toggle').toggleClass('active')

  })
}
/*contact us section ends here */


// Social Media Secion Starts 

var stopCircle = document.getElementsByClassName('anima');
for (var i = 0; i < stopCircle.length; i++) {
  if (stopCircle[i].matches(':hover')) { }
  stopCircle[i].addEventListener("mouseover", function (event) {
    document.getElementsByClassName('circle-arround-two-1')[0].classList.add("stopanima");
    document.getElementsByClassName('circle-arround-two-2')[0].classList.add("stopanima");
    document.getElementsByClassName('circle-arround-two-3')[0].classList.add("stopanima");
    document.getElementsByClassName('circle-arround-two-4')[0].classList.add("stopanima");
  });
  stopCircle[i].addEventListener("mouseout", function (event) {
    document.getElementsByClassName('circle-arround-two-1')[0].classList.remove("stopanima");
    document.getElementsByClassName('circle-arround-two-2')[0].classList.remove("stopanima");
    document.getElementsByClassName('circle-arround-two-3')[0].classList.remove("stopanima");
    document.getElementsByClassName('circle-arround-two-4')[0].classList.remove("stopanima");
  });
}


/* <!--------------------------------------------------- projects Section starts ------------------------------------------> */
var modalInfo = {
  1: {
    title: "MAN INFRA GHATKOPER",
    info: "Discover our exquisite internal paintwork projects at MAN Infra Ghatkopar. Our skilled team delivers stunning results, utilizing high-quality materials and advanced techniques to transform the interior of your property. Trust us to enhance the beauty and ambiance of your space with our professional expertise.",
    link: "#",
    github: "#"
  },
  2: {
    title: "INDIABUL SAVROLI",
    info: "Elevate your exteriors with our exceptional external paintwork at Indiabull Savroli. Trust our skilled team to deliver stunning results with high-quality materials and meticulous techniques. Experience the true beauty of your property with our commitment to excellence.",
    link: "#",
    github: "#"
  },
  3: {
    title: "INDIABULL PANVEL",
    info: "Experience the breathtaking external transformation of INDIA BULL PANVEL with our exceptional work. Trust us to enhance the property's appeal and beauty through our skilled team and top-quality materials.",
    link: "#",
    github: "#"
  },
  4: {
    title: "SUNTEK RAM MANDIR GOREGOAN",
    info: "Experience the stunning interior transformation of SUNTEK RAM MANDIR GOREGAON with our exceptional internal work. Trust us to enhance the beauty and ambiance of the space through our skilled team and high-quality materials.",
    link: "#",
    github: "#"
  },
  5: {
    title: "PIRAMAL REVANTA MULUND",
    info: "Witness the extraordinary exterior transformation of PIRAMAL REVANTA MULUND with our exceptional work. Trust us to enhance the property's allure and beauty through our skilled team and top-quality materials.",
    link: "#",
    github: "#"
  },
  6: {
    title: "RUNWAL DOMBIVLI",
    info: "Stunning interior transformation at RUNWAL DOMBIVLI with exceptional work. Enhancing beauty and ambiance with skilled team and quality materials.",
    link: "#",
    github: "#"
  },
  7: {
    title: "SUNTEK RAM MANDIR GOREGOAN",
    info: "Experience the stunning interior transformation of SUNTEK RAM MANDIR GOREGAON with our exceptional internal work. Trust us to enhance the beauty and ambiance of the space through our skilled team and high-quality materials.",
    link: "#",
    github: "#"
  },
  8: {
    title: "PIRAMAL REVANTA MULUND",
    info: "Witness the extraordinary exterior transformation of PIRAMAL REVANTA MULUND with our exceptional work. Trust us to enhance the property's allure and beauty through our skilled team and top-quality materials.",
    link: "#",
    github: "#"
  },
  9: {
    title: "PIRAMAL REVANTA MULUND",
    info: "Witness the extraordinary exterior transformation of PIRAMAL REVANTA MULUND with our exceptional work. Trust us to enhance the property's allure and beauty through our skilled team and top-quality materials.",
    link: "#",
    github: "#"
  }
};



// Get the modal
var modal = document.getElementById('preview');

// button that opens the modal
var btn = document.getElementsByClassName("btn1");

// <span> that closes the modal
var span = document.getElementsByClassName("cls1")[0];

// open modal 
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var project = btn[i].parentElement;
    openModal(project);
  })
};
function showMore(){
  var item1=document.getElementById('7');
  var item2=document.getElementById('8');
  var item3=document.getElementById('9');
  console.log(item1,item2,item3)
  item1.style.display='flex';
  item2.style.display='flex';
  item3.style.display='flex';
  document.getElementById('view-more').style.display='none';
  
}
function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function () {
    modal.style.display = "none";
  }
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[id].github, '_blank');
  }
}

// close the modal
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* <!-- -------------------------------------------------projects Section ends ---------------------------------------------> */

// underconstruction process 
function alertFun() {
  alert("Coming Soon");
}

document.getElementById('insta').addEventListener('click',function(){
  window.open('https://www.instagram.com/rudraveeram.ltdpvt/','_blank');
});


// //-----------------------Scroll effect on services boxes------------------------------
// // Function to check if an element is in the viewport
// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// const cards = document.querySelectorAll('.xMotion');
// console.log(cards)
// // Function to animate cards on scroll
// function animateCardsOnScroll() {
//   cards.forEach((card, index) => {
//       if (isElementInViewport(card)) {
//           card.style.transitionDelay = `${index*0.4 * 0.1}s`;
//           card.classList.add('visible');
//       }
//   });
// }

// // Add a scroll event listener to trigger the animation
// window.addEventListener('scroll', animateCardsOnScroll);

// //-----------------------Scroll effect ends on services boxes------------------------------