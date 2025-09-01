//! Header Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//! MODULE # 4 
//! Live classes Card

//? 1. DOM Elements & Setup
const track = document.querySelector(".lc-carousel-track");
const leftBtn = document.querySelector(".lc-arrow.left");
const rightBtn = document.querySelector(".lc-arrow.right");
const circleContainer = document.querySelector(".lc-circle-container");
const cards = document.querySelectorAll(".lc-card");
const cardWidth = 110;
const totalCards = cards.length;
let currentCardIndex = 0;

//?  2. Create Circle Indicators
//*  Create one circle per card and append to the container
for (let i = 0; i < totalCards; i++) {
  const circle = document.createElement("span");
  circle.classList.add("lc-circle");
  if (i === 0) circle.classList.add("active");
  circleContainer.appendChild(circle);
}
//* Get all circle elements after creation
const circles = document.querySelectorAll(".lc-circle");

//? 3. Carousel Update Function
function updateCarousel() {
  //* Move the carousel to the correct position
  const scrollPosition = currentCardIndex * cardWidth;
  track.style.transform = `translateX(-${scrollPosition}px)`;

  //* Enable/disable arrows based on current index
  leftBtn.disabled = currentCardIndex === 0;
  rightBtn.disabled = currentCardIndex === totalCards - 1;

  //* Highlight the active circle
  circles.forEach((circle, i) => {
    circle.classList.toggle("active", i === currentCardIndex);
  });
}

//? 4. Button Navigation (Left & Right Arrows)
leftBtn.addEventListener("click", () => {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCarousel();
  }
});
rightBtn.addEventListener("click", () => {
  if (currentCardIndex < totalCards - 1) {
    currentCardIndex++;
    updateCarousel();
  }
});

//? 5. Circle Navigation (Jump to Card)
//* Optional: click a circle to jump
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentCardIndex = index;
    updateCarousel();
  });
});
//* Initial setup
updateCarousel();

//? 7. Mouse Drag Support
let isDragging = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = currentCardIndex * cardWidth;
  track.style.cursor = "grabbing";
});

track.addEventListener("mouseleave", () => {
  isDragging = false;
  track.style.cursor = "grab";
});

track.addEventListener("mouseup", () => {
  isDragging = false;
  track.style.cursor = "grab";
});

track.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = x - startX;
  const newScroll = scrollLeft - walk;

  currentCardIndex = Math.round(newScroll / cardWidth);
  currentCardIndex = Math.max(0, Math.min(currentCardIndex, totalCards - 1));
  updateCarousel();
});

//? 8. Touch Support (useful for mobile devices)
track.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX - track.offsetLeft;
  scrollLeft = currentCardIndex * cardWidth;
});

track.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].clientX - track.offsetLeft;
  const walk = x - startX;
  const newScroll = scrollLeft - walk;

  currentCardIndex = Math.round(newScroll / cardWidth);
  currentCardIndex = Math.max(0, Math.min(currentCardIndex, totalCards - 1));
  updateCarousel();
});

track.addEventListener("touchend", () => {
  isDragging = false;
});


//! MODULE # 5 

//! Learner Journey Carousel

const trackLJ = document.querySelector(".lj-carousel-track");
const leftBtnLJ = document.querySelector(".lj-arrow.left");
const rightBtnLJ = document.querySelector(".lj-arrow.right");
const circleContainerLJ = document.querySelector(".lj-circle-container");
const cardsLJ = document.querySelectorAll(".lj-card");
const cardWidthLJ = cardsLJ[0].offsetWidth + 20;
const totalCardsLJ = cardsLJ.length;
let currentCardIndexLJ = 0;

// Create Circle Indicators for LJ
for (let i = 0; i < totalCardsLJ; i++) {
  const circle = document.createElement("span");
  circle.classList.add("lj-circle");
  if (i === 0) circle.classList.add("active");
  circleContainerLJ.appendChild(circle);
}
const circlesLJ = document.querySelectorAll(".lj-circle");

