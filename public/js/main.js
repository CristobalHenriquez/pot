
var boton=document.querySelector(".header__icono")
var menu=document.querySelector(".header__navigation")
var cont=0

boton.onclick=function (){
  if(cont%2==0){
  menu.classlist.add("header__navigation--active")
  menu.classlist.remove("header__navigation--disabled")
 }

 else{
 menu.classlist.remove("header__navigation--active")
 menu.classlist.add("header__navigation--disabled")
 }

  cont++
}
