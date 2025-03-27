document.addEventListener('DOMContentLoaded',()=>{
    const username=document.getElementById('username');
    const password=document.getElementById('password');
    const formElement=document.querySelector('form');
    const passwordpattern=/^[0-9]/;
    const usernamepattern=/^[a-zA-Z0-9._%+-]/;
    formElement.addEventListener('click',e=>{
        e.preventDefault();
        if(isNaN(username)||isNaN(password)){
            const error=document.querySelector('.error');
            error.classList.remove('hidden');
        }
        else{
            const succes=document.querySelector('.success');
            succes.classList.remove('hidden')
        }
        if(username.value.trim()===""||!usernamepattern.test(username.value)||password.value.trim()===""||!passwordpattern.test(password.value)){
            const error=document.querySelector('.error');
            error.classList.remove('hidden');
        }
        else{
            const succes=document.querySelector('.success');
            succes.classList.remove('hidden')
        }
        formElement.submit();
    })
});