function updateLearnerJourneyCarousel() {
  const scrollPosition = currentCardIndexLJ * cardWidthLJ;
  trackLJ.style.transform = `translateX(-${scrollPosition}px)`;

  leftBtnLJ.disabled = currentCardIndexLJ === 0;
  rightBtnLJ.disabled = currentCardIndexLJ === totalCardsLJ - 1;

  circlesLJ.forEach((circle, i) => {
    circle.classList.toggle("active", i === currentCardIndexLJ);
  });
}

// Arrow Navigation for LJ
leftBtnLJ.addEventListener("click", () => {
  if (currentCardIndexLJ > 0) {
    currentCardIndexLJ--;
    updateLearnerJourneyCarousel();
  }
});
rightBtnLJ.addEventListener("click", () => {
  if (currentCardIndexLJ < totalCardsLJ - 4) {
    currentCardIndexLJ++;
    updateLearnerJourneyCarousel();
  }
});

// Circle Navigation for LJ
circlesLJ.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentCardIndexLJ = index;
    updateLearnerJourneyCarousel();
  });
});

// Mouse Drag for LJ
let isDraggingLJ = false;
let startXLJ;
let scrollLeftLJ;

trackLJ.style.cursor = "grab";
trackLJ.addEventListener("mousedown", (e) => {
  isDraggingLJ = true;
  startXLJ = e.pageX - trackLJ.offsetLeft;
  scrollLeftLJ = currentCardIndexLJ * cardWidthLJ;
  trackLJ.style.cursor = "grabbing";
});
trackLJ.addEventListener("mouseleave", () => {
  isDraggingLJ = false;
  trackLJ.style.cursor = "grab";
});
trackLJ.addEventListener("mouseup", () => {
  isDraggingLJ = false;
  trackLJ.style.cursor = "grab";
});
trackLJ.addEventListener("mousemove", (e) => {
  if (!isDraggingLJ) return;
  e.preventDefault();
  const x = e.pageX - trackLJ.offsetLeft;
  const walk = x - startXLJ;
  const newScroll = scrollLeftLJ - walk;

  currentCardIndexLJ = Math.round(newScroll / cardWidthLJ);
  currentCardIndexLJ = Math.max(
    0,
    Math.min(currentCardIndexLJ, totalCardsLJ - 1)
  );
  updateLearnerJourneyCarousel();
});

// Touch Support for LJ
trackLJ.addEventListener("touchstart", (e) => {
  isDraggingLJ = true;
  startXLJ = e.touches[0].clientX - trackLJ.offsetLeft;
  scrollLeftLJ = currentCardIndexLJ * cardWidthLJ;
});
trackLJ.addEventListener("touchmove", (e) => {
  if (!isDraggingLJ) return;
  const x = e.touches[0].clientX - trackLJ.offsetLeft;
  const walk = x - startXLJ;
  const newScroll = scrollLeftLJ - walk;

  currentCardIndexLJ = Math.round(newScroll / cardWidthLJ);
  currentCardIndexLJ = Math.max(
    0,
    Math.min(currentCardIndexLJ, totalCardsLJ - 1)
  );
  updateLearnerJourneyCarousel();
});
trackLJ.addEventListener("touchend", () => {
  isDraggingLJ = false;
});

updateLearnerJourneyCarousel();

//! MODULE # 6

const trackLS = document.querySelector(".ls-carousel-track");
const leftBtnLS = document.querySelector(".ls-arrow.left");
const rightBtnLS = document.querySelector(".ls-arrow.right");
const circleContainerLS = document.querySelector(".ls-circle-container");
const cardsLS = document.querySelectorAll(".ls-card");
const cardWidthLS = cardsLS[0].offsetWidth + 20;
const totalCardsLS = cardsLS.length;
let currentCardIndexLS = 0;

// Create Circle Indicators for LS
for (let i = 0; i < totalCardsLS; i++) {
  const circle = document.createElement("span");
  circle.classList.add("ls-circle");
  if (i === 0) circle.classList.add("active");
  circleContainerLS.appendChild(circle);
}
const circlesLS = document.querySelectorAll(".ls-circle");

