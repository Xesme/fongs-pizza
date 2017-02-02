// Business Logic
var tops = [];

function Pizza(size, sauce, tops, extra, price) {
  this.size = size;
  this.sauce = sauce;
  this.extra = extra;
  this.price = price;
  this.tops = tops;
}

Pizza.prototype.orderPizza = function() {
  this.price =0;

  if (this.size === "small(10')") {
   this.price += 16;
 } else if (this.size === "medium(12')") {
   this.price += 18;
 } else if (this.size === "large(14')") {
   this.price += 20;
 }

 if (this.extra === "extra cheese") {
   this.price += 2;
   this.extra = "Yes!";
 } else if (this.extra != "extra cheese") {
   this.extra = "No!";
 }

 if (this.sauce === "kung pao garlic sauce") {
   this.price += 1;
 }

 for (var i = 0; i < this.tops.length; i++) {
      this.price += 1;
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

    var toppings = document.getElementsByName('toppings');
    for (var i = 0; i < toppings.length; i++){
      if ( toppings[i].checked ) {
        tops.push(toppings[i].value);
      }
    }

    var newPizza = new Pizza(size, sauce, tops, extra)
    newPizza.orderPizza()

    $("#display-order ul").append("<li>" +"Size:"+ " " + newPizza.size + "</li>");
    $("#display-order ul").append("<li>" +"Sauce:"+ " "  + newPizza.sauce + "</li>");
    $("#display-order ul").append("<li>" + "Extra cheese:" + " " + newPizza.extra + "</li>");
    $("#display-order ul").append("<li>" +"Toppings:"+ " "  +  newPizza.tops + "</li>");
    $("#display-order ul").append("<li>" +"Total:"+ " "  + "$" +  newPizza.price + "</li>");
  });
});
