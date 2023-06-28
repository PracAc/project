let logoPopBtn = $('.btn--add_logo');

logoPopBtn.on('click',function addLogo(){
    window.name = "AddLogoForm";
    
    let openWin_logo = "";
    let logoPopUrl = '/admin/admin_setPage/logoPop.html';
    let Popwidth = '600';
    let Popheight = '200';

    let popLeft = Math.ceil((window.screen.width - Popwidth)/2) ;
    let popTop = Math.ceil((window.screen.height - Popheight)/2) ;
    let popOption = 'width='+ Popwidth +', height='+ Popheight +',left='+ popLeft +',top='+ popTop +'  toolbar=no, scrollbars=no, resizeable=no, status=no';

    openWin_logo = window.open(logoPopUrl, '_blank', popOption);
});