"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


const navItems = [

{
name:"Home",
href:"#home"
},

{
name:"About",
href:"#about"
},

{
name:"Skills",
href:"#skills"
},

{
name:"Journey",
href:"#coding"
},

{
name:"Projects",
href:"#projects"
},

{
name:"Experience",
href:"#experience"
},

{
name:"Contact",
href:"#contact"
}

];



export default function Navbar(){


const [open,setOpen] = useState(false);



return (

<header
className="
fixed
top-4
left-0
right-0
z-50
"
>


<div
className="
container
"
>


<motion.nav

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}


className="
mx-auto
max-w-5xl
glass
rounded-full
px-5
py-2.5
flex
items-center
justify-between
"

>



{/* Logo */}


<a

href="#home"

className="
flex
items-center
gap-3
font-bold
text-lg
"

>

<div

className="
h-9
w-9
rounded-full
bg-cyan-400/20
flex
items-center
justify-center
text-cyan-300
"

>

<Sparkles size={18}/>

</div>


<span>

ANU.AI

</span>


</a>






{/* Desktop Navigation */}


<div

className="
hidden
md:flex
items-center
gap-6
"

>

{

navItems.map((item)=>(


<a

key={item.name}

href={item.href}

className="
text-sm
text-gray-300
hover:text-white
transition
relative
group
"

>

{item.name}


<span

className="
absolute
left-0
bottom-[-8px]
h-[2px]
w-0
bg-cyan-400
group-hover:w-full
transition-all
duration-300
"

/>


</a>


))

}


</div>






{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-gray-300
"

>

{

open ?

<X/>

:

<Menu/>

}


</button>



</motion.nav>





{/* Mobile Menu */}


{

open && (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

className="
md:hidden
mt-4
glass
rounded-3xl
p-6
"

>


<div
className="
flex
flex-col
gap-5
"
>

{

navItems.map((item)=>(


<a

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}

className="
text-gray-300
hover:text-white
transition
"

>

{item.name}

</a>


))

}


</div>


</motion.div>

)


}




</div>


</header>

)

}