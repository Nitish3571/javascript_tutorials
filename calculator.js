const btn = document.querySelectorAll('button');
const inputVal = document.querySelector("input");

let string ='';
let arr = Array.from(btn);
btn.forEach(function (button){
    // console.log(button);
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            // console.log(string);
            inputVal.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            inputVal.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string  =string.substring(0 , string.length-1);
            inputVal.value = string;
        }
        else{
        string +=e.target.innerHTML;
        inputVal.value = string;
         }

    })

})