const { count } = require('console');
const fs = require('fs');
const readXlsxFile  = require('read-excel-file/node')
function readCustomFile (path){
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err)
            throw err
        let count = data.trim().split(' ').reduce((c,word)=>{
            return c+=word!=' '&&word!=''?1:0            
        },0)
        console.log(`File in path '${path}', has ${count} words in it`)
    })
}
function readCustomExcelFile(path){
    readXlsxFile(path)
    .then((rows)=>{
    let count = rows.reduce((c,row,i)=>{
        if(i==0)
            return 0;
        return c+=row[1]
    },0)
    console.log(`The Class AVG grade is ${(count/(rows.length-1)).toFixed(3)}`)
})
}
readCustomFile('./text.txt')
readCustomExcelFile('./students.xlsx')