let All_chk = document.querySelector('.All_chkb');
let tg_chk = document.querySelectorAll('.tbb--chk input[type="checkbox"]');

All_chk.addEventListener('change', function(){
    tg_chk.forEach((tg_chk) => {
    tg_chk.checked = All_chk.checked
    });
});

tg_chk.forEach(function(chk){
    chk.addEventListener('change', function(){
        let checkedboxes = document.querySelectorAll('.tbb--chk input[type="checkbox"]:checked');
    if (tg_chk.length !== checkedboxes.length){
        All_chk.checked = false;
    } else if (tg_chk.length === checkedboxes.length){
        All_chk.checked = true;
    }
    });
});
