let case1 = document.querySelector('#number-1')
let case2 = document.querySelector('#number-2')
let case3 = document.querySelector('#number-3')
let case4 = document.querySelector('#number-4')
let case5 = document.querySelector('#number-5')
let case6 = document.querySelector('#number-6')


// let test = " 7"

// if(!test){
//     console.log("il est vide")
// }else if(test){
//     console.log("il est plein")
// }

// let testo = "1"
// if(testo.match(regex)){
    //     console.log("c'est bon")
    // }
    
    // let testa = 1
    // console.log(testa)
    


let regex = /^[0-9]{1}$/

function SendCode(){
    if(!case1.value.trim() && !case2.value.trim() && !case3.value.trim() && !case4.value.trim() && !case5.value.trim() && !case6.value.trim()){
        alert('veuillez entrer le code')
    }else{
        if(case1.value.match(regex) && case2.value.match(regex) && case3.value.match(regex) && case4.value.match(regex) && case5.value.match(regex) && case6.value.match(regex)){
            alert("Merci de votre coopération")
        }else{
            alert('veuillez entrer des chiffres svp')
        }
    }
}

// document.querySelector('.foward').addEventListener('click', SendCode())
// function SendCode(){
//     console.log(case1.value)
//     console.log(case3.value)
//     console.log(case4.value)
//     console.log(case2.value)
//     console.log(case5.value)
//     console.log(case6.value)
// }