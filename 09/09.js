document.addEventListener('DOMContentLoaded', () => {
    //요소 가져오기
    const lotto = document.querySelector('#lotto');
    const bt = document.querySelector('#bt');

    //로또 번호 저장
    let arr = [];

    bt.addEventListener('click', () => {
        //배열 초기화;
        // arr = [];
        arr.length = 0;

        console.log(lotto.innerHTML)
        console.log(lotto.textContent)
        //로또 번호 생성
        while(arr.length < 7){
            const n = Math.floor(Math.random() * 45) + 1;
            if ( !arr.includes(n)) arr.push(n); // 랜덤숫자 n이 배열안에 없으면 n을 배열에 추가 (push)
        }

        //로또 번호 정렬
        arr.sort((a,b) => a-b) // 오름차순 정렬
        console.log(arr)

        let tm = arr.map(item => 
                                `<span class="sp${Math.floor(item / 10)}">
                                ${item}
                                </span>`);
                                //<span class='sp0'>1</span>  html에서 이런 식으로 넣으려고 한 것
                                // 10으로 나누는 이유는 1의 자리 배열은 0, 10의 자리 배열은 1, 20은 2,이렇게 4까지하려고 10으로 나눔 
                                // item은 arr안에 넣은 로또 번호 

                                // 랜덤 수나 나눗셈 할때 Math.floor로 감싸서 사용하기
                                 // `` backtic 은 문자열 안에 변수를 넣기 위해 사용하는 것임
                                 // `` 안 변수는 ${} 이렇게 해줘야함
        console.log(tm)

        //6번째 추가
        tm.splice(6,0, '<span id="spplus">+</span>') //배열에서 인덱스6 이 가르키는 값부터 아무값도 삭제하지 않고, '<span id="spplus">+</span>'을 추가
            // <span> 태그 인라인 컨테이너


        lotto.innerHTML = tm.join(''); //innerHTML 속성은 텍스트만 웹페이지에 적용함
        // lotto.textContent = tm.join(''); //textContent 속성은 텍스트 그대로 웹페이지에 적용 ex) <span> 요런 거 다 나옴
        
    });
});

// filter , map 언제 어떻게 쓸건지 생각하기

// map은 배열을 하나하나 순회하면서 배열의 내용을 수정하는 것