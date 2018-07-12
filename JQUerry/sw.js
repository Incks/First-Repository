$().ready(function(){
	$.get("https://swapi.co/api/"+cosa+"/"+id+"/?format=json",
		function(data){
				$("#name").text(data.name);
				$("#eye").html(data.eye_color);
				$("#hair").text(data.hair_color);
				$("#skin").html(data.skin_color);
				$("#gender").html(data.gender);
		}, "json")

	.done(function(){
		alert($("#name").text());
	})

});