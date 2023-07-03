const naverIdLogin = new naver.LoginWithNaverId(
    {
     clientId: "sG_14o2i0pfwTeGUBLkK",
     callbackUrl: "http://127.0.0.1:5501/index.html",
     loginButton: {color: "green", type: 2, height: 40},
     // isPopup : true
     }
    );
 
 
     naverIdLogin.init();
     naverIdLogin.getLoginStatus(function (status) {
       if (status) {
           const Nname=naverIdLogin.user.getName();
           const Nage = naverIdLogin.user.getAge();
           const Nbirthday=naverIdLogin.user.getBirthday();
           const Nemail=naverIdLogin.user.getEmail();
 
           if(Nname===null||Nname===undefined ){
             alert("이름이 필요합니다. 정보제공을 동의해주세요.");
             naverIdLogin.reprompt();
             return ;
          }else{
           setLoginStatus();
          }
     }
     });
     console.log(naverIdLogin);
     console.log(naverIdLogin.accessToken.accessToken)
 
     function setLoginStatus(){
 
       let user_name = document.querySelector('.user_name');
       user_name.value=`${naverIdLogin.user.name}님`;
 
       let btnLgout=document.querySelector('.btn--lgout');
       btnLgout.classList.add('on');

      //  let Nxhr = new XMLHttpRequest()
      //  let token = naverIdLogin.accessToken.accessToken
      // //  let logout = 'https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=sG_14o2i0pfwTeGUBLkK&client_secret=XKFMJX0A3V&access_token=88a08e33-4960-4727-9fa4-7409c7d0b355&service_provider=NAVER'
      // //  naverIdLogin.logout('https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=sG_14o2i0pfwTeGUBLkK&client_secret=XKFMJX0A3V&access_token=88a08e33-4960-4727-9fa4-7409c7d0b355&service_provider=NAVER');
      //  Nxhr.open('GET',logout)
      //  Nxhr.send()

       btnLgout.addEventListener('click',()=>{
           // https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id={클라이언트 아이디}&client_secret={클라이언트 시크릿}&access_token={접근 토큰}&service_provider=NAVER
          //  naverIdLogin.logout();
           naverIdLogin.logout('http://nid.naver.com/nidlogin.logout');
           location.replace("http://127.0.0.1:5501/index.html");
           btnLgout.classList.remove('on');
       })   
       let lgPopBtn = document.querySelector('.btn--logPop')
       lgPopBtn.style.display = 'none';
     }