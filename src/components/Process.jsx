import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
{
number: "01",
title: "Discover",
description:
"We understand your business, goals, target audience and project requirements.",
icon: Search,
},
{
number: "02",
title: "Design",
description:
"We plan the user experience and create a clean, modern interface for your product.",
icon: PenTool,
},
{
number: "03",
title: "Develop",
description:
"We build your solution using reliable technologies, clean code and scalable architecture.",
icon: Code2,
},
{
number: "04",
title: "Launch",
description:
"We test, deploy and help you maintain your product after launch.",
icon: Rocket,
},
];

function Process() {
return ( <section className="process section" id="process"> <div className="section-heading"> <div> <span className="section-tag">
03 — How we work </span> <h2>
From first idea <br /> <em>to final launch.</em> </h2> </div>

```
    <p>
      A transparent, collaborative process that
      keeps your project organized, efficient
      and focused on business results.
    </p>
  </div>

  <div className="process-grid">
    {steps.map((step) => {
      const Icon = step.icon;

      return (
        <article className="process-card" key={step.number}>
          <div className="process-card-top">
            <span>{step.number}</span>
            <Icon size={25} strokeWidth={1.5} />
          </div>

          <h3>{step.title}</h3>

          <p>{step.description}</p>

          <div className="process-line" />
        </article>
      );
    })}
  </div>
</section>

);
}

export default Process;
