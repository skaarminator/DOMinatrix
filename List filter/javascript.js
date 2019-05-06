var adventureList = [];
var adventures = document.getElementsByClassName("adventures");
for (var i = 0; i < adventures.length; i++) {
  adventureList.push(adventures[i].innerHTML);
}

var searchbar = document.getElementById("search-bar");
searchbar.addEventListener("keyup", function(event){
  var text = searchbar.value;
  for (var i = 0; i < adventureList.length; i++) {
    if(adventureList[i].indexOf(text) < 0 ){
      adventures[i].style.display = "None"
    }else{
      adventures[i].style.display="Block"
    }
  }
});
