"use client";

import {
  Users,
  Trophy,
  Rocket,
  BriefcaseBusiness
} from "lucide-react";

import PremiumCard from "./PremiumCard";


const experiences = [

{
icon:<BriefcaseBusiness size={30}/>,

title:"Training & Placement Coordinator",

subtitle:"Leadership Role",

description:
"Coordinating placement activities, supporting communication between students and recruiters, and helping create better career opportunities for students.",

points:[
"Recruiter & student coordination",
"Managing placement activities",
"Leadership and communication"
]

},



{
icon:<Trophy size={30}/>,

title:"Hackathon Builder",

subtitle:"Innovation Experience",

description:
"Participated in problem-solving challenges and built technology solutions under time constraints with a focus on innovation.",

points:[
"Rapid prototyping",
"Team collaboration",
"Real-world problem solving"
]

},



{
icon:<Rocket size={30}/>,

title:"AI Product Builder",

subtitle:"Engineering Journey",

description:
"Building AI-powered applications by combining Generative AI, Machine Learning and Full Stack Development.",

points:[
"LLM applications",
"AI automation",
"End-to-end products"
]

},



{
icon:<Users size={30}/>,

title:"Community & Learning",

subtitle:"Continuous Growth",

description:
"Actively improving technical skills through coding platforms, projects and sharing the learning journey.",

points:[
"DSA practice",
"Technical communities",
"Building in public"
]

}


];




export default function Leadership(){


return (

<section
id="leadership"
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
text-center
mb-16
"
>


<p
className="
text-cyan-400
uppercase
tracking-widest
text-sm
"
>
Beyond Code
</p>



<h2
className="
text-4xl
md:text-5xl
font-bold
mt-4
"
>

Leadership & Innovation

</h2>


<p
className="
text-gray-400
mt-4
max-w-2xl
mx-auto
"
>

Technology is not only about writing code.
It is about leadership, collaboration and
creating meaningful solutions.

</p>


</div>





<div
className="
grid
md:grid-cols-2
gap-8
"
>


{

experiences.map((item,index)=>(


<PremiumCard

key={index}

>


<div
className="
text-cyan-300
"
>

{item.icon}

</div>




<h3
className="
text-2xl
font-bold
mt-5
"
>

{item.title}

</h3>




<p
className="
text-cyan-300
text-sm
mt-2
"
>

{item.subtitle}

</p>




<p
className="
text-gray-400
mt-5
leading-relaxed
"
>

{item.description}

</p>





<div
className="
mt-6
space-y-3
"
>


{

item.points.map((point,i)=>(

<div

key={i}

className="
flex
items-center
gap-2
text-sm
text-gray-300
"

>

<span
className="
h-2
w-2
rounded-full
bg-cyan-400
"
/>

{point}


</div>

))

}


</div>




</PremiumCard>



))

}


</div>



</div>


</section>

)

}