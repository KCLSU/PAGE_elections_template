//FAQ FUNCTION
  function openFaq(evt, faqSection){

  // Variables for faq content and faq links
    var clickedID = document.getElementById(faqSection);
    var symbol = evt.currentTarget.children[1];
  //add active class to tab-content that is clicked, and show current tab content

 clickedID.classList.toggle("display-content");
  evt.currentTarget.classList.toggle("active-fq");

    //CHANGE PLUS TO MINUS SYMBOL
    symbol.classList.toggle('fa-minus');
    symbol.classList.toggle('fa-plus');
  }
