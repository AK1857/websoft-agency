import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
{
name: "Alex Morgan",
role: "Founder, Digital Business",
text: "The team understood our requirements and turned our idea into a polished digital experience. Communication was clear throughout the process.",
initials: "AM",
},
{
name: "Sarah Williams",
role: "Operations Manager",
text: "We needed a reliable technology partner who could simplify our workflow. The approach was organized, practical and focused on our goals.",
initials: "SW",
},
{
name: "Daniel Carter",
role: "Small Business Owner",
text: "From planning to delivery, the process was smooth. We appreciated the attention to detail and the focus on building a solution that could grow with us.",
initials: "DC",
},
];

function Testimonial() {
const [activeIndex, setActiveIndex] = useState(0);

const testimonial = testimonials[activeIndex];

function showPrevious() {
setActiveIndex((current) =>
current === 0 ? testimonials.length - 1 : current - 1
);
}

function showNext() {
setActiveIndex((current) =>
current === testimonials.length - 1 ? 0 : current + 1
);
}

return ( <section className="testimonial section" id="testimonials"> <div className="section-heading"> <div> <span className="section-tag">
05 — Client feedback </span>

```
      <h2>
        Built on trust.
        <br />
        <em>Driven by results.</em>
      </h2>
    </div>

    <p>
      Great partnerships begin with listening,
      clear communication and a shared vision
      for success.
    </p>
  </div>

  <div className="testimonial-card">
    <div className="testimonial-top">
      <Quote size={34} strokeWidth={1.4} />

      <div className="testimonial-stars" aria-label="5 stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={15}
            fill="currentColor"
            strokeWidth={1}
          />
        ))}
      </div>
    </div>

    <blockquote>
      “{testimonial.text}”
    </blockquote>

    <div className="testimonial-footer">
      <div className="testimonial-person">
        <div className="testimonial-avatar">
          {testimonial.initials}
        </div>

        <div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>
      </div>

      <div className="testimonial-controls">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={18} />
        </button>

        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonial"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
</section>

);
}

export default Testimonial;
