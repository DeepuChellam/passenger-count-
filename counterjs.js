//let counter=5 + 5
//console.log(counter)

//let myage=23
//let humandogratio=10
//let mydogage= myage*humandogratio
//console.log(mydogage)
//---------
//to reflect the result in the html page
let countEl=document.getElementById("count-el")

let saveEl= document.getElementById("save-el")
console.log(countEl)
let count=0

function increment() {
    
    count= count +1 //or count+=1
    countEl.textContent     = count

    console.log(count)
   

}

function save() {
   let value = count
   let separator = " - "
   let kunju = value + separator
   saveEl.textContent+= kunju
   countEl.textContent=0
   count=0

    console.log(count)
}




