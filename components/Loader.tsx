"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Loader(){

const [loading,setLoading]=useState(true);


useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false);

},2500);


return()=>clearTimeout(timer);


},[]);



if(!loading)
return null;



return(

<motion.div

initial={{
opacity:1
}}

animate={{
opacity:0
}}

transition={{
delay:2,
duration:.5
}}

className="
fixed
inset-0
z-[100]
bg-[#050816]
flex
items-center
justify-center
"

>


<div
className="
text-center
"
>


<motion.h1

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
text-6xl
font-extrabold
gradient-text
"
>

ANU.AI

</motion.h1>



<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.5
}}

className="
mt-6
text-gray-400
tracking-widest
"

>

INITIALIZING AI ENGINE...

</motion.p>



<div
className="
mt-8
w-64
h-1
bg-white/10
rounded-full
overflow-hidden
"
>

<motion.div

initial={{
width:0
}}

animate={{
width:"100%"
}}

transition={{
duration:2
}}

className="
h-full
bg-gradient-to-r
from-purple-500
via-cyan-400
to-pink-500
"

/>


</div>



</div>



</motion.div>


)

}