document.querySelector('.fi').addEventListener('click',()=>{ChangeSituationSwitch('f')})
document.querySelector('.si').addEventListener('click',()=>{ChangeSituationSwitch('s')})
document.body.onresize=()=>{NotToResize()}
i=0
function NotToResize(){
    if(i==1){
        alert('We prefer you not to resize this webpage')
    }
    i++
}
let sett=JSON.parse(localStorage.getItem('sett'))||{
    f:true,
    s:true
}
Restore('f')
Restore('s')
function Restore(who){
    if(!sett[who]){
        TurnOff(who)
    }
}
function ChangeSituationSwitch(who){
    if(sett[who]){
        TurnOff(who)
    }
    else{
        TurnOn(who)
    }
    sett[who]=!sett[who]
    localStorage.setItem('sett',JSON.stringify(sett))
}
function TurnOn(who){
    document.querySelector('.'+who+'c').classList.remove('circle-false')
    document.querySelector('.'+who+'i').classList.remove('item-false')
    document.querySelector('.'+who+'t').classList.remove('title-false')
    document.querySelector('.'+who+'s').classList.remove('subtitle-false')
}
function TurnOff(who){
    document.querySelector('.'+who+'c').classList.add('circle-false')
    document.querySelector('.'+who+'i').classList.add('item-false')
    document.querySelector('.'+who+'t').classList.add('title-false')
    document.querySelector('.'+who+'s').classList.add('subtitle-false')
}
document.head.innerHTML+='<link rel="stylesheet" href="settings-transition.css">'