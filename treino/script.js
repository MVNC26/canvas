let canvas = document.getElementById("quadro")

let ctx = canvas.getContext("2d")

//define e desenha um retangulo com a cor azul, tambem definindo seu tamanho
ctx.fillStyle = "#0000ff"
ctx.fillRect(0, 0, 100, 100);

//apagar uma area do canvas 
ctx.clearRect(50, 50, 50, 50)

ctx.fillStyle = "rgb(255, 0, 255)" 
ctx.fillRect(700, 500, 100, 100)

ctx.clearRect(50, 50, 700, 500 )



let x = 0
let y = 0 
let direcaox
let direcaoy 

let animacao;
let cores = ["rgb(227, 38, 54)", "rgb(72, 61, 139)", "rgb(255, 255, 0)"]
let i = 0

ctx.fillStyle = "#000"

function desenhar(){

    ctx.clearRect(0, 0, 800, 600)
    ctx.fillRect(x, y, 50, 50)

    if (direcaox == "sim") {
        x--

    } else {
        x++
    }

    if (x == 750) {

        direcaox = "sim"
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]
    

    } else if ( x == 0) {
        
        direcaox = ""
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]
    }

    if (direcaoy == "sim") {
        y--

    } else {
        y++
    }

    if (y == 550) {

        direcaoy = "sim"
        if (i == 2) {
            i = 0
        } else {
            i++
        } 
        ctx.fillStyle = cores[i]

    } else if ( y == 0) {

        direcaoy = ""
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        ctx.fillStyle = cores[i]
    }
    


    animacao = requestAnimationFrame(desenhar)
}

desenhar()