const baseURL = 'http://localhost:4321'
const signUp2 = document.querySelector('#sign-up')

const emailInput = document.querySelector(".email-sign-up")

const footer = document.querySelector("footer")
const form = document.querySelector('#signup-form');

const signUp = (event) =>{
event.preventDefault()
const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');



const email = emailInput.value;
const username = usernameInput.value;
const password = passwordInput.value;

const formObj = { 
    email: email, 
    username: username, 
    password: password };
    
    axios.post(`${baseURL}/signUp`, formObj)
    .then((res) =>{
        
        console.log(res.data)
        emailInput.value= '';
        usernameInput.value= '';
        passwordInput.value= '';
        
        const signUpDiv = document.querySelector('.signUpSuccess')
        signUpDiv.innerHTML ='<p class="signUpMessage"> Sign up Succeful!</p>';
        setTimeout(()=> {
            signUpDiv.innerHTML='';

        },1500)
    })
    .catch((err) =>{
        console.log(err)
    })

}
//--------------------------------------------login-----------------------------------------------
const loginBtn = document.querySelector('.loginBtn');

const login = (event) =>{
    event.preventDefault();
    const loginUsername = document.querySelector('#userLogin');
    const loginPassword = document.querySelector('#loginPassword');

    axios.post(`${baseURL}/login`,{
        username:loginUsername.value,
        password:loginPassword.value
    }).then(res =>{
        console.log(res.data)

        
        
        const loginDiv = document.querySelector('.loginSuccess');
        loginDiv.innerHTML = `<p class="loginMessage"> Welcome ${loginUsername.value}</p>`;
        setTimeout(()=> {
            loginDiv.innerHTML = '';
        }, 1500)
        
        loginUsername.value = '';
        loginPassword.value = '';
        
        
        
        
    }).catch(err => {
        
        console.log(err);
        
        const loginFailDiv = document.querySelector('.loginFailed');
    })

}

const emailHandler = () =>{
    let confirmation = document.createElement('p')
    confirmation.classList.add('confirm');
    confirmation.textContent = "congrats welcome to the fam!"
    emailInput.remove()
    footer.appendChild(confirmation);
}

signUp2.addEventListener('click', emailHandler)
loginBtn.addEventListener('click',login)
form.addEventListener('submit', signUp)
