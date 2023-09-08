const skills = [
    { 'HTML', 'Bootstrap', 'CSS', 'SASS/SCSS', 'Github', 'NPM', 'Wireframe', 'JavaScript'
}
]

function display(skill) {
    return 'My Skills: ' + skill ;
}

const learnedSkills = skills.map(display);

for (x in learnedSkills) {
    document.getElementById('skillsTrigger').innerHTML
}

<button id="getQuote" onkeypress="diplayRandomQuote()">
        Click to get a new quote!
      </button>

let quoteButton = document.getElementById("getQuote");
quoteButton.onclick = displayRandomQuote;