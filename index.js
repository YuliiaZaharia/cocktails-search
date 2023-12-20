const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".cocktail");

searchInput.addEventListener("keyup", function(event) {
const word = event.target.value.toLowerCase();
divs.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
})
})

gsap.from('h1', { duration: 2, rotation: 720, delay: 0.5, x: '-100vw', ease: 'power2'});
gsap.from('footer', { duration: 2, delay: 0.5, x: '-100vw', ease: 'power2.in'});