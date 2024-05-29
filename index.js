let a
setInterval(()=>{TimeReloade()})
function TimeReloade(){
    a=Date().split(' ',5)[4].split(':')
    document.querySelector('.hour').innerText=a[0]
    document.querySelector('.minute').innerText=a[1]
    document.querySelector('.second').innerText=a[2]
}
document.querySelector('button').addEventListener('click',()=>{OpenStopWatch()})
let b
function OpenStopWatch(){
    b=window.open('stopwatch.html','','width=377, height=450')
    console.log(b)
    b.onresize=()=>b.resizeTo(377,450)
}
// export function WindowIDReturner(){
//     return b
// }