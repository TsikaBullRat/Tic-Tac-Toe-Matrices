var trigger = false

const On = () =>{
    let main_box = document.getElementsByTagName("nav")
    let size = document.getElementsByTagName("div")

    trigger = true

    main_box[0].style.transform = "scale(3)"
    for(var i = 0; i < size.length; i++)size[i].style.transform = "scale(3)"

}