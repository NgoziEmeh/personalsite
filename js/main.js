const codeSkillBtn = document.querySelector(".coding_skill_btn");
const bizSkillBtn = document.querySelector(".biz_skill_btn");
const codeSkillArea = document.querySelector(".coding_skills");
const bizSkillArea = document.querySelector(".biz_skills");



codeSkillBtn.addEventListener("click", () => {
    codeSkillArea.classList.toggle("show");
    if (codeSkillArea.style.display = "flex") {
        bizSkillArea.style.display = "none";
    } else {
        bizSkillArea.style.display = "flex";

    }
});

bizSkillBtn.addEventListener("click", () => {
    bizSkillArea.classList.toggle("show");
    if (bizSkillArea.style.display = "block") {
        codeSkillArea.style.display = "none";
    } else {
        codeSkillArea.style.display = "flex"


    }

});