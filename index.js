let a
setInterval(()=>{TimeReloade()})
function TimeReloade(){
    a=Date().split(' ',5)[4].split(':')
    document.querySelector('.hour').innerText=a[0]
    document.querySelector('.minute').innerText=a[1]
    document.querySelector('.second').innerText=a[2]
}
document.querySelector('button').addEventListener('click',()=>{OpenStopWatch()})
window.onresize=()=>MobileView()
let isMobileView=false
MobileView()
function MobileView(){
    if(window.innerWidth<window.innerHeight){
        if(!isMobileView){
            MobileViewOn()
        }
    }
    else {
        if(isMobileView){
            MobileViewOff()
        }
    }
}
function MobileViewOn(){
    alert('height'+window.innerHeight+'width'+window.innerWidth)
    alert('outerheight'+window.outerHeight+'outerwidth'+window.outerWidth)
    document.querySelector('.stylesheet').innerHTML='<link rel="stylesheet" href="index-mobileView.css">'
    isMobileView=true
    console.log('done')
}
function MobileViewOff(){
    document.querySelector('.stylesheet').innerHTML=''
    isMobileView=false
}
function OpenStopWatch(){
    window.open('stopwatch.html','','width=377, height=450')
}