function updateLearnerStoryCarousel() {
  const scrollPosition = currentCardIndexLS * cardWidthLS;
  trackLS.style.transform = `translateX(-${scrollPosition}px)`;

  leftBtnLS.disabled = currentCardIndexLS === 0;
  rightBtnLS.disabled = currentCardIndexLS === totalCardsLS - 1;

  circlesLS.forEach((circle, i) => {
    circle.classList.toggle("active", i === currentCardIndexLS);
  });
}

// Arrow Navigation for LS
leftBtnLS.addEventListener("click", () => {
  if (currentCardIndexLS > 0) {
    currentCardIndexLS--;
    updateLearnerStoryCarousel();
  }
});
rightBtnLS.addEventListener("click", () => {
  if (currentCardIndexLS < totalCardsLS - 3) {
    currentCardIndexLS++;
    updateLearnerStoryCarousel();
  }
});

// Circle Navigation for LS
circlesLS.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentCardIndexLS = index;
    updateLearnerStoryCarousel();
  });
});

// Mouse Drag for LS
let isDraggingLS = false;
let startXLS;
let scrollLeftLS;

trackLS.style.cursor = "grab";
trackLS.addEventListener("mousedown", (e) => {
  isDraggingLS = true;
  startXLS = e.pageX - trackLS.offsetLeft;
  scrollLeftLS = currentCardIndexLS * cardWidthLS;
  trackLS.style.cursor = "grabbing";
});
trackLS.addEventListener("mouseleave", () => {
  isDraggingLS = false;
  trackLS.style.cursor = "grab";
});
trackLS.addEventListener("mouseup", () => {
  isDraggingLS = false;
  trackLS.style.cursor = "grab";
});
trackLS.addEventListener("mousemove", (e) => {
  if (!isDraggingLS) return;
  e.preventDefault();
  const x = e.pageX - trackLS.offsetLeft;
  const walk = x - startXLS;
  const newScroll = scrollLeftLS - walk;

  currentCardIndexLS = Math.round(newScroll / cardWidthLS);
  currentCardIndexLS = Math.max(
    0,
    Math.min(currentCardIndexLS, totalCardsLS - 1)
  );
  updateLearnerStoryCarousel();
});

// Touch Support for LS
trackLS.addEventListener("touchstart", (e) => {
  isDraggingLS = true;
  startXLS = e.touches[0].clientX - trackLS.offsetLeft;
  scrollLeftLS = currentCardIndexLS * cardWidthLS;
});
trackLS.addEventListener("touchmove", (e) => {
  if (!isDraggingLS) return;
  const x = e.touches[0].clientX - trackLS.offsetLeft;
  const walk = x - startXLS;
  const newScroll = scrollLeftLS - walk;

  currentCardIndexLS = Math.round(newScroll / cardWidthLS);
  currentCardIndexLS = Math.max(
    0,
    Math.min(currentCardIndexLS, totalCardsLS - 1)
  );
  updateLearnerStoryCarousel();
});
trackLS.addEventListener("touchend", () => {
  isDraggingLS = false;
});

updateLearnerStoryCarousel();

//! MODULE # 8
//! Animated percentage number

//? 1.part -1
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById("percentage-1");
  let current = 3691601;
  const target = 3691671;

  function animate() {
    counter.textContent = `${current}`;
    if (current <= target-1) {
      current++;
      setTimeout(animate, 5);
    }
  }
  animate();
});

//? part-2
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById("percentage-2");
  let current = 122;
  const target = 194;

  function animate() {
    counter.textContent = `${current}`;
    if (current <= target-1) {
      current++;
      setTimeout(animate, 5);
    }
  }
  animate();
});

//? Part -3
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById("percentage-3");
  let current = 47860057;
  const target = 47860128;

  function animate() {
    counter.textContent = `${current}`;
    if (current <= target-1) {
      current++;
      setTimeout(animate, 5);
    }
  }
  animate();
});

