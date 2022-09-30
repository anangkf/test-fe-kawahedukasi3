var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

function getModus(arr) {
 const dataObj = {};

// memetakan elemen array kedalam object dan mengumpulkannya by value
 arr.forEach((num) =>{
    if (!dataObj[num]) 
        dataObj[num] = 0;
        dataObj[num]++;
 })

 let modus = []
 let countMax = 0
 
 // mencari data yg paling banyak muncul dengan looping cnditional
 for(let key in dataObj){
     if(dataObj[key] > countMax){
         modus = [key]
         countMax = dataObj[key]
     }else if(dataObj[key] === countMax){
         modus.push(key)
     }
 }
 
//  menampilkan output
 let output = `total data paling banyak keluar adalah ${modus} dengan jumlah ${countMax}`
 console.log(output)
 return output
}

getModus(data1)
getModus(data2)
getModus(data3)