import $ from "jquery";
import { TodosManager } from "./scripts/todos.js";
import { TodoAPI } from "./api/todos.js";
import "./styles/config.scss";

const $form = $("form");
const $contentContainer = $("[data-content]");

const view = new TodosManager($contentContainer);

$(document).ready(fetchTodos);

$form.on("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  const title = e.currentTarget.elements.todo.value.trim();
  const description = e.currentTarget.elements.description.value.trim();

  if (!title) return;

  const data = new TodoAPI(title, description);

  await TodoAPI.save(process.env.BASE_SERVICE_URL, data).then(() => {
    fetchTodos();
  }).catch((e) => {
    fetchErrorHandler(e);
  });
}

$contentContainer.on("click", ".btn-outline-danger", async function () {
  const todoId = $(this).data("id");

  if (!todoId) {
    console.error("ID not found");
    return;
  }

  await TodoAPI.delete(process.env.BASE_SERVICE_URL, todoId)
    .then(() => fetchTodos())
    .catch(fetchErrorHandler);
});

$contentContainer.on("click", ".btn-outline-success", async function () {
  const todoId = $(this).data("id");

  if (!todoId) {
    console.error("ID not found");
    return;
  }

  await TodoAPI.update(process.env.BASE_SERVICE_URL, todoId)
    .then(() => fetchTodos())
    .catch(fetchErrorHandler);
});


function fetchTodos() {
  view.renderLoader("loading");

  TodoAPI.getAll(process.env.BASE_SERVICE_URL)
    .then((todos) => {
      view.renderData(todos);
    })
    .catch((e) => {
      fetchErrorHandler(e);
    });
}

function fetchErrorHandler(e) {
  view.renderLoader("error");
  view.renderError(e.message);
}
