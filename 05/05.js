const convert = (sel1, sel2, lb1, lb2) => {
    //섭씨 온도를 화씨로 변환
    if (sel1.value === '℃') {
        sel2.value = '℉';
        lb1.textContent = '℃';
        lb2.textContent = '℉';
    }
    //화씨 온도를 섭씨로 변환
    else {
        sel2.value = '℃';
        lb1.textContent = '℉';
        lb2.textContent = '℃';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // select box
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    // Input
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    // lable
    const lb1 = document.querySelector('#lb1');
    const lb2 = document.querySelector('#lb2');

    sel1.addEventListener('change', () => {
        convert = (sel1, sel2, lb1, lb2);
        if (txt1.value != '' && lb1.textContent=='℃') {
            txt2.value = (9 / 5) * txt1.value + 32;
        }
        else if (txt1.value != '' && lb1.textContent=='℉') {
            txt2.value = (5 / 9) * (txt1.value - 32);
        }
        // console.log(sel1.value);
    })
    sel2.addEventListener('change', () => {
        convert = (sel2, sel1, lb1, lb2);
        if (txt1.value != '' && lb1.textContent=='℃') {
            txt2.value = (9 / 5) * txt1.value + 32;
        }
        else if (txt1.value != '' && lb1.textContent=='℉') {
            txt2.value = (5 / 9) * (txt1.value - 32);
        }
    })
});