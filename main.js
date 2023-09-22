import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.guess()

const location = document.querySelector('#location');
const time = document.querySelector('#time');
const date = document.querySelector('#date');

const currentDate = dayjs();
const formattedTime = currentDate.format('HH:mm:ss');

const currentLocation = dayjs.tz.guess();

// const test = dayjs();
const formattedDate = currentDate.format('dddd, DD MMMM, YYYY');

location.innerHTML = currentLocation;
time.innerHTML = formattedTime;
date.innerHTML = formattedDate;

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// const dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format()



// document.querySelector('#app').innerHTML = formattedDate;

// document.querySelector('#app').innerHTML = `
//   <div>
//     <p></p>
//     <h1>dayjs Time!</h1>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `