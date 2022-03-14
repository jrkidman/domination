function strikeThrough(){
    let arguments = document.querySelector("#arguments");
    arguments.firstElementChild.style.textDecoration = "line-through";
}
strikeThrough();



function replaceWithUrl(){
    let string = document.querySelector("#images");
}

function setUrl(domElementId, newSource){
    let image = document.querySelector(domElementId);
    image.src = newSource;
}

setUrl("#image-1", "https://themysteriousworld.com/wp-content/uploads/2017/12/baby-penguin.webp");

setUrl("#image-2", "https://themysteriousworld.com/wp-content/uploads/2017/12/baby-hedgehog.webp");

setUrl("#image-3", "https://www.treehugger.com/thmb/XxFD1Y2SjTIy_f1bPnvTiHNkWVo=/1024x512/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2015__07__sloth_main-b0b8749714e6401eb0ad67ea943f7faf.jpg");


function removeArgumentsFirstItem(){
    let list = document.getElementById("arguments");
    list.removeChild(list.firstElementChild);
}

removeArgumentsFirstItem();
removeArgumentsFirstItem();


function changeIDFontSize(size, id){
    let string = document.getElementById(id);
    string.style.fontSize = size;
}
changeIDFontSize("150px", "thing-2");

// Part 2 ============================================

function appendArguments(domElement){
let list = document.getElementById("arguments");
list.appendChild(domElement);
}

let listItem = document.createElement('img');
listItem.src = "https://i0.wp.com/plantbasednews.org/wp-content/uploads/2020/09/image-placeholder-title-7213.jpg?fit=1200%2C774&ssl=1";
listItem.style.height = "300px";

appendArguments(listItem);


function changeImageSize(image){
    image.height = "30";
}

let imageTwo = document.querySelector("#image-2");
changeImageSize(imageTwo);

function makeInvisible(domElement){
    let newClass = document.querySelector(domElement);
    newClass.className = "invisible";
}

makeInvisible("#thing-1");

// Part 3 ============================================

function addText(text){
    let element = document.createElement('li');
    element.innerText = text;
    return element;
}

let newTextElement = addText("New shit here.");
let newTextElement2 = addText("More new shit.");

appendArguments(newTextElement);
appendArguments(newTextElement2);


function addNewHeader(size, text){
    let element = document.createElement("text" + size);
    element.innerText = text;
    return element;
}

let header = addNewHeader("3", "baby animals");
appendArguments(header);

let imageOne = document.querySelector("#image-1");
imageOne.style.height = "300px";

let imageThree = document.querySelector("#image-3");
imageThree.style.height = "300px";


