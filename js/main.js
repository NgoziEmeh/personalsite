// Section: Navigation
const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navigations");

const lineOne = document.querySelector(".line1");
const lineTwo = document.querySelector(".line2");
const lineThree = document.querySelector(".line3");

ham.addEventListener("click", () => {
    nav.classList.toggle("open");
    lineOne.classList.toggle("change");
    lineTwo.classList.toggle("change");
    lineThree.classList.toggle("change");
});



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
    };
});

streetBtn.addEventListener("click", () => {
    streetDetail.classList.toggle("hide");
    if (streetDetail.style.display = "block") {
        schDetail.style.display = "none";
    } else {
        schDetail.style.display = "block";
    };
});

// Page: skills
// Section: skill btn
// const codeSkillBtn = document.querySelector(".coding_skill_btn");
// const bizSkillBtn = document.querySelector(".biz_skill_btn");
// const codeSkillArea = document.querySelector(".coding_skills");
// const bizSkillArea = document.querySelector(".biz_skills");



// codeSkillBtn.addEventListener("click", () => {
//     codeSkillArea.classList.toggle("show");
//     if (codeSkillArea.style.display = "flex") {
//         bizSkillArea.style.display = "none";
//     } else {
//         bizSkillArea.style.display = "block";

//     }
// });

// bizSkillBtn.addEventListener("click", () => {
//     bizSkillArea.classList.toggle("show");
//     if (bizSkillArea.style.display = "block") {
//         codeSkillArea.style.display = "none";
//     } else {
//         codeSkillArea.style.display = "flex"


//     }

// });

// Transforming hamburger

// const lineOne = document.querySelector(".line1");
// const lineTwo = document.querySelector(".line2");
// const lineThree = document.querySelector(".line3");

