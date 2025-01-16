class CountersViewManager {
    createEl({ type = "div", content, attributes } = {}) {
        const $el = document.createElement(type);

        if (content) {
            typeof content === "string"
                ? ($el.textContent = content)
                : $el.append(content);
        }

        if (attributes)
            Object.entries(attributes).forEach(([key, value]) => {
                $el.setAttribute(key, value);
            });

        return $el;
    }

    clearContent(container, flag) {
        if (!container && container.nodeType !== 1) return;

        while (container.firstElementChild) {
            container.firstElementChild.remove();
        }

        if (flag) container.remove();
    }

    createCounterBox(id) {
        const container = this.createEl({ attributes: { "data-counter": id } });
        const btnContainer = this.createEl({});
        const content = this.createEl({ type: "p", content: "00:01:25" });
        const stopBtn = this.createEl({
            type: "button",
            content: "stop",
            attributes: { "data-stop": id },
        });
        const startBtn = this.createEl({
            type: "button",
            content: "start",
            attributes: { "data-start": id },
        });
        const deleteBtn = this.createEl({
            type: "button",
            content: "delete",
            attributes: { "data-delete": id },
        });

        btnContainer.insertAdjacentElement("beforeend", stopBtn);
        btnContainer.insertAdjacentElement("beforeend", startBtn);
        btnContainer.insertAdjacentElement("beforeend", deleteBtn);

        container.insertAdjacentElement("beforeend", content);
        container.insertAdjacentElement("beforeend", btnContainer);

        return container;
    }
}

const secToTime = (count) => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

class Counter extends CountersViewManager {
    constructor(root) {
        super();
        this.counters = [];
        this.root = root;
        this.container = null;
    }

    initCounter() {
        const timerId = JSON.stringify(Math.random());
        const timerBox = this.createCounterBox(timerId);
        let count = prompt("Enter the number of seconds:", 85);
        count = Number(count);
        if (isNaN(count) || count <= 0) {
            alert("Please enter a valid number of seconds.");
            return;
        }
        const intervalId = null;
        this.counters.push({
            timerId,
            intervalId,
            count,
            timerBox,
            status: 'stopped',
        });

        this.container.insertAdjacentElement("beforeend", timerBox);
        return timerId;
    }

    stopCounter(timerId) {
        const timer = this.counters.find((timer) => timer.timerId === timerId);
        if (timer && timer.intervalId) {
            clearInterval(timer.intervalId);
            timer.status = 'stopped';
        }
    }

    startCounter(timerId) {
        const timer = this.counters.find((timer) => timer.timerId === timerId);
        if (timer && timer.status !== 'running') {
            timer.status = 'running';
            timer.intervalId = setInterval(() => {
                if (timer.count <= 0) {
                    clearInterval(timer.intervalId);
                    timer.status = 'stopped';
                    alert('Time is over!');
                } else {
                    timer.count--;
                    const time = secToTime(timer.count);
                    timer.timerBox.firstElementChild.textContent = time;
                }
            }, 1000);
        }
    }

    deleteCounter(timerId) {
        const timer = this.counters.find((timer) => timer.timerId === timerId);
        if (timer) {
            clearInterval(timer.intervalId);
            this.counters = this.counters.filter(
                ({ timerId }) => timerId !== timer.timerId,
            );
            this.clearContent(timer.timerBox, true);
        }
    }

    init() {
        const createBtn = this.createEl({
            content: this.createEl({
                type: "button",
                content: "Create counter",
            }),
        });
        const counterContainer = this.createEl({
            content: createBtn,
            attributes: {
                id: "counters",
            },
        });
        this.container = counterContainer;

        createBtn.addEventListener("click", () => {
            this.initCounter();
        });

        counterContainer.addEventListener("click", (e) => {
            const el = e.target;
            const dataAttributes = el.dataset;
            switch (true) {
                case "stop" in dataAttributes: {
                    this.stopCounter(dataAttributes.stop);
                    break;
                }
                case "start" in dataAttributes: {
                    this.startCounter(dataAttributes.start);
                    break;
                }
                case "delete" in dataAttributes: {
                    this.deleteCounter(dataAttributes.delete);
                    break;
                }
                default: {
                    console.log("default", e.target.dataset);
                }
            }
        });

        this.root.insertAdjacentElement("beforeend", counterContainer);
    }
}

new Counter(document.body).init();
