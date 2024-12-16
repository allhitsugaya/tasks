
function ButtonHandlers(el) {
    this.id1 = (e) => {
        alert(`button 1 clicked!`);
    }

    this.id2 = (e) => {
        alert(`button 2 clicked!`);
    }

    this.id3 = (e) => {
        alert(`button 3 clicked!`);
    }

    this.onClick = (e) => {
        const action = e.target.id;

        if (action) this[action](e)
    }

    el.onclick = this.onClick.bind(this)
}

const container = document.getElementById("parent");
new ButtonHandlers(container);

