export const add  = (a,b,c,d) => {return a+b+c+d}


export const spreadadd = (...a)=>{
    let c=0;
    for(let val of a){
        c = c + val;
    }

//or
//a.foreach(val => {c = c+val})

    return c;
}
