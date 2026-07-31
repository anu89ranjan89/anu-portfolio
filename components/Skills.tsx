"use client";

import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Wrench
} from "lucide-react";

import PremiumCard from "./PremiumCard";


const skillGroups = [

{
title:"Generative AI Core",

icon:<BrainCircuit size={30}/>,

skills:[
"LLMs",
"RAG",
"LangChain",
"Prompt Engineering",
"Groq API",
"Hugging Face",
"OpenAI API"
]

},



{
title:"Machine Learning",

icon:<Layers size={30}/>,

skills:[
"Python",
"Scikit-learn",
"XGBoost",
"Random Forest",
"Pandas",
"NumPy",
"Model Evaluation"
]

},



{
title:"Full Stack Engineering",

icon:<Code2 size={30}/>,

skills:[
"React",
"Next.js",
"TypeScript",
"FastAPI",
"Tailwind CSS",
"REST APIs",
"JWT Authentication"
]

},



{
title:"Database & Cloud",

icon:<Database size={30}/>,

skills:[
"PostgreSQL",
"MySQL",
"Firebase",
"Vector Database",
"Git",
"GitHub"
]

},



{
title:"Developer Toolkit",

icon:<Wrench size={30}/>,

skills:[
"VS Code",
"Docker",
"Postman",
"Streamlit",
"Linux",
"API Integration"
]

}


];




export default function Skills(){


return (

<section
id="skills"
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

Technical Arsenal

</p>



<h2
className="
text-4xl
md:text-5xl
font-bold
mt-4
"
>

Skills & Technologies

</h2>



<p
className="
text-gray-400
max-w-2xl
mx-auto
mt-4
"
>

A combination of artificial intelligence,
software engineering and problem-solving
skills to build complete intelligent systems.

</p>



</div>






<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"
>


{

skillGroups.map((group,index)=>(


<PremiumCard

key={index}

>


<div
className="
text-cyan-300
mb-5
"
>

{group.icon}

</div>



<h3
className="
text-xl
font-bold
"
>

{group.title}

</h3>




<div
className="
flex
flex-wrap
gap-3
mt-6
"
>


{

group.skills.map((skill,i)=>(


<span

key={i}

className="
px-3
py-2
rounded-xl
text-sm
bg-white/5
border
border-white/10
text-gray-300
hover:text-white
hover:border-cyan-400/50
transition
"

>

{skill}

</span>


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