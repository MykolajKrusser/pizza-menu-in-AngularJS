'use strict';
var app = angular.module('pizzaMenu', []);
app.controller('pizzaMenuCtrl', ['$scope', function (scope) {
    scope.pizzas = [
        {
            "name":"Mozzarella",
            "price":"5",
            "dough":"italiana",
            "cheese":"mozzarella",
            "meet":"no meet",
            "vegetables":"tomatoes, basilc, garlic cloves",
            "sauce":"heirloom tomatoes,",
            "photo":"1.jpg"
        },
        {
            "name":"Pepperoni",
            "price":"9",
            "dough":"americana",
            "cheese":"mozzarella",
            "meet":"pepperoni",
            "vegetables":"no vegetables",
            "sauce":"CONTADINA® Tomato Paste",
            "photo":"3.jpg"
        },
        {
            "name":"Margherita",
            "price":"8",
            "dough":"italiana.",
            "cheese":"mozzarella",
            "meet":"no meet",
            "vegetables":"no vegetables",
            "sauce":"San Marzano",
            "photo":"2.jpg"
        },
        {
            "name":"Quattro Stagioli Pizza",
            "price":"12",
            "dough":"italiana",
            "cheese":"pecorino",
            "meet":"shoe",
            "vegetables":"olives, bocconcini, broccoli, cherry peppers, mushrooms",
            "sauce":"San Marzano",
            "photo":"4.jpg"
        },
        {
            "name":"Meatball Pizza",
            "price":"12",
            "dough":"americana",
            "cheese":"pecorino",
            "meet":"cooked meatballs",
            "vegetables":"no vegetables",
            "sauce":"tomato sauce",
            "photo":"5.jpg"
        },
        {
            "name":"Meat-Olive",
            "price":"10",
            "dough":"americana",
            "cheese":"mozzarella",
            "meet":"cooked meatballs",
            "vegetables":"Kalamata olives",
            "sauce":"tomato sauce",
            "photo":"6.jpg"
        },
        {
            "name":"BBQ Chicken Pizza",
            "price":"8",
            "dough":"italiana",
            "cheese":"cheddar",
            "meet":"chicken",
            "vegetables":"scallions, pickled jalapeños",
            "sauce":"barbecue sauce",
            "photo":"7.jpg"
        },
        {
            "name":"Onion-Ricotta Pizza",
            "price":"10",
            "dough":"italiana",
            "cheese":"cheddar",
            "meet":"bacon",
            "vegetables":"no vegetables",
            "sauce":"maple syrup",
            "photo":"8.jpg"
        },
        {
            "name":"Bacon-Egg Pizza",
            "price":"6",
            "dough":"americana",
            "cheese":"radicchio",
            "meet":"egg, bacon",
            "vegetables":"no vegetables",
            "sauce":"",
            "photo":"9.jpg"
        },
        {
            "name":"Potato-Rosemary Pizza",
            "price":"6",
            "dough":"italiana",
            "cheese":"ricotta",
            "meet":"no meet",
            "vegetables":"rosemary, potato",
            "sauce":"no sause",
            "photo":"10.jpg"
        }
    ]
}]);

app.directive('pizzaCard', function () {
    return{
        restrict: 'E',
        scope: {
            pizza: '='
        },
        templateUrl:'template/person-card.html'
    }
});