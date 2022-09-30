const segitigaKiri = (col) =>{

    for(let i=0; i<col; i++){
        let pola = ""
        for(let n=0; n<col; n++){
            pola += "*"
            console.log(pola)
        }
    return pola
    }
}

segitigaKiri(6)

const segitigaKanan = (col) =>{
    let pola = ''
    for(let i=col; i>0; i--){
        for(let n=1; n<=col; n++){
            if(n>=i){
                pola += '*'
            }else{
                pola += ' '
            }
        }
        pola += '\n' 
    }
    console.log(pola)
    return pola
}

segitigaKanan(5)