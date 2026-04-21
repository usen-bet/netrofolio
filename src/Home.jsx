import "./App.css"
import "./App.scss"
import { useEffect, useState, useRef } from "react"
import Navbar from "./components/Navbar"
import gojo from "./assets/Desktop/gojo.png"
import table from "./assets/Desktop/Desktopbg.png"
import {Helmet} from "react-helmet";
import firstdp from "./assets/Profile picture/Ellipse 327-1.png"
import seconddp from "./assets/Profile picture/Ellipse 327-2.png"
import thirddp from "./assets/Profile picture/Ellipse 327-3.png"
import fourthdp from "./assets/Profile picture/Ellipse 327.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dp from "./assets/Profile picture/Ellipse 349.png"
import dp1 from "./assets/Profile picture/Ellipse 349-1.png"
import dp2 from "./assets/Profile picture/Ellipse 349-2.png"
import dp3 from "./assets/Profile picture/Ellipse 349-3.png"
import dp4 from "./assets/Profile picture/Ellipse 349-4.png"
import dp5 from "./assets/Profile picture/Ellipse 349-5.png"
import dp6 from "./assets/Profile picture/Ellipse 349-6.png"
import dp7 from "./assets/Profile picture/Ellipse 349-7.png"
import dp8 from "./assets/Profile picture/Ellipse 349-8.png"
import dp9 from "./assets/Profile picture/Ellipse 349-9.png"
import dp10 from "./assets/Profile picture/Ellipse 349-10.png"
import dp11 from "./assets/Profile picture/Ellipse 349-11.png"
import Contact from "./routes/Contact"
import foot from "./assets/Desktop/foot.png"
import { BiChevronUp, BiChevronDown } from "react-icons/bi"
import tabbg from "./assets/Tablet/tabbg.png"
import { Link } from 'react-router-dom'
import Blog from "./routes/Blog"
import { HashLink } from "react-router-hash-link"
import { BiArrowToRight } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"

