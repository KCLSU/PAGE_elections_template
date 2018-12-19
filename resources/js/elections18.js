
//THIS IS THE COMPILED JS FOR UPLOADING TO MSL
//SEE KCLSU GITHUB REPO


document.getElementById("default-tab").click();
document.getElementById("default-mini-tab").click();
document.getElementById('burger-content').style.display = 'none';

// MOBILE BURGER FUNCTION
function burgerMenu(id){
  console.log("open/close menu")
  $(id).slideToggle("slow");
}

function closeBurger(){
  $('#burger-content').slideUp('slow');
}

var tabSections = document.querySelectorAll('.tab-section')
var tabButtons = document.querySelectorAll('.tab-button')

document.getElementById("default-tab").click();

 // MAIN TAB FUNCTIONS FOR PRIMARY TABS
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
  closeBurger();
}


// MINI TAB FUNCTIONS FOR TABS WITHIN TABS
var miniTabSectionsTemp = document.querySelectorAll('.mini-tab-section');
// var miniTabButtons = document.querySelectorAll('.mini-tab')
// const tabDefault = document.getElementById('default-mini-tab');
miniTabSectionsTemp.forEach(section => {
  section.style.display = 'none';
})

function openMiniTab(event, id, defaultName, buttonsName, sectionsName){
  let miniTabSections = document.querySelectorAll(`.${sectionsName}`)
  let miniTabButtons = document.querySelectorAll(`.${buttonsName}`)
  const tabDefault = document.getElementById(`${defaultName}`);

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

// FUNCTION TO OPEN NOMINATE SECTION FROM WITHIN A TAB
function nominate() {
 document.getElementById('nominate').click();
}
