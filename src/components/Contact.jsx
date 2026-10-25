import { useState } from "react";
import {
ArrowUpRight,
Mail,
MapPin,
MessageCircle,
} from "lucide-react";

const initialForm = {
name: "",
email: "",
service: "",
message: "",
};

function Contact() {
const [form, setForm] = useState(initialForm);
const [status, setStatus] = useState("");

function handleChange(event) {
const { name, value } = event.target;

setForm((previousForm) => ({
  ...previousForm,
  [name]: value,
}));

setStatus("");


}

function handleSubmit(event) {
event.preventDefault();


const subject = encodeURIComponent(
  `Project inquiry from ${form.name}`
);

const body = encodeURIComponent(
  `Name: ${form.name}\n` +
  `Email: ${form.email}\n` +
  `Service: ${form.service}\n\n` +
  `Project details:\n${form.message}`
);

setStatus("Opening your email application...");

window.location.href =
  `mailto:hello@websoft.agency?subject=${subject}&body=${body}`;


}

return ( <section className="contact section" id="contact"> <div className="contact-layout"> <div className="contact-content"> <span className="section-tag">
06 — Let's connect </span>


      <h2>
        Have a project
        <br />
        <em>in mind?</em>
      </h2>

      <p className="contact-description">
        Tell us what you're planning. Whether you need
        a website, a custom application or ongoing IT
        support, let's discuss how we can help.
      </p>

      <div className="contact-details">
        <div className="contact-detail">
          <span className="contact-detail-icon">
            <Mail size={19} />
          </span>
          <div>
            <small>Email us</small>
            <a href="mailto:hello@websoft.agency">
              hello@websoft.agency
            </a>
          </div>
        </div>

        <div className="contact-detail">
          <span className="contact-detail-icon">
            <MessageCircle size={19} />
          </span>
          <div>
            <small>Project inquiries</small>
            <span>We'd love to hear your idea</span>
          </div>
        </div>

        <div className="contact-detail">
          <span className="contact-detail-icon">
            <MapPin size={19} />
          </span>
          <div>
            <small>Working model</small>
            <span>Remote collaboration</span>
          </div>
        </div>
      </div>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>Tell us about your project</h3>
        <p>Fields marked with * are required.</p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Your name *</label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Email address *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-service">What do you need? *</label>
        <select
          id="contact-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI / UX Design</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Cloud & DevOps">Cloud & DevOps</option>
          <option value="Automation & AI">Automation & AI</option>
          <option value="IT Support">IT Support</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Project details *</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your idea, requirements and goals..."
          rows={5}
          required
        />
      </div>

      <button type="submit" className="btn-primary contact-submit">
        Send project inquiry
        <ArrowUpRight size={17} />
      </button>

      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  </div>
</section>

);
}

export default Contact;
