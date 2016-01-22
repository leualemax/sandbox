var express = require("express");
app = express();

app.get("/" , function(req , res){


	res.json({
		name:"Leo Stronda Market",
		products:[
			{
				name:"batata doce",
				price:4.5
			},
			{
				name:"whay protein",
				price:3.5
			},
			{
				name:"bomba de cavalo",
				price:1.5
			}
		]
	})

});

app.listen(3000, function(){
	console.log("start serve do whay protein");
})