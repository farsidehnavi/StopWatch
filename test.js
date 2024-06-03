document.querySelector('.open').addEventListener('click',()=>{OpenStopWatch()})
document.querySelector('.resize').addEventListener('click',()=>{ResizeStopWatch()})
let stopwatch;
function OpenStopWatch(){
    // stopwatch=window.open('stopwatch.html','','width=377, height=450')
    window.open('index.html','','width=400, height=800')// 'width=1300, height=800'
    // window.open('settings.html','','width=340, height=225')
    // window.open('about.html','','width=650, height=500')
}
function ResizeStopWatch(){
    stopwatch.resizeTo(394,750)
}