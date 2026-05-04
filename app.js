const form = document.querySelector("form");
const despesa = document.getElementById("expense");
const categoria = document.getElementById("category");
const valor = document.getElementById("amount");
const ul = document.querySelector("ul")
const valorTotal = document.getElementById("total")
const totalDeDespesas = document.querySelector("#numeroDespesas")

let valorNumerico = parseFloat(valorTotal.textContent) || 0;
let valorAtualizado = valorNumerico += parseFloat(document.querySelector('li').querySelector('span.expense-amount').textContent.replace("R$", ""));
console.log(valorAtualizado)
valorTotal.innerHTML = valorAtualizado.toFixed(2);

document.querySelector(".remove-icon").addEventListener('click', ()=>{
    const valorIndividual = parseFloat(document.querySelector('li').querySelector('span.expense-amount').textContent.replace("R$", ""));
    let atualizado = parseFloat(valorTotal.textContent) - valorIndividual;
    valorTotal.textContent = atualizado.toFixed(2);
    
    
    document.querySelector(".remove-icon").closest('li').remove();

    const totalAtual = document.querySelectorAll("ul li").length;
    totalDeDespesas.textContent = totalAtual + " DESPESAS";
})


let totalLis = document.querySelectorAll("ul li").length

totalDeDespesas.textContent = totalLis + " " + "DESPESAS"


form.addEventListener("submit", (event)=>{
event.preventDefault();

const newli = document.createElement('li');
ul.append(newli)
newli.classList.add('expense')

const icone = document.createElement('img')
newli.append(icone)

const tipoDespesa = document.createElement('div')
tipoDespesa.classList.add('expense-info')
newli.append(tipoDespesa)

const nomeDespesa = document.createElement('strong')
nomeDespesa.textContent = despesa.value
tipoDespesa.append(nomeDespesa)

const span = document.createElement('span')
span.textContent = categoria[categoria.selectedIndex].text
tipoDespesa.append(span)

const gastos = document.createElement('span')
gastos.classList.add('expense-amount')
gastos.innerHTML = "<small>R$</small>" + valor.value
newli.append(gastos)


let valorNumerico = parseFloat(valorTotal.textContent) || 0;
let valorAtualizado = valorNumerico += parseFloat(valor.value)
valorTotal.textContent = valorAtualizado.toFixed(2);

const remover = document.createElement('img')
remover.classList.add('remove-icon')
remover.src = 'img/remove.svg'
newli.append(remover)

if(categoria.value === "food") {
    icone.src = 'img/food.svg'
} else if(categoria.value === "accommodation") {
    icone.src = 'img/accommodation.svg'
} else if(categoria.value === "services") {
    icone.src = 'img/services.svg' 
} else if(categoria.value === "transport") {
    icone.src = 'img/transport.svg'
} else if(categoria.value === "others") {
    icone.src = 'img/others.svg'
}

let totalLis = document.querySelectorAll("ul li").length

totalDeDespesas.textContent = totalLis + " " + "DESPESAS"

remover.addEventListener('click', ()=>{
    const valorIndividual = parseFloat(newli.querySelector('span.expense-amount').textContent.replace("R$", ""));
    let atualizado = parseFloat(valorTotal.textContent) - valorIndividual;
    valorTotal.textContent = atualizado.toFixed(2);
    
    
    remover.closest('li').remove();

    const totalAtual = document.querySelectorAll("ul li").length;
    totalDeDespesas.textContent = totalAtual + " DESPESAS";
})


form.reset();
})