const timeToWork = document.querySelector('#timeToWork');

class HowTime {
    constructor(element) {
        this.element = element;
        this.date = new Date();
        this.hours = this.date.getHours();
        this.min = this.date.getMinutes();
        this.open = `Мы сейчас открыты, приходите :)`;
        this.close = `Мы сейчас закрыты, приходите завтра :)`;
        this.soonOpen = `Сейчас закрыты, откроемся через ${60 - this.min} минут`;
        this.soonClose = `Мы открыты, но закроемся через ${60 - this.min} минут`;
    }

    sayStatus() {

        if(this.hours > 10 && this.hours < 20) {

        this.element.innerHTML = this.open;
        this.element.classList.add('open');

        if(this.hours > 19 && this.hours < 20) {
            this.element.innerHTML = this.soonClose;
        }
        
            } else {
        this.element.innerHTML = this.close;
        this.element.classList.add('close')

        if(this.hours > 9 && this.hours < 10) {
            this.element.innerHTML = this.soonOpen;
        }
    
        }
    }
}

const workStatus = new HowTime(timeToWork);
workStatus.sayStatus()
