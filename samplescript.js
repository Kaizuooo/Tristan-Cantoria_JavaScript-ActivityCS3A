const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const buttonColor = document.getElementById('changeBackground')
const bodybackground = document.getElementById('profile')
const toggleDetails = document.getElementById('toggleDetails')
const hiddenClass = document.getElementById('details')

buttonname.addEventListener("click", function() {
    studentname.textContent = "Maria Santos";
}

);
buttonColor.addEventListener('click', function() {
    if (bodybackground.style.backgroundColor === "rgb(207, 247, 240)"){
        bodybackground.style.backgroundColor = "#fff";
    }
    else{
        bodybackground.style.backgroundColor = "rgb(207, 247, 240)";
    }
});

toggleDetails.addEventListener("click", function() {
    hiddenClass.classList.toggle("hidden");
});