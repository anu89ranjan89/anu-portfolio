"use client";

import { useEffect,useState } from "react";


export default function CursorGlow(){


const [position,setPosition]=useState({
x:0,
y:0
});


useEffect(()=>{


const move=(e:MouseEvent)=>{

setPosition({

x:e.clientX,

y:e.clientY

})

}


window.addEventListener(
"mousemove",
move
);


return()=>{

window.removeEventListener(
"mousemove",
move
)

}


},[])



return (

<div

style={{

left:position.x,

top:position.y

}}

className="
pointer-events-none
fixed
z-[999]
h-40
w-40
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-cyan-400/10
blur-3xl
transition-transform
duration-300
"

/>

)

}