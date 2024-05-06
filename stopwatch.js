import { getKeyByValue } from "./stopwatch-functions-backend.js"

Desiner()
OnclickStartup()
// NightMode()
// setTimeout(()=>{NightMode()},1000)
function OnclickStartup(){
    document.querySelector('.bfirst').addEventListener('click',()=>{Power()})
    document.querySelector('.bsecond').addEventListener('click',()=>{MarkCaller()})
    document.querySelector('.bthird').addEventListener('click',()=>{ResetCaller()})
    document.querySelector('.bmode').addEventListener('click',()=>{NightMode()})
    document.querySelector('.bexpand').addEventListener('click',()=>{Expand()})
    document.querySelector('body').onresize=()=>{Desiner()}
}
function NightMode(){
    if(document.querySelector('.bmode').title=='Night Mode'){
        document.body.classList.remove('body-day')
        document.querySelector('.imode').src="icons/iconfider-daymode-white.png"
        document.querySelector('.main').classList.remove('main-day')
        document.querySelector('.reset').src='icons/reset-white.png'
        document.querySelector('.photo').src='icons/flag-white.png'
        document.querySelector('.bmode').title='Day Mode'
        document.querySelector('.dflaglist-toppic').classList.remove('dflaglist-toppic-day')
        document.querySelector('.flag').classList.remove('flag-day')
        // document.querySelector('.hr').classList.remove('hr-day')
    }
    else {
        document.body.classList.add('body-day')
        document.querySelector('.imode').src="icons/iconfinder-nightmode.png"
        document.querySelector('.main').classList.add('main-day')
        document.querySelector('.reset').src='icons/reset-black.png'
        document.querySelector('.photo').src='icons/flag-black.png'
        document.querySelector('.bmode').title='Night Mode'
        document.querySelector('.dflaglist-toppic').classList.add('dflaglist-toppic-day')
        document.querySelector('.flag').classList.add('flag-day')
        // document.querySelector('.hr').classList.add('hr-day')
    }
    CollapseDesiner()
}
function Expand(){
    if(CollapseDesiner(false)<3){
        document.querySelector('.dflaglist-toppic').classList.add('dflaglist-toppic-hide')
        document.querySelector('.flag').classList.add('flag-hide')
        document.querySelector('.main').classList.add('main-down')
        document.querySelector('.bexpand').title='Collapse'
        }
    else {
        document.querySelector('.dflaglist-toppic').classList.remove('dflaglist-toppic-hide')
        document.querySelector('.flag').classList.remove('flag-hide')
        document.querySelector('.main').classList.remove('main-down')
        document.querySelector('.bexpand').title='Expand'
    }
    CollapseDesiner()
}
function CollapseDesiner(Mode=true){
    // expand-black 1
    // expand-white 2
    // collapse-black 3
    // collapse-white 4
    // change-situation true
    // return-situation false
    if(document.querySelector('.bexpand').title=='Expand'){
        if(document.querySelector('.bmode').title=='Day Mode'){
            if(Mode){
                document.querySelector('.expand-img').src='icons/2.png'
            }
            else {
                return 2
            }
        }
        else {
            if(Mode){
                document.querySelector('.expand-img').src='icons/1.png'
            }
            else {
                return 1
            }
        }
    }
    else {
        if(document.querySelector('.bmode').title=='Day Mode'){
            if(Mode){
                document.querySelector('.expand-img').src='icons/4.png'
            }
            else {
                return 4
            }
        }
        else {
            if(Mode){
                document.querySelector('.expand-img').src='icons/3.png'
            }
            else {
                return 3
            }
        }
    }
}
let i=0
function Start(){
    setInterval(()=>{Timer()},1)
    document.querySelector('.bfirst').title='Pouse'
    document.querySelector('.play').src="icons/pouse.png"
    document.querySelector('body').classList.add('body-started')
    document.querySelector('.bsecond').classList.add('bsecond-started')
    document.querySelector('.bsecond').title='Laps / Splits'
    document.querySelector('.bthird').classList.add('bthird-started')
    i++
}
function End(){
    clearInterval(i)
        document.querySelector('.bfirst').title='Start'
        document.querySelector('.play').src="icons/play.png"
        document.querySelector('body').classList.remove('body-started')
        document.querySelector('.bsecond').classList.remove('bsecond-started')
}
function Power(){
    if(document.querySelector('.bfirst').title=='Start'){
        Start()
    }
    else{
        End()
    }
}
// function SecondButtonSwitch(){
//     if(document.querySelector('.bsecond').innerText=='Reset'){
//         Reset()
//     }
//     else{
//         Mark()
//     }
// }
import { Timer } from "./stopwatch-functions-backend.js"
import { Reset } from "./stopwatch-functions-backend.js"
function ResetCaller(){
    document.querySelector('.ptimer').innerHTML=`<span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span>.<span class="milisec">00</span>`
    localStorage.setItem('time',document.querySelector('.ptimer').innerHTML)
    document.querySelector('.bthird').classList.remove('bthird-started')
    document.querySelector('.flag').innerHTML=''
    if(document.querySelector('.bfirst').title=='Pouse'){
        End()
    }
    document.querySelector('.dflaglist-toppic').innerHTML=null
    q=0
    Reset()
}
import { Mark } from "./stopwatch-functions-backend.js"
import { TimeCalculator } from "./stopwatch-functions-backend.js"
let q=0
function MarkCaller(){
    if(document.querySelector('.bfirst').title=='Pouse'){
        if(q==0){
            document.querySelector('.dflaglist-toppic').innerHTML=`<p>Laps</p><p>Time</p><p>Total</p><hr class="hr">`
        }
        document.querySelector('.flag').innerHTML=`<div class="laps">
        <p class="count">${q+1}</p>
        <p class="isFastest${q} isFastest"></p>
        </div>
        <p class="time">${TimeCalculator()}</p>
        <p class="total">${document.querySelector('.ptimer').innerText}</p>`+document.querySelector('.flag').innerHTML
        Mark()
        if(q!=0){
            isFastestReset()
            isFastestCaller('Fastest')
            isFastestCaller('Slowest')
        }
        q++
    }
}
import { isFastest } from "./stopwatch-functions-backend.js"
function isFastestReset(){
    const a=document.querySelectorAll('.isFastest')
        a.forEach(v=>{v.innerText=null})
}
function isFastestCaller(o){
    document.querySelector('.isFastest'+isFastest(o)).innerText=o
}
function Desiner(){
    if(document.querySelector('body').clientWidth<330){
        window.open('stopwatch-under360px.html')
    //     h=document.querySelector('.hour').innerText
    //     document.querySelector('.hour-colon').innerText=null
    //     document.querySelector('.hour').innerText=null
    //     document.querySelector('.under-hour').innerText=null
    }
    else{
    //     if(!document.querySelector('.hour').innerText){
    //         document.querySelector('.hour').innerText=h||'00'
    //         document.querySelector('.hour-colon').innerText=':'
    //         document.querySelector('.under-hour').innerText='hr'
    //     }
    }
}