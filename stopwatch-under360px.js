Desiner()
OnclickStartup()
function OnclickStartup(){
    document.querySelector('.bfirst').addEventListener('click',()=>{Power()})
    document.querySelector('.bsecond').addEventListener('click',()=>{SecondButtonSwitch()})
    document.querySelector('body').onresize=()=>{Desiner()}
}
let i=0
function Start(){
    setInterval(()=>{Timer(false)},10)
    document.querySelector('.bsecond').innerText='Lap'
    document.querySelector('.bfirst').innerText='Stop'
    document.querySelector('.bfirst').classList.add('bfirst-stop')
    document.querySelector('.bsecond').classList.remove('bsecond-blur')
    i++
}
function End(){
    clearInterval(i)
    document.querySelector('.bsecond').innerText='Reset'
    document.querySelector('.bfirst').innerText='Resume'
    document.querySelector('.bfirst').classList.remove('bfirst-stop')
}
function Power(){
    if(document.querySelector('.bfirst').innerText=='Start'||document.querySelector('.bfirst').innerText=='Resume'){
        Start()
    }
    else{
        End()
    }
}
function SecondButtonSwitch(){
    if(document.querySelector('.bsecond').innerText=='Reset'){
        Reset()
    }
    else{
        Mark()
    }
}
import { Timer } from "./stopwatch-functions-backend.js"
function Reset(){
    document.querySelector('.ptimer').innerHTML=`<span class="min">00</span>:<span class="sec">00</span>.<span class="milisec">00</span>`
    localStorage.setItem('time',document.querySelector('.ptimer').innerHTML)
    document.querySelector('.bsecond').innerText='Lap'
    document.querySelector('.bsecond').classList.add('bsecond-blur')
    document.querySelector('.flag').innerHTML=''
    if(document.querySelector('.bfirst').title=='Pouse'){
        End()
    }
    document.querySelector('.header').innerHTML=null
    document.querySelector('.bfirst').innerText='Start'
    q=0
    timeHard=[]
}
let q=0
let last={
    hour:'00',
    minute:'00',
    second:'00',
    milisecond:'00'
}
function Mark(){
    if(document.querySelector('.bfirst').innerText=='Stop'){
        if(q==0){
            document.querySelector('.header').innerHTML=`<div class="dflaglist-toppic"><p>Lap</p><p>Lap times</p><p>Overall time</p></div><hr class="hr">`
        }
        document.querySelector('.flag').innerHTML=`<p class="l">${AddSecondDigit(q+1)}</p><p class="lt">00:04.17</p><p class="ot">${document.querySelector('.ptimer').innerText}</p>`+document.querySelector('.flag').innerHTML
        last.hour=document.querySelector('.hour').innerText
        last.minute=document.querySelector('.min').innerText
        last.second=document.querySelector('.sec').innerText
        last.milisecond=document.querySelector('.milisec').innerText
        q++
        if(q!=1){
            isFastest('Fastest')
            isFastest('Slowest')
        }
    }
}
let timeHard=[]
function TimeCalculator(){
    if(q==0){
        b=document.querySelector('.hour').innerText
        b+=document.querySelector('.min').innerText
        b+=document.querySelector('.sec').innerText
        b+=document.querySelector('.milisec').innerText
        b=Number(b)
        timeHard.push(b)
        return document.querySelector('.ptimer').innerText
    }
    else{
        last[1]=Number(document.querySelector('.milisec').innerText)-Number(last.milisecond)
        last[2]=Number(document.querySelector('.sec').innerText)-Number(last.second)
        last[3]=Number(document.querySelector('.min').innerText)-Number(last.minute)
        last[4]=Number(document.querySelector('.hour').innerText)-Number(last.hour)
        const a=[1,2,3]
        a.forEach((v,k)=>{
            if(last[v]<0){
                if(k==0){
                    last[1]+=100
                }
                else{
                    last[k+1]+=60
                }
                last[k+2]--
            }
        })
        a.push(4)
        a.forEach((v)=>{
            last[v]=AddSecondDigit(last[v])
        })
        timeHard.push(Number(String(last[4])+String(last[3])+String(last[2])+String(last[1])))
        return `${last[4]}:${last[3]}:${last[2]}.${last[1]}`
    }
}
function isFastest(o){
    if(o=='Fastest'){
        const a=document.querySelectorAll('.isFastest')
        a.forEach(v=>{v.innerText=null})
        document.querySelector('.isFastest'+getKeyByValue(timeHard,Math.min(...timeHard))).innerText=o
    }
    else{
        document.querySelector('.isFastest'+getKeyByValue(timeHard,Math.max(...timeHard))).innerText=o
    }
}
function Desiner(){
    // if(document.querySelector('body').clientWidth<330){
    //     h=document.querySelector('.hour').innerText
    //     document.querySelector('.hour-colon').innerText=null
    //     document.querySelector('.hour').innerText=null
    //     document.querySelector('.under-hour').innerText=null
    // }
    // else{
    //     if(!document.querySelector('.hour').innerText){
    //         document.querySelector('.hour').innerText=h||'00'
    //         document.querySelector('.hour-colon').innerText=':'
    //         document.querySelector('.under-hour').innerText='hr'
    //     }
    // }
}