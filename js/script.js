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

// output in HTML
for(let i = 0; i < items.length; i++){
    left += `   
    
        <div class="object">
            <img src="${items[i]}" alt="${title[i]}">
            <div class="text">
                <h2 >${title[i]} </h2>
                <p>${text[i]}</p>
            </div>  
        </div>`;
    
    right += `        
        <div class="sub-img">
            <img src="${items[i]}" alt="${title[i]}">
        </div> `;
}

// output in page 
immage.innerHTML += left;
document.getElementsByClassName("object")[0].classList.add("active");
imgPreview.innerHTML += right;
document.getElementsByClassName("sub-img")[0].classList.add("active");

// bottoni 
let pos = 0;


// next
const next = document.querySelector(".next");

next.addEventListener("click", 
function(){
    pos = pos + 1;
    if(pos > 4){
        pos = 0
    };
    console.log(pos);
    document.querySelector(".sub-img.active").classList.remove("active");
    document.getElementsByClassName("sub-img")[pos].classList.add("active");

    document.querySelector(".object.active").classList.remove("active");
    document.getElementsByClassName("object")[pos].classList.add("active");

    
    
}
);

// before
const before = document.querySelector(".before");

before.addEventListener("click", 
function(){
    pos = pos - 1;
    if(pos < 0){
        pos = 4
    };
    console.log(pos);
    document.querySelector(".sub-img.active").classList.remove("active");
    document.getElementsByClassName("sub-img")[pos].classList.add("active");

    document.querySelector(".object.active").classList.remove("active");
    document.getElementsByClassName("object")[pos].classList.add("active");  

    
}
);


