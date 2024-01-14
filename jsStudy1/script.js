
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event)
{
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 아래와 같음
    // greeting.innerText = "hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //#region 개발자가 직접 경고창을 띄우는 방법
    /*
    if(username == "")
    {
        alert("Please write your name");
    }
    else if(username.length > 15)
    {
        alert("Your name is too long")
    }
    */
   //#endregion
}

function handleLinkClick(event)
{
    event.preventDefault();
    console.log(event);
    console.dir(event);
    alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);