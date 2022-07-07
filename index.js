// for see details
let flex = document.getElementsByClassName("flex")
let btn1 = document.getElementsByClassName("btn1")
let moredetails = document.getElementsByClassName("more-details")

// for(i=0;i<btn1.length;i++){
//     btn1[i].addEventListener("click",function(){
//         moredetails[i].classList.toggle("active")
        
//     })
// }
let input = document.getElementsByTagName("input")
let flexby = document.getElementsByClassName("flex-by")
let Filter = document.getElementsByClassName("filter")
let forarea = document.getElementsByClassName("for-area")
let forlocation = document.getElementsByClassName("for-location")
let look = document.getElementsByClassName("look")
let forprice  = document.getElementsByClassName("for-price")
let forbhk = document.getElementsByClassName("for-bhk")
let loaction = document.getElementById("location")
let locaTion = document.getElementsByClassName("location")
let bhks = document.getElementsByClassName("bhks")


Filter[0].addEventListener("click",function(){
    flexby[0].classList.toggle("active")
    forarea[0].classList.remove("active1")
    forlocation[0].classList.remove("active2")
    forprice[0].classList.remove("active2")
    forbhk[0].classList.remove("active2")

})
// for area list
    look[0].addEventListener("click",function(){
         forarea[0].classList.toggle("active1")
         forlocation[0].classList.remove("active2")
        forprice[0].classList.remove("active2")
        forbhk[0].classList.remove("active2")
    })
// for location list
    look[1].addEventListener("click",function(){
         forlocation[0].classList.toggle("active2")
         forarea[0].classList.remove("active1")
        forprice[0].classList.remove("active2")
        forbhk[0].classList.remove("active2")
    })
    // for price
    look[2].addEventListener("click",function(){
        forprice[0].classList.toggle("active2")
        forarea[0].classList.remove("active1")
        forlocation[0].classList.remove("active2")
        forbhk[0].classList.remove("active2")
   })
   // for bhk
   look[3].addEventListener("click",function(){
    forbhk[0].classList.toggle("active2")
    forarea[0].classList.remove("active1")
    forlocation[0].classList.remove("active2")
    forprice[0].classList.remove("active2")
})


//apply filter
let applyFilter = document.getElementsByClassName("apply-filter");
applyFilter[0].addEventListener("click",function(){

// location wise filter

    let checkbox = document.querySelector('input[type="checkbox"]:checked');
    let x = checkbox.value;
    // console.log(x)
    // console.log(typeof(x))
    for(i=0;flex.length;i++){
        if(x == input[i].value ){
            // console.log((i-27))
            // if(bhks[0].innerHTML[15] == (i-27)){
            //     console.log(bhks[0].innerHTML[15])

            //     // console.log(i)
            // flex[i].style.display = 'flex'
            // }
            // console.log(typeof(input[i].value))

            
                
            



            for(let p of flex){
            p.style.display = 'none'
            
            }
            flex[i-4].style.display = 'flex'
}
let h = bhks[i].innerHTML[15];
if(h == x[0]){
    // console.log(i.length)
    for(let q of flex){
        q.style.display = 'none'
        // console.log(q)
    }

    flex[i].style.display = 'flex'
        break;
    
    // console.log(flex[g])

    // console.log(x[0])
    // console.log(bhks[i].innerHTML[15])
    // console.log(i)

}


}
// area wise filter

})

