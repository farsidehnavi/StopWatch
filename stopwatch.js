function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
document.querySelector('.ptimer').innerHTML=localStorage.getItem('time')||`<span class="hour">00</span><span class="hour-colon">:</span><span class="min">00</span>:<span class="sec">00</span>.<span class="milisec">00</span>`
Desiner()
OnclickStartup()
// NightMode()
// setTimeout(()=>{NightMode()},1000)
function OnclickStartup(){
    document.querySelector('.bfirst').addEventListener('click',()=>{Power()})
    document.querySelector('.bsecond').addEventListener('click',()=>{Mark()})
    document.querySelector('.bthird').addEventListener('click',()=>{Reset()})
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
    }
    else {
        document.body.classList.add('body-day')
        document.querySelector('.imode').src="icons/iconfinder-nightmode.png"
        document.querySelector('.main').classList.add('main-day')
        document.querySelector('.reset').src='icons/reset-black.png'
        document.querySelector('.photo').src='icons/flag-black.png'
        document.querySelector('.bmode').title='Night Mode'
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
function Timer(){
    if(document.querySelector('.milisec').innerText==99){
        if(document.querySelector('.sec').innerText==59){
            if(document.querySelector('.min').innerText==59){
                document.querySelector('.hour').innerText=Number(document.querySelector('.hour').innerText)+1
                document.querySelector('.min').innerText='00'
                document.querySelector('.sec').innerText='00'
                if(document.querySelector('.hour').innerText<10){
                    document.querySelector('.hour').innerText='0'+document.querySelector('.hour').innerText
                }
            }
            else{
                document.querySelector('.min').innerText=Number(document.querySelector('.min').innerText)+1
                document.querySelector('.sec').innerText='00'
                if(document.querySelector('.min').innerText<10){
                    document.querySelector('.min').innerText='0'+document.querySelector('.min').innerText
                }
            }
        }
        else{
            document.querySelector('.sec').innerText=Number(document.querySelector('.sec').innerText)+1
            if(document.querySelector('.sec').innerText<10){
                document.querySelector('.sec').innerText='0'+document.querySelector('.sec').innerText
            }
        }
        document.querySelector('.milisec').innerText='00'
    }
    else{
        document.querySelector('.milisec').innerText=Number(document.querySelector('.milisec').innerText)+1
        if(document.querySelector('.milisec').innerText<10){
            document.querySelector('.milisec').innerText='0'+document.querySelector('.milisec').innerText
        }
    }
    localStorage.setItem('time',document.querySelector('.ptimer').innerHTML)
}
function Reset(){
    document.querySelector('.ptimer').innerHTML=`<span class="hour">00</span><span class="hour-colon">:</span><span class="min">00</span>:<span class="sec">00</span>.<span class="milisec">00</span>`
    localStorage.setItem('time',document.querySelector('.ptimer').innerHTML)
    document.querySelector('.bthird').classList.remove('bthird-started')
    document.querySelector('.flag').innerHTML=''
    if(document.querySelector('.bfirst').title=='Pouse'){
        End()
    }
    document.querySelector('.dflaglist-toppic').innerHTML=null
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
            if(Number(last[v])<10){
                last[v]='0'+String(last[v])
            }
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