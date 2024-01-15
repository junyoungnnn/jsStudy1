const link = document.querySelector("a");

function handleLinkClick(event)
{
    event.preventDefault();
    console.log(event);
    console.dir(event);
    alert("clicked");
}

link.addEventListener("click", handleLinkClick);

/*
    <form>
        <a href="https://nomadcoders.co">Go to courses</a>
    </form>
*/

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