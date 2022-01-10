let Body = {
  setColor:function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
let Links = {
  setColor:function(color){
    // let alist = document.querySelectorAll('a');
    //
    // for(let i=0; i<alist.length; i++){
    //   alist[i].style.color=color;
    // }

    $('a').css('color',color)
  }
}
function nightDayHandler(self){
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue')
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue')
  }
}
