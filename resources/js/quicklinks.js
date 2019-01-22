document.addEventListener("DOMContentLoaded", function(event) {

  let url = window.location.href
  let urlArray = url.split('');
  console.log(urlArray)
  let hashIndex = urlArray.findIndex(letter => {return letter === '#'});
  let hashArray = [];
  for (let x = hashIndex + 1; x <= urlArray.length - 1; x++){hashArray.push(urlArray[x])}
  console.log(hashArray)
  const hash = hashArray.join('');

  if (hash === 'nominate' || hash === 'vote'){
    document.getElementById('nominate').click();
  }

  else {
      document.getElementById(hash).click();
  }
});
