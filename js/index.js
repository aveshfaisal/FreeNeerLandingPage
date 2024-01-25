let smb = document.getElementById("small_business")
let business_event = document.getElementById("business_events")
let npo = document.getElementById("non_profits")


//Cards

let smbCard  = document.querySelector(".smb_card")
let businessCard  = document.querySelector(".business_event_card")
let nProfitCard  = document.querySelector(".non_profit_card")

window.onload = function () {
    smb.classList.add("active")
    
    // cards
    smbCard.classList.remove("d-none")
}

business_event.addEventListener("click", function (event){
    smb.classList.remove("active")
    business_event.classList.add("active")
    npo.classList.remove("active")

    //Cards
    businessCard.classList.remove("d-none")
    smbCard.classList.add("d-none")
    nProfitCard.classList.add("d-none")

    
})
smb.addEventListener("click", function (event){
    smb.classList.add("active")
    business_event.classList.remove("active")
    npo.classList.remove("active")

    //Cards
    businessCard.classList.add("d-none")
    smbCard.classList.remove("d-none")
    nProfitCard.classList.add("d-none")

    
})
npo.addEventListener("click", function (event){
    smb.classList.remove("active")
    business_event.classList.remove("active")
    npo.classList.add("active")

    //Cards
    businessCard.classList.add("d-none")
    smbCard.classList.add("d-none")
    nProfitCard.classList.remove("d-none")

    
})