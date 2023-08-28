const btn = document.querySelector(".btn");
const inputFilled = document.querySelector("input");
const ages = document.querySelector(".output");

function calculateAge(){
    // console.log("clicked");
    const inputUser = inputFilled.value
    
    if(inputUser == ''){
        alert("Please enter your age")
    }else{
        const age = getDate(inputUser);
    }
}

function getDate(inputvalue){
    const today = new Date();
    const userDate = new Date(inputvalue);

    const ageDate = today.getDate() - userDate.getDate()
    const ageMonth = today.getMonth() - userDate.getMonth()
    const ageYear = today.getFullYear() - userDate.getFullYear()
    

    ages.innerHTML = `your age is ${ageYear} Years ${ageMonth} Months ${ageDate} Day years old`
}

btn.addEventListener("click" , calculateAge)



