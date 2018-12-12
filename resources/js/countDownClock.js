$(document).ready(function(){
const countDownDate = new Date('January 28, 2019, 10:00:00').getTime();
const timer = setInterval(function(){

  const timeNow = new Date().getTime();
  const distance = countDownDate - timeNow;

    //CONVERT TIME CALCS INTO DAYS, HOURS, MINS, SECS

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //DISPLAY RESULT IN HTML
      document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    //WHEN THE COUNTDOWN FINISHES

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = 'Nominations are open!';
    }

}, 1000);



  });
