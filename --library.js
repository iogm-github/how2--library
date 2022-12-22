/* ================= percentage ================= */
// function vh(v) {
//     var h = Math.max(window.innerHeight);
//     return (v * h) / 100;
// }
// // if need in case : padTop = offHead + vh(15);
/* ================= percentage ================= */

/* ================= autoplay ================= */
// Start autoplaying automatically
// var autoplayInterval = setInterval(function () {

//     // Get element via id and click next
//     document.getElementById("next").click();


// }, 1000); // Do this every 1 second, increase this!
/* ================= autoplay ================= */

/* ================= Active--Page ================= */
// const activePage = window.location.pathname,
// // the element you want to activate while the page is being visited
//     menuLinks = document.querySelectorAll('.example a').forEach(link => {
//         if (link.href.includes(`${activePage}`)) {
// // add class to activated
//             link.classList.add('active')
//         }
//     })
/* ================= Active--Page ================= */

/* ================= Header ================= */
var headerHeight = document.getElementsByTagName('header')[0].offsetHeight,
    section = document.getElementsByTagName('section'),
    links = document.querySelectorAll('.header__menu a');
window.addEventListener('scroll', function () {
    var userScoll = window.scrollY;

    for (var i = 0; i < section.length; i++) {
        let sectionOffset = section[i].offsetTop,
            sectionHeight = sectionOffset + section[i].offsetHeight;
        if (userScoll >= sectionOffset - headerHeight && sectionHeight - headerHeight > userScoll) {
            links[i].classList.add('active')
        } else {
            links[i].classList.remove('active')
        }
    }

    // // fixed . when the scroll reaches the specified target
    // var fixedHeader = document.querySelector('.name__header'), // target fixed
    //     param = fixedHeader.offsetTop; // target scroll
    // function myFunction() {
    //     if (window.pageYOffset >= param) {
    //         fixedHeader.classList.add('--active')
    //     }
    //     else {
    //         fixedHeader.classList.remove('--active')
    //     }
    // }
})

/* ================= Header ================= */

/* ================= Navigation ================= */
var nav = document.querySelector("nav"),
    navButton = nav.querySelector("p")
function showNav() {
    nav.classList.toggle("left");
    if (nav.classList.contains("left")) {
        navButton.innerHTML = "close";
    } else {
        navButton.innerHTML = "open";
    }
}
/* ================= Navigation ================= */

/* ================= Theme-Button ================= */
const themeButton = document.querySelector(".theme-button")

themeButton.addEventListener('click', function () {
    var SetTheme = document.body,
        theme;
    SetTheme.classList.toggle("light-mode")
    if (SetTheme.classList.contains("light-mode")) {
        theme = "light";
    } else {
        theme = "dark";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
})

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

    if (GetTheme === "light") {
        document.body.classList = "light-mode";
    } else {
        document.bady.classList = "";
    }
}, 5);


/* ================= Theme-Button ================= */


/* ================= Typewritter ================= */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type'); var
            period = elements[i].getAttribute('data-period'); if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate),
                    period);
            }
    }
};

/* ================= Typewritter ================= */

/* ================= Modal ================= */
var modal__content = document.getElementsByClassName("modal__content")[0],
    modal__open = document.querySelector(".modal__open"),
    modal__close = document.getElementsByClassName("modal__close")[0];

modal__open.addEventListener('click', function () {
    modal__content.classList.add('open')
})
modal__close.onclick = function () {
    modal__content.classList.remove('open')
}
/* ================= Modal ================= */

/* ================= Acordion and Tabs ================= */
const tabButtons = document.querySelectorAll(".tab__button"),
    tabContents = document.getElementsByClassName("tab__content")
