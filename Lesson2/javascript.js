/* document.addEventListener("DOMContentLoaded",
function(event){
  alert("Page has been loaded")
})

document.getElementById("div1").addEventListener("mouseover",
function(event){
  event.target.style.backgroundColor = "0000FF";
})

var button1 = document.getElementById("button1");
button1.addEventListener("click", function(event){

  target= event.target
  alert(target.innerHTML)
});
*/

var form = document.getElementById("form")
form.addEventListener("submit", function(event){
  event.preventDefault()
  var textinput = form.elements[0]
  alert(textinput.value)
})
