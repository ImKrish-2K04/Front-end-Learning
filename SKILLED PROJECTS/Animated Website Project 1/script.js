// GSAP Scroll Animation for Navbar
let allAnchs = document.querySelectorAll(".nav ul a");

gsap.to(".nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "10rem",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    onEnter: () => {
      allAnchs.forEach((a) => a.classList.add("scroll-hover"));
    },
    onLeaveBack: () => {
      allAnchs.forEach((a) => a.classList.remove("scroll-hover"));
    },
  },
});

// Main section background color change on scroll
gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -30%",
    end: "top -70%",
    scrub: 3,
  },
});

// Cursor animations on mousemove
let normalCrsr = document.getElementById("moving__cursor");
let blurCrsr = document.getElementById("moving__cursor-blur");

document.addEventListener("mousemove", (e) => {
  const nc_half_width = normalCrsr.offsetWidth / 2;
  const nc_half_height = normalCrsr.offsetHeight / 2;
  const bc_half_width = blurCrsr.offsetWidth / 2;
  const bc_half_height = blurCrsr.offsetHeight / 2;

  // Normal Cursor Movement
  gsap.to(normalCrsr, {
    x: e.clientX - nc_half_width,
    y: e.clientY - nc_half_height,
    duration: 0.2,
    ease: "power2.out",
  });

  // Blur Cursor Movement
  gsap.to(blurCrsr, {
    x: e.clientX - bc_half_width,
    y: e.clientY - bc_half_height,
    duration: 0.3,
    ease: "power2.out",
  });
});

// Cursor interaction on link hover
let anchors = document.querySelectorAll("a");

anchors.forEach((anch) => {
  anch.addEventListener("mouseenter", () => {
    normalCrsr.style.transition =
      "background-color 0.2s ease-out, width 0.2s ease-in-out, height 0.2s ease-in-out";
    normalCrsr.style.backgroundColor = "#b2e42a";
    normalCrsr.style.width = "7.5rem";
    normalCrsr.style.height = "7.5rem";
    normalCrsr.style.border = "1px solid #fff";

    // Smooth transition to transparent after a slight delay
    setTimeout(() => {
      normalCrsr.style.transition = "background-color 0.2s ease-in-out";
      normalCrsr.style.backgroundColor = "transparent";
    }, 50);
  });

  anch.addEventListener("mouseleave", () => {
    normalCrsr.style.transition =
      "background-color 0.3s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out";
    normalCrsr.style.backgroundColor = "";
    normalCrsr.style.width = "";
    normalCrsr.style.height = "";
    normalCrsr.style.border = "";
  });
});

// Fade-in effects on about-us section..
gsap.from(".about_us figure img, .about_us .content_section", {
  y: 90,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about_us",
    scroller: "body",
    start: "top 75%",
    end: "top 45%",
    scrub: 2,
    ease: "power1.out",
  },
});

// Card animation on cursor move into DOM
const cards = document.querySelectorAll(".card");

document.addEventListener("mousemove", (e) => {
  const xPos = e.clientX / window.innerWidth - 0.5;
  const yPos = e.clientY / window.innerHeight - 0.5;

  const rotateX = -yPos * 30;
  const rotateY = xPos * 30;

  // Animate the cards based on mouse position
  cards.forEach((card) => {
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      ease: "power1.out",
      duration: 0.15,
    });
  });
});

// Reset card rotation when mouse leaves DOM
document.addEventListener("mouseleave", () => {
  gsap.to(cards, {
    rotateX: 0,
    rotateY: 0,
    ease: "power1.out",
    duration: 0.3,
  });
});

// quotient-img animation effects
gsap.from("#colon1", {
  y: "-5.5rem",
  x: "-5.5rem",
  duration: 0.75,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 45%",
    end: "top 25%",
    scrub: 2,
    ease: "power1.out",
  },
});

gsap.from("#colon2", {
  y: "5rem",
  x: "10rem",
  duration: 0.75,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 45%",
    end: "top 25%",
    scrub: 2,
    ease: "power1.out",
  },
});

// page-4 animation

gsap.to(".page5 h4", {
  y: "-7rem",
  duration: 1,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
    ease: "power1.out",
  },
});
