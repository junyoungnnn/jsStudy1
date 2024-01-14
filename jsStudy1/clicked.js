const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick()
{
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
    //#region toggle과 같은 기능을 함
    /*
    if(h1.classList.contains(clickedClass))
    {
        h1.classList.remove(clickedClass);
    }
    else
    {
        h1.classList.add(clickedClass);
    }
    */
    //#endregion
}

h1.addEventListener("click", handleTitleClick);

/*
function handleTitleClick()
{
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor == "blue")
    {
        newColor = "tomato"
    }
    else
    {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
*/


