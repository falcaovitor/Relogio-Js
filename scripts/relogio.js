function relogio(){
	var data = new Date()
	var inner = document.getElementById("time")
	var hora = data.getHours()
	var minuto = data.getMinutes()
	var segundo = data.getSeconds()
	if (hora <= 10) 
	{
		hora = "0"+hora
	}
	if (minuto <= 10) 
	{
		minuto = "0"+minuto
	}
	if (segundo <= 10) 
	{
		segundo = "0"+segundo
	}
	var formato = `${hora} : ${minuto} : ${segundo}`
	inner.innerText = formato
	setInterval("relogio()", 1000)
	// trabalhando o dia da semana
	var show = document.querySelector('#day')
	var dayNames = ['Domingo','Segunda-feira','terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
	var day = dayNames[data.getDay()]
	show.innerText = day
}
