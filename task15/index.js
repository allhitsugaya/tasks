const input = document.querySelector('.form__input');
const btn = document.querySelector('.form__btn');
let task = [];
const list = document.getElementById('todos-list');
if (localStorage.getItem(`task`)) task = task.concat(JSON.parse(localStorage.getItem(`task`)));

window.addEventListener(`storage`, (e) => {
    if (e.key === 'task') {
        console.log(JSON.parse(e.newValue));
    }
});

function createEl({ type = 'div', content, attributes } = {}) {
    const $el = document.createElement(type);
    if (content) {
        if (typeof content === 'string') {
            $el.textContent = content;
        } else if (content instanceof HTMLElement) {
            $el.append(content);
        }
    }
    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            $el.setAttribute(key, value);
        });
    }
    if (attributes.class) {
        $el.className = attributes.class;
    }
    return $el;
}

function toDoList(taskObj) {
    const checkbox = createEl({ type: 'input', attributes: { type: 'checkbox' } });
    checkbox.checked = taskObj.checked;
    const span = createEl({ type: 'span', content: taskObj.text, attributes: { class: 'todo-item__description' } });
    const li = createEl({ type: 'li', content: checkbox, attributes: { class: 'todo-item' } });
    if (taskObj.checked) {
        li.classList.add('todo-item--checked');
    }
    li.append(span);
    const button = createEl({ type: 'button', content: 'Remove', attributes: { class: 'todo-item__delete' } });
    button.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
        task = task.filter(t => t.text !== taskObj.text);
        localStorage.setItem('task', JSON.stringify(task));
    });

    li.append(button);
    list.append(li);

    checkbox.addEventListener('change', () => {
        taskObj.checked = checkbox.checked;
        li.classList.toggle('todo-item--checked', checkbox.checked);
        localStorage.setItem('task', JSON.stringify(task));
    });
}
    if (task.length) {
        task.forEach(taskObj => {
            toDoList(taskObj);
        });
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let taskValue = input.value.trim()
    if (taskValue === ``) {
        alert(`Please enter a task!`);
        return;
    }
    const newTask = {text: taskValue, checked: false};
    toDoList(newTask);
    task.push(newTask);
    input.value = "";
    localStorage.setItem('task', JSON.stringify(task));
});

list.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const li = e.target.closest("li");
        const isChecked = e.target.checked;
        const taskDescription = li.querySelector('.todo-item__description').textContent;
        const taskIndex = task.findIndex(t => t.text === taskDescription);
        if (taskIndex !== -1) {
            task[taskIndex].checked = isChecked;
            localStorage.setItem('task', JSON.stringify(task));
        }
        li.classList.toggle('todo-item--checked', isChecked);
    }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-item__delete")) {
        const li = e.target.closest("li");
        const taskDescription = li.querySelector('.todo-item__description').textContent;
        task = task.filter(t => t.text !== taskDescription);
        localStorage.setItem('task', JSON.stringify(task));
        li.remove();
    }
});

