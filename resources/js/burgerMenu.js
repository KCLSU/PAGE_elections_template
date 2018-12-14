function burgerMenu(id){
  console.log(id)
  // let menu = document.getElementById(id);
  console.log($(id));
  console.log("open/close menu")
  $(id).slideToggle("slow");
}
