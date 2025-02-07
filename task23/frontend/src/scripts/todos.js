import $ from "jquery";
export class TodosManager {
    constructor(root) {
        this.root = root;
    }

    clearRoot() {
        this.root.empty();
    }

    renderData(data) {
        if (!data || !data.length) return;

        this.clearRoot();

        const $list = $("<ul>").addClass("list-group");

        data.forEach(({_id, title, description }) => {
            const $item = $("<li>")
                .addClass(
                    "list-group-item d-flex justify-content-between align-items-start",
                )
                .append(
                    $("<div>")
                        .addClass("ms-2 me-auto")
                        .text(description)
                        .prepend($("<div>").addClass("fw-bold").text(title)),
                )
              .append(
                $("<button>")
                  .addClass("btn btn-outline-danger")
                  .text("Delete")
                  .data("id", _id)
              );

            $list.append($item);
        });

        this.root.append($list);
    }

    renderError(message) {
        this.clearRoot();
        const errorMessage = $("<h2>")
            .text(`Ups... ${message}`)
            .css("color", "red");
        this.root.append(errorMessage);
    }

    renderLoader(status) {
        this.clearRoot();

        if (status === "loading") {
            const loader = $("<div>").addClass("lds-roller");
            for (let i = 0; i < 8; i++) {
                loader.append($("<div>"));
            }
            this.root.append(loader);
        } else {
            this.clearRoot();
        }
    }
}
