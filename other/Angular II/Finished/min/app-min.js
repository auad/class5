var myApp=angular.module("myApp",[]);myApp.controller("mainController",function(o){o.name="Jane Doe",o.occupation="Coder",o.getname=function(){return"John Doe"},console.log(o)});