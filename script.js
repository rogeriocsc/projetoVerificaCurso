const caixaCurso = document.querySelector("#caixaCurso")
const curso = ["CURSO A","CURSO B","CURSO C","CURSO D","CURSO E","CURSO F","CURSO G",]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const resposta = document.getElementById("resposta")

curso.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCurso.appendChild(novoElemento)
})

const radioSelecionado=()=> {
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((el, ind, arr)=>{
        return el.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        resposta.innerHTML=("Curso Selecionado: " + cursoSelecionado)
        // alert("Curso Selecionado: " + cursoSelecionado)
    } else {
        alert("Selecione um Curso")
    }   
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
        resposta.innerHTML=("Curso Removido! ")
    } else {
        alert("Selecione um Curso")
    } 
})
