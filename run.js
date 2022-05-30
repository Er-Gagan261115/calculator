function dis(a)
{
 document.getElementById('textinp').value+=a;
}
function ans()
{
    let x = document.getElementById("textinp").value;
    let y =  eval(x);
    document.getElementById('textinp').value = y;
}
function clr()
{
 document.getElementById('textinp').value = '';
}