//? Part - 4
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById("percentage-4");
  let current = 1603;
  const target = 1673;

  function animate() {
    counter.textContent = `${current}`;
    if (current <= target-1) {
      current++;
      setTimeout(animate, 1);
    }
  }
  animate();
});

//! Circle bar
document.querySelectorAll(".progress-circle").forEach((circle) => {
  const percent = circle.getAttribute("data-percent");
  const offset = 180 - (180 * percent) / 100;
  const progressBar = circle.querySelector(".progress-bar");
  progressBar.style.strokeDashoffset = offset;
});


//! MODULE # 9
const lpLinks = document.querySelectorAll(".lp-nav-link");
const lpContents = document.querySelectorAll(".lp-tab-content");

lpLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links
    lpLinks.forEach((l) => l.classList.remove("active"));
    // Add active to clicked link
    link.classList.add("active");

    // Hide all content
    lpContents.forEach((content) => (content.style.display = "none"));

    // Show selected content
    const targetId = link.getAttribute("data-content");
    document.getElementById(targetId).style.display = "block";
  });
});

//! lpUpdateCarousel();
const lpTrack = document.querySelector(".lp-carousel-track");
const lpLeftBtn = document.querySelector(".lp-arrow.left");
const lpRightBtn = document.querySelector(".lp-arrow.right");
const lpCircleContainer = document.querySelector(".lp-circle-container");
const lpCards = document.querySelectorAll(".lp-card");

const lpCardWidth = 110; // Adjust to your card width (includes margin)
const lpTotalCards = lpCards.length;
const lpCardsPerGroup = 2; // Number of cards per dot group
let lpCurrentCardIndex = 0;

// Create one circle per group
const lpTotalGroups = Math.ceil(lpTotalCards / lpCardsPerGroup);
for (let i = 0; i < lpTotalGroups; i++) {
  const circle = document.createElement("span");
  circle.classList.add("lp-circle");
  if (i === 0) circle.classList.add("active");
  lpCircleContainer.appendChild(circle);
}

const lpCircles = document.querySelectorAll(".lp-circle");

function lpUpdateCarousel() {
  const scrollPosition =
    Math.floor(lpCurrentCardIndex / lpCardsPerGroup) *
    (lpCardWidth * lpCardsPerGroup + 5 * (lpCardsPerGroup - 1));
  lpTrack.style.transform = `translateX(-${scrollPosition}px)`;

  // Update arrows
  lpLeftBtn.disabled = lpCurrentCardIndex === 0;
  lpRightBtn.disabled = lpCurrentCardIndex >= lpTotalCards - lpCardsPerGroup;

  // Update circles
  lpCircles.forEach((circle, i) => {
    circle.classList.toggle(
      "active",
      i === Math.floor(lpCurrentCardIndex / lpCardsPerGroup)
    );
  });
}

lpLeftBtn.addEventListener("click", () => {
  if (lpCurrentCardIndex > 0) {
    lpCurrentCardIndex--;
    lpUpdateCarousel();
  }
});

lpRightBtn.addEventListener("click", () => {
  if (lpCurrentCardIndex < 3) {
    lpCurrentCardIndex++;
    lpUpdateCarousel();
  }
});

// Optional: click a circle to jump to that group
lpCircles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    lpCurrentCardIndex = index * lpCardsPerGroup;
    lpUpdateCarousel();
  });
});

// Autoplay every 2 seconds
function lpAutoplay() {
  if (lpCurrentCardIndex < lpTotalCards - lpCardsPerGroup) {
    lpCurrentCardIndex++;
  } else {
    lpCurrentCardIndex = 0;
  }
  lpUpdateCarousel();
}

setInterval(lpAutoplay, 2000);

// Initial call
lpUpdateCarousel();

//! MODULE # 10

//! Have fun with your carousel!
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".hf-nav-link");
  const cards = document.querySelectorAll(".hf-card");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Update active nav link
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Hide all cards
      cards.forEach((card) => card.classList.remove("active"));

      // Show selected card
      const targetId = link.getAttribute("data-content");
      const targetCard = document.getElementById(targetId);
      if (targetCard) targetCard.classList.add("active");
    });
  });
});
