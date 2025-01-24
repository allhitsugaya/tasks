function toDoList() {
    const valueinput = $('input').val().trim();
    if (valueinput === '') return;

    const li = $('<li>').addClass('list-group-item d-flex align-items-center border-0 mb-2 rounded todolist');
    const input = $('<input>').addClass('form-check-input me-2').attr(`type`, `checkbox`);
    const btnSee = $('<button>').addClass('lol').text(`See more`);
    const btnRemove = $('<button>').addClass('btn btn-danger').text(`Remove`);
    $('.container').find('p').text(valueinput);
    li.prepend(input).append(valueinput).append(btnSee).append(btnRemove);
    $('.list-group').append(li);
}

$('input').on('input', function () {
    $('#btn').css("display", $(this).val().trim() !== '' ? 'block' : 'none');
});

$('#btn').on('click', function () {
    toDoList();
    $('input').val('');
});

$('.list-group').on('click', '.btn-danger', function () {
    $(this).closest('li').remove();
});

$('.list-group').on('change', '.form-check-input', function () {
    const li = $(this).closest('li').prop('checked') ? $(this).css("text-decoration", "line-through") : $(this).css("text-decoration", "none");
});

$('#btn1, #closer').on('click', function () {
    $('.container').css('display', 'none');
});

$('.list-group').on('click', '.lol', function () {
    $('.container').css('display', 'block').css('opacity', '1');
});



//const newDiv = $('<div>', {
//     id: 'myDiv',
//     class: 'container',
//     'data-info': 'example'
// });

