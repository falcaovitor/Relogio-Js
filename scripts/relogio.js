function relogio(){
	var data = new Date()
	var inner = document.getElementById("time")
	var hora = data.getHours()
	var minuto = data.getMinutes()
	var segundo = data.getSeconds()
	var formato = hora+" : "+minuto+" : "+segundo
	inner.innerHTML = formato
	setTimeout("relogio()", 1000)
}