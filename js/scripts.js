// Business Logic

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
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
 if (this.toppings === "mushroom") {
   this.price += 1;
 }
}

//User Interface Logic
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();

    $("#pizza-size").show();
    var size = $("input:radio[name=size]:checked").val();


    $("#toppings").show();
    var toppings = $("input:radio[name=toppings]:checked").val();

     var newPizza = new Pizza(size, toppings)
     newPizza.orderPizza()

    //  alert(newPizza);

     $("#display-order ul").append("<li>" + newPizza.size + "<li>");
     $("#display-order ul").append("<li>" + newPizza.toppings + "</li>");
     $("#display-order ul").append("<li>" + "$" +  newPizza.price + "</li>");
   });


  });
