$(document).ready(function(){
  let countDownDate = new Date('January 28, 2019, 10:00:00').getTime();

  let timeNow = new Date().getTime();
  let days = null;
  let hours = null;
  let minutes = null;
  let seconds = null;
  let distance = null;
console.log("top level distance is: " + distance)

function calculateDistance(){
    console.log("distance triggered")
  timeNow = new Date().getTime();
  distance = countDownDate - timeNow;
  console.log("distance is NOW: " + distance)
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
    console.log("first timer")
    calculateTimes(calculateDistance())
    // console.log(`${days}:${hours}:${minutes}:${seconds}`)

    //WHEN THE COUNTDOWN FINISHES
    if (distance < 0) {
      clearInterval(timer1);
      nominationsClose()
    }

    //DISPLAY RESULT IN HTML
    document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);

function nominationsClose(){
  countDownDate = new Date('January 29, 2019, 10:00:00').getTime();
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
  countDownDate = new Date('February 15, 2019, 12:00:00').getTime();

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
  countDownDate = new Date('February 25, 2019, 12:00:00').getTime();
  const timer3 = setInterval(function(){
    calculateTimes(calculateDistance())
      //WHEN THE COUNTDOWN FINISHES

      if (distance < 0) {
        clearInterval(timer3);
        // countDownDate = new Date('March 4, 2019, 10:00:00').getTime();
        // document.getElementById('countdown').innerHTML = 'Nominations are open!';
        votingCloses()
      }

      //DISPLAY RESULT IN HTML
      document.getElementById('countdown').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }, 1000);
}

}

startTimer();




  });
