// file 경로 확인 커스텀
let btn_choice = $('.choiced__img');
let choiced_file = $('.file--upload');
btn_choice.on('change', function () {
    let selected_file = $(this).siblings(choiced_file);
    let file = $(this).val();
    selected_file.val(file);
    console.log(btn_choice.val());
});