import {useState, useEffect} from "react";
import {useParams, Navigate, useLocation} from "react-router-dom";
import {company} from "./data/company";
import {products, gallery} from "./data/products";
import {Button, WhatsApp, Section, Img, ImageCredit, Pending, ProductCard, useTitle} from "./ui";

const Stat = ({n, l}) => <div className="stat"><b>{n}</b><span>{l}</span></div>;
const Markets = () => <Section title="Connecting Ethiopia to Global Markets" tone="blue">
  <p className="lead">We have built commercial relationships across {company.markets.slice(0, 4).join(", ")}, and other international markets where quality minerals and reliable export service are highly valued.</p>
  <Button to="/contact">Talk to Our International Team</Button></Section>;
const CEO = () => <Section title="Leadership"><div className="split">
  <Img src={company.ceo.photo} alt={`Portrait of ${company.ceo.name}`} hue={215} label="CEO portrait"/>
  <div><h3>{company.ceo.name}</h3><p className="muted">{company.ceo.title}</p>
    <blockquote>{company.ceo.quote}</blockquote>
    <p>Email: {company.ceo.email || <Pending>CEO Email — Coming Soon</Pending>}</p></div></div></Section>;

export const Home = () => { useTitle("Ethiopian Gold & Gemstone Exporter", "More than 25 years connecting Ethiopian gold and gemstones with international markets.");
  return <>
  <section className="hero">
    <div className="hero-media" aria-hidden="true" />
    <div className="wrap hero-inner">
      <div className="hero-copy">
        <span className="eyebrow">Ethiopian mineral export expertise</span>
        <h1>Ethiopian Gold & Gemstones. Trusted Beyond Borders.</h1>
        <p className="lead"> South East International Gold & Gemstone Exporter brings more than 25 years of experience in Ethiopia's gold and gemstone export sector, connecting carefully sourced mineral products with international buyers and markets.</p>
        <div className="row"><Button to="/products#gold">Explore Our Products</Button><Button to="/contact" variant="ghost">Contact Us</Button></div>
        <div className="hero-badges">
          <span>Export-ready</span>
          <span>Buyer-focused</span>
          <span>International trade</span>
        </div>
        <p className="small"><WhatsApp label="WhatsApp International Sales"/> {company.phoneDisplay}</p>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card card-large">
          <img src={products.find(p => p.slug === "emerald").image} alt="Loose faceted emerald gemstones" />
        </div>
        <div className="hero-floating hero-floating-two">Emerald</div>
      </div>
    </div>
  </section>
  <Section tone="blue"><div className="stats"><Stat n="25+" l="Years of Experience"/><Stat n="Global" l="Market Connections"/><Stat n={products.length} l="Core Product Categories"/><Stat n="Ethiopia" l="Based Exporter"/></div></Section>
  <Section title="Why International Buyers Choose Us"><div className="feature-grid">
    <div className="feature-card"><h3>Trusted sourcing</h3><p>We focus on transparent sourcing and business relationships built around long-term export confidence.</p></div>
    <div className="feature-card"><h3>Product diversity</h3><p>From gold to gemstones, our range supports buyer needs across multiple market segments and jewelry applications.</p></div>
    <div className="feature-card"><h3>Export readiness</h3><p>We support international trade with a buyer-oriented approach and responsive communication for inquiries and orders.</p></div>
  </div></Section>
  <Section title="Experience Built Over 25 Years"><p className="lead">{company.shortName} has worked in Ethiopia's gold and gemstone industry for more than two decades, building knowledge, market ties, and a reputation for dependable mineral supply.</p>
    <p className="muted">{company.markets.join(" • ")}</p><Button to="/about" variant="ghost">Learn About Our Company</Button></Section>
  <Section title="Our Gold & Gemstones" tone="blue"><div className="grid3">{products.map(p => <ProductCard key={p.slug} p={p}/>)}</div></Section>
  <Markets/><CEO/></>; };

