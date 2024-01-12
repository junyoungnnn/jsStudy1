// 둘이 같음
// const title = document.getElementById("title");
// const title = document.querySelector("#hello title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

const divName = document.getElementsByTagName("h1");

console.log(divName);

// 클레스 이름에 해당 하는것을 모두 넘겨줌.
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// css스타일. 클래스이름에 해당하는 <hi>을 넘겨줌
// "."은 클래스 이름. 

// css스타일 컬러에 접근하여 색상 변경하기
// const title = document.querySelector(".hello:first-child h1");

// console.dir(title);

// title.style.color = "blue";

const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick()
{
    console.log("title was clicked");
    h1.style.color = "blue";
}

function handleMouseEnter()
{
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave()
{
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize()
{
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy()
{
    alert("copier!")
}

function handleWindowOffline()
{
    alert("SOS no WIFI");
}

function handleWindowOnline()
{
    alert("ALL GOOD!");
}

document.body.style.backgroundColor = "beige";

// 마우스 관련 함수
h1.addEventListener("click", handleTitleClick);
//h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave",handleMouseLeave);

// window 크기 변경 함수
window.addEventListener("resize", handleWindowResize);

// copy 감지 함수
window.addEventListener("copy", handleWindowCopy);

// 인터넷 연결 관련 함수
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
