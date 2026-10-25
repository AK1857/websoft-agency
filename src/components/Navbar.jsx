import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
{ label: "Services", href: "#services" },
{ label: "Work", href: "#work" },
{ label: "Process", href: "#process" },
{ label: "About", href: "#about" },
];

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

function closeMenu() {
setMenuOpen(false);
}

return ( <header className="navbar"> <a href="#home" className="logo" onClick={closeMenu}> <span className="logo-mark">W</span> <span>
web<span className="logo-accent">soft</span> </span> </a>


  <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={closeMenu}
      >
        {item.label}
      </a>
    ))}

    <a
      href="#contact"
      className="mobile-contact-link"
      onClick={closeMenu}
    >
      Let's Talk <ArrowUpRight size={16} />
    </a>
  </nav>

  <a href="#contact" className="nav-cta">
    Let's Talk
    <ArrowUpRight size={16} />
  </a>

  <button
    className="menu-btn"
    type="button"
    onClick={() => setMenuOpen((open) => !open)}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
  >
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</header>

);
}

export default Navbar;
