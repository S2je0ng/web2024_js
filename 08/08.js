document.addEventListener('DOMContentLoaded' , () => {
    //DOM 요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btAdd');
    const btDels = document.querySelectorAll('.btDel');

    //배열 만들기
    let arr = [];  // 안의 값이 계속 바뀔거기 때문에 let 사용 (const X)


    //오브젝트 만들기
    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉'
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

            arr.push(obj[bt.textContent]);
            
            txt1.value = arr.join(' ')
            
        })
    }

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
});