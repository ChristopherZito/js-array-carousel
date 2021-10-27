const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// input 
const immage = document.querySelector(".item");
const imgPreview = document.querySelector(".thumbs");
console.log("io ci sono");

// item
let left = "";
// thumbs
let right = "";

for(let i = 0; i < items.length; i++){
    left += `    
        <div class="object">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
        <div class="text">
            <h2 >${title[i]} </h2>
            <p>${text[i]}</p>
        </div>` ;  
    
    right += `        
        <div class="sub-img">
            <img src="${items[i]}" alt="${title[i]}">
        </div> `;
}

immage.innerHTML += left;
imgPreview.innerHTML += right;

