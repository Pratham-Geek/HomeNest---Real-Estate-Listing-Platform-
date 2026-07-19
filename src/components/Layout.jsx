import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="nav-wrap"><nav className="nav container">
    <NavLink className="brand" to="/" onClick={close}>home<span>nest</span></NavLink>
    <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
    <div className={open ? "nav-links open" : "nav-links"}>
      <NavLink to="/" end onClick={close}>Home</NavLink><NavLink to="/properties" onClick={close}>Properties</NavLink><NavLink to="/about" onClick={close}>About us</NavLink><NavLink to="/contact" onClick={close}>Contact</NavLink>
    </div>
    <NavLink className="nav-cta" to="/contact">Schedule a visit <span>↗</span></NavLink>
  </nav></header>;
}

export function Footer() { return <footer><div className="container footer-grid"><div><p className="brand">home<span>nest</span></p><p className="footer-copy">Considered spaces for the life you are building.</p></div><div><b>Get in touch</b><a href="mailto:hello@homenest.in">hello@homenest.in</a><a href="tel:+919876543210">+91 98765 43210</a></div><div><b>Follow along</b><a href="#instagram">Instagram</a><a href="#linkedin">LinkedIn</a></div></div><p className="container copyright">© 2026 HomeNest Realty. All rights reserved.</p></footer>; }
