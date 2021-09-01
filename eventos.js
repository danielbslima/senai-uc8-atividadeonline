let hoje = new Date().toISOString().substring(0,10)
let dataentrada = new Date("2021-08-28").toISOString().substring(0,10)
let patternData = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

console.log("Hoje é " + hoje)
console.log("A data de evento indicada é " + dataentrada)

if(!(patternData.test(dataentrada))){
	console.log("Digite a data no formato Ano/Mês/Dia");   
    
        }else{
        console.log("Formato de data correto")
    } 

if (hoje > dataentrada) {
	console.log('erro: Impossível marcar evento no passado!')

    } else if (hoje == dataentrada) {
		console.log('Alerta: Marcar evento pra hoje?')

	}else {console.log('Data adequada')
}
