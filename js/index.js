const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// navigation elements
const allAnchors = document.querySelectorAll('a');
allAnchors[0].textContent = siteContent["nav"]["nav-item-1"];
allAnchors[1].textContent = siteContent["nav"]["nav-item-2"];
allAnchors[2].textContent = siteContent["nav"]["nav-item-3"];
allAnchors[3].textContent = siteContent["nav"]["nav-item-4"];
allAnchors[4].textContent = siteContent["nav"]["nav-item-5"];
allAnchors[5].textContent = siteContent["nav"]["nav-item-6"];
allAnchors.forEach(a => a.style.color = "green");


// adding two new items in the navigation bar

const newNav1 = document.createElement("a");
const allNavBars = document.querySelector('nav');
newNav1.textContent = "Blog";
newNav1.href = "#";
newNav1.style.color = "green";
allNavBars.prepend(newNav1);

const newNav2 = document.createElement("a");
newNav2.textContent = "Profile";
newNav2.href = "#";
newNav2.style.color = "green";
allNavBars.appendChild(newNav2);
// allNavBars.forEach(a => a.style.color = "green");




// top right image
const logoImage = document.querySelector("#cta-img");
logoImage.src = siteContent["cta"][ "img-src"];

// h1 element
const aweText = document.querySelector("h1");
aweText.innerHTML = "Dom <br> Is <br> Awesome";

// button element
const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];

// main content elements
const mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent["main-content"][ "features-h4"];
mainContent[1].textContent = siteContent["main-content"][  "about-h4"];
mainContent[2].textContent = siteContent["main-content"][ "services-h4"];
mainContent[3].textContent = siteContent["main-content"][ "product-h4"];
mainContent[4].textContent = siteContent["main-content"][ "vision-h4"];
// mainContent[5].textContent = siteContent["main-content"][ "contact-h4"]; 


// paragraph elements
const paragraph = document.querySelectorAll("p");
paragraph[0].textContent = siteContent["main-content"]["features-content"];
paragraph[1].textContent = siteContent["main-content"]["about-content"];
paragraph[2].textContent = siteContent["main-content"]["services-content"];
paragraph[3].textContent = siteContent["main-content"]["product-content"];
paragraph[4].textContent = siteContent["main-content"]["vision-content"];

// middle image element
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];


//bottom section elements
const bottomEle = document.querySelectorAll("h4");
bottomEle[5].textContent = siteContent["contact"]["contact-h4"];

const bottomEleTwo = document.querySelectorAll("p");
bottomEleTwo[5].textContent = siteContent["contact"]["address"];

const bottomEleThree = document.querySelectorAll("p")
bottomEleThree[6].textContent = siteContent["contact"]["phone"];

const bottomEleFour = document.querySelectorAll("p")
bottomEleThree[7].textContent = siteContent["contact"]["email"];

// footer element
const footer = document.querySelector("footer");
// console.log(footer);
footer.textContent = siteContent["footer"][ "copyright"];

// stretch task ----update styles 

const h1Color = document.querySelector("h1");;
h1Color.style.color = "#3CAEA3";

const copyRight = document.querySelector("footer");
copyRight.style.color = "green";
copyRight.style.fontSize = "2em";

const middleSec = document.querySelectorAll(".text-content h4");
for(let i = 0; i < middleSec.length; i++){
  middleSec[i].style.color = "blue";
}

const middlePara = document.querySelectorAll(".text-content p");
for(let i = 0; i < middlePara.length; i++){
  middlePara[i].style.color = "orange";
}

const btmSec = document.querySelectorAll(".contact p");
for(let i = 0; i < btmSec.length; i++){
  btmSec[i].style.color = "#20639B";
}

const backColor = document.querySelector('button');
backColor.style.backgroundColor = "#ED553B";


