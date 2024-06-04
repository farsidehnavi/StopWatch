let a
setInterval(()=>{TimeReloade()})
function TimeReloade(){
    a=Date().split(' ',5)[4].split(':')
    document.querySelector('.hour').innerText=a[0]
    document.querySelector('.minute').innerText=a[1]
    document.querySelector('.second').innerText=a[2]
}
document.querySelector('button').addEventListener('click',()=>{OpenStopWatch()})
window.onresize=()=>MobileView();BackgroundImgResizer()
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
    document.querySelector('.stylesheet').innerHTML='<link rel="stylesheet" href="index-mobileView.css">'
    isMobileView=true
    console.log('done')
}
function MobileViewOff(){
    document.querySelector('.stylesheet').innerHTML=''
    isMobileView=false
}
function BackgroundImgResizer(){
    // document.querySelector('.background-img').style.height=String(window.innerHeight)+'px'
}
function OpenStopWatch(){
    window.open('stopwatch.html','','width=377, height=462')
}