const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const calendarBtn = document.getElementById('calendar-btn');
const currentEventBtn = document.getElementById('current-event-btn');
const calendar = document.getElementById('event-calendar');
const currentEvent = document.getElementById('current-event')

const toggleNav = () => {
  nav.classList.toggle('hide');
}

const showCalendar = () => {
  calendar.classList.remove('hide');
  currentEvent.classList.add('hide');
}

const showCurrentEvent = () => {
  calendar.classList.add('hide');
  currentEvent.classList.remove('hide');
}

hamburger.addEventListener('click', toggleNav);
calendarBtn.addEventListener('click', showCalendar);
currentEventBtn.addEventListener('click', showCurrentEvent);

