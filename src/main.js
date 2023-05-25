import './style.css';
import { createLiveTimer } from './components';

window.onload = () => {
  setInterval(createLiveTimer, 1000);
};
