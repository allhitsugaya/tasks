const btn1 = document.getElementById("btn1");
const input = document.getElementById("in");
const ul = document.getElementById("todolist");
let task = ``;

function createEl({ type = 'div', content, attributes } = {}) {
    const $el = document.createElement(type);
    if (content) {
        if (typeof content === 'string') {
            $el.textContent = content;
        } else if (content instanceof HTMLElement) {
            $el.append(content);
        } else {
            console.error('Invalid content type:', content);
        }
    }
    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            $el.setAttribute(key, value);
        });
    }

    return $el;
}

function toDoList() {
    const li = createEl({ type: 'li', content: task });
    const button = createEl({type: 'button', content: 'Remove', attributes: { class: 'remove-btn' }
    });
    li.append(button);
    ul.append(li);
}

btn1.addEventListener('click', () => {
    task = input.value;
    if (task === "") {
        alert(`Please enter a task!`);
        return;
    }
    toDoList();
    input.value = "";
});

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const li = e.target.closest("li");
        li.remove();
    }
});