// tabs    
function openTabContent(order) {
    for (var i = 0; i < tabButtons.length; i++) {
        tabContents[i].style.display = "none";
        tabButtons[i].classList.remove('active')
    }
    tabContents[order].style.display = "grid";
    tabButtons[order].classList.toggle('active')
}
tabButtons[0].click();
// acordion
for (var i = 0; i < tabContents.length; i++) {
    let acordionPacks = tabContents[i].querySelectorAll(".acordion__pack")
    for (var j = 0; j < acordionPacks.length; j++) {
        let acordionArrow = acordionPacks[j].querySelector(".acordion__arrow"),
            acordion__arrows = tabContents[i].querySelectorAll(".acordion__arrow"),
            acordionContent = acordionPacks[j].querySelector(".acordion__content"),
            acordionContents = tabContents[i].querySelectorAll(".acordion__content")
        acordionArrow.addEventListener('click', function () {
            if (acordionContent.classList.contains('active')) {
                acordionContent.classList.remove('active')
                acordionArrow.classList.remove('rotate')
            } else {
                for (var k = 0; k < acordionContents.length; k++) {
                    acordionContents[k].classList.remove('active')
                    acordion__arrows[k].classList.remove('rotate')
                }
                acordionContent.classList.add('active')
                acordionArrow.classList.add('rotate')
            }
        })
    }
}
/* ================= Acordion and Tabs ================= */

/* ================= Gallery--A ================= */
let slideIndex = 1;

showGalleryA(slideIndex + 1);

function moveGalleryA(n) {
    showGalleryA(slideIndex += n);
}

function currentGalleryA(n) {
    showGalleryA(slideIndex = n);
}
function showGalleryA(n) {
    let mainImage = document.querySelector('#gallery--a .gallery__main'),
        prevImage = document.querySelector('#gallery--a .gallery__prev'),
        nextImage = document.querySelector('#gallery--a .gallery__next'),
        orderImage = document.querySelectorAll('#gallery--a .gallery__dot');
    if (n > orderImage.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = orderImage.length }
    for (let i = 0; i < orderImage.length; i++) {
        orderImage[i].className = orderImage[i].className.replace(" active", "");
    }
    if (slideIndex - 2 < 0) {
        prevImage.style.backgroundImage = getComputedStyle(orderImage[orderImage.length - 1]).backgroundImage;
    } else {
        prevImage.style.backgroundImage = getComputedStyle(orderImage[slideIndex - 2]).backgroundImage;
    }
    mainImage.classList.add('fade');
    setTimeout(function () {
        mainImage.classList.remove('fade')
    }, 500);
    mainImage.style.backgroundImage = getComputedStyle(orderImage[slideIndex - 1]).backgroundImage;
    if (slideIndex > orderImage.length - 1) {
        nextImage.style.backgroundImage = getComputedStyle(orderImage[0]).backgroundImage;
    } else {
        nextImage.style.backgroundImage = getComputedStyle(orderImage[slideIndex]).backgroundImage;
    }
    orderImage[slideIndex - 1].className += " active";
}
/* ================= Gallery--A ================= */

/* ================= Gallery--B ================= */
showGalleryB(slideIndex + 1);

function moveGalleryB(n) {
    showGalleryB(slideIndex += n);
}

function currentGalleryB(n) {
    showGalleryB(slideIndex = n);
}
function showGalleryB(n) {
    let mainImage = document.querySelector('#gallery--b .gallery__main'),
        orderImage = document.querySelectorAll('#gallery--b .gallery__dot');

    if (n > orderImage.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = orderImage.length }
    for (let i = 0; i < orderImage.length; i++) {
        orderImage[i].className = orderImage[i].className.replace(" active", "");
    }
    mainImage.classList.add('fade');
    setTimeout(function () {
        mainImage.classList.remove('fade')
    }, 500);
    mainImage.style.backgroundImage = getComputedStyle(orderImage[slideIndex - 1]).backgroundImage;
    orderImage[slideIndex - 1].className += " active";
}
/* ================= Gallery--B ================= */

