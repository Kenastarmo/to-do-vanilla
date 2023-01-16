let forma = document.querySelector("form");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn-submit");
let edit_todo = document.querySelector(".edit-btn");
let trash = document.querySelectorAll(".trash-btn");
let check_todo = document.querySelectorAll(".check-btn");
let ul_container = document.querySelector(".ul-container");
let item_container = document.querySelector(".item-container");
let item = document.querySelector(".item");



let storage = [];
let text = {};

let taskovi = [];

let id = 0;

forma.addEventListener('submit', (event) => {
    event.preventDefault();
    validacija();
})


let validacija = () => {
    if(input.value == ""){
        alert("Niste unijeli nikakav tekst");
    }
    else{
        prihvati_podatke();
        
        input.value = "";
    }
}

let prihvati_podatke = () => {
    text.task = input.value
    console.log(text.task);
    

    napravi_task();
    saveTasks_localStorage(input.value);
}

let napravi_task = () => {
    ul_container.innerHTML += 
    `<div class="item-container">
        <li class="item">${text.task}</li>
        <button onClick="izmijeni_task(this)" class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick="brisanje_task(this)" class="trash-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button onClick="checkiraj_task(this)" class="check-btn">
            <i class="fa-solid fa-check"></i>
        </button>
    </div>`
    
}

let brisanje_task = (element) =>{
    element.parentElement.remove();
}

let izmijeni_task = (element) => {
    let selektovani_task = element.parentElement.firstElementChild.innerText;
    

    //console.log(selektovani_task);
    //input.value = text.task;
    //input.value = storage.text;
    input.value = selektovani_task;
    //console.log(selektovani_task.firstElementChild)
    element.parentElement.remove();
    
}

let checkiraj_task = (element) => { 
    
    element.parentElement.classList.toggle("checked");
    element.parentElement.firstElementChild.classList.toggle("line-through");
    //console.log(element.parentElement);
}

let saveTasks_localStorage = (task) => {
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }    
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    
    
   
}


let dobavi_Taskove = () => {
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }    
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
    ul_container.innerHTML += 
    `<div class="item-container">
        <li class="item">${task}</li>
        <button onClick="izmijeni_task(this)" class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick="brisanje_task(this)" class="trash-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button onClick="checkiraj_task(this)" class="check-btn">
            <i class="fa-solid fa-check"></i>
        </button>
    </div>`

  })
}

document.addEventListener('DOMContentLoaded', dobavi_Taskove());