function Home() {
    
    gsap.registerPlugin(ScrollTrigger, useGSAP);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

// useEffect(() => {
//   const handleScroll = () => {
//     const section = sectionRef.current;
//     const track = trackRef.current;

//     if (!section || !track) return;

//     const rect = section.getBoundingClientRect();
//     const scrollStart = window.innerHeight;
//     const scrollEnd = -rect.height + window.innerHeight;

//     let progress = (scrollStart - rect.top) / (scrollStart - scrollEnd);
//     progress = Math.max(0, Math.min(progress, 1));

//     const maxTranslate = track.scrollWidth - window.innerWidth;

//     const translateX = -progress * maxTranslate;

//     track.style.transform = `translateX(${translateX}px)`;
//   };

//   handleScroll(); // VERY IMPORTANT
//   window.addEventListener("scroll", handleScroll);

//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

useEffect(() => {
  const section = sectionRef.current;
  const track = trackRef.current;

  if (!section || !track) return;

  const getMaxTranslate = () => {
    return Math.max(0, track.scrollWidth - window.innerWidth);
  };

  const ctx = gsap.context(() => {
    gsap.set(track, { x: 120 });

    gsap.to(track, {
      x: () => -(getMaxTranslate() + 120),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getMaxTranslate() + 400}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, section);

  return () => ctx.revert();
}, []);

  const names = [
      {acct: "Solana", image: dp},
      {acct: "Superteam", image: dp1},
      {acct: "Jupiter", image: dp2},
      {acct: "Meow", image: dp3},
      {acct: "Leon Abboud", image: dp4},
      {acct: "Star Platinum", image: dp5},
      {acct: "Dr Harri Obi", image: dp6},
      {acct: "Samuel Xeus", image: dp7},
      {acct: "Smokey_", image: dp8},
      {acct: "Kash", image: dp9},
      {acct: "Baheet", image: dp10},
      {acct: "Jampzey", image: dp11},
  ]

    const [open, setOpen] = useState(false);
    const [openn, setOpenn] = useState(false);
    const [opennn, setOpennn] = useState(false);

    const sections = [
  {
    id: 1,
    image: dp,
    topic: "Axelar Network — Research & Content Contributor (2024–2025)",
    items: [
      "18 research-driven pieces on interoperability & cross-chain messaging",
      "109,649 impressions | 7,346 engagements",
      "Delivered ~300 ecosystem replies/month to strengthen mindshare",
    ]
  },
  {
    id: 2,
    image: dp1,
    topic: "Band Protocol — Content Contributor (2025)",
    items: [
      "12 strategic pieces during v3 upgrade & rebrand",
      "65,348 impressions | 4,287 engagements",
      "Translated technical upgrades into adoption-focused narratives",
    ]
  },
    {
    id: 3,
    image: dp2,
    topic: "Jupiter Exchange — Ecosystem Contributor (2024–2025)",
    items: [
      "Authored high-impact planetary call recap (21k+ impressions, reshared by founder Meow)",
      "Produced deep-dive thread (24k+ impressions)",
      "Contributor credit in official Jupiter Station documentation",
      "Recognized via Goodcat airdrop + official ecosystem acknowledgment"
    ]
  },
  {
    id: 4,
    image: dp3,
    topic: "Netrovert DAO — Founder (2022–Present):",
    items: [
      "Scaled 7,000+ member Web3 community",
      "Hit $10k profit milestone (2025)",
      "$4.7k in Q1 2026",
      "Secured ecosystem partnerships",
      "Built operational team structure",
      "Established welfare & accountability systems."
    ]
  },
    {
    id: 5,
    image: dp4,
    topic: "Neutron — Content Contributor (2025)",
    items: [
      "12 ecosystem pieces (41k impressions)",
      "Promoted Bitcoin Summer campaign",
      "Expanded visibility via CoinMarketCap + Telegram"
    ]
  },
 {
    id: 6,
    image: dp5,
    topic: "ScribbleDAO — Creator & SWAT Member (2024–Present)",
    items: [
      "25 wins from 33 grant submissions (~76% win rate)",
      "SWAT Team (strategy & ops)",
      "Onboarded 200+ creators organically"
    ]
  },
  {
    id: 7,
    image: dp6,
    topic: "Skatechain — Core Creator (2024–2025)",
    items: [
      "Led altVM narrative awareness pre-TGE",
      "Provided strategic community growth advisory",
    ]
  },
  {
    id: 8,
    image: dp7,
    topic: "State Moderator — Superteam Nigeria (2024):",
    items: [
      "Scaled local ecosystem GDP to $21k+",
      "Built 646-member community",
      "Hosted 7 months of IRL meetups (~90 avg attendance)",
      "Led guild operations",
      "Onboarded hundreds into Solana",
      "Oversaw hackathon submissions.",
    ]
  },
  {
    id: 9,
    image: dp8,
    topic: "Superteam / SuperteamEarn — Top Content Creator (2023–Present)",
    items: [
      "120 submissions | 28 bounty wins",
      "🥇12x 1st place | 🥈9x 2nd | 🥉5x 3rd",
      "Ranked 82nd overall / 17th content leaderboard (164k+ users)",
      "Superteam Content Grant recipient",
      "Official recognition from Solana & Jupiter leadership",
    ]
  },
];

  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main>
      <div className="project-head">
         <Helmet>
                 <meta charSet="utf-8" />
                 <title>Netrofolio</title>
                 <link data-react-helmet="true" rel="icon" type='image/png' href="/favicon.ico" />
         </Helmet>
         <div className="nav-bar">
         <Navbar className="navb" />
         </div>
         <div className="hero-body">
           <h1 className="title">
             Hi, I'm <br/> Netrovert
           </h1>
           <p>
             I’ve been writing about Web3 products for the past<br/>five years, and I’d love to do the same for you.
           </p>
           <span className="btn-container">
             <Link to="https://x.com/netroverthq/"><button className="hero-btn">Work With Me</button></Link>
             <HashLink to="/#about"><button className="hero-btn">About Me</button></HashLink>
             <HashLink to=""><button className="hero-btn">Netropedia</button></HashLink>
         </span>
         </div>
         <div className="table-pic">
           <img src={table} alt="" className="table-obj" />
           <img src={tabbg} alt="" className="tabbg" />
         </div>
      </div>

      <section className="aboutnetro" id="about" ref={aboutRef}>
          <h2 className="title orange">
            About <br/>Netrovert
          </h2>
          <div className="aboutwrite">
            <p>
              I’m a writer and brand strategist focused on permanence in a disposable internet.
            </p>
            <p>
              My work spans crypto culture, creator economics, and identity design for internet-native brands.
            </p>
            <p>
             This site is an archive, a studio, and a laboratory for ideas that don’t expire with trends.
            </p>
          </div>
           <img src={gojo} alt="" className="gojo" /> 
      </section>
      <section className="services" id="service">
        <h1 className="word-title1 centre ">
          Services
        </h1>
        <div className="links centre position">
          <div className="service-card" onClick={ () => { setOpen(!open)}}>
          <div className="img-bg">
            <h2>
              Content <br /> Writing
            </h2>
          </div>
          <div className="center icons">
            {open ? <BiChevronDown /> : <BiChevronUp />}
          </div>
          <div>          
            {open && (
              <div className="write-upholder">
                <div>
                <p>
              Crafting clear, engaging narratives for Web3. I turn complex blockchain ideas into content that drives adoption, trust, and growth across X (Twitter), LinkedIn, YouTube, and blogs. Whether it’s threads, long-form, or thought leadership, your story gets heard.
                </p>
                 </div>
                <button className="center btn-service cursor">
                BOOK HERE
              </button>
            </div>
            )}
          </div>
        </div>
        <div className="service-card" onClick={ () => { setOpenn(!openn)}}>
           <div className="img-bg">
            <h2>
              Community <br /> Building
            </h2>
           </div>
          <div className="center icons">
            {openn ? <BiChevronUp /> : <BiChevronDown /> }
          </div>
          <div>          
            {openn && (
              <div className="write-upholder">
                <div>
                <p>
                Building and activating Web3 communities that thrive. From strategy to events, creator onboarding to ecosystem education, I help communities grow, engage, and align with product vision. I bridge founders, contributors, and users for meaningful impact.
                </p>
                 </div>
                <button className="center btn-service cursor">
                BOOK HERE
              </button>
            </div>
            )}
          </div>
        </div>
        <div className="service-card" onClick={ () => { setOpennn(!opennn)}}>
          <div className="img-bg">
            <h2>
              BIAAS
            </h2>
          </div>
          <div className="center icons">
            {opennn ? <BiChevronUp /> : <BiChevronDown /> }
          </div>
          <div>          
            {opennn && (
              <div className="write-upholder">
                <div>
                <p>
                 Identity design for internet-native companies
                </p>
                 </div>
                <button className="center btn-service cursor">
                BOOK HERE
              </button>
            </div>
            )}
          </div>
        </div>
        </div>
      </section>
      <section ref={sectionRef} className="horizontal-section" id="work">
        <h1 className="word-title">Work Experience</h1>
        <div className="sticky-wrap">
          <div ref={trackRef} className="track">
            {sections.map((section) => (
            <div key={section.id} className="card">
              <div className="card-head">
                <img src={section.image} alt={section.topic} />
                <h1 className="card-title">
                  {section.topic}
                </h1>
              </div>
              <div className="card-body">
                <div className="list-disc">
               {section.items.map((item, index) => (
                <div key={index} className="list-dix">{item}</div>
                ))}
                </div>
              </div>
            </div>
            ))}
          </div>
          <span className="spam"><Link to="https://www.linkedin.com/in/ramadan-adenola/details/experience/"><button className="letswork1">See full work experience <FaArrowRight className="icoo"/></button></Link></span>
        </div>
      </section>

      <section className="features" id="career">
      <div className="padding career-container">
        <h1 className="word-title1 yellow career-miles">
        Career Milestones
      </h1>
      <span className="listed">
        <span className="career">
        <h3 className="mid-title">Reach</h3>
      <p className="title-write">
        40M+ audience reached
      </p>
      <p className="title-write">
        500+ creators onboarded
      </p>
      </span>
      <span className="career">
        <h3 className="mid-title">Output</h3>
      <p className="title-write">
        450+ content pieces
      </p>
      <p className="title-write">
        63+ content bounties won
      </p>
      </span>
      <span className="career">
        <h3 className="mid-title">Ecosystem</h3>
      <p className="title-write">
        7 irl events hosted (avg. 60 attendees)
      </p>
      <p className="title-write">
        $34K+ community revenue generated
      </p>
      </span>
      <span className="career">
        <h3 className="mid-title">Recognition</h3>
      <p className="title-write">
        3× Thread Writer of the Year nominee (2023-2025)
      </p>
      <p className="title-write">
        1× Tech Impact Award
      </p>
      </span>   
      </span>  
      </div>  
      {/* <img src={summon} alt="" className="table-obj1" />   */}
      </section>
      <section className="netropedia" id="blog">
            <div className="netro-body">
              <div className="netrocard">
                <Blog />
              </div>
           <Link to="/blogmain" className='purp-btn'>
           <button className="purple-btn">
             show more
            </button>  
             </Link>
            </div>
            
      </section>
      <section className="recommendation">
      <div>
          <h1 className="word-title1 yellow career-miles padding">
        Recommendations
      </h1>
      <div className="carousel">
        <div className="cardd">
          <div className="cardd-top">
            <div className="dpp">
              <img src={firstdp} alt="" className="dp"/>
            </div>
            <div className="card-title">
              <p>
               Ben Kull, 
              </p>
              <p className="titlehead">
                 Co-Founder Band Protocol
              </p>
            </div>
          </div>
          <div className="cardd-bottom">
            <p>
              Your content has exceeded our expectations and hit many of our key metrics, we would like to extend this relationship
            </p>
          </div>
        </div>
        <div className="cardd">
          <div className="cardd-top">
            <div className="dpp">
            <img src={seconddp} alt="" className="dp"/>
            </div>
            <div className="card-title">
              <p className="title-head">
               Dr. Harri Obi,
              </p>
              <p className="titlehead">
                 Co-Lead SuperteamNG
              </p>
            </div>
          </div>
          <div className="cardd-bottom">
            <p>
              Thanks for the world you did in our community, Netrovert. We wouldn’t be here without your contributions, for sure
            </p>
          </div>
        </div>
        <div className="cardd">
          <div className="cardd-top">
            <div className="dpp">
              <img src={thirddp} alt="" className="dp"/>
            </div>
            <div className="card-title">
              <p>
               Elen Kay,
              </p>
              <p className="titlehead">
                 Global Community Lead Axelar
              </p>
            </div>
          </div>
          <div className="cardd-bottom">
            <p>
              His general output of content is very high and he never compromises on the quality and engagement
            </p>
          </div>
        </div>
        <div className="cardd">
          <div className="cardd-top">
            <div className="dpp">
              <img src={fourthdp} alt="" className="dp" />
            </div>
            <div className="card-title">
              <p>
               Meow, 
              </p>
              <p className="titlehead">
                Founder Jupiter Exchange
              </p>
            </div>
          </div>
          <div className="cardd-bottom">
            <p>
             Netrovert is a content GOAT!
            </p>
          </div>
        </div> 
      </div>
      <div className="follow">
        <h3>Trusted by</h3>
        <div className="trustees">
        { names.map((name, index) => (
        <div key={index} className="trusted">
        <div className="pfp_name">
            <img src={ name.image } alt="game" className="pfp-pic"/>
        </div>
        <div className="pfp">
            { name.acct }
        </div> 
        </div> 
        )) }  
      </div>
      </div>
      </div>
      </section>
      <section className="connect" id="contact">
        <Contact />
      </section>

      <section className="recommendationss">
          <div className="link-holders">
         <div className="links">
           <div className="link-list1">
            <ul>
              <li className="caps">Services</li>
              <li className="linkk"><Link to="https://medium.com/@netrovert/">Content writing</Link></li>
              <li className="linkk"><Link to="https://t.me/hml_updates">Community Building</Link></li>
              <li className="linkk">BIAAS</li>
            </ul>
          </div>
          <div className="link-list1">
            <ul>
              <li className="caps">Netropedia</li>
              <li className="linkk"><a href="#blog">Articles</a></li>
              <li className="linkk">Videos</li>
            </ul>
          </div>
          <div className="link-list1">
            <ul>
              <li className="caps"><HashLink to="/#about" className="caps">About Me</HashLink></li>
              <li className="linkk"><Link to="https://substack.com/@netrovert/note/p-184797471?r=30f21i&utm_medium=ios&utm_source=notes-share-action">My Story</Link></li>
              <li className="linkk"><Link to="https://www.linkedin.com/in/ramadan-adenola/details/experience/">Work Experience</Link></li>
              <li className="linkk"><HashLink to="/#career">Career Milestone</HashLink></li>
            </ul>
          </div>
          <div className="link-list1">
            <ul>
              <li className="caps">Linktree</li>
              <li className="linkk"><Link to="https://x.com/netroverthq/">Twitter/X</Link></li>
              <li className="linkk"><Link to="https://www.linkedin.com/in/ramadan-adenola/">LinkedIn</Link></li>
              <li className="linkk"><Link to="youtube.com/netrovert_updates">Youtube</Link></li>
            </ul>
          </div>
         </div>
        <div className="cta">
          <button className="letswork">
            Let's work
          </button>
        </div>
        </div>
        <div className="netrovert">
          <img src={foot} alt="" className="footpng"/>
        </div>
      </section>
    </main>
  )
}

export default Home
