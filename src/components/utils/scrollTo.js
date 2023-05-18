const scrollTo = (classname, event) => {

    event.preventDefault()
    
    if(document.querySelector(`.${classname}`)){
        const object = document.querySelector(`.${classname}`)
        object.scrollIntoView({behavior: "smooth"})
    } else {
        return
    }
}

export default scrollTo
