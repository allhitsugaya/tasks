/* HW 8.1 - без проверки*/
let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;// підніматиме вас на одну сходинку
    },
    down: function () {
        this.step--;
        return this;// опускатиме вас на одну сходинку
    },
    showStep: function () {
        console.log(this.step);
        return this;// показує поточну сходинку
    }
};

ladder.up().up().down().showStep();//1 - що ми і маємо отримати. Тепер зроблю зе один код але х перевіркою аби ми не ходили нижче нуля.
/* HW 8.1 - с проверкой*/
let ladder1 = {
    step1: 0,
    up1: function () {
        this.step1++;
        return this;// підніматиме вас на одну сходинку
    },
    down1: function () {
        if (this.step1 <= 0) console.log("Нижче не спутишься!");
        else this.step1--; return this;// опускатиме вас на одну сходинку
    },
    showStep1: function () {
        console.log(this.step1);
        return this;// показує поточну сходинку
    },
};
ladder1.up1().down1().down1().showStep1();