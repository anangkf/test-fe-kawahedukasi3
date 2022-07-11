var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

const validasi = (input) =>{
    let status = ""
    // slicing masing masing elemen string menjadi array agar dapat difilter sesuai kondisi
    const sliced = Array.from(input)
    
    // memfilter elemen array yg termasuk angka
    const isNum = sliced.filter((x) =>{
        return x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9 || x==0 && x!== " "
    })

    const filteredNum = isNum.join('')
    
    // menampilkan output sesuai kondisi
    if(isNum.length !== 0){
        status += `Sistem kami menolak untuk inputan berisi angka ${filteredNum}`
    }else if(isNum.length === 0){
        status += `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${input}`
    }
    console.log(status)
}

validasi(input1)
validasi(input2)
validasi(input3)
validasi(input4)