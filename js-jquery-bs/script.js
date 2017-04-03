$(function() {
	var user = "";

	var mostrarResultados = function (texto, estilo) {
		$("#mostrarResultado").text(texto);
		$("#mostrarResultado").css(estilo);
	}

	$("#btn_calcular_edad").click(function() {
		user = new usuario($("#name").val(), $('#fecha_nacimiento').val());
		$("#mostrarResultado").text(user.presentarse());
	})

	// class
	function usuario(nombre, fecha) {
		this.name = nombre;
		var split = fecha.split("-");
		this.date = parseInt(split[0]);

		var calcularEdad = function(date) {
			return 2017 - date;
		}

		this.presentarse = function () {
			var edad = calcularEdad(this.date);
			return "Hola, mi nombre es " + this.name + " y tengo " + edad + " años.";
		}	
	}

	$("#btn-id").click(function() {
		var text = $("#thing1").text();
		$("#thing1").css("color", "#2C379A");
		mostrarResultados(text, {"background-color": "#2C379A"});
	})

	$("#btn-class").click(function() {
		var text = $(".special").text();
		$(".special").css("color", "#B6170F");
		mostrarResultados(text, {"background-color": "#B6170F"});
	})

	$("#btn-tag").click(function() {
		var text = $("ul").text();
		$("ul").css("color", "#61F292");
		mostrarResultados(text, {"background-color": "#61F292"});
	})

	$("#btn-swich").click(function() {
		var text1 = $("#thing1").text();
		var text2 = $("#btn_calcular_edad").text();
		$("#thing1").text(text2);
		var text3= $("#thing1").text();
		$("#thing1").css("color", "#FFDA00");
		mostrarResultados("text1 = " + text1 + "/n text2= " + text2 + "/n text2 reemplaza text1 !! /n/n text1= " + text3, {"background-color": "#FFDA00"});
	})

	$("#btn-descendant").click(function() {
		var text = $("div").first().text();
		$("div").first().css("color", "#FF6666");
		mostrarResultados(text, {"background-color": "#FF9090"});
	})
});