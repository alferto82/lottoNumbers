
const url = "https://media.lottoland.com/api/drawings/euroJackpot";
const euro = "&#8364;";
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
    drawLast: function(data) {
        let numbers = {
            'ball1': data.numbers[0],
            'ball2': data.numbers[1],
            'ball3': data.numbers[2],
            'ball4': data.numbers[3],
            'ball5': data.numbers[4],
            'ball6': data.euroNumbers[0],
            'ball7': data.euroNumbers[1]
        };        
        $(".numbers_container").loadTemplate("#ballNumbersTemplate", numbers);
        
        
        let prices = {
            'rank1': this.formatRank(data.odds.rank1),
            'rank2': this.formatRank(data.odds.rank2),
            'rank3': this.formatRank(data.odds.rank3),
            'rank4': this.formatRank(data.odds.rank4),
            'rank5': this.formatRank(data.odds.rank5),
            'rank6': this.formatRank(data.odds.rank6),
            'rank7': this.formatRank(data.odds.rank7),
            'rank8': this.formatRank(data.odds.rank8),
            'rank9': this.formatRank(data.odds.rank9),
            'rank10': this.formatRank(data.odds.rank10),
            'rank11': this.formatRank(data.odds.rank11),
            'rank12': this.formatRank(data.odds.rank12),
        };
        $("#tableLastPrices tbody").loadTemplate("#tablePricesTemplate", prices);
        
        let title = "EuroJackpot Results For ";
        let date = this.getDate(data.date.year, data.date.month, data.date.day);
        
        $("#title").loadTemplate("#dateTemplate", {"dateStr": title + date.toDateString()});
    },
    drawNext: function(data) {
        let title = "Next EuroJackpot will be on ";
        let nextData = {
            'dateStr': title + this.getDate(data.date.year, data.date.month, data.date.day).toDateString()
        };
        $("#next").loadTemplate("#nextTemplate", nextData);
    },
    formatRank: function(data) {
        return {'winners': this.formatLongNumber(data.winners) + "x", 'prize': this.formatPrize(data.prize)};
    },
    formatPrize: function(num){
        let number = (num / 100).toFixed(2).toString();
        number = this.formatLongNumber(number);
        return euro + number;
    },
    formatLongNumber: function(number) {
        return number.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
    },
    getDate : (year, month, day) => {
        return new Date(year, month, day, 0, 0, 0, 0);
    }
};