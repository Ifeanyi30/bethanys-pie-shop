document.addEventListener('DOMContentLoaded', (event) => {

    let myClasses = document.getElementById("primaryNav").classList;

    let toggleMenu = function hamburger(){
        myClasses.toggle("open");
    }

    let button = document.getElementById("hamburgerBtn");
    button.addEventListener("click", function(){
        toggleMenu();

        let classArray = Array.from(myClasses);
        let bValue = document.querySelector('#hamburgerBtn')
        
        if (classArray.includes("open")){
            bValue.innerHTML = "&#9932;"
        }
        else{
            bValue.innerHTML = "&#9776;"
        }
    })
  });