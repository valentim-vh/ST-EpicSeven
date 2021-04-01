var carta0 = {
  nome: "None",
  imagem: "https://assets.change.org/photos/6/bo/na/zJbOnAuYlKSdndU-800x450-noPad.jpg?1611892941",
  atributos: {
    HP: 7323,
    ATK: 966,
    DEF: 657,
      }
}

var carta1 = {
  nome: "Ravi",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/ravi-full.png",
  atributos: {
    HP: 7323,
    ATK: 966,
    DEF: 657,
      }
}
var carta2 = {
  nome: "Fallen Cecilia",
  imagem: "https://epic7x.com/wp-content/uploads/2019/06/fallen-cecilia-full.png",
  atributos: {
    HP: 6840,
    ATK: 894,
    DEF: 694,
   
  }
}
var carta3 = {
  nome: "Lilias",
  imagem: "https://epic7x.com/wp-content/uploads/2019/09/lilias.png",
  atributos: {
    HP: 6751,
    ATK: 821,
    DEF: 648,
    
  }
}
var carta4 = {
  nome: "Celine",
  imagem: "https://epic7x.com/wp-content/uploads/2020/06/Celine.png",
  atributos: {
    HP: 6267,
    ATK: 1228,
    DEF: 473,
    
  }
}
var carta5 = {
  nome: "Landy",
  imagem: "https://epic7x.com/wp-content/uploads/2020/09/Landy-1.png",
  atributos: {
    HP: 6002,
    ATK: 1158,
    DEF: 553,
    
  }
}
var carta6 = {
  nome: "Sigret",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/sigret-full.png",
  atributos: {
    HP: 5784,
    ATK: 1228,
    DEF: 553,
    
  }
}
var carta7 = {
  nome: "Bellona",
  imagem: "https://epic7x.com/wp-content/uploads/2019/01/Bellona-1.png",
  atributos: {
    HP: 5704,
    ATK: 1003,
    DEF: 585,
    
  }
}
var carta8 = {
  nome: "Cermia",
  imagem: "https://epic7x.com/wp-content/uploads/2019/03/Cermia-2.png", 
  atributos: {
    HP: 5542,
    ATK: 1359,
    DEF: 585,
    
  }
}
var carta9 = {
  nome: "Baiken",
  imagem: "https://epic7x.com/wp-content/uploads/2019/04/Baiken-test.png",
  atributos: {
    HP: 6266,
    ATK: 1228,
    DEF: 473,
    
  }
}
var carta10 = {
  nome: "Vivian",
  imagem: "https://epic7x.com/wp-content/uploads/2019/08/vivian.png",
  atributos: {
    HP: 4378,
    ATK: 1228,
    DEF: 662,
    
  }
}


var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10 + 1)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 10 + 1)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 10 + 1)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
    
}

function exibeCartaJogador(){
  divCartaJogador = document.getElementById("carta-jogador")
  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
   for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você venceu!!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você pedeu!!!</p>'
    } else {
         htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
}

function exibeCartaMaquina(){
  divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
   for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
    
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  
      
}
