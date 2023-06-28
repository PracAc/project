function pay(){
    let paymentUrl = '/subpage/pay.html';
    let paysize = '600';

    let payleft = Math.ceil((window.screen.width - paysize)/2) ;
    let paytop = Math.ceil((window.screen.height - paysize)/2) ;
    let payoption = 'width='+ paysize +', height='+ paysize +',left='+ payleft +',top='+ paytop +'  toolbar=no, scrollbars=no, resizeable=no, status=no';

    window.open(paymentUrl, '_blank', payoption)
}