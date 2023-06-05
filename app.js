let hrs = document.querySelector('.hrs');
let mns = document.querySelector('.mns');
let sec = document.querySelector('.sec');
let maridian = document.querySelector('.maridian');
let selectData =document.querySelectorAll('select');
let body = document.querySelector('body');
let s_btn = document.querySelector('.s_btn');
let selectarea = document.querySelectorAll('select-area');
let dtime = document.querySelector('.dtime');
let dis = document.querySelector('.dis');
let anim = document.querySelector('.anim');

let alarm,calarm ;
let takeampm;

let sound = new Audio("mixkit-security-facility-breach-alarm-994.wav")


for(let index = 1; index <=12;index++){

    if(index <=9){
        index =`0${index}`;
    }
    else{
        index = index;
    }

let option = `<option value="${index}">${index}</option>`;
selectData[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let index = 0;index <=59 ; index++ ){

    if(index <=9){
        index =`0${index}`;
    }
    else{
        index = index;
    }


let  option = `<option value="${index}">${index}</option>`;
selectData[1].firstElementChild.insertAdjacentHTML('afterend',option)
}



for(let index =1;index <= 2;index++){
    let am_pm;
    if(index==2){
        am_pm ='AM'
    }
    else {
        am_pm ='PM'
    }
    
    let option = `<option value = '${am_pm}'>${am_pm}</option>`;
    selectData[2].firstElementChild.insertAdjacentHTML('afterend',option);
}



function presentTime(){
let date = new Date();
let presentHours =  date.getHours();
let presentMinutes = date.getMinutes();
let presentSeconds = date.getSeconds();
let ampm =  date.getHours() < 12 ? 'AM' :'PM';



if(presentHours > 12){
    presentHours -=12
}
else if(presentHours ==0){
presentHours =12
}

else{
    presentHours
}


    hrs.innerHTML =  appendZero( presentHours) 
    mns.innerHTML = appendZero(presentMinutes) 
    sec.innerHTML = appendZero(presentSeconds)
    maridian.innerHTML = ampm
    
   
    
   if(alarm === `${appendZero(presentHours)}:${appendZero(presentMinutes)} ${ampm}`){
    anim.style.display = 'block'
    dis.style.display = 'none'
    sound.play();
   }
   
    
    
}

let appendZero = (value)=> value <10 ?'0'+value : value ;

setInterval(presentTime,1000)

   function change(){
    
if(  `${selectData[0].value}` != "hours" &`${selectData[1].value}` != "minutes"& `${selectData[2].value}` != "campm"  ) {
    
        s_btn.disabled =false;
        s_btn.style.opacity = '1';
    }
    
 }
 



s_btn.addEventListener('click',()=>{
    if(calarm){
    
        sound.pause();
        alarm = '';
        anim.style.display = 'none';
        dis.style.display = 'block'
        dtime.style.display ='none'
        selectData.forEach( (element)=>{
            element.style.display = 'block';
            selectData[0].value = 'hours'
            selectData[1].value = 'minutes'
            selectData[2].value = 'campm'
            
            
          });
          
           
          s_btn.disabled =true;
          s_btn.style.opacity = '.2'
          change()
          s_btn.innerText = 'Set Alarm';
        
          return (calarm =false);
        }

    
    let time ;
    time = `${selectData[0].value}:${selectData[1].value} ${selectData[2].value}`;
    alarm = time;
    calarm = true;
  selectData.forEach( (element)=>{
    element.style.display = 'none';
  })
  dis.style.display = 'block';
 
  dtime.innerText = `Alarm set for ${time} `
  dtime.style.display ='block'

  s_btn.innerText = 'Clear Alarm';
    
})


