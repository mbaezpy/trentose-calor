/* your code should go here */

var tmpl = "<li><div class=\"icon\"><img src=\"img/icons/CONDITION.png\"></div><div class=\"stats\"><h2>DAY</h2><strong>min</strong> MIN <strong>max</strong> MAX </div></li> ";

$(document).ready(function(){
    
    octopus.init();

});

var octopus = {
    days : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    init: function(){
        for(var i = 0; i < this.days.length; i++){
            var obj = model.minmax(this.days[i]);
            if(obj != null){
                view.display(obj);
            }
        }
    }

};

var view = {
    display: function(obj){
        var newItem = tmpl.replace("CONDITION",obj.condition);
        newItem = newItem.replace("DAY",obj.day);
        newItem = newItem.replace("MIN",obj.min);
        newItem = newItem.replace("MAX",obj.max);
        $("#summary").append(newItem);
    }
};

var model = {
    max : null,
    min : null,
    condition : null,
    minmax: function(i){
        this.max = null;
        this.min = null;
        this.condition = null;
        for(var j = 0; j<data.length; j++){
            if(i==data[j].day){
                if(data[j].temperature>this.max || this.max==null){
                    this.max = data[j].temperature;
                }
                if(data[j].temperature<this.min || this.min==null){
                    this.min = data[j].temperature;
                    this.condition = data[j].condition;
                }
            }
        }
        if (this.min != null && this.max !=null){
            return {day:i, min:this.min, max:this.max, condition:this.condition}
        }
        else return null;
    }
}
    







