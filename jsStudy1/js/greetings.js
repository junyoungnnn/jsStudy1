
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event)
{
    event.preventDefault(); // 지속적인 자동 제출을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); // 더이상 보이지 않게 함
    const username = loginInput.value; // 입력받은 값 저장
    localStorage.setItem(USERNAME_KEY, username); // db에 key-value 저장
    paintGreetings(username);
}

function paintGreetings(username)
{
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // 화면에 표시
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername == null) // db에 저장된 값이 없으면
{
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else // db에 저장된 값이 있으면
{
    // show the greetings
    paintGreetings(savedUsername);
}    