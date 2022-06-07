
// form section 
const age_calculate_form =document.getElementById('age_calculate_form');


// main div and result div 
const Result_box = document.querySelector('#result_box'); 
const Main =document.getElementById('main');


// age age_calculate_form

const c_name = document.querySelector('#name')
const birth_date = document.querySelector('#birth_date')
const present_date = document.querySelector('#present_date')
const msg = document.querySelector('.msg');

// result div section 
const name_res =document.querySelector('#name-res');
const birth_date_res =document.querySelector('#birth_date-res');
const present_date_res =document.querySelector('#present_date-res');
const Age =document.querySelector('#age');
const marriage =document.querySelector('#marriage');

// btn valu get scection
const Submit =document.querySelector('#btn')
const Reset =document.querySelector('#reset')
const Return = document.querySelector('#return');


// btn submition

Submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let M_age = Math.floor( (new Date(present_date.value)-new Date(birth_date.value))/(31556952000.00043));


   if(c_name.value == ''|| birth_date.value == '' || present_date.value == ''){
       msg.innerHTML = setAlert('All fields are Requird', 'danger')
   }else{
    msg.innerHTML = ``;

//form validation

   }
   if(c_name.value == ''|| birth_date.value == '' || present_date.value == ''){
    name_res.innerHTML = `${'Please Fill the Form'}`;
    present_date_res.innerHTML = ``
    Age.innerHTML = ``;
 
   }else{
        name_res.innerHTML = ` Hello, ${c_name.value}`;
        birth_date_res.innerHTML =`From: ${birth_date.value}`;
        present_date_res.innerHTML = `To :${present_date.value}`
        Age.innerHTML =  `Your Age is:${M_age}`;
        marriage.innerHTML = Marriage(M_age);
}

//calculator and result box toggle



   Main.classList.add('d-none');  
   Result_box.classList.remove('d-none');
})




//return to age calculator




Return.onclick=()=>{
    Main.classList.remove('d-none');
    c_name.value = '';
    birth_date.value = '';
    present_date.value = '';
    Result_box.classList.add('d-none');

}




//reset age calculator




Reset.onclick=()=>{
    c_name.value = '';
    birth_date.value = '';
    present_date.value = '';
}



