const timeToWork = document.querySelector('#timeToWork');

class HowTime {
    constructor(element) {
        this.element = element;
        this.date = new Date();
        this.hours = this.date.getHours();
        this.min = this.date.getMinutes();
        this.open = `сейчас открыты, приходите :)`;
        this.close = `сейчас закрыты, приходите завтра :)`;
        this.soonOpen = `cейчас закрыты, откроемся через ${60 - this.min} минут`;
        this.soonClose = `открыты, но закроемся через ${60 - this.min} минут`;
    }

    sayStatus() {

        if(this.hours > 11 && this.hours < 22) {

        this.element.innerHTML = this.open;
        this.element.classList.add('open');

        if(this.hours > 21 && this.hours < 22) {
            this.element.innerHTML = this.soonClose;
        }
            } else {
        this.element.innerHTML = this.close;
        this.element.classList.add('close')

        if(this.hours > 10 && this.hours < 11) {
            this.element.innerHTML = this.soonOpen;
            }
        }
    }
}

const workStatus = new HowTime(timeToWork);
workStatus.sayStatus()
