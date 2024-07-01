//사용자와 컴퓨터 랜덤수 생성

// 1. DOM 생성 되면 Image, button 요소를 가져오기
document.addEventListener('DOMContentLoaded', () => {
    //Image, button 요소를 가져오기
    const imgCom = document.querySelector('#com')
    const imgUser = document.querySelector('#user')
    const bts = document.querySelectorAll('#divContent button')
    const msg = document.querySelector('#msg');

    console.log(bts);

    // 2. button이 클릭 되는 경우 찾아야 함
    for(let bt of bts) {
        bt.addEventListener('click', () => {
            //랜덤수 발생 1~6 까지
            const nCom = Math.floor(Math.random() * 6) + 1;
    
            //user 숫자 : 문자를 숫자로 변환
            const nUser = parseInt(bt.textContent.charAt(0));
            console.log('nUser', nUser);
    
            //3.img src 속성 변경
            // dom 바꾸기 위한 문법 setAttribute
            // `` backtic 문자열 사용함 이 안에 문자열 나열
            imgCom.setAttribute('src', `./img/${nCom}.png`);
            imgUser.setAttribute('src', `./img/${nUser}.png`);

            //4. 숫자 비교
            if (nCom === nUser) {
                msg.innerHTML = '<h1 id="msgRed">맞음</h1>';
            }
            else {
                msg.innerHTML = '<h1 id="msgBlue">틀림</h1>';
            }
        });
    }
});