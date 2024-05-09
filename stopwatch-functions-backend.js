export function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}
function AddSecondDigit(inp){
    if(Number(inp)<10){
        return '0'+String(inp)
    }
    else {
        return inp
    }
}
// Errors :
if (localStorage.getItem('time')){
    document.querySelector('.ptimer').innerHTML=localStorage.getItem('time')
}
function AddbyOne(itm){
    document.querySelector('.'+itm).innerText=AddSecondDigit(Number(document.querySelector('.'+itm).innerText)+1)
}
export function Timer(situation=true){
    if(document.querySelector('.milisec').innerText==99){
        if(document.querySelector('.sec').innerText==59){
            if(situation){
                if(document.querySelector('.min').innerText==59){
                    AddbyOne('hour')
                    document.querySelector('.min').innerText='00'
                    document.querySelector('.sec').innerText='00'
                }
                else{
                    AddbyOne('min')
                    document.querySelector('.sec').innerText='00'
                }
            }
            else {
                if(document.querySelector('.min').innerText==99){
                    ResizeError(true)
                }
                AddbyOne('min')
                document.querySelector('.sec').innerText='00'
            }
        }
        else{
            AddbyOne('sec')
        }
        document.querySelector('.milisec').innerText='00'
    }
    else{
        AddbyOne('milisec')
    }
    localStorage.setItem('time',document.querySelector('.ptimer').innerHTML)
}
function ResizeError(situation=false){
    if(situation){
        document.querySelector('.perror').innerText=`We recomend you to resize this webpage to prevent deformation of the webpage if possible`
    }
    else{
        document.querySelector('.perror').innerText=null
    }
}
let isFirst=true
let last={
    hour:'00',
    minute:'00',
    second:'00',
    milisecond:'00'
}
export function Mark(){
    last.hour=document.querySelector('.hour').innerText
    last.minute=document.querySelector('.min').innerText
    last.second=document.querySelector('.sec').innerText
    last.milisecond=document.querySelector('.milisec').innerText
    isFirst=false
}
let timeHard=[]
let b
export function TimeCalculator(){
    if(isFirst){
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
export function isFastest(o){
    if(o=='Fastest'){
        return getKeyByValue(timeHard,Math.min(...timeHard))
    }
    else{
        return getKeyByValue(timeHard,Math.max(...timeHard))
    }
}
export function Reset(){
    console.log(b,10)
    ResizeError()
}