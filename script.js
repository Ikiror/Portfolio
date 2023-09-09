// list of skills
const skills = [
    'HTML', 'Bootstrap', 'CSS', 'SASS/SCSS', 'Github', 'NPM', 'Wireframe', 'JavaScript', "and I'm constantly learning new things:)"
]


// function addSkill() {
//     function revealSkill(skill) {
//         return skill ;
//     }
//     const learnedSkills = skills.map(revealSkill);
  
//     const newListItem = document.createElement("li");
//     for (let i=0; i < learnedSkills.length; i++) {
//         // newListItem.innerHTML = learnedSkills[i]
//         const newSkill = document.createTextNode(learnedSkills[i]);
//         newListItem.append(newSkill);
//         const unorderedList = document.getElementById("skillTxt");
    
//     document.body.insertBefore(newListItem, unorderedList);

//     // const skillText = document.getElementById("skillTxt");
//     }   
// };
function addSkill(skill) {
        return skill ;
    }
const learnedSkills = skills.map(addSkill)
const revealSkill = () => {
    let randomSkillNum = Math.floor(Math.random() * skills.length);
    let skill = learnedSkills[randomSkillNum];
    const revealedSkill = document.getElementById("skillText")
    revealSkill.innerHTML = skill;
}
let revealButton = document.getElementById("skillBtn");
revealButton.onclick = revealSkill;

// for (let i=0; i < learnedSkills.length; i++) {
//     skillText.innerHTML = learnedSkills[i]
// }
// function addSkill () {
//     for (x in learnedSkills) {
//     const newListItem = document.createElement("li");

//     // and give it some content
    
//     const newSkill = document.createTextNode(learnedSkills[x]);
  
  
//     // add the text node to the newly created div
//     newListItem.appendChild(newSkill);
  
//     // add the newly created element and its content into the DOM
//     const unorderedList = document.getElementById("skillTxt");
//     document.body.insertBefore(newListItem, unorderedList);
//     }
// }

// let revealButton = document.getElementById("skillBtn");
// revealButton.onclick = learnedSkills;

