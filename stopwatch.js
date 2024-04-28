function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
document.querySelector('.ptimer').innerHTML=localStorage.getItem('time')||`<samp class="hour">00</samp>:<samp class="min">00</samp>:<samp class="sec">00</samp>.<samp class="milisec">00</samp>`
OnclickStartup()
function OnclickStartup(){
    document.querySelector('.bfirst').addEventListener('click',()=>{Power()})
    document.querySelector('.bsecond').addEventListener('click',()=>{Mark()})
    document.querySelector('.bthird').addEventListener('click',()=>{Reset()})
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
    document.querySelector('.ptimer').innerHTML=`<samp class="hour">00</samp>:<samp class="min">00</samp>:<samp class="sec">00</samp>.<samp class="milisec">00</samp>`
    localStorage.setItem('time',document.querySelector('.ptimer').innerHTML)
    document.querySelector('.bthird').classList.remove('bthird-started')
    document.querySelector('.flag').innerHTML=''
    if(document.querySelector('.bfirst').title=='Pouse'){
        End()
    }
    // q=0
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
            console.log('done!')
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