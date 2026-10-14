import {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {company, whatsappLink} from "./data/company";
import {products} from "./data/products";

export const useTitle = (t, d) => useEffect(() => {
  document.title = `${t} | ${company.shortName}`;
  if (d) document.querySelector('meta[name="description"]')?.setAttribute("content", d);
}, [t, d]);

export const Button = ({to, href, variant = "primary", children, ...r}) =>
  to ? <Link className={`btn ${variant}`} to={to} {...r}>{children}</Link>
     : <a className={`btn ${variant}`} href={href} {...r}>{children}</a>;
export const WhatsApp = ({label = "Chat on WhatsApp", variant = "ghost"}) =>
  <Button href={whatsappLink()} variant={variant} target="_blank" rel="noopener noreferrer">{label}</Button>;
export const Section = ({title, tone, children, id}) =>
  <section id={id} className={`section ${tone || ""}`}><div className="wrap">{title && <h2>{title}</h2>}{children}</div></section>;
export const Img = ({src, alt, hue = 205, label}) => src
  ? <img className="img" src={src} alt={alt} loading="lazy"/>
  : <div className="img ph" role="img" aria-label={alt} style={{"--h": hue}}><span>{label}</span></div>;
export const Pending = ({children = "Coming Soon"}) => <span className="pending">{children}</span>;

export const Logo = () => company.logo
  ? <img className="logo" src={company.logo} alt={company.shortName}/>
  : <span className="logo-ph" aria-label="Logo placeholder">Logo</span>;

export function Header() {
  const [open, setOpen] = useState(false); const loc = useLocation();
  useEffect(() => setOpen(false), [loc]);
  return <header className="header"><div className="wrap bar">
    <Link to="/" className="brand"><Logo/><strong>{company.shortName}</strong></Link>
    <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav className={open ? "nav open" : "nav"} aria-label="Main">
      <NavLink to="/" end>Home</NavLink>
      <div className="dd"><NavLink to="/products">Products</NavLink>
        <div className="menu">
          <Link to="/products#gold">Gold</Link>
          <Link to="/products#gemstones">Gemstones</Link>
        </div></div>
      <NavLink to="/gallery">Gallery</NavLink><NavLink to="/about">About</NavLink><NavLink to="/contact">Contact</NavLink>
    </nav></div></header>;
}
export const Footer = () => <footer className="footer"><div className="wrap grid4">
  <div><Logo/><h3>{company.shortName}</h3><p>{company.legalName}</p><p>{company.tagline}</p></div>
  <div><h4>Navigate</h4>{[["/","Home"],["/products","Products"],["/gallery","Gallery"],["/about","About"],["/contact","Contact"]].map(([t,n]) => <Link key={t} to={t}>{n}</Link>)}</div>
  <div><h4>Products</h4>{products.map(p => <Link key={p.slug} to={`/products/${p.slug}`}>{p.name}</Link>)}</div>
  <div><h4>Contact</h4><p>{company.phoneDisplay}</p><p>{company.address}</p><WhatsApp/></div>
  </div><p className="copy">© {new Date().getFullYear()} {company.shortName}. All rights reserved.</p></footer>;
export const FloatingWhatsApp = () =>
  <a className="fab" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>;
export const ProductCard = ({p}) => <article className="card">
  <Img src={p.image} alt={`${p.name} placeholder`} hue={p.hue} label={p.name}/>
  <div className="cbody"><h3>{p.name}</h3><p>{p.short}</p><Link to={`/products/${p.slug}`}>View {p.name}</Link></div></article>;
