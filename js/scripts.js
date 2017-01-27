// Business Logic

function Pizza(size, extra, toppings, price) {
  this.size = size;
  this.extra = extra;
  this.toppings = toppings;
  this.price = price;
}

function checkboxLoop() {
  for(var i = 0; i < toppings.input.length; i++) {
    if (this.toppings === true) {
      this.price +=2 ;
    }
    return this.price;
  }



Pizza.prototype.orderPizza = function() {
  this.price =0;
  if (this.size === "small"){
   this.price += 16;
 } else if (this.size === "medium") {
   this.price += 18;
 } else if (this.size === "large") {
   this.price += 20;
 }

 if (this.extra === "Extra Cheese") {
   this.price += 2;
 }
}

//User Interface Logic
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();

    $("#pizza-size").show();
    var size = $("input:radio[name=size]:checked").val();

    $("#toppings").show();
    var toppings = $("input:checkbox[name=toppings]:checked").val();

    $("#extra").show();
    var extra = $("input:radio[name=extra]:checked").val();

     var newPizza = new Pizza(size, extra, toppings)
     newPizza.orderPizza()

    //  alert(newPizza);

     $("#display-order ul").append("<li>" + newPizza.size + "</li>");
     $("#display-order ul").append("<li>" + newPizza.extra + "</li>");
     $("#display-order ul").append("<li>" + newPizza.toppings + "</li>");
     $("#display-order ul").append("<li>" + "$" +  newPizza.price + "</li>");
   });
  });
