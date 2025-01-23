function toDoList() {
    const valueinput = $('input').val().trim();
    if (valueinput === ``) return;
    const li = createEl({type: "li" , content: `${$("input").val()}` , attributes: { class: 'list-group-item'}});
    const btn = createEl({type: "button" , content: `Remove` , attributes: {class: 'btn btn-danger'}});
    li.append(btn);
    $('.list-group').append(li);
}

function createEl({ type = 'div', content, attributes  } = {}) {
    const $el = document.createElement(type);

    if (content) {
        typeof content === 'string' ? $el.textContent = content : $el.append(content)
    }

    if (attributes) Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value)
    })

    return $el;
}
$('input').on('input', function () {
    if ($(this).val().trim() !== '') {
        $('#btn').css("display", "block");
    }
    else{
        $('#btn').css("display", "none");
    }
});
$('#btn').on(`click`,function (){
    toDoList();
    $('input').val('');
});

$('.list-group').on('click', '.btn-danger', function() {
    $(this).closest("li").remove();
});


$('#btn1').on('click', function() {
    $('.container').css("display", "none");
    const btnSee = createEl({ content: `See now`, type: "button", attributes:{id:`lol` , class: 'btn-success'} });
    $(`body`).append(btnSee);
    $('#lol').on(`click`, function (){
        $(`.container`).css("display", "block");
        $(`#lol`).remove();
    });
});
$('#closer').on('click', function (){
    $('.container').css("display", "none");
    const btnSee = createEl({ content: `See now`, type: "button", attributes:{id:`lol` , class: 'btn-success'} });
    $(`body`).append(btnSee);
    $('#lol').on(`click`, function (){
        $(`.container`).css("display", "block");
        $(`#lol`).remove();
    });
});



