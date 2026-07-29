// ======================================
// DAZZLER ECOM GROWTH
// Main Script
// ======================================

// Sticky Header Shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 12px 35px rgba(0,0,0,.10)";
        header.style.background = "rgba(255,255,255,.98)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.06)";
        header.style.background = "rgba(255,255,255,.96)";

    }

});

// ===============================
// Reading Progress Bar
// ===============================

const progress = document.createElement("div");

progress.className = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ===============================
// Smooth Button Animation
// ===============================

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// ===============================
// Console Message
// ===============================

console.log("🚀 Welcome to DazzlerEcomGrowth");