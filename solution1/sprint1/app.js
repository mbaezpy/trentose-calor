/* your code should go here */

$(document).ready(function(){
  
  

var octopus = {
	
	init : function(){
		weatherView.visualize();	
	},
	
	calcolaPos: function(pos){
		return pos*4;
	},
	
	giveDay : function(pos){
		return data[pos].day;
	},
	
	maxTemperature : function(pos){
		var maxT = 0;
		var posI = parseInt(pos);
		for (var i=0; i <= 3; i++){
			if (data[posI+i].temperature > maxT){
				maxT = data[posI+i].temperature;
			}
		}
		return maxT;
	},

	minTemperature : function (pos){
		var minT = 80;
		var posI = parseInt(pos);
		for (var i=0; i <= 3; i++){
			if (data[posI+i].temperature < minT){
				minT = data[posI+i].temperature;
			}
		}
		return minT;
	},
	
	giveCondition : function(pos){
		return data[pos].condition;
	}
};

var weatherView = {
	
	visualizeWeatherDay : function(day){
		var pos = octopus.calcolaPos(day)
		var day = octopus.giveDay(pos);
		var maxT = octopus.maxTemperature(pos);
		var minT = octopus.minTemperature(pos);
		var condition = octopus.giveCondition(pos);
		var tmpl = "<li><div class ='icon'><img src ='img/icons/"+condition+".png'></div>"+
								"<div class='stats'><h2>"+day+"</h2><strong>min</strong> "+minT+"°C <strong>max</strong> "+maxT+"°C</div></li>"
		$("#summary").append(tmpl);
								
	},
		
	visualize : function(){
			$("#summary").empty();
			// 0 = wednesday ; 1 = thursady; 2 = friday; 3=saturday
			this.visualizeWeatherDay("0");
			this.visualizeWeatherDay("1");
			this.visualizeWeatherDay("2");
			this.visualizeWeatherDay("3");
	}
	

}

octopus.init();
});








