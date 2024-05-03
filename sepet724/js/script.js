const buton1 = document.querySelector("#buton1")

buton1.addEventListener( "click" , ()=> {
    temaDegistir( "lightyellow" , "orange")
 })
 const buton2 = document.querySelector("#buton2")
 
 buton2.addEventListener( "click" , ()=> {
    temaDegistir( "lightgreen" , "gray")
 })
 const temizle = document.querySelector("#buton3")
 
 temizle.addEventListener( "click" , ()=> {
    temaDegistir( "" , "") //renk ismini tekrar yazmana gerek yok zaten sistemde kayıtlı boş satır olunca default renkleri getirir.
 
 })

function temaDegistir( arkaplan, renk) {
    document.body.style.backgroundColor = arkaplan
    document.body.style.color = renk
}


const buton3 = document.querySelector("#yazi-buyut")
const buton4 = document.querySelector("#yazi-kucult")

buton3.addEventListener( "click" , ()=> { yaziBuyut() } )

buton4.addEventListener( "click" , ()=> { yaziKucult() } )

function yaziBuyut() {
    const h1Basliklari = document.querySelectorAll("h1") //coklu eleman icin All olanı kullandık.
    const h2Basliklari = document.querySelectorAll("h2")

  //debugger - tarayıcıyı durdurur ve hata ayıklamanı sağlar, "breakpoint" denebilir

    h1Basliklari.forEach( (baslik)=> {
        const baslikYaziBoyutu = getComputedStyle(baslik).fontSize
        baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) + 5}px`
    } )
    
    h2Basliklari.forEach( (baslik)=> {
        const baslikYaziBoyutu = getComputedStyle(baslik).fontSize
        baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) + 5}px`
    } )
    
}

function yaziKucult() {
    const h1Basliklari = document.querySelectorAll("h1") //coklu eleman icin All olanı kullandık.
    const h2Basliklari = document.querySelectorAll("h2")

    h1Basliklari.forEach( (baslik)=> {
        const baslikYaziBoyutu = getComputedStyle(baslik).fontSize
        baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) - 5}px`
    } )
    
    h2Basliklari.forEach( (baslik)=> {
        const baslikYaziBoyutu = getComputedStyle(baslik).fontSize
        baslik.style.fontSize = `${parseInt(baslikYaziBoyutu) - 5}px`
    } )
}