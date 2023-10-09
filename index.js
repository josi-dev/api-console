const readline = require("readline");
const rl = readline.createInterface({
input:process.stdin,
output: process.stdout
})


rl.question("digite o número da ferramenta:\n1 - cep📍\n2 - previsão de tempo☀️\n",function (pergunta) {
    
    switch (pergunta) {
        case '1' :
            cep()
            break;
        case '2':
            previsaoTempo()
            break;
        default:
            console.log("nao encontrada")
            rl.close()
      }
    //rl.close()
})







function cep() {
    



rl.question("cep: ",function(res) {

let ApiUm = fetch('https://viacep.com.br/ws/' + res + '/json/').then(response => response.json()).then(Api => {
    console.log("Cep - " + Api.cep)
    console.log("Logradouro - " + Api.logradouro)
    console.log("Complemento - " + Api.complemento)
    console.log("Bairro - " + Api.bairro)
    console.log("Localidade - " + Api.localidade)
    console.log("UF - " + Api.uf)
    console.log("IBGE - " + Api.ibge)
    console.log("GIA - " + Api.gia)
    console.log("DDD - " + Api.ddd)
    console.log("Siafi - " + Api.siafi)
    rl.close()
})




})


}//cep








function previsaoTempo() {
    
    rl.question("cidade: ", (city) => {
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=805afb8f2f4ebcce78a01ca167816932&" + "lang=pt_br&units=metric").then(data => data.json()).then(data => {
    
    
    fetch("http://api.openweathermap.org/data/2.5/forecast/?q=teresina&appid=805afb8f2f4ebcce78a01ca167816932&lang=pt_br& units=metric").then(data => data.json()).then(data => {
        console.log("\n\n\n\n\n\n")
        console.log(data)
        console.log("dia: " + data.list[0].dt_txt)
        console.log("sensação térmica: " + data.list[0].main.feels_like + "°c")
        console.log("clima: " + data.list[0].weather[0].description)
        console.log("umidade: " + data.list[0].main.humidity + "%")
        
        
    })
    
    let sunrise = data.sys.sunrise
    let formatacao_sunrise = new Date(sunrise * 1000).toLocaleTimeString()
    let sunset = data.sys.sunset
    let formatacao_sunset = new Date(sunset * 1000).toLocaleTimeString()
    
    
    
    
    
    console.log("temperatura: " + String(data.main.temp).substring(0,2) + "°c")
    console.log("temperatura maxima: " + String(data.main.temp_max).slice(0,2) + "°c")
    console.log("temperatura minima: " + String(data.main.temp_min).slice(0,2) + "°c")
    console.log("sensação térmica: " + String(data.main.feels_like).substring(0,2) + "°c")
    console.log("clima: " + data.weather[0]. description)
    console.log("umidade: " + data.main.humidity + "%")
    console.log("país: " + data.sys.country)
    console.log("nascer do sol: " + formatacao_sunrise)
    console.log("por do sol: " + formatacao_sunset)
    console.log("latitude: " + data.coord.lat)
    console.log("longitude: " + data.coord.lon)
    rl.close()
})
        
    })
    
    
}


//805afb8f2f4ebcce78a01ca167816932
/*fetch("https://api.openweathermap.org/data/2.5/weather?q=teresina&appid=805afb8f2f4ebcce78a01ca167816932&lang=pt_br").then(data => data.json()).then(data => {
    console.log(data)
})*/
