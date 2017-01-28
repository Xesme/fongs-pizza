// Business Logic

function Pizza(size, sauce, extra, price) {
  this.size = size;
  this.sauce = sauce;
  this.extra = extra;
  this.price = price;
}

Pizza.prototype.orderPizza = function() {
  this.price =0;
  if (this.size === "small(10')"){
   this.price += 16;
 } else if (this.size === "medium(12')") {
   this.price += 18;
 } else if (this.size === "large(14')") {
   this.price += 20;
 }

 if (this.extra === "extra cheese") {
   this.price += 2;
 }
}

//User Interface Logic
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();

    $("#pizza-size").show();
    var size = $("input:radio[name=size]:checked").val();

    $("#pizza-sauce").show();
    var sauce = $("input:radio[name=sauce]:checked").val();

    $("#extra").show();
    var extra = $("input:radio[name=extra]:checked").val();

    var choices = [];
    var tops = document.getElementsByName('toppings');
    for (var i = 0;i < tops.length; i++){
      if ( tops[i].checked ) {
        choices.push(tops[i].value);
      }
    }
    
    var newPizza = new Pizza(size, sauce, extra, toppings)
    newPizza.orderPizza()

    $("#display-order ul").append("<li>" +"Size:"+ " " + newPizza.size + "</li>");
    $("#display-order ul").append("<li>" +"Sauce:"+ " "  + newPizza.sauce + "</li>");
    $("#display-order ul").append("<li>" +"Yes!"+ " "  + newPizza.extra + "</li>");
    $("#display-order ul").append("<li>" +"Toppings:"+ " "  +  choices + "</li>");
    $("#display-order ul").append("<li>" +"Total:"+ " "  + "$" +  newPizza.price + "</li>");
   });
});
