/* your code should go here */

$(document).ready(function(){
  
  
});

var model = {
  collection : data,
  
  getWeekForecast : function(){
    var summary = [];
    for (var i=0; i< this.collection.length; i++){
      if (summary[this.collection[i].day] == undefined){
        summary[this.collection[i].day]  = {
          min : this.collection[i],
          max : this.collection[i]
        };
      } else {
        var current = this.collection[i];
        // is the current measure lower than the minimun temperature for the day?
        if (current.temperature < summary[current.day].min.temperature){
          summary[current.day].min = current;
        } 
      }
    }
    return summary;
  }
};

var controller = {
  init : function(){
    // init model
    // init view
  },
  
  getSummary : function(city){
    model.getWeekForecast(city);
  }
  
};

var view = {
  init : function(){
  },
  
  display : function(){
    list = controller.getSummary();
    
    []
    
    $()
    
  }
}





