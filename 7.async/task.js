class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = 0;
    };

    addClock (time, callback) {
        if (time == undefined || callback == undefined) {
            throw new Error ('Отсутствуют обязательные аргументы');
        };

        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time === time) {
                console.warn('Уже присутствует звонок на это же время')
            };
        };

        this.alarmCollection.push({time, callback, canCall: true});
    };

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    };

    getCurrentFormattedTime() {
        let now  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
        return now;
    };

    start() {
        if (this.intervalId) {
            return;
        };
        
        this.intervalId = setInterval(() => 
            this.alarmCollection.forEach((alarm) => {
                if (alarm.canCall == true && alarm.time === this.getCurrentFormattedTime()) {
                    alarm.canCall = false;
                    alarm.callback();
                };
            }
        ), 1000);
    };

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};