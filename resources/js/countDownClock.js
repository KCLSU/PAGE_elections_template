$(document).ready(function(){
  let countDownDate = new Date('January 28, 2019, 10:00:00').getTime();

  let timeNow = new Date().getTime();
  let days = null;
  let hours = null;
  let minutes = null;
  let seconds = null;
  let distance = null;
  let message = document.getElementById('count-message');


function calculateDistance(){
  timeNow = new Date().getTime();
  distance = countDownDate - timeNow;
  return distance;
}


    //CONVERT TIME CALCS INTO DAYS, HOURS, MINS, SECS
function calculateTimes(x){
  console.log("calculateTimes triggered")
    days = Math.floor(x / (1000 * 60 * 60 * 24));
    hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((x % (1000 * 60)) / 1000);
  }


function startTimer(){
  const timer1 = setInterval(function(){
    calculateTimes(calculateDistance())

    //WHEN THE COUNTDOWN FINISHES
    if (distance < 0) {
      clearInterval(timer1);
      nominationsClose()
    }

    //DISPLAY RESULT IN HTML
    document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);

function nominationsClose(){
  message.innerHTML = "Nominations close in"
  countDownDate = new Date('February 15, 2019, 12:00:00').getTime();
  const timer2 = setInterval(function(){
      console.log("second timer")
      calculateTimes(calculateDistance())

      //WHEN THE COUNTDOWN FINISHES
      if (distance < 0) {
        clearInterval(timer2);
        candidatesAnnounced()
      }
      //DISPLAY RESULT IN HTML
      document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }, 1000);
}

function candidatesAnnounced(){
  message.innerHTML = "Candidates will be announced in"
  countDownDate = new Date('February 25, 2019, 10:00:00').getTime();

  const timer3 = setInterval(function(){
      console.log("Third timer")
    calculateTimes(calculateDistance())

    //WHEN THE COUNTDOWN FINISHES
    if (distance < 0) {
      clearInterval(timer3);
      votingOpens()
    }

    //DISPLAY RESULT IN HTML
    document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    }, 1000);

}

function votingOpens(){
  message.innerHTML = "Voting OPENS in"
  countDownDate = new Date('March 4, 2019, 10:00:00').getTime();
  const timer3 = setInterval(function(){
    calculateTimes(calculateDistance())
      //WHEN THE COUNTDOWN FINISHES

      if (distance < 0) {
        clearInterval(timer3);
        votingCloses()
      }

      //DISPLAY RESULT IN HTML
      document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }, 1000);
}


function votingCloses(){
  message.innerHTML = "Voting CLOSES in"
  countDownDate = new Date('March 7, 2019, 17:00:00').getTime();
  const timer4 = setInterval(function(){
    calculateTimes(calculateDistance())
      //WHEN THE COUNTDOWN FINISHES

      if (distance < 0) {
        clearInterval(timer4);
        message.innerHTML = "Voting has officially closed";
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }

      //DISPLAY RESULT IN HTML
      document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }, 1000);
 }
}

  startTimer();




  });
