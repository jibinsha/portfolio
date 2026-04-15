// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 50){
      el.classList.add("active");
    }
  });
});

function openModal(src){
  console.log("clicked"); // 🔥 DEBUG

  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");

  modal.style.display = "flex";
  img.src = src;
}

function closeModal(){
  document.getElementById("imageModal").style.display = "none";
}
// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 50;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };

  update();
});
