//** Criação de cards DOM */
function criarCard(produs) {
    const ul    = document.querySelector("ul")
    const li    = document.createElement("li")
    const img   = cardImg(produs)
    const h3    = cardH3(produs)
    const para  = paragh(produs)
    const span  = cardSpan(produs)
    ul.append(li)
    li.append(img, h3, para, span)
}
function cardImg(produs) {
    const img = document.createElement("img")
    img.src = produs.img
    img.alt = produs.nome
    return img
}
function cardH3(produs) {
    const h3 = document.createElement("h3")
    h3.innerText = produs.nome

    return h3
}
function paragh(produs) {
    const para = document.createElement("p")
    para.innerText = `R$${produs.preco},00`
    return para
}
function cardSpan(produs){
    const span = document.createElement("span")
    span.innerText = `Seção: ${produs.secao}`
    return span
}
function produtosSec(produto) {
    //const filtroHorti = filtroSeccion(produto, 'Hortifruti')
    for (let i = 0; i < produto.length; i++) {
        const produs = produto[i]
        criarCard(produs)
    }
    //console.log(filtroHorti)
}
produtosSec(produtos)

//** FILTROS BOTÕES */

function filtroHortifruti(){
    let horti = []
    for(let i=0; i<produtos.length;i++){
    if(produtos[i].secao === 'Hortifruti'){
        horti.push(produtos[i])
    }}
    return horti
    
}
function filtroPanific(){
    let panif = []
    for(let i=0; i<produtos.length;i++){
    if(produtos[i].secao === 'Panificadora'){
        panif.push(produtos[i])
    }}
    return panif
}
function filtroLaticinio(){
    let latic = []
    for(let i=0; i<produtos.length;i++){
    if(produtos[i].secao === 'Laticínio'){
        latic.push(produtos[i])
    }}
    return latic
}
function filtroTodos(){
    let todos = []
    for(let i=0; i<produtos.length;i++){
    if(produtos[i].class === 'comida'){
        todos.push(produtos[i])
    }}
    return todos
}
function newFunc1(){
    const ul     = document.querySelector("ul")
    ul.innerHTML = ""
    const arr = filtroHortifruti()
    produtosSec(arr)  
}
function newFunc2(){
    const ul     = document.querySelector("ul")
    ul.innerHTML = ""
    const arr = filtroPanific()
    produtosSec(arr)  
}
function newFunc3(){
    const ul     = document.querySelector("ul")
    ul.innerHTML = ""
    const arr = filtroLaticinio()
    produtosSec(arr)  
}
function newFunc4(){
    const ul     = document.querySelector("ul")
    ul.innerHTML = ""
    const arr = filtroTodos()
    produtosSec(arr)  
}



const buttonTodos        = document.querySelector(".estiloGeralBotoes--mostrarTodos")
const buttonHortifruti   = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
const buttonLacticinios  = document.querySelector(".estiloGeralBotoes--filtrarLaticinio")
const buttonPanific      = document.querySelector(".estiloGeralBotoes--filtrarPanificadora")

buttonTodos.addEventListener("click", newFunc4)
buttonHortifruti.addEventListener("click", newFunc1)
buttonLacticinios.addEventListener("click", newFunc3)
buttonPanific.addEventListener("click", newFunc2)

//** Sessão do filtro da pesquisa */

const input = document.querySelector("input")
input.addEventListener("input", pesquisa)

function pesquisa(){
    const ul     = document.querySelector("ul")
    ul.innerHTML = ""
    const arr = buscaAlgo()
    produtosSec(arr)  
}

function buscaAlgo(){
    const result = produtos.filter(produto => produto.nome.toLowerCase().includes(input.value.toLowerCase()))
    return result
}

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