/* your code should go here */

$(document).ready(function(){
  
  

var octopus = {
	
	init : function(){
		weatherView.visualize();	
	},
	
	calcolaPos: function(day,city){
		day = parseInt(day);
		city = parseInt(city);
		return (day+day)*4+city*4;
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
	
	//visualizeWeatherDayCity
	visualizeWeatherDayCity : function(day,city){
		var pos = octopus.calcolaPos(day,city);
		var day = octopus.giveDay(pos);
		var maxT = octopus.maxTemperature(pos);
		var minT = octopus.minTemperature(pos);
		var condition = octopus.giveCondition(pos);
		var tmpl = "<li><div class ='icon'><img src ='img/icons/"+condition+".png'></div>"+
								"<div class='stats'><h2>"+day+"</h2><strong>min</strong> "+minT+"°C <strong>max</strong> "+maxT+"°C</div></li>"
		$("#summary").append(tmpl);
								
	},
	
	showWeather : function(optionC){
		  // 0 = wednesday ; 1 = thursady; 2 = friday; 3=saturday ; optionC = city
			weatherView.visualizeWeatherDayCity("0",optionC);
			weatherView.visualizeWeatherDayCity("1",optionC);
			weatherView.visualizeWeatherDayCity("2",optionC);
			weatherView.visualizeWeatherDayCity("3",optionC);
	},
	
	visualize : function(){
			$("#summary").empty();
			var optionC;
			$("#btn-filter").click(function(){
				$("#summary").empty();
				var city = $("#selectC").find(":selected").text();
				optionC = 0;
				city = city.toLowerCase();
				if(city.match("trento")){
					optionC = "0"
					weatherView.showWeather(optionC);
				}
				else if (city.match("rovereto")){
					optionC ="1";
					weatherView.showWeather(optionC);
				}
				else{
					alert("No city selected");
				}
			});
	}
	
	

}

octopus.init();
});








