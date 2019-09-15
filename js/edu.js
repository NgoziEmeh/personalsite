// Section: Education
const schBtn = document.querySelector(".school");
const streetBtn = document.querySelector(".informal_edu");

const streetDetail = document.querySelector(".street_detail");
const schDetail = document.querySelector(".school_detail");

schBtn.addEventListener("click", () => {
    schDetail.classList.toggle("hide");
    if (schDetail.style.display = "block") {
        streetDetail.style.display = "none";
    } else {
        streetDetail.style.display = "block";
    }
});

streetBtn.addEventListener("click", () => {
    streetDetail.classList.toggle("hide");
    if (streetDetail.style.display = "block") {
        schDetail.style.display = "none";
    } else {
        schDetail.style.display = "block"
    }
});