function tx()
{
    let t1 = document.getElementById("it1");
    if(t1.value=="xm" || t1.value=="lsy")
    {
        alert(t1.value + " nb");
    }
    else if(t1.value=="dm" || t1.value=="lsc")
    {
        alert(t1.value + " sb");
    }
    else
    {
        alert(t1.value + "!");
    }
}

function fn()
{
    window.location.href = "https://dazidazi.com";
}
