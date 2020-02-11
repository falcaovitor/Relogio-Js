function relogio(){
	var data = new Date()
	var inner = document.getElementById("time")
	var hora = data.getHours()
	var minuto = data.getMinutes()
	var segundo = data.getSeconds()
	if(hora < 10){
		hora = "0"+hora
	}
	if(minuto < 10){
		minuto = "0"+minuto
	}
	if (segundo < 10) {
		segundo = "0"+segundo
	}
	var formato = hora+" : "+minuto+" : "+segundo
	inner.innerHTML = formato
	
	// setTimeout("relogio()",1000)
	
}
window.setInterval("relogio()",1000)

// /*Relógio com if*/
// function relogio(){
// 	var data = new Date()
// 	var hora = data.getHours()
// 	var minuto = data.getMinutes()
// 	var segundo = data.getSeconds()

// 	if (hora < 10) {
// 		hora = "0"+hora
// 	}
// 	if (minuto < 10) {
// 		minuto = "0"+minuto
// 	}
// 	if (segundo < 10) {
// 		segundo = "0"+segundo
// 	}

// 	document.getElementById("time").innerHTML = hora" : "+minuto+" : "+segundo
// }
// window.setInterval("relogio()",1000)

