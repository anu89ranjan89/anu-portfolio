"use client";

import {
  useRef,
  useState
} from "react";

import { motion } from "framer-motion";



interface PremiumCardProps {

children: React.ReactNode;

className?: string;

}



export default function PremiumCard({

children,

className=""

}:PremiumCardProps){



const cardRef = useRef<HTMLDivElement>(null);


const [rotate,setRotate] = useState({

x:0,

y:0

});


const [mouse,setMouse] = useState({

x:50,

y:50

});





function handleMouseMove(
e:React.MouseEvent<HTMLDivElement>
){


const card =
cardRef.current;


if(!card)
return;



const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
((y / rect.height)-0.5)*-10;


const rotateY =
((x / rect.width)-0.5)*10;



setRotate({

x:rotateX,

y:rotateY

});



setMouse({

x:(x/rect.width)*100,

y:(y/rect.height)*100

});


}




function resetCard(){

setRotate({

x:0,

y:0

});

}





return (

<motion.div


ref={cardRef}


initial={{

opacity:0,

y:40

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

duration:.6

}}



onMouseMove={handleMouseMove}


onMouseLeave={resetCard}



style={{

transform:

`
perspective(1000px)
rotateX(${rotate.x}deg)
rotateY(${rotate.y}deg)
`

}}



className={`
relative
group
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.05]
backdrop-blur-xl
p-7
transition-transform
duration-300
${className}
`}



>



{/* Cursor spotlight */}



<div

style={{

background:

`
radial-gradient(
circle at ${mouse.x}% ${mouse.y}%,
rgba(34,211,238,0.18),
transparent 40%
)
`

}}



className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition
duration-500
"

/>






{/* Animated border glow */}



<div

className="
absolute
inset-0
rounded-3xl
opacity-0
group-hover:opacity-100
transition
duration-500
shadow-[0_0_50px_rgba(34,211,238,0.15)]
"

/>







{/* Top light reflection */}



<div

className="
absolute
top-0
left-0
right-0
h-px
bg-gradient-to-r
from-transparent
via-cyan-400/50
to-transparent
opacity-0
group-hover:opacity-100
transition
"

/>







<div

className="
relative
z-10
"

>

{children}

</div>




</motion.div>

)

}