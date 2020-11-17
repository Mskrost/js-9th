var count = 0;

$('#increase').click(() => {
    count++;
    $('#counter').html(count);
});

$('#decrease').click(() => {
    count--;
    $('#counter').html(count);
});