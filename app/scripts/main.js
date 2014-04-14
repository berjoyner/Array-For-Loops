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

   var navArray = ["<a href=home.html>Home</a>" , "<a href=about.html>About</a>" , "<a href=travel.html>Travel</a>" , "<a href=blog.html>Blog</a>" , "<a href=contact.html>Contact</a>"];

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
