document.addEventListener('DOMContentLoaded', function(){

    const cards = document.querySelectorAll('.event_item');
    const eventsContainer = document.getElementById('events-container');

    const eventObjects = [];
    let eventDivs = [];


if (cards.length > 0){
    cards.forEach((card, i) => {
        let title = card.getElementsByClassName('msl_event_name')[0].innerHTML;
        let location = card.getElementsByClassName('msl_event_location')[0].innerHTML;
        let time = card.getElementsByClassName('msl_event_time')[0].innerHTML;
        let link = card.querySelectorAll('dt > a')[0];

        //CREATE OBJECT
        let eventObj = {
          title, time,location, link
        }
        //PUSH OBJECT INTO ARRAY
        eventObjects.push(eventObj);
    })

    // LOOP THROUGH AND CREATE DIV

    eventObjects.forEach(event => {
      var div = document.createElement('div')
      div.innerHTML = `
        <div class="event-info">
          <a href=${event.link}><span class="event-title">${event.title}</span></a>
          <span class="event-time">${event.time}</span>
        </div>`

        div.classList.add('event-but');
      eventsContainer.appendChild(div)
    })

  }

});
