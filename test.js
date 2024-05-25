document.querySelector('.open').addEventListener('click',()=>{OpenStopWatch()})
document.querySelector('.resize').addEventListener('click',()=>{ResizeStopWatch()})
let stopwatch;
function OpenStopWatch(){
    // stopwatch=window.open('stopwatch.html','','width=377, height=450')
    // window.open('startup.html','','width=1300, height=800')
    window.open('settings.html','','width=340, height=225')
}
function ResizeStopWatch(){
    stopwatch.resizeTo(394,750)
}