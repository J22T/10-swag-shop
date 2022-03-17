//Create a button and give it an ID of "hamburgerBtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your links
function toggleMenu() {
    document.getElementById("hamBTN").classList.toggle("open");
    document.getElementById("primaryNAV").classList.toggle("open");
}

var x = document.getElementById('hamBTN');
x.onclick = toggleMenu; 
