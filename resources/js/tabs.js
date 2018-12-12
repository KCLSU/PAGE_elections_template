
document.getElementById("default-tab").click();
document.getElementById("default-mini-tab").click();


var tabSections = document.querySelectorAll('.tab-section')
var tabButtons = document.querySelectorAll('.tab-button')

document.getElementById("default-tab").click();


function openTab(event, id){

  let targetSection = document.getElementById(id);

  tabButtons.forEach(button => {
    button.classList.remove('active');
  })

  tabSections.forEach(section => {
    section.style.display = 'none';
  })

  targetSection.style.display = 'block';

  event.target.classList.add('active');
}


var miniTabSections = document.querySelectorAll('.mini-tab-section')
var miniTabButtons = document.querySelectorAll('.mini-tab')
const tabDefault = document.getElementById('default-mini-tab');
miniTabSections.forEach(section => {
  section.style.display = 'none';
})

function openMiniTab(event, id){
  tabDefault.style.display = 'none'
  let targetSection = document.getElementById(id);
  console.log("clicked")

  miniTabButtons.forEach(button => {
    button.classList.remove('mini-tab-active');
  })

  miniTabSections.forEach(section => {
    section.style.display = 'none';
  })

  targetSection.style.display = 'block';
event.target.classList.add('mini-tab-active');
  // event.target.classList.add('active');
}

function nominate() {
 document.getElementById('nominate').click();
}
