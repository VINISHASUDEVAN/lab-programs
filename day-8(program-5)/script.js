let result = document.getElementById("res")
function handleBox()
{
    let para = document.getElementById("text").value
    let wordCount=para.split(" ").length
    let charCount=para.split("").length
    result.innerHTML=`<h1>TOTAL WORD COUNT:${ wordCount}</h1>
                   <h1>TOTAL CHARACTER COUNT:${ charCount}</h1>`
                   
}
document.addEventListener("keyup",handleBox)