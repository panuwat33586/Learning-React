export const choice=(items)=>{
    return items[Math.floor(Math.random()*items.length)]
    
}

export const remove=(items,item)=>{
    return items.filter(fruit=>fruit!==item)
}
