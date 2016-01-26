/* your code should go here */
$(document).ready(function(){

var tmp="<li>" +
          "<div class='icon'>" +
            "<img src='img/icons/I.png'>" +      
          "</div>" +
          "<div class='stats'>" +  
            "<h2>D</h2>" +
            "<strong>min</strong> XºC  " +
            "<strong>max</strong> YºC" +
          "</div>" +
        "</li>";

var Controller = {
    init: function(){
        View.init();
        View.show(data);
    },
    min: function(giorno){
        var minima=100;
        for(var i=0;i<data.length;i++){
            if(data[i].day==giorno){
                if(data[i].temperature<minima){
                    minima=data[i].temperature;
                }
            }
        }
        return minima;
    },
    max: function(giorno){
         var massima=-100;
        for(var i=0;i<data.length;i++){
            if(data[i].day==giorno){
                if(data[i].temperature>massima){
                    massima=data[i].temperature;
                }
            }
        }
        return massima;
    }
}

var View = {
    init: function(){
        
    },
    show: function(Day){
        $("#summary").html("");
        for(var i=0;i<Day.length;i++){
            if(((i+1)%4)==0){
            var item = tmp.replace("I", Day[i].condition);
            item= item.replace("D", Day[i].day);
            item= item.replace("X", Controller.min(Day[i].day));
            item= item.replace("Y", Controller.max(Day[i].day));
            $("#summary").append(item);
            }
        }
    }
}

Controller.init();

});


