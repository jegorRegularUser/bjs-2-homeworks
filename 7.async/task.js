class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, action) {
        if (time == undefined || action == undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        } else
            if (this.alarmCollection.some(el => el.time === time && el.action === action)) {
                console.warn('Уже присутствует звонок на это же время')
            } else
                this.alarmCollection.push({ 'callback': action, 'time': time, 'canCall': true })

    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(el => el.time !== time)
    }
    getCurrentFormattedTime() {
        return new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes().toString()
    }
    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);

    }
    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }
    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => {
            alarm.canCall = true;
        });
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}