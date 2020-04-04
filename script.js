<script src="p5.js"></script>

var unirest = require("unirest");

var req = unirest("GET", "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf");

req.headers({
	"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
	"x-rapidapi-key": "hhjqwm09form4unf0uttxmltra3vpnwtntrj3zi008sxl5mhr"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

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
