var checkbox = document.getElementById("petCheckbox");
var selectionDiv = document.getElementById("petSelection");
checkbox.addEventListener("change", function(event){
  if(checkbox.checked == true){
    selectionDiv.style.display="Block";
  }else{
    selectionDiv.style.display="None";
  }
});

var saveForm = document.getElementById("saveForm");
saveForm.addEventListener("submit", function(event){
  event.preventDefault();
  var nameText = saveForm.elements[0].value;
  var adressText = saveForm.elements[1].value;
  var ageText = saveForm.elements[2].value;
  var doesHavePets = saveForm[3].checked;
  var petText= "No pets";
  if(nameText == ""){
    alert("Please enter a name");
    return;
  }
  if(adressText == ""){
    alert("Please enter an adress");
    return;
  }
  if(ageText == ""){
    alert("Please enter an age");
    return;
  }
  if(doesHavePets){
    petText = saveForm.elements[4].value
  }
  if(petText == "Dog"){
    alert("Sorry, our dog capacity is full");
    return;
  }
  alert("Booking saved! Info: \n" + nameText + "\n" + adressText + "\n" + ageText + "\n" + petText);
})
