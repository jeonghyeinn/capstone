function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
        const randomPosition = Math.floor(Math.random() * (index + 1));
        // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
        const temporary = array[index];
        array[index] = array[randomPosition];
        array[randomPosition] = temporary;
        }
    return array
    }
let number=[0,1,2,3,4,5,6,7,8,9];
let random_num=shuffle(number);

document.write('<body class="flex">');
document.write('<div class="numPan">');
document.write('<div class="disp">');
document.write('<input type="text">');
document.write('</div>');
document.write('<div class="nums">');
document.write('<div class="flex r r1">');
document.write('<div><span>'+random_num[0]+'</span></div>');
document.write('<div><span>'+random_num[1]+'</span></div>');
document.write('<div><span>'+random_num[2]+'</span></div>');
document.write('</div>');
document.write('<div class="flex r r2">');
document.write('<div><span>'+random_num[3]+'</span></div>');
document.write('<div><span>'+random_num[4]+'</span></div>');
document.write('<div><span>'+random_num[5]+'</span></div>');
document.write('</div>');
document.write('<div class="flex r r3">');
document.write('<div><span>'+random_num[6]+'</span></div>');
document.write('<div><span>'+random_num[7]+'</span></div>');
document.write('<div><span>'+random_num[8]+'</span></div>');
document.write('</div>');
document.write('<div class="flex r r4">');
document.write('<div><span>&#8592</span></div>');
document.write('<div><span>'+random_num[9]+'</span></div>');
document.write('<div><span>&#8626</span></div>');
document.write('</div>');
document.write('</div>');
document.write('</div>');

let pw_arr =[2204723];
let input_pw =[];
let output_pw=[];
let btn=document.querySelectorAll(".r > div");
let inp=document.querySelector("input");
// btn.forEach(val => {
//     val.addEventListener("click",()=>{
//         if(val.innerText.charCodeAt() != 8592 || val.innerText.charCodeAt() == 8626) {
//             inp.value+=val.innerText;
//             input_pw.push(val.innerText);
//             // console.log(input_pw);
//             }
//         if(val.innerText.charCodeAt() == 8592){
//             inp.value=inp.value.substring(0,inp.value.length-1)
//             input_pw.pop();
//             }
//         if(val.innerText.charCodeAt() == 8626){
//             inp.value=inp.value.substring(0,0)
//             input_pw.pop();
//             console.log(input_pw);
//             output_pw = input_pw.join("");
//             input_pw.splice(0,input_pw.length);
//             }
//     })
// });
