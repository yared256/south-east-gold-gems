import {useState} from "react";
import {useParams, Navigate} from "react-router-dom";
import {company} from "./data/company";
import {products, gallery} from "./data/products";
import {Button, WhatsApp, Section, Img, Pending, ProductCard, useTitle} from "./ui";

const Stat = ({n, l}) => <div className="stat"><b>{n}</b><span>{l}</span></div>;
const Markets = () => <Section title="Connecting Ethiopia to Global Markets" tone="blue">
  <p className="lead">We have established business connections with international markets including {company.markets.slice(0,3).join(", ")}, and other global markets.</p>
  <Button to="/contact">Talk to Our International Team</Button></Section>;
const CEO = () => <Section title="Leadership"><div className="split">
  <Img src={company.ceo.photo} alt="CEO portrait placeholder" hue={215} label="CEO portrait"/>
  <div><h3>{company.ceo.name}</h3><p className="muted">{company.ceo.title}</p>
    <blockquote>{company.ceo.quote}</blockquote>
    <p>Email: {company.ceo.email || <Pending>CEO Email — Coming Soon</Pending>}</p></div></div></Section>;

export const Home = () => { useTitle("Ethiopian Gold & Gemstone Exporter", "More than 25 years connecting Ethiopian gold and gemstones with international markets.");
  return <>
  <section className="hero"><div className="wrap">
    <h1>Ethiopian Gold & Gemstones. Trusted Beyond Borders.</h1>
    <p className="lead">{company.shortName} brings more than 25 years of experience in Ethiopia's gold and gemstone export industry, connecting quality Ethiopian minerals with international markets.</p>
    <div className="row"><Button to="/products">Explore Our Products</Button><Button to="/contact" variant="ghost">Contact Us</Button></div>
    <p className="small"><WhatsApp label="WhatsApp International Sales"/> {company.phoneDisplay}</p></div></section>
  <Section tone="blue"><div className="stats"><Stat n="25+" l="Years of Experience"/><Stat n="International" l="Market Connections"/><Stat n={products.length} l="Core Product Categories"/><Stat n="Ethiopia" l="Based Exporter"/></div></Section>
  <Section title="Experience Built Over 25 Years"><p className="lead">{company.shortName} has worked in Ethiopia's gold and gemstone industry for more than 25 years, building experience in connecting Ethiopian mineral resources with international buyers and markets.</p>
    <p className="muted">{company.markets.join(" • ")}</p><Button to="/about" variant="ghost">Learn About Our Company</Button></Section>
  <Section title="Our Gold & Gemstones" tone="blue"><div className="grid3">{products.map(p => <ProductCard key={p.slug} p={p}/>)}</div></Section>
  <Markets/><CEO/></>; };

export const Products = () => { useTitle("Products"); return <Section title="Our Gold & Gemstones"><div className="grid3">{products.map(p => <ProductCard key={p.slug} p={p}/>)}</div></Section>; };

export const Product = () => { const p = products.find(x => x.slug === useParams().slug); useTitle(p?.name || "Products", p?.intro);
  if (!p) return <Navigate to="/products" replace/>;
  return <Section><div className="split"><Img src={p.image} alt={`${p.name} placeholder`} hue={p.hue} label={p.name}/>
    <div><h1>{p.name}</h1><p className="lead">{p.intro}</p><p>{p.description}</p>
      {[["Origin",p.origin],["Quality",p.quality],["Availability",p.availability]].map(([t,v]) => <div key={t}><h3>{t}</h3><p>{v}</p></div>)}
      <div className="row"><Button to="/contact">Inquire as an International Buyer</Button><WhatsApp/></div></div></div></Section>; };

export const Gallery = () => { useTitle("Gallery"); const [cat, setCat] = useState("All"); const [open, setOpen] = useState(null);
  const cats = ["All", ...gallery.map(g => g.category)]; const items = gallery.filter(g => cat === "All" || g.category === cat);
  return <Section title="Gallery"><div className="row">{cats.map(c => <button key={c} className={`chip ${c === cat ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
    <div className="grid3">{items.map(g => <button key={g.id} className="plain" onClick={() => setOpen(g)} aria-label={`Open ${g.alt}`}><Img src={g.src} alt={g.alt} hue={g.hue} label={g.category}/></button>)}</div>
    {open && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}><div onClick={e => e.stopPropagation()}><Img src={open.src} alt={open.alt} hue={open.hue} label={open.category}/><button className="btn primary" autoFocus onClick={() => setOpen(null)}>Close</button></div></div>}
  </Section>; };

export const About = () => { useTitle("About"); const steps = ["Establishment","Growth in Ethiopia's mineral sector","Development of international market relationships","Expansion of gold and gemstone export activities","Continuing toward global markets"];
  return <><Section title="About South East Gold & Gems"><p className="lead">{company.legalName} is an Ethiopian gold and gemstone exporter with more than 25 years of industry experience.</p></Section>
  <Section title="Our Story" tone="blue"><ol className="timeline"><li><b>25+ Years of Experience</b></li>{steps.map(s => <li key={s}>{s}</li>)}</ol></Section>
  <CEO/><Markets/>
  <Section title="Licensed & Committed to Compliance" tone="blue"><p className="lead">We operate in accordance with applicable Ethiopian requirements and work with relevant government institutions.</p>
    <div className="grid3">{company.licenses.map(l => <div className="card cbody" key={l.name}><h3>{l.name}</h3><p>{l.number || <Pending>Details to be added</Pending>}</p></div>)}</div></Section></>; };

export const Contact = () => { useTitle("Contact"); const [sent, setSent] = useState(false);
  const F = ({n, t = "text", req}) => <label>{n}<input name={n} type={t} required={req}/></label>;
  return <Section title="Contact Us"><div className="split"><div>
    <h3>{company.legalName}</h3><p>{company.address}</p><p>{company.phoneDisplay}</p><p>WhatsApp available for international clients</p>
    <p>Email: {company.email || <Pending/>}</p><p>Website: {company.website || <Pending/>}</p><WhatsApp variant="primary"/></div>
    <form onSubmit={e => { e.preventDefault(); setSent(true); /* TODO: connect to backend/CMS */ }}>
      <F n="Name" req/><F n="Company"/><F n="Email" t="email" req/><F n="Phone" t="tel"/><F n="Country"/>
      <label>Message<textarea name="Message" rows="5" required/></label>
      <button className="btn primary" type="submit">Send Message</button>
      {sent && <p role="status">Thank you. The form is not yet connected to a backend; please use WhatsApp for now.</p>}</form></div></Section>; };
