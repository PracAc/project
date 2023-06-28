let admin__menuBtn = document.querySelectorAll('.btn--admin__nav');
let admin__Menus = document.querySelectorAll('.admin--sub');
let admin__Updowns = document.querySelectorAll('.updown')

admin__menuBtn.forEach(function(button) {
    button.addEventListener('click', function() {

        let admin_menu_tg = button.getAttribute('aria-expanded') === 'true' || false;

        if (!admin_menu_tg) {
            closeAll_Admin_Menu();
            open_Admin_Menu(button);
            return false;
        } else {
            closeAll_Admin_Menu();            
            return false;
        }
    });
});

function open_Admin_Menu(button) {

    button.setAttribute('aria-expanded', 'true');
    let admin__Menus = button.nextElementSibling;
    admin__Menus.classList.add('on');
    button.classList.remove('updown-on');
    button.classList.add('updown-off');
    button.classList.add('on');

    // button.admin__Updowns.text('keyboard_arrow_up')

}

function close_Admin_Menu(button){
    //console.log(button.getAttribute('aria-expanded'))
    button.setAttribute('aria-expanded', 'false');
    let admin__Menus = button.nextElementSibling;
    admin__Menus.classList.remove('on');
    button.classList.add('updown-on');
    button.classList.remove('updown-off');
    button.classList.remove('on');
    // console.log(button.getAttribute('aria-expanded'))
}

function closeAll_Admin_Menu() {
    admin__menuBtn.forEach(function(button){
        let admin_menu_tg_on = button.getAttribute('aria-expanded') === 'true';
        if(admin_menu_tg_on) {
            close_Admin_Menu(button);
        };
    });
}