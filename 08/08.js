document.addEventListener('DOMContentLoaded' , () => {
    //DOM 요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btAdd');
    const btDels = document.querySelectorAll('.btDel');
    const btChanges = document.querySelectorAll('.btChange');

    //배열 만들기
    let arr = [];  // 안의 값이 계속 바뀔거기 때문에 let 사용 (const X)


    //오브젝트 만들기
    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉',
        '오이' : '🥒',
        '당근' : '🥕',
        '가지' : '🍆',
        '브로콜리' : '🥦'
    }
    //추가 버튼 
    for (let bt of btAdds){
        bt.addEventListener('click', ()=> {
            console.log(bt.textContent)

            // if (bt.textContent== '사과'){
            //     arr.push('🍎');
            // }
            // else if (bt.textContent == '바나나') {
            //     arr.push('🍌');
            // }
            // else if (bt.textContent == '오렌지') {
            //     arr.push('🍊');
            // }
            // else if (bt.textContent == '수박') {
            //     arr.push('🍉');
            // }
            // console.log(arr);

            arr.push(obj[bt.textContent]); // 위의 코드를 obj로 한방에 처리
            
            txt1.value = arr.join(' ')
            
        })
    }

    //삭제버튼
    for (let bt of btDels) {
        bt.addEventListener('click', () => {
            //arr에서 사과 삭제 = 사과가 아닌것만 추출함
            const btkey = bt.textContent.replace('삭제','');
            console.log(btkey) 

            // arr = arr.filter((item) => {return item != obj[btkey]});

            arr = arr.filter(item => item != obj[btkey]);
            console.log(arr)
            txt1.value = arr.join(' ')

        });
    };

    //변경버튼
    for (let bt of btChanges) {
        bt.addEventListener('click', ()=>{
            const w1 = bt.textContent.split('→')[0];
            const w2 = bt.textContent.split('→')[1];
            console.log(w1, w2)

            // arr = arr.map((item) => {return item == obj[w1] ? obj[w2] : item}); // map활용해서 바꿔치기
            arr = arr.map(item => item == obj[w1] ? obj[w2] : item); //콜백함수에 return 함수 생략함
            // item == obj 이면 obj[w2] 아니면 item
            console.log(arr)
            txt1.value = arr.join(' ') //배열에 추가
        });
    };
});