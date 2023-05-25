import './style.css';
import moment from 'moment';

const clock = document.querySelector('#actual-time');



console.log(clock.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a'));


