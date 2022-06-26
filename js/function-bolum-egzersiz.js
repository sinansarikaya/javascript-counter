

let counter = localStorage.getItem("counter") ? Number(localStorage.getItem('counter')) : 0
let counterDOM  = document.getElementById("counter")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")

counterDOM.innerHTML = counter

increase.addEventListener("click", clickEvent) 
decrease.addEventListener("click", clickEvent) 

function clickEvent() {


    this.id == "increase" ? 
    counterDOM.innerHTML = counter += 1 : 
    counterDOM.innerHTML = counter -= 1 ;

    localStorage.setItem("counter", counter)

    /* ikinci yontem uzun olan
    if(this.id == "increase") {
        counterDOM.innerHTML = counter += 1

    } else if (this.id == "decrease") {
        counterDOM.innerHTML = counter -= 1

    }
    */
    
}




