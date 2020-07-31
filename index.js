const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  timeDiff() {
    let time = null;
    time = this.targetDate - Date.now();
    this.updateClockface(time);
  }

  reverseTimer() {
    this.timeDiff();
    setInterval(() => {
      this.timeDiff();
    }, 1000);
  }
}
const reverse = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 09, 2020'),
});

function pad(value) {
  return String(value).padStart(2, '0');
}
reverse.reverseTimer();
