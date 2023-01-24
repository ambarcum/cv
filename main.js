
let form = document.querySelector('#love-form');
let flower1;
let flower2;
let svg_no = document.querySelector('.broken-heart_svg');
let svg_y = document.querySelector('.heart_svg');
let htmlCss = [['GeekBrains online university'], ['SCSS/SAS', "valid layout", 'adaptive layout', 'perfect pixel', 'BEM']];
let js = [['GeekBrains online university', 'Techno-Educational Academy'], ['ES5', 'ES6', 'DOM', "BOM", 'OOP', 'RegExp']];
let other = [['GeekBrains online university', 'Techno-Educational Academy'], ['Git', "GitHube", 'Figma', 'Zeplin', 'Bootstrap', 'VSCode']]
form.addEventListener('click', lovefunc);
function lovefunc(flower1, flower2) {
    flower1 = document.querySelector('#f1').value;
    flower2 = document.querySelector('#f2').value;

    if (flower2 % 2 !== flower1 % 2) {
        svg_y.style.display = 'flex';
        svg_no.style.display = 'none';
    } else {
        svg_no.style.display = 'flex';
        svg_y.style.display = 'none';
    }
};
let skills = document.querySelectorAll('.skills-info_butt');

skills.forEach((element) => { element.addEventListener('click', showInfo) })

function showInfo() {
    console.log(`${this.id[4]}`)
    let myArr = [];
    switch (this.id) {
        case 'htmlCss':
            myArr = htmlCss;
            break;
        case 'js':
            myArr = js;
            break;
        case 'other':
            myArr = other;
            break;
    }
    render(myArr);
}
function render(arr) {
    let box = document.querySelector('.skills-info_item');
    box.innerHTML = `
<ul class="skills-info__education">

</ul>
<ul class="skills-info__ability">

</ul>
`;
    for (let i = 0; i < arr[0].length; i++) {
        let educationBox = document.querySelector('.skills-info__education');
        educationBox.insertAdjacentHTML('afterbegin', `<li class="education_li">${arr[0][i]}</li>`)
    }
    for (let i = 0; i < arr[1].length; i++) {
        let abilityBox = document.querySelector('.skills-info__ability');
        abilityBox.insertAdjacentHTML('afterbegin', `<li class="ability_li">${arr[1][i]}</li>`)
    }
}

