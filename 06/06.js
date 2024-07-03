// 업댜운게임

// 2. 확인 버튼 처리
//     - 확인 버튼 내용이 '획인' 아니면 초기화 처리
//     - 랜덤 수 생성 (초기화 전까지 한번만 생성이 되게) => flag 변수
//     - 텍스트박스 안 숫자와 비교 : 크면 -> 다운 같으면 -> 성공 작으면 -> 업
//     - 비교 후 이미지 변경
// 3. 성공하면 
//     - 텍스트 박스를 숨김
//     - 버튼의 글자를 변경 

// 4. 초기화
//     - 이미지는 what으로
//     - 텍스트 상자가 보이게
//     - 버튼 이름이 확인으로
//     - 랜덤 변수가 생성 될 수 있도록 => flag 변수

document.addEventListener('DOMContentLoaded' , () => {
    // 1. DOM 요소 가져오기 
    const img = document.querySelector('img') //태그 셀렉터
    const txt1 = document.querySelector('input[type=number]'); //속성 셀렉터
    const btok = document.querySelector('#btok') //아이디 셀렉터
    const btcancel = document.querySelector('button[type=reset]')

    //랜덤수 생성 제어 변수
    let flag = true; // true이면 랜덤수 생성 가능, flase이면 랜덤수 생성 불가

    //랜덤수
    let n = 0;

    const init = () => {
        img.setAttribute('src', './img/what.png')
        txt1.value = '';
        txt1.style.display = 'inline';
        btok.textContent = '확인';
        btcancel.style.display = 'inline'
        flag = true;
    }

    btok.addEventListener('click', (e)=> {
        e.preventDefault();

        //확인 버튼이 아닌 경우 초기화 
        if(btok.textContent !== '확인'){
            init();
            return;
        }
        if (flag){
            n = Math.floor( Math.random() * 100 ) + 1; // 1~100 랜덤수 생성
            console.log(n)
            flag = false; 
        }
        //숫자 입력 확인
        if (txt1.value == '' ) {
            alert('숫자를 입력하세요.');
            txt1.focus();
            return;
        }

        // 비교
        let usern = parseInt(txt1.value); // 사용자 입력수
        if (n > usern) { //up
            img.setAttribute('src', './img/up.png')
        }
        else if (n < usern) { //down
            img.setAttribute('src', './img/down.png')
        }
        else { //성공
            img.setAttribute('src', './img/good.png')
            txt1.style.display = 'none';
            btok.textContent ='숫자를 다시 입력하세요'
            btcancel.style.display = 'none';
        }
    })

    
});