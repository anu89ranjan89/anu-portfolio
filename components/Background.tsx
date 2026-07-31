"use client";

import { motion } from "framer-motion";


const particles = Array.from({length:80});


export default function Background(){


return (

<div
className="
fixed
inset-0
-z-50
overflow-hidden
bg-[#020204]
"
>


{/* Main lighting */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_35%)]
"
/>


<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.10),transparent_35%)]
"
/>





{/* Moving particles */}


{

particles.map((_,i)=>(


<motion.span

key={i}


initial={{

x:Math.random()*1400,

y:Math.random()*900,

opacity:Math.random()

}}



animate={{

y:[
null,
Math.random()*-100
],

opacity:[
0.2,
0.8,
0.2
]

}}


transition={{

duration:
5+Math.random()*8,

repeat:Infinity,

ease:"easeInOut"

}}



className="
absolute
h-[2px]
w-[2px]
rounded-full
bg-white
"

/>


))

}






{/* Floating glow bubbles */}



<motion.div

animate={{

x:[0,60,0],

y:[0,-80,0]

}}

transition={{

duration:18,

repeat:Infinity

}}


className="
absolute
top-[20%]
left-[10%]
h-72
w-72
rounded-full
bg-cyan-400/10
blur-[120px]
"

/>





<motion.div

animate={{

x:[0,-80,0],

y:[0,60,0]

}}

transition={{

duration:22,

repeat:Infinity

}}


className="
absolute
bottom-[10%]
right-[10%]
h-96
w-96
rounded-full
bg-purple-500/10
blur-[140px]
"

/>




</div>

)

}