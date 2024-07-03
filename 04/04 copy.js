// 1. DOM 생성 되면 Image, button 요소를 가져오기
// 2. button이 클릭 되는 경우 찾아야 함
// 3. img src 속성을 변경
//     - random 수 발생 -> 해당하는 랜덤수의 이미지를 가져오기

// 1. DOM 생성 되면 Image, button 요소를 가져오기

document.addEventListener('DOMContentLoaded', () => {
    //Image, button 요소를 가져오기
    const img = document.querySelector('#divContent img')
    const bt = document.querySelector('#divContent button')

    // 2. button이 클릭 되는 경우 찾아야 함
    bt.addEventListener('click', () => {
        //랜덤수 발생 1~6 까지
        const n = Math.floor(Math.random() * 6) + 1;
        console.log(`${n}.png`);

        //3.img src 속성 변경
        img.setAttribute('src', `./img/${n}.png`);
    });
});