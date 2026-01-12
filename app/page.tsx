'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(id)
    if (element) {
      const offset = 80
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav id="navbar">
        <div className="nav-c">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="logo-wrap">
            <Image src="/logo.jpg" alt="Everston Home" width={50} height={50} className="logo-img" />
          </a>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Work</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')}>Reviews</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="btn">Free Estimate</a>
          </div>
          <button className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-c">
          <div className="hero-content">
            <div className="anim d1"><span className="hero-tag">Littleton, Colorado</span></div>
            <h1 className="anim d2">All Phases of <span className="red">Construction</span> & Remodeling</h1>
            <p className="hero-p anim d3">From structure to mechanicals to finishes—we handle every phase of your project with precision and care. No project too big or too small.</p>
            <div className="hero-btns anim d4">
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="btn">Get Free Estimate</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="btn btn-outline">View Our Work</a>
            </div>
            <div className="hero-stats anim d5">
              <div className="hero-stat"><span>10+</span><span>Years Experience</span></div>
              <div className="hero-stat"><span>500+</span><span>Projects</span></div>
              <div className="hero-stat"><span>5★</span><span>Reviews</span></div>
            </div>
          </div>
          <div className="hero-vis anim d5">
            <div className="hero-logo-box">
              <Image src="/logo.jpg" alt="Everston Home" width={180} height={180} />
            </div>
            <div className="hero-boxes">
              <div className="hero-box"><span>🔨</span><p>STRUCTURE</p></div>
              <div className="hero-box"><span>⚡</span><p>MECHANICALS</p></div>
              <div className="hero-box"><span>🎨</span><p>FINISHES</p></div>
              <div className="hero-box"><span>✨</span><p>DESIGN</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="sec-c">
          <div className="sec-h">
            <span className="sec-tag">What We Do</span>
            <h2 className="sec-title">Complete <span className="red">Home Services</span></h2>
            <p className="sec-desc">From start to finish, we manage every aspect of your project with expert precision—including in-house interior design to transform any space.</p>
          </div>
          <div className="srv-grid">
            <div className="srv-card"><div className="icon">🏗️</div><h3>Full Remodels</h3><p>Complete home transformations from demo to completion. Kitchens, bathrooms, basements, and whole-house renovations.</p></div>
            <div className="srv-card"><div className="icon">⚡</div><h3>Electrical Work</h3><p>Licensed residential wireman services. Panel upgrades, rewiring, lighting installation, and code compliance.</p></div>
            <div className="srv-card"><div className="icon">🪟</div><h3>Windows & Doors</h3><p>Energy-efficient replacements that improve comfort, reduce heating costs, and refresh your home&apos;s appearance.</p></div>
            <div className="srv-card"><div className="icon">🧱</div><h3>Drywall & Paint</h3><p>Professional drywall hanging, finishing, and painting. Perfect walls and flawless finishes every time.</p></div>
            <div className="srv-card"><div className="icon">🏠</div><h3>Insulation</h3><p>Attic mitigation and insulation replacement for maximum energy efficiency and year-round comfort.</p></div>
            <div className="srv-card"><div className="icon">🎨</div><h3>Interior Design</h3><p>In-house design expertise to transform any space. Color selection, space planning, and finishing touches included.</p></div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="sec-c">
          <div className="about-grid">
            <div className="about-content">
              <span className="sec-tag">About Everston Home</span>
              <h2 className="sec-title">Built on <span className="red">Quality</span> & Trust</h2>
              <div className="about-text">
                <p><strong>Nate LaCroix</strong> brings over a decade of construction experience to every project. From his start as a residential wireman to managing large-scale developments at Century Communities, he&apos;s built a reputation for reliability, quality, and getting things done right.</p>
                <p>With drafting and design training from Montana State University, a Colorado Residential Wireman certification, and hands-on experience in every phase of construction, Nate founded Everston Home to deliver personal, quality-focused service.</p>
                <p><span className="hl">What sets us apart?</span> We treat every project like it&apos;s our own home—with honest communication, quality craftsmanship, and attention to detail from start to finish.</p>
              </div>
              <div className="creds">
                <div className="cred"><div className="icon">⚡</div><div><h4>Licensed Wireman</h4><p>Colorado Certified since 2017</p></div></div>
                <div className="cred"><div className="icon">📐</div><div><h4>Design Background</h4><p>Drafting & Design from MSU</p></div></div>
                <div className="cred"><div className="icon">🏗️</div><div><h4>Construction Manager</h4><p>Century Communities experience</p></div></div>
                <div className="cred"><div className="icon">🎨</div><div><h4>In-House Design</h4><p>Transform any space</p></div></div>
              </div>
            </div>
            <div className="about-vis">
              <div className="about-main">
                <Image src="/logo.jpg" alt="Everston Home" width={160} height={160} />
                <h3>Everston Home</h3>
                <p>Littleton, Colorado</p>
              </div>
              <div className="about-badges">
                <div className="about-badge"><span>🔧</span><p>NO JOB TOO BIG<br/>OR TOO SMALL</p></div>
                <div className="about-badge"><span>⭐</span><p>CLIENT REFERRALS<br/>& 5-STAR REVIEWS</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="sec-c">
          <div className="sec-h">
            <span className="sec-tag">Our Work</span>
            <h2 className="sec-title">Recent <span className="red">Projects</span></h2>
          </div>
          <div className="proj-grid">
            <div className="proj-card"><span>🏠</span><h4>Kitchen Remodel</h4><p>Complete transformation</p></div>
            <div className="proj-card"><span>🪟</span><h4>Window Replacement</h4><p>Energy efficiency</p></div>
            <div className="proj-card"><span>🧱</span><h4>Drywall & Paint</h4><p>Permit to completion</p></div>
            <div className="proj-card"><span>🛡️</span><h4>Asbestos Cleanup</h4><p>Safe & professional</p></div>
            <div className="proj-card"><span>🏔️</span><h4>Attic Insulation</h4><p>Mitigation & replacement</p></div>
            <div className="proj-card"><span>🚿</span><h4>Bathroom Remodel</h4><p>Modern updates</p></div>
            <div className="proj-card"><span>🪵</span><h4>Flooring</h4><p>Carpet & hardwood</p></div>
            <div className="proj-card"><span>💡</span><h4>Electrical</h4><p>Panels & wiring</p></div>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="sec-c">
          <div className="sec-h">
            <span className="sec-tag">Testimonials</span>
            <h2 className="sec-title">What Our <span className="red">Clients</span> Say</h2>
          </div>
          <div className="rev-grid">
            <div className="rev-card">
              <div className="rev-q">&ldquo;</div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">Nate handled our complete kitchen remodel from demo to completion. They dealt with unexpected water damage without missing a beat. Never cut corners—perfection was the priority!</p>
              <div className="rev-foot"><p className="rev-name">The Hendersons</p><p className="rev-loc">Littleton, CO</p><p className="rev-srv">Kitchen Remodel</p></div>
            </div>
            <div className="rev-card">
              <div className="rev-q">&ldquo;</div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">Asbestos cleanup, permit delays, tight deadline. Nate managed it all—drywall hung, inspections approved, cabinets set. One week of hustle and incredible results!</p>
              <div className="rev-foot"><p className="rev-name">Mark T.</p><p className="rev-loc">Denver, CO</p><p className="rev-srv">Remodel & Cleanup</p></div>
            </div>
            <div className="rev-card">
              <div className="rev-q">&ldquo;</div>
              <div className="rev-stars">★★★★★</div>
              <p className="rev-text">New windows completely refreshed our home while improving energy efficiency. Professional installation and great cleanup. Highly recommend Everston Home!</p>
              <div className="rev-foot"><p className="rev-name">The Johnsons</p><p className="rev-loc">Lakewood, CO</p><p className="rev-srv">Window Replacement</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="sec-c">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="sec-tag">Get In Touch</span>
              <h2 className="sec-title">Let&apos;s Build <span className="red">Together</span></h2>
              <p className="contact-desc">Whether you need a small repair or complete home transformation, we&apos;re here to help. Reach out for a free estimate—no obligation.</p>
              <div className="contact-methods">
                <div className="c-method"><div className="c-icon">📞</div><div><label>Phone</label><a href="tel:+13032424524">(303) 242-4524</a></div></div>
                <div className="c-method"><div className="c-icon">✉️</div><div><label>Email</label><a href="mailto:everstonhome@gmail.com">everstonhome@gmail.com</a></div></div>
                <div className="c-method"><div className="c-icon">📍</div><div><label>Service Area</label><p>Littleton, Denver & Front Range</p></div></div>
              </div>
              <div className="c-social">
                <h4>Follow Our Work</h4>
                <div className="soc-links">
                  <a href="https://www.instagram.com/everstonhome/" target="_blank" rel="noopener noreferrer" className="soc-link" title="Instagram"><InstagramIcon /></a>
                  <a href="https://www.facebook.com/people/Everston-Home/61584117977891/" target="_blank" rel="noopener noreferrer" className="soc-link" title="Facebook"><FacebookIcon /></a>
                  <a href="https://www.linkedin.com/in/nate-lacroix-36a786ab/" target="_blank" rel="noopener noreferrer" className="soc-link" title="LinkedIn"><LinkedInIcon /></a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Request a Free Estimate</h3>
              <form action="https://formsubmit.co/everstonhome@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Estimate Request from Everston Home Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="form-g"><label>Your Name</label><input type="text" name="name" required placeholder="John Smith" /></div>
                <div className="form-row">
                  <div className="form-g"><label>Email</label><input type="email" name="email" required placeholder="john@example.com" /></div>
                  <div className="form-g"><label>Phone</label><input type="tel" name="phone" placeholder="(303) 555-1234" /></div>
                </div>
                <div className="form-g">
                  <label>Project Type</label>
                  <select name="project_type" required>
                    <option value="">Select a project type...</option>
                    <option>Full Home Remodel</option>
                    <option>Kitchen Renovation</option>
                    <option>Bathroom Renovation</option>
                    <option>Electrical Work</option>
                    <option>Windows & Doors</option>
                    <option>Flooring Installation</option>
                    <option>Drywall & Paint</option>
                    <option>Insulation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-g"><label>Project Details</label><textarea name="message" placeholder="Tell us about your project, timeline, budget, and any specific requirements..."></textarea></div>
                <button type="submit" className="btn">Send Request</button>
                <p className="form-note">We typically respond within 24 hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot-main">
          <div>
            <div className="foot-brand">
              <Image src="/logo.jpg" alt="Everston Home" width={60} height={60} />
              <span className="foot-brand-text">Everston Home</span>
            </div>
            <p className="foot-desc">All phases of construction and remodeling—structure, mechanicals, and finishes. Serving Littleton, Denver, and the entire Front Range with quality craftsmanship.</p>
            <div className="foot-contact-item"><span>📞</span> (303) 242-4524</div>
            <div className="foot-contact-item"><span>✉️</span> everstonhome@gmail.com</div>
            <div className="foot-contact-item"><span>📍</span> Littleton, Colorado</div>
            <div className="foot-social">
              <a href="https://www.instagram.com/everstonhome/" target="_blank" rel="noopener noreferrer" title="Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/people/Everston-Home/61584117977891/" target="_blank" rel="noopener noreferrer" title="Facebook"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/in/nate-lacroix-36a786ab/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
          <div>
            <h4 className="foot-h">Services</h4>
            <div className="foot-links">
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Full Home Remodels</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Electrical Work</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Windows & Doors</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Drywall & Paint</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Insulation</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Interior Design</a>
            </div>
          </div>
          <div>
            <h4 className="foot-h">Company</h4>
            <div className="foot-links">
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Nate</a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>Our Story</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Recent Projects</a>
              <a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')}>Client Reviews</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact Us</a>
            </div>
          </div>
          <div>
            <h4 className="foot-h">Hours</h4>
            <div className="foot-hours">
              <p><strong>Monday – Friday</strong></p>
              <p>7:00 AM – 6:00 PM</p>
              <p style={{ marginTop: '0.75rem' }}><strong>Saturday</strong></p>
              <p>8:00 AM – 2:00 PM</p>
              <p style={{ marginTop: '0.75rem' }}><strong>Sunday</strong></p>
              <p>Closed</p>
              <p style={{ marginTop: '0.75rem', color: 'var(--red)', fontSize: '0.8rem' }}>Emergency calls available</p>
            </div>
          </div>
        </div>
        <div className="foot-btm">
          <div className="foot-btm-inner">
            <p>© 2026 Everston Home. All rights reserved.</p>
            <div className="foot-badges">
              <div className="foot-badge"><span>✓</span> Licensed & Insured</div>
              <div className="foot-badge"><span>✓</span> Residential Wireman Certified</div>
              <div className="foot-badge"><span>✓</span> Colorado State Licensed</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}