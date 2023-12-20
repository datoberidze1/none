/*var product = [
    {
        image: "assets/images/delicious-pizza-isolated-white.jpg",
        name: "HOTT PIZZA",
        text: "",
        link: "#",
        
    },
    {
        name: "SALADS",
        text: "",
        image: "assets/images/high-angle-shot-vegetable-salad-white-bowl.jpg",
    },
    {
        name: "DESSERT",
        text: "",
        image: "assets/images/pexels-photo-3681641.jpeg",
    },
    {
        name: "DRINKS",
        text: "",
        link: "#",
        image: "assets/images/pexels-photo-3939602.jpeg"
    }
];

var shedegi = product.map((prod,index) => {
    return `
    <div key="${index}" class="box">
    <div class="box-image">
    <img src="${prod.image}">
    </div>
    
    <div class="text-box">${prod.name}</div>
    <div class="but-box"><div class="button">
    <a href="${prod.link}" class="linker">read more</a>
    </div></div>


    </div>
    `
}).join("");

document.getElementById("brand").innerHTML=
"<div class='container'>" + shedegi + "</div>"

*/
/*function myclock(){

var now = new Date();
var hour = now.getHours()%12;
var minute = now.getMinutes();
var second = now.getSeconds();

var hourHand = document.getElementById("hourhand");
var minuteHand = document.getElementById("minutehand");
var secondHand = document.getElementById("secondhand");

var hourDeg = (360/12) * hour + (360/12) * (minute/60);
var minuteDeg = (360 / 60 )*minute + (360/60) * (second/60);
var secondDeg = (360 / 60)* second;

hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
minuteHand.style.transform =`translate(-50%, -100%) rotate(${minuteDeg}deg)`;
secondHand.style.transform =`translate(-50%, -100%) rotate(${secondDeg}deg)`;


}

setInterval(myclock,1000);
myclock();
*/




const animatedEls = document.querySelectorAll("[data-animation]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animation = entry.target.getAttribute("data-animation");

    if (entry.isIntersecting) {
      entry.target.classList.add("animated", `${animation}`);
    } else {
      entry.target.classList.remove("animated", `${animation}`);
    }
  });
});

animatedEls.forEach((el) => observer.observe(el));