const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  init() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.getTimeComponents(time);
    }, 1000);
  }

 getTimeComponents(time) {
    const days =this.pad( Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer(
  '#timer-1',
  new Date('August 25, 2021 12:00:00')
);

timer.init();
