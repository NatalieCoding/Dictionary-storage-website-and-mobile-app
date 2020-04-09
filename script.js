//give user alert 
alert("Do you want to learn new words?");
//make search... disappear when clicked on
function active()
{
	var searchBar = document.getElementById("searchBar");
	if(searchBar.value == "search...")
	{
		searchBar.value = ""
		searchBar.placeholder = "search..."
	}
}

//make search... return when value is empty 
function inactive()
{
	var searchBar = document.getElementById("searchBar");
	if(searchBar.value == "")
	{
		searchBar.value = "search..."
		searchBar.placeholder = ""
	}
}