export const Products = () => {
  useTitle("Products");
  const location = useLocation();
  const [active, setActive] = useState(location.hash === "#gemstones" ? "Gemstones" : "Gold");

  useEffect(() => {
    setActive(location.hash === "#gemstones" ? "Gemstones" : "Gold");
  }, [location.hash]);

  const goldProducts = products.filter(p => p.category === "Gold");
  const gemstoneProducts = products.filter(p => p.category === "Gemstone");
  const goldShowcase = [
    {
      title: "Ethiopian Gold Heritage",
      text: "Ethiopia has a well-established history in gold production, and our work is rooted in understanding the value of this resource and the standards expected by international buyers.",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Reliable Supply Chain",
      text: "We support consistent sourcing, transparent handling, and dependable export preparation to help buyers connect with trusted Ethiopian gold supply.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Global Market Focus",
      text: "From extraction to export readiness, our gold approach is shaped by experience in international trade and long-term business relationships.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return <Section title="Our Gold & Gemstones">
    <div className="product-switcher">
      <div className="product-tabs">
        <button className={`product-tab ${active === "Gold" ? "active" : ""}`} onClick={() => setActive("Gold")}>Gold</button>
        <button className={`product-tab ${active === "Gemstones" ? "active" : ""}`} onClick={() => setActive("Gemstones")}>Gemstones</button>
      </div>

      {active === "Gold" ? (
        <div className="product-showcase">
          <div className="product-story">
            <h3>Ethiopian Gold, Built on Experience</h3>
            <p>
              Ethiopia has long been recognized for its rich gold potential, and South East Gold & Gems has built its reputation around sourcing and supplying this valuable resource with trust, consistency, and international market awareness.
            </p>
            <p>
              Our experience in gold trade reflects a deep understanding of Ethiopia's mineral potential, buyer expectations, and the discipline required to connect local resources with global demand.
            </p>
          </div>
          <div className="product-grid-three">
            {goldShowcase.map(item => (
              <article key={item.title} className="card product-mini-card">
                <img className="img" src={item.image} alt={item.title} />
                <div className="cbody">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
            {goldProducts.map(item => (
              <article key={item.slug} className="card product-mini-card">
                <img className="img" src={item.image} alt={item.imageAlt} />
                <div className="cbody">
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                  <ImageCredit credit={item.imageCredit}/>
                  <Button to={`/products/${item.slug}`}>View product</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="product-showcase">
          <div className="product-story">
            <h3>Gemstones with Natural Beauty and Trade Appeal</h3>
            <p>
              Our gemstone range includes premium stones chosen for color, clarity, and strong commercial value in jewelry, trading, and collector markets.
            </p>
          </div>
          <div className="grid3">
            {gemstoneProducts.map(p => <ProductCard key={p.slug} p={p}/>)}
          </div>
        </div>
      )}
    </div>
  </Section>;
};

export const Product = () => { const p = products.find(x => x.slug === useParams().slug); useTitle(p?.name || "Products", p?.intro);
  if (!p) return <Navigate to="/products" replace/>;
  return <Section><div className="split"><div><Img src={p.image} alt={p.imageAlt} hue={p.hue} label={p.name}/><ImageCredit credit={p.imageCredit}/></div>
    <div><h1>{p.name}</h1><p className="lead">{p.intro}</p><p>{p.description}</p>
      {[["Origin",p.origin],["Quality",p.quality],["Availability",p.availability]].map(([t,v]) => <div key={t}><h3>{t}</h3><p>{v}</p></div>)}
      <div className="row"><Button to="/contact">Inquire as an International Buyer</Button><WhatsApp/></div></div></div></Section>; };

export const Gallery = () => { useTitle("Gallery"); const [cat, setCat] = useState("All"); const [open, setOpen] = useState(null);
  const cats = ["All", ...gallery.map(g => g.category)]; const items = gallery.filter(g => cat === "All" || g.category === cat);
  return <Section title="Gallery"><div className="row">{cats.map(c => <button key={c} className={`chip ${c === cat ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
    <div className="grid3">{items.map(g => <figure className="gallery-item" key={g.id}><button className="plain" onClick={() => setOpen(g)} aria-label={`Open ${g.alt}`}><Img src={g.src} alt={g.alt} hue={g.hue} label={g.category}/></button><ImageCredit credit={g.imageCredit}/></figure>)}</div>
    {open && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}><div onClick={e => e.stopPropagation()}><Img src={open.src} alt={open.alt} hue={open.hue} label={open.category}/><ImageCredit credit={open.imageCredit}/><button className="btn primary" autoFocus onClick={() => setOpen(null)}>Close</button></div></div>}
  </Section>; };

export const About = () => { useTitle("About"); const steps = ["Establishment","Growth in Ethiopia's mineral sector","Development of international market relationships","Expansion of gold and gemstone export activities","Continuing toward global markets"];
  return <><Section title="About South East Gold & Gems"><p className="lead">{company.legalName} is an Ethiopian gold and gemstone exporter with more than 25 years of industry experience, focused on quality, trust, and global trade relationships.</p></Section>
  <Section title="Our Story" tone="blue"><ol className="timeline"><li><b>25+ Years of Experience</b></li>{steps.map(s => <li key={s}>{s}</li>)}</ol></Section>
  <CEO/><Markets/>
  <Section title="Licensed & Committed to Compliance" tone="blue"><p className="lead">We operate in accordance with applicable Ethiopian requirements and collaborate with relevant institutions to support responsible and transparent export activity.</p>
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
