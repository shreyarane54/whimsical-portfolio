/* =====================================================
   WHIMSICAL PORTFOLIO
   GSAP + Lenis
===================================================== */


/* ================= LENIS ================= */

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 1.5
});


function raf(time) {

  lenis.raf(time);

  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);


/* ================= GSAP ================= */

gsap.registerPlugin(ScrollTrigger);


/* ================= CUSTOM CURSOR ================= */

const cursor = document.querySelector(".cursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;


window.addEventListener("mousemove", (event) => {

  mouseX = event.clientX;
  mouseY = event.clientY;

});


function animateCursor() {

  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  gsap.set(cursor, {
    x: cursorX - 17,
    y: cursorY - 17
  });

  requestAnimationFrame(animateCursor);

}

animateCursor();


/* cursor hover */

const interactiveElements = document.querySelectorAll(
  "a, button, .tool, .project"
);


interactiveElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {

    gsap.to(cursor, {
      scale: 1.8,
      duration: .3,
      ease: "power2.out"
    });

  });


  element.addEventListener("mouseleave", () => {

    gsap.to(cursor, {
      scale: 1,
      duration: .3,
      ease: "power2.out"
    });

  });

});


/* ================= HERO INTRO ================= */

const heroTimeline = gsap.timeline({
  defaults: {
    ease: "power3.out"
  }
});


heroTimeline
  .from(".nav", {
    y: -30,
    opacity: 0,
    duration: 1
  })

  .from(".eyebrow", {
    y: 20,
    opacity: 0,
    duration: .7
  }, "-=.5")

  .from(".hero h1", {
    y: 80,
    opacity: 0,
    duration: 1.1
  }, "-=.4")

  .from(".hero-description", {
    y: 30,
    opacity: 0,
    duration: .8
  }, "-=.6")

  .from(".enter-btn", {
    scale: .8,
    opacity: 0,
    duration: .7
  }, "-=.4")

  .from(".workspace", {
    y: 100,
    opacity: 0,
    duration: 1.2
  }, "-=.5")

  .from(".star, .cloud", {
    scale: 0,
    opacity: 0,
    stagger: .1,
    duration: .6
  }, "-=.8");


/* ================= HERO FLOATING ELEMENTS ================= */

gsap.to(".cloud-1", {
  x: 80,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


gsap.to(".cloud-2", {
  x: -70,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


gsap.to(".star-1", {
  rotation: 360,
  duration: 8,
  repeat: -1,
  ease: "none"
});


gsap.to(".star-2", {
  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


gsap.to(".character", {
  y: -7,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


/* ================= ENTER WORLD ================= */

const enterButton = document.querySelector("#enterWorld");


enterButton.addEventListener("click", () => {

  const intro = document.querySelector("#world");

  gsap.to(window, {
    duration: 1.5,

    scrollTo: {
      y: intro,
      offsetY: 0
    },

    ease: "power3.inOut"
  });

});


/* GSAP ScrollTo plugin alternative */

enterButton.addEventListener("click", () => {

  lenis.scrollTo("#world", {
    duration: 1.5
  });

});


/* ================= INTRO REVEAL ================= */

gsap.from(".intro-content > *", {

  scrollTrigger: {
    trigger: ".intro",
    start: "top 70%"
  },

  y: 60,
  opacity: 0,

  duration: 1,

  stagger: .15,

  ease: "power3.out"

});


/* ================= ABOUT ================= */

gsap.from(".about-house", {

  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  },

  x: -100,
  opacity: 0,

  duration: 1.2,

  ease: "power3.out"

});


gsap.from(".about-copy", {

  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  },

  x: 100,
  opacity: 0,

  duration: 1.2,

  ease: "power3.out"

});


/* house parallax */

gsap.to(".sun", {

  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },

  y: -100

});


gsap.to(".tree-left", {

  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },

  y: -40

});


gsap.to(".tree-right", {

  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },

  y: -70

});


/* ================= TOOLS ================= */

/* ================= TOOLBOX REVEAL ================= */

gsap.from(".tool", {

  scrollTrigger: {
    trigger: ".toolbox",
    start: "top 78%",
    once: true
  },

  y: 60,
  opacity: 0,

  stagger: 0.08,

  duration: 0.9,

  ease: "power3.out"

});


/* ================= PROJECTS ================= */

gsap.utils.toArray(".project").forEach((project) => {

  gsap.from(project, {

    scrollTrigger: {
      trigger: project,
      start: "top 80%"
    },

    y: 100,
    opacity: 0,

    duration: 1,

    ease: "power3.out"

  });

});


/* project image parallax */

gsap.utils.toArray(".project-image").forEach((image) => {

  gsap.fromTo(
    image,
    {
      backgroundPosition: "50% 0%"
    },
    {
      backgroundPosition: "50% 100%",

      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );

});


/* ================= PROCESS ================= */

gsap.from(".step", {

  scrollTrigger: {
    trigger: ".path",
    start: "top 70%"
  },

  y: 70,
  opacity: 0,

  stagger: .2,

  duration: .8,

  ease: "power3.out"

});


/* ================= CONTACT ================= */

gsap.from(".contact-content", {

  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%"
  },

  y: 70,
  opacity: 0,

  duration: 1,

  ease: "power3.out"

});


gsap.to(".mailbox", {

  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },

  y: -80,
  rotation: -3

});


/* ================= TOOL HOVER ================= */

document.querySelectorAll(".tool").forEach((tool) => {

  tool.addEventListener("mousemove", (event) => {

    const rect = tool.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -10;

    const rotateY =
      ((x / rect.width) - 0.5) * 10;


    gsap.to(tool, {

      rotationX: rotateX,
      rotationY: rotateY,

      duration: .4,

      transformPerspective: 800

    });

  });


  tool.addEventListener("mouseleave", () => {

    gsap.to(tool, {

      rotationX: 0,
      rotationY: tool.style.getPropertyValue("--rotation") || 0,

      duration: .5

    });

  });

});


/* ================= PROJECT HOVER ================= */

document.querySelectorAll(".project").forEach((project) => {

  project.addEventListener("mousemove", (event) => {

    const image = project.querySelector(".project-image");

    const rect = image.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - .5;

    const y =
      (event.clientY - rect.top) / rect.height - .5;


    gsap.to(image, {

      rotationY: x * 3,
      rotationX: y * -3,

      duration: .5,

      transformPerspective: 1000

    });

  });


  project.addEventListener("mouseleave", () => {

    gsap.to(project.querySelector(".project-image"), {

      rotationX: 0,
      rotationY: 0,

      duration: .6

    });

  });

});


/* ================= REFRESH SCROLLTRIGGER ================= */

window.addEventListener("load", () => {

  ScrollTrigger.refresh();

});