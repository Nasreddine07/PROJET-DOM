function UpdateTotalPrice(){
    const price = document.getElementsByClassName('price')
    let sum =0;
    for (let i = 0; i < price.length; i++) {
        sum += parseInt(price[i].innerHTML)
    }
    let PRIX_Total = document.getElementById('total-price')
    PRIX_Total.innerHTML = sum
}

let btnPlus = document.getElementsByClassName('plus-btn')
for (let i =0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(e){
        let qte = e.target.nextElementSibling
        qte.innerHTML = +(qte.innerHTML) +1
        const PRIX_UNITAIRE = e.target.nextElementSibling.nextElementSibling.nextElementSibling
        let prix = e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
        prix.innerHTML = +(PRIX_UNITAIRE.innerHTML) * parseInt(qte.innerHTML) 
        UpdateTotalPrice()
        
    })
}

let sustractionbtn = document.getElementsByClassName('sustraction-btn')
for (let i =0;i<sustractionbtn.length;i++){
    sustractionbtn[i].addEventListener('click',function(e){
        let qte = e.target.previousElementSibling
        if (qte.innerHTML>0){
            qte.innerHTML = +(qte.innerHTML) -1
        }
        const PRIX_UNITAIRE = e.target.nextElementSibling
        let prix = e.target.nextElementSibling.nextElementSibling.nextElementSibling
        prix.innerHTML = +(PRIX_UNITAIRE.innerHTML) * parseInt(qte.innerHTML) 
        UpdateTotalPrice()
        
    })
}
var heartBtn = document.getElementsByClassName('fa-heart')
for (let el of heartBtn ) {
    el.addEventListener('click',function(e){
        e.target.classList.toggle('red')
    })
}

let deleteBtn = document.getElementsByClassName('delete-btn')
for (let heart of deleteBtn) {
    heart.addEventListener('click',function(e){
       e.target.parentElement.remove()
       UpdateTotalPrice()
    })
   
}
