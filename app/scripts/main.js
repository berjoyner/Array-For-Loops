// console.log('\'Allo \'Allo!');

//   var catsArray = ["Jack", "Smoke", "Dirty", "Stinky", "Hungry", "Simon", "Oscar"];
//    var googoo = ["Baby", "Dinosaur"];
 
//  // @param {catsData} array of cats
//    var listItemTemplate = function(data) {
//          var markup = "";
//          var i;
 
//          for(i = 0; i < data.length; i++) {
//            markup += "<li>" + data[i] + "</li>";
           
//          }

//          // console.log(markup);
 
//          return markup;
 
//    };
 
   // $(".cats").append(listItemTemplate(catsArray));

   var navArray = ["<a href=index.html>Home</a>" , "<a href=about.html>About</a>" , "<a href=travel.html>Travel</a>" , "<a href=blog.html>Blog</a>" , "<a href=contact.html>Contact</a>"];

   var navTemplate = function(navData) {

   		var markupshow = "";
   		var i;

   		for( i=0; i<navData.length; i++) {
   			markupshow += "<li>" + navData[i] + "</li>";
   		}

   		return markupshow;
   		//console.log(markupshow);
   };

   $(".nav").append(navTemplate(navArray));


var mediaArray = ["<a href=http://twitter.com><img src=/images/twitter.png></a>" , 
				"<a href=http://facebook.com><img src=/images/facebook.png></a>" , 
				"<a href=http://reddit.com><img src=/images/reddit.png></a>" , 
				"<a href=http://google.com><img src=/images/google.png></a>" , 
				"<a href=http://ambernjoyner.wordpress.com><img src=images/wordpress.png></a>"];

var mediaTemplate = function(mediaData) {

	var markup ="";
	var i; 

	for (i=0; i<mediaData.length; i++) {
		markup += mediaData[i];
	}

	return markup;
	//console.log(markup);

};

$(".mednav").append(mediaTemplate(mediaArray));




$(".jumbotron").each( function(index) {

    $(this).css("background-color", "#BDEDFF");
});

