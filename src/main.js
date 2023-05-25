import './style.css';
import moment from 'moment';
import { fetchTime } from './services/fetchtime';




const createTimeObject = async () => {
    const time = await fetchTime();
    const { datetime } = time;
    const arrayOf = datetime.split(/-|T|:/);
    const [year, month, day, hour, minutes, seconds] = arrayOf;
    return {
        day,
        month,
        year,
        hour,
        minutes,
        seconds,
    }
}


const createLiveTimer = async () => {
    const timeObject = await createTimeObject();
    const clock = document.querySelector('#actual-time');
    const actualDate = new Date(timeObject.year, timeObject.month, timeObject.day, timeObject.hour, timeObject.minutes, timeObject.seconds.split('.')[0]);
    clock.innerHTML = actualDate;
}


// const actualDate = new Date(year, month, day, hour, minute, seconds);



window.onload = () => {
    setInterval(createLiveTimer, 1000);
    
}

