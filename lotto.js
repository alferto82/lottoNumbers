"use strict";
/*Create a page displaying the current EuroJackpot draw information similar to https://www.lottoland.com/en/eurojackpot/results-winning-numbers

Load the data from https://media.lottoland.com/api/drawings/euroJackpot via AJAX.

The site should work on all WebKit-based devices. Feel free to use native JavaScript or the frameworks of your choice.

Please use ES6 and transpile to ES5 with a task runner like Gulp, Grunt, or just NPM scripts.

Use GIT as version control system and commit preferably in small steps.

Thank you!*/

let url = "https://media.lottoland.com/api/drawings/euroJackpot";

var lottoNumbers = {      
    getJSON: function () {

        return $.getJSON(url + "?callback=?").then(function(data) {
            return [data.last, data.next];
        });   
            
            
    },
    draw: function(){
        return this.getJSON().done(([last, next]) => {
            this.drawLast(last);
            this.drawNext(next);
        });
    },
    drawLast: data => {
        $("#numbers_container").loadTemplate("templates/ballNumbers.html", posts);
        console.log("LAST");
    },
    drawNext: data => {
        $('body').append(data.closingDate);
        console.log("NEXT");
    }
}