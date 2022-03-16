const modaldata = require('./modaldata.json');

const About = modaldata.About
const Skills = modaldata.Skills
const Clients = modaldata.Clients



for(let i of Skills.content["skill-list"]) {
    for(let j of i) {
        console.log(j)
    }
}



//todo
const xxx = {
    1: 'Webdesign and Development by Lukas Kutsch',
    2: 'Inter Typeface (https://rsms.me/inter/)'
}

