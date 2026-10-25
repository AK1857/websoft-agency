import {
    ArrowUpRight,
    } from "lucide-react";
    
    function Footer() {
    return ( <footer className="footer"> <div className="footer-main"> <div className="footer-brand"> <a href="#home" className="logo"> <span className="logo-mark">W</span> <span>
    web<span className="logo-accent">soft</span> </span> </a>
    
    
          <p>
            We build digital products, web applications
            and technology solutions that help businesses
            move forward.
          </p>
    
          <a href="#contact" className="footer-cta">
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </div>
    
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Our work</a>
            <a href="#process">Our process</a>
            <a href="#about">About us</a>
          </div>
    
          <div>
            <h4>Services</h4>
            <a href="#services">Web development</a>
            <a href="#services">UI / UX design</a>
            <a href="#services">Mobile apps</a>
            <a href="#services">Cloud & DevOps</a>
            <a href="#services">IT support</a>
          </div>
    
          <div>
            <h4>Get in touch</h4>
            <a href="mailto:hello@websoft.agency">
              hello@websoft.agency
            </a>
    
            {/* <div className="footer-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                
              >
                
              </a>
    
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
    
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} WebSoft. All rights reserved.
        </p>
    
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>

    
    );
    }
    
    export default Footer;
    