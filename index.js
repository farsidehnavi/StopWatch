document.querySelector('.open').addEventListener('click',()=>{OpenStopWatch()})
document.querySelector('.resize').addEventListener('click',()=>{ResizeStopWatch()})
let stopwatch;
function OpenStopWatch(){
    stopwatch=window.open('stopwatch.html','','width=377, height=450')
}
function ResizeStopWatch(){
    stopwatch.resizeTo(394,750)
}