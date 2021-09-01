 const {body} = document;

 function changeBackground(number){

    let prevbg;
    if(body.className){
        prevbg=body.className;
    }
     body.className='';
     switch(number){
         case '1':
             return(prevbg==='bg1'? false : body.classList.add('bg1'))
         case '2':
            return(prevbg==='bg2'? false : body.classList.add('bg2'))
         case '3':
            return(prevbg==='bg3'? false : body.classList.add('bg3'))
         default:
            break
     }
 }