// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //print results
		searchInput = document.forms[0].search, //allow keywords to be found
		currentSearch = ''
		;

	// Validates search query
	var validate = function(query){ //validate search function

		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " ");{
			query = query.substring(1, query.length);
		}
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		}

		// Check search length, must have 3 characters
		if(query.length < 3){ //if person has less than 3 words alert "", else allow search
			alert("Your search query is too small, try again.");

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		}

		search(query);


		// Finds search matches
		var search = function(query) //search database for keywords

		// split the user's search query string into an array
		var queryArray = query.join(" "); //results show up numbered for 1 2 3...

		// array to store matched results from database.js
		var results = []; //number results from database file

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

		}
		// loop through the user's search query words
		// save a lowercase variable of the search keyword
		for(var ii=0, jj=queryArray.length; ii<jj; ii++){
			var qitem = queryArray[ii].tolowercase();
		}

		// is the keyword anywhere in the video title?
		// If a match is found, push full db[i] into results array
		var compare = dbitem.indexOf(qitem);
		if(compare !== -1){
			results.push(db[i]);
		}

		results.sort();//sort results

		// Check that matches were found, and run output functions
		if(results.length = 0){ //if matched are found print them, else print "no match"
			noMatch();
		}else{ //if matched are found print them, else print "no match"
			showMatches(results);
		}


		// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
		var noMatch = function(){ //if no match print "No results found"
			var html = ''+
					'<p>No Results found.</p>'+
					'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
				;
			resultsDIV.innerHTML = html;//print results from internet
		};

		// Put matches into page as paragraphs with anchors
		var showMatches = function(results){ //show matches/results

			// THE NEXT 4 LINES ARE CORRECT.
			var html = '<p>Results</p>',//allow html, title, and URL to print
				title,
				url
				;

			// loop through all the results search() function
			for(var i=0, j=results.length; i<j; i++){

				// title of video ends with pipe
				// pull the title's string using index numbers
				titleEnd = results[i].indexOf('|');
				title = results[i].subString(0, titleEnd);

				// pull the video url after the title
				url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

				// make the video link - THE NEXT LINE IS CORRECT.
				html += '<p><a href=' + url + '>' + title + '</a></p>';
			}
			resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
		};

		// The onsubmit event will be reviewed in upcoming Course Material.
		// THE LINE DIRECTLY BELOW IS CORRECT
		document.forms[0].onsubmit = function() {
			var query = searchInput.value;
			validqte(query);

			// return false is needed for most events - this will be reviewed in upcoming course material
			// THE LINE DIRECTLY BELOW IS CORRECT
			return false;


		}