/* ================= Slider--A ================= */
let draggableSlider = function () {
    // DOM element(s)
    let slider = document.querySelector(".pack--a"),
        innerSlider = document.querySelector(".wrapper--a");

    // Slider variables
    let pressed = false,
        startX,
        x;

    // Mousedown eventlistener
    slider.addEventListener("mousedown", (e) => {
        pressed = true;
        startX = e.offsetX - innerSlider.offsetLeft; // nilai sesuai ketika mouse di klik 591
        slider.style.cursor = "grabbing";
    });

    // mouseneter // ketika memasuki slider--wrapper
    slider.addEventListener("mouseenter", () => {
        slider.style.cursor = "grab";
    });

    // mouseup // ketika keluar dari slider--wrapper
    slider.addEventListener("mouseup", () => {
        slider.style.cursor = "grab";
    });

    // window // dimanapun ketika selesai klik mouse
    window.addEventListener("mouseup", () => {
        pressed = false;
    });

    // Slider mouse move event listener
    slider.addEventListener("mousemove", (e) => {
        if (!pressed) return;
        e.preventDefault();

        x = e.offsetX; // bisa berubah sesuai posisi mouse
        // console.log(x);
        innerSlider.style.left = `${x - startX}px`;

        checkBoundry();
    });

    // Check boundry of outer and inner sliders
    function checkBoundry() {
        let outer = slider.getBoundingClientRect(),
            inner = innerSlider.getBoundingClientRect();

        if (parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = "0px";
        } else if (inner.right < outer.right) {
            innerSlider.style.left = `-${inner.width - outer.width}px`;
        }
    }
};

// Invoke code
draggableSlider();

/* ================= Slider--A ================= */

/* ================= Slider--B ================= */
var slider = document.querySelector('.slider'),
    wrapper = document.querySelector('.wrapper'),
    elements = wrapper.getElementsByClassName('element'),
    elementLength = elements.length,
    elementWidth = wrapper.getElementsByClassName('element')[0].offsetWidth,
    quantity = 2, // for the width of the slider
    gap = 25,
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 25,
    firstSlide = elements[0],
    lastSlide = elements[elementLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

// styling default
wrapper.style.left = -elementWidth - gap + "px"
wrapper.style.gap = gap + "px"
slider.style.width = quantity * elementWidth + gap + "px"

function slide(items, prev, next) {

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function () { shiftSlide(-1) });
    // setInterval(function () {
    //     // next.click();
    //     shiftSlide(1)
    // }, 2000)
    next.addEventListener('click', function () { shiftSlide(1) });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd(e) {
        posFinal = items.offsetLeft;
        console.log(posFinal + ", " + posInitial + ", " + threshold);
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag');
        } else {
            items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
            if (!action) { posInitial = items.offsetLeft; }

            if (dir == 1) {
                items.style.left = (posInitial - elementWidth - gap) + "px";
                index++;
            } else if (dir == -1) {
                items.style.left = (posInitial + elementWidth + gap) + "px";
                index--;
            }
        };
        allowShift = false;
    }

    function checkIndex() {
        items.classList.remove('shifting');

        if (index == -1) {
            items.style.left = -((elementLength * elementWidth) + (elementLength * gap)) + "px";
            index = elementLength - 1;
        }

        if (index == elementLength) {
            items.style.left = -(1 * elementWidth + gap) + "px";
            index = 0;
        }

        allowShift = true;
    }
}

slide(wrapper, prev, next);

/* ================= Slider--B ================= */

/* ================= Footer ================= */
const footer = document.querySelectorAll('.footer__box');
for (var i = 0; i < footer.length; i++) {
    let footerLink = footer[i].getElementsByClassName('footer__link')
    for (var j = 0; j < footerLink.length; j++) {
        let footerContent = footerLink[j].querySelector('.footer__content')
        footerContent.style.top = footerLink[j].offsetHeight + 7 + 'px'
        footerLink[j].addEventListener('click', function () {
            footerContent.classList.toggle('active')
            footerContent.parentElement.firstElementChild.classList.toggle("rotate");
        })
    }
}

/* ================= Footer ================= */








