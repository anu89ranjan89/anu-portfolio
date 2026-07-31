"use client";

import {
  Brain,
  Code2,
  Users,
  Sparkles
} from "lucide-react";

import PremiumCard from "./PremiumCard";


const profile = [

{
icon:<Brain size={24}/>,

title:"AI Engineering",

description:
"Building intelligent systems using Generative AI, Large Language Models, Machine Learning and modern AI frameworks."
},


{
icon:<Code2 size={24}/>,

title:"Full Stack Development",

description:
"Creating scalable applications with modern frontend, backend and database technologies."
},


{
icon:<Users size={24}/>,

title:"Leadership",

description:
"Serving as Training & Placement Coordinator, working on coordination, communication and career initiatives."
},


{
icon:<Sparkles size={24}/>,

title:"Innovation Mindset",

description:
"Transforming ideas into AI-powered products through experimentation, learning and continuous improvement."
}

];




export default function About(){


return (

<section
id="about"
className="
section
"
>


<div
className="
container
"
>



<div
className="
grid
lg:grid-cols-2
gap-14
items-center
"
>




{/* LEFT STORY */}


<div>


<p
className="
text-cyan-400
uppercase
tracking-widest
text-sm
"
>

My Story

</p>




<h2
className="
text-3xl
md:text-5xl
font-bold
mt-4
"
>

Building the Future
with AI

</h2>




<p
className="
text-gray-400
mt-6
leading-relaxed
text-lg
"
>

I am an AI Engineer and Generative AI developer
focused on building intelligent applications that
combine machine learning, large language models
and full-stack engineering.

</p>



<p
className="
text-gray-400
mt-5
leading-relaxed
"
>

My journey revolves around solving problems,
building products and continuously improving my
technical skills through projects, competitive
programming and innovation challenges.

</p>



<p
className="
text-gray-400
mt-5
leading-relaxed
"
>

Along with technology, I actively contribute as a
Training & Placement Coordinator, developing
leadership, communication and collaboration skills.

</p>



</div>






{/* RIGHT PROFILE CARDS */}



<div
className="
grid
gap-5
"
>


{

profile.map((item,index)=>(


<PremiumCard

key={index}

>


<div
className="
flex
gap-5
items-start
"
>


<div
className="
text-cyan-300
mt-1
"
>

{item.icon}

</div>



<div>


<h3
className="
font-bold
text-lg
"
>

{item.title}

</h3>


<p
className="
text-gray-400
text-sm
mt-2
leading-relaxed
"
>

{item.description}

</p>


</div>



</div>



</PremiumCard>


))

}



</div>




</div>




</div>


</section>

)

}