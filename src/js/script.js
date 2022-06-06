//** Criação de cards DOM */
const buttonTodos        = document.querySelector(".estiloGeralBotoes--mostrarTodos")
const buttonHortifruti   = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
const buttonLacticinios  = document.querySelector(".estiloGeralBotoes--filtrarLaticinio")
const buttonPanific      = document.querySelector(".estiloGeralBotoes--filtrarPanificadora")
const input = document.querySelector("input")
const ul    = document.querySelector(".ulVitrine")
const ulCarrinho = document.querySelector("#abc")

function criarCardCarrinho (produs){
    ulCarrinho.innerHTML = ""
   
    produs.forEach((produto)=>{
        const li  = document.createElement("li")
        li.id     = "liCarrinho"
        
        const img = document.createElement("img")
        const divImgCarrinho = document.createElement("div")
        divImgCarrinho.id = "divImgCarrinho"
        img.src   = produto.img
        img.alt   = produto.nome

        const divH1SpanPreco = document.createElement("div")
        divH1SpanPreco.id= 'divH1SpanPreco'
        const h1         = document.createElement("h1")
        h1.innerText     = produto.nome
        const span       = document.createElement("span")
        span.id          = "spanSecaoCarrinho"
        span.innerText   = produto.secao
        const pPreco     = document.createElement("p")
        pPreco.innerText = `R$${produto.preco}.00`
        pPreco.id        = "paragCarrinho"
        
        const divImgLixo = document.createElement("div")
        divImgLixo.id    = "divImgLixo"
        const a     = document.createElement("a")
        a.id        = "aImg"
        const imgLixo    = document.createElement("img")
        imgLixo.alt      = "icon lixo"
        imgLixo.src      = "./src/img/trash.png"
        imgLixo.id       = "imgLixo"

        divImgCarrinho.appendChild(img)
        a.appendChild(imgLixo)
        divImgLixo.appendChild(a)
        divH1SpanPreco.append(h1, span, pPreco)
        li.append(divImgCarrinho, divH1SpanPreco, divImgLixo,)
        ulCarrinho.append(li)
        
    })
}



function criarCard(produs) {
    ul.innerHTML = ""

    produs.forEach((produto)=>{
    const li1    = document.createElement("li")

    const img    = document.createElement("img")
    img.src      = produto.img
    img.alt      = produto.nome
    img.id       = "imgCard"

    const h3     = document.createElement("h3")
    h3.id = "h3"
    h3.innerText = produto.nome

    const span   = document.createElement("span")
    span.id = "spanSecao"
    span.innerText = produto.secao

    const ol = document.createElement("ol")
    ol.id = "ol_componentes"
    
    const div = document.createElement("div")
    div.id = "divBut"

    const button = document.createElement("button")
    const div2 = document.createElement("div")
    div2.id = "div2"
    div2.append(button)
    button.id = "button"
    button.classList.add("btn")
    button.innerText = "Comprar"
    button.type = "button"
    button.addEventListener("click", ()=>{
        criarCardCarrinho(produtos)
    })
    
    const para = document.createElement("p")
    para.innerText = `R$${produto.preco}.00`
    para.id = "parag"
    div.append(para, div2)
    
    produto.componentes.forEach( (elem) => {
    const li = document.createElement("li")
    li.id = "li__OL"
    li.innerHTML = elem
    ol.appendChild(li)
   })
    

    li1.append(img, h3, span, ol, div)
    ul.append(li1)
})}

criarCard(produtos)
//** FILTROS BOTÕES */

function filtroGeral(){
    const result = produtos
    criarCard(result)
}
function filtroHorti(){
    const result = produtos.filter((produto)=>{
        return produto.secao === 'Hortifruti'
    })
    criarCard(result)
}
function filtroPani(){
    const result = produtos.filter((produto)=>{
        return produto.secao === 'Panificadora'
    })
    criarCard(result)
}
function filtroLati(){
    const result = produtos.filter((produto)=>{
        return produto.secao === 'Laticínio'
    })
    criarCard(result)
}

function pesquisa(){
    const arr = buscaAlgo()
    criarCard(arr)  
}

function buscaAlgo(){
    const result = produtos.filter(produto => produto.nome.toLowerCase().includes(input.value.toLowerCase()))
    return result
}

buttonTodos.addEventListener("click", filtroGeral)
buttonHortifruti.addEventListener("click",filtroHorti)
buttonLacticinios.addEventListener("click", filtroLati)
buttonPanific.addEventListener("click",filtroPani)
input.addEventListener("input", pesquisa)



//** SOMA */

function soma(){
    let total = 0
    for(let i=0; i<produtos.length;i++){
        total+= produtos[i].preco
    }
    return total  
}
const spanTotal = document.querySelector("#precoTotal")
spanTotal.innerText = soma()

//** */
  
 

