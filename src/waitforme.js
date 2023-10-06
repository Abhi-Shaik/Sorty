// function waitforme(milisec) { 
//     return new Promise(resolve => { 
//         setTimeout(() => { resolve('') }, milisec); 
//     }) 
// }
function waitforme(milisec){
    const p=new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('')
        },milisec)
    });
    return p;
}
export default waitforme;