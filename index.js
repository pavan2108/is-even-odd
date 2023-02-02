const isEven = (num) => {
    if(typeof num === "number")
    {
        if(num%2===0)
        {
            return true
        }
    }
    return false
}

const isOdd = (num) => {
    if(typeof num === "number")
    {
        if(num%2!==0)
        {
            return true
        }
    }
    return false
}



export {
    isEven,
    isOdd
}