alert("Do you like Backend? ;)");
 
//make search... disappear when clicked on
      function active(){
        var searchBar = document.getElementById("searchBar");
        if(searchBar.value == "search..."){
searchBar.value = ""
searchBar.placeholder = "search..."
        }
      }
//make search... return when value is empty 
   function inactive(){
        var searchBar = document.getElementById("searchBar");
        if(searchBar.value == ""){
searchBar.value = "search..."
searchBar.placeholder = ""
        }
      }
      //single line comment
      /*multi line 
      comment*/ 
      // the dictionary lookup object

      //experimenting below
var dict = {};
// do a jQuery Ajax request for the text dictionary
$.get ("dict/dict.txt", function (txt){
//get an array of all the words
var words = txt.split("\n");
//and add them as properties to the dictionary lookup
//this will allow for fast lookups later
for(var i = 0; i < words.length; i++) {
dict[words[i]] = true;
}
});
