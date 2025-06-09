// Hero Component
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Hero = () => {
  useEffect(() => {
  const cards = document.querySelectorAll('.testimonial-card');
  const leftBtn = document.querySelector('.arrow-left');
  const rightBtn = document.querySelector('.arrow-right');
  let current = 0;

  const showCard = (newIndex, direction) => {
    cards.forEach((card, i) => {
      card.classList.remove('active', 'slide-left', 'slide-right');
      if (i === newIndex) {
        card.classList.add('active');
        card.classList.add(direction === 'left' ? 'slide-left' : 'slide-right');
      }
    });
  };

  const next = () => {
    const newIndex = (current + 1) % cards.length;
    showCard(newIndex, 'right');
    current = newIndex;
  };

  const prev = () => {
    const newIndex = (current - 1 + cards.length) % cards.length;
    showCard(newIndex, 'left');
    current = newIndex;
  };

  leftBtn?.addEventListener('click', prev);
  rightBtn?.addEventListener('click', next);
  showCard(current, 'right'); // Show initial card

  return () => {
    leftBtn?.removeEventListener('click', prev);
    rightBtn?.removeEventListener('click', next);
  };
}, []);

const [activeIndex, setActiveIndex] = useState(null);

const toggleAnswer = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  return (
    <>
    <section className="hero-section">
      <div className="hero-grid">
        <img src="/left image.png" 
        alt="Left" 
        className="side-image left-image"/>
        
      <div className="text-overlay">
            <h1>Transform Your Digital Experience</h1>
           </div>
            <div>
            <p className='discover'>Discover innovative solutions for modern businesses <br/>tailored for our customers<br/>in Blueprint designs</p>
           
            <button className="start-button">Get started</button>
          </div>   
          <img src="/new.jpg" 
        alt="right" 
        className="side-image right-image" />
  
     </div>
    </section>
    

   <section className="next-section">
   <div className="content-grid">
    <div className="box box-left p">
      <h2>HOW IT WORKS</h2>
      <p className="matched">
        Designers Matched<br/>
        Based On Your Needs<br/>
        And The Project<br/>
        Proceeds In Stages.</p>
    <div className="second-p">
        Browse to match with a designer and book a session to bring your ideas to life.</div>
      <button className="designer-button">Book a Designer</button>
    </div>
    <div className="box box-right">
         <img src="/stage image.png" 
        alt="stage" 
        className="stage-image" />
    
    </div>
  </div>
</section>


<div className="title" >
  <div className="section-header">
  SERVICES
  </div>
  <div className="tagline">
   Your Dream,<br/>
   Our Blueprint.</div>

<div className="subtagline">
Discover Expert Guidance to Build Your Ideas into Impact.</div>
</div>


<section className="services-section">
  <div className="service-grid">
  <div className="service-card card-left">
      <div calssName="service-icon"></div>
      <h3 className="service-title" >Web & <br/>Product Design</h3>
      <p class="service-desc">
        Full-stack development with<br/> modern frameworks and <br/>responsive design</p> 
          <button className="book-designer">Learn More</button>
           <img src="/webpdd.png" 
        alt="tech" 
        className="tech-image" />
        
    </div>
   
    
    <div class="service-card card-right">
      <div class="service-icon"></div>
      <h3 class="service-title title-right">Branding & <br/>Identity</h3>
      <p class="desc-right">Crafting distinctive visual <br/>  identities 
      that resonate<br/>  with your audience  <br/> and set  your brand <br/>  apart.</p> 
       <button className="book-designer designer-b">Learn More</button>
          <img src="/branddip.png" 
        alt="blue" 
        className="blue-image" />

    </div>

  </div>

</section>
<section className="next-section a">
  <div className="fullbox-grid">
    <div className= "full-box text overlay">
      <h4>Designs Coach</h4>
      <p className="coach">
        Level up your design skills by joining our
        coaching<br/> program  and get expert guidance
        built<br/> around your creative blueprint.
      </p>
      <p className="coaching a">
    Get the support, strategy, and clarity you need
    to <br/>turn your ideas into impact<br/> from Blueprint Designers."
      </p>
      <button className="Learn-button">Learn More</button>
      <img src="/bluep i.png" 
        alt="coach" 
        className="coach-image" />

    </div>

  </div>
</section>

<section className="Testimonials">
  <div className="card-wrapper">
 <div className="card-tracker">
  <div className="card first-card">
    <h5>TESTIMONIALS</h5>
    
    <p className="testimonials">What Our Clients<br/> Are Saying</p>
    <p className="testimonials-a">Positive experience from clients and<br/> Blueprint Designs programs</p>
    <div className="arrow-buttons">
  <button className="arrow-left">&#8592;</button>
  <button className="arrow-right">&#8594;</button>
</div> 
  </div>
  
<div className="testimonial-cards">
<div className="card-a testimonial-card" style={{ display: 'block' }} id="card-0">
  <p className="feedback">“Blueprint Designs truly understood our
     vision and brought it to life with clarity 
     and creativity. Their team guided us through 
     every stage with professionalism and helped 
     turn our rough ideas into a polished, impactful design.
    We're proud of the result and grateful for their support.”</p>
    <p className="client">-James Erick.02.</p> 
</div>

<div className="card-b testimonial-card" style={{ display: 'none' }} id="card-1">
  <p className="feedback a">“Blueprint Designs was a game-changer. 
    Their creative and strategic approach helped us connect with
    our audience. Truly collaborative and highly recommended!”</p>
    <p className="client">-Jane Amore.52.</p> 
</div>
<div className="card-b testimonial-card" style={{ display: 'block' }} id="card-1">
  <p className="feedback a">“Blueprint Designs was a game-changer. 
    Their creative and strategic approach helped us connect with
    our audience.<br/>Truly collaborative and highly recommended!”</p>
    <p className="client">-Jane Amore.52.</p> 
</div>
</div>
  
  </div> 
  </div>
</section>
<section className="card partners-card">
  <h6 className="partners-title"> Our Partners</h6>
  <div className="partners-logos">
    <img src="woo.jpg" alt="WooCommerce"className="woo-image"/>
     <span className="partner-name">WooCommerce</span>
     <img src="ogilvy.png"alt="Ogilvy"className="ogilvy-image"/>
      <span className="partner-name">Ogilvy</span>
      <img src="cart.jpg"alt="fintech"className="fintech-image"/>
       <span className="partner-name">Fintech</span>
       <img src="visaprint.png"alt="VistaPrint"className="vistaprint-image"/>
        <img src="Eventbrite_Brand.png"alt="Eventbrite"className="eventbrite-image"/>

  </div>
</section>
<div className="resource-header">
      <h3 className="resource-title" >EXPLORE & LEARN</h3>
      </div>
      <p class="resource-desc">
        Resources for<br/>
      Your Designs</p> 
      <p class="resource-desc-desc">
        Explore expert insights,design guides<br/>
      to ensure every detail aligns with your goals.</p>
      

      <section className="articles-section">
  <div className="articles-grid">
  <div className="articles-card">
      <div className="articles-header-header">
        <h3 className="articles-title">Articles &<br/>Guides</h3>
      </div>
      <p className="articles-desc">
      Discover expert articles and <br/>
      practical guides to elevate your blueprint,<br/>
      and design strategy.</p>
      <button className="explore-designs btn-blue">EXPLORE</button>
     </div>
    {/* Card 2 */}
    <div className="articles-card-a">
      <div className="articles-header-header">
        <h3 className="articles-title-a">Build with<br /> confidence</h3>
      </div>
      <p className="articles-desc-a">
        Tools to Support<br />
        Your Process
      </p>
      <p className="articles-desc-desc-a">
        Download templates, checklists, and<br />
        resources crafted for clarity and success.
      </p>
         <button className="explore-designs btn-green">EXPLORE</button>
    </div>

    {/* Card 3 */}
    <div className="articles-card-b">
      <div className="articles-header-header">
        <h3 className="articles-title-b">Grow your <br />skills</h3>
      </div>
      <p className="articles-desc-b">
        Tutorials & Guides
       
      </p>
      <p className="articles-desc-desc-b">
        Step-by-step lessons to help you level up<br />
        your design.
      </p>
         <button className="explore-designs btn-orange">EXPLORE</button>
    </div>
    
    
     <section className="community">
      <div className="community-container">
        <div className="community-content">
           <div className="community-header">
        <h3 className="community-title">COMMUNITY</h3>
        <p className="community-desc">🔗 Connect with<br/> Blueprint Designs </p>
        <p className="community-desc a">Join our creative community to shape <br/>the future of design.
          Blueprint Designs <br/>is here to collaborate,inspire,<br/> and grow with you.</p>
         <button className="Learn-button">Join The Community</button>
        <img src="/community (1).png" 
        alt="community" 
        className="community-image" />

         </div>
        </div>

      </div>
     </section>
      </div>
     </section>
       <section className="help-wrapper">
       <div className="help-inner">
        <div className="help-content">
           <div className="help-header">
      <h3 className="help-title" >NEED HELP?</h3>
      </div>
      <p class="help-desc">
        Frequently <br/>
      Asked Questions</p> 
      <p class="ask-help-desc">
      Find answers to common questions about<br/>
     our services,design workflows,timelines and<br/> 
     collaboration process at Blueprint Designs.</p>
     <div className="help-container">
        <img src="/coach.png"
         alt="ask" 
         className="ask-image" />

     </div>
     </div>
     
    {/* Questions aligned right, stacked vertically */}
    <div className="questions-container">
      <div className="question-book" onClick={() => toggleAnswer(0)}>
        <p className="question-a">How do I book a designer?
        <span className="toggle-icon">{activeIndex === 0 ? '-' : '+'}</span></p>
         {activeIndex === 0 && (
    <div className="answer">
      <p>You can book a designer by contacting us through our website or calling our office. A team member will guide you.</p>
    </div>
  )}
      </div>
      <div className="question-book"onClick={() => toggleAnswer(1)}>
        <p className="question-a">What services do you offer?
          <span className="toggle-icon">{activeIndex === 0 ? '-' : '+'}</span></p>
         {activeIndex === 1 && (
    <div className="answer">
      <p>We offer wide range of services from Web development,ui/ux and graphic designing.</p>
    </div>
  )}
      </div>
      <div className="question-book"onClick={() => toggleAnswer(2)}>
        <p className="question-a">How do I collaborate? <span className="toggle-icon">{activeIndex === 0 ? '-' : '+'}</span></p>
         {activeIndex === 2 && (
    <div className="answer">
      <p>You can collaborate with us by reaching out through our contact page. 
      We`ll schedule a discovery call to understand your goals and how we can work together..</p>
    </div>
  )}
      </div>
      <div className="question-book"onClick={() => toggleAnswer(3)}>
        <p className="question-a">Do i need a subscription to access services?<span className="toggle-icon">{activeIndex === 0 ? '-' : '+'}</span></p>
        {activeIndex === 3 && (
    <div className="answer">
      <p>No subscription is required. You can access our services on-demand and only pay for what you use.</p>
    </div>
  )}
      </div>
      <div className="question-book"onClick={() => toggleAnswer(4)}>
        <p className="question-a">Can I switch a designer if i don`t feel the right connection?<span className="toggle-icon">{activeIndex === 0 ? '-' : '+'}</span></p>
         {activeIndex === 4 && (
    <div className="answer">
      <p>Absolutely! It’s important to feel comfortable and confident with your designer since your project reflects your vision.</p>
    </div>
  )}
      </div>
      <div className="question-book"onClick={() => toggleAnswer(5)}>
        <p className="question-a">Is my design kept confidential?<span className="toggle-icon">{activeIndex === 0 ? '-' : '+'}</span></p>
         {activeIndex === 5 && (
    <div className="answer">
      <p>Yes! All prototypes, models, presentations, and client materials are privately and securely stored until a product becomes publicly available..</p>
    </div>
  )}
      </div>

    </div>
</div>
</section>
<div className="intouch-header">
      <h3 className="intouch-title" >GET IN TOUCH</h3>
      </div>
      <p class="intouch-desc">
       We're Here to<br/>
     Support You</p> 
      <p class="intouch-desc-desc">
        Whether you have questions,need help getting<br/>
      started,or want to learn more-reach out anytime.</p>
      
      
       <section className="contact-wrapper">
       <div className="contact-inner">
        <div className="contact-content">
           <div className="contact-header">
      <h3 className="contact-title" >Contact Details</h3>
      </div>
      <p class="contact-desc">
        <strong>Email</strong> : blueprintdesigns@gmail.com<br/>
          <strong>Phone</strong> : +254 717 012 399<br/>  
          <strong>Address</strong> : 1455 View Park Towers, Nairobi.<br/></p> 
           <img src="/linkedin.png"
            alt="linkedin" 
             className="linkedin-image" /> 

         <img src="/fb.png"
         alt="fb" 
         className="fb-image" />

           <img src="/instagram.png"
         alt="ig" 
         className="ig-image" />
           <img src="/whatsapp.png"
         alt="whatsApp" 
         className="whatsapp-image" />
    <div className="contact-header">
      <p class="contact-desc-a">
       We typically respond within 12hrs.</p>
       </div>
       
    <div className="send-wrapper">
       <div className="send-container">
      <h3 className="send-title" >Send Us a Message</h3>
      </div>
       
    <div className="email-container">
       <div className="email-box">
      <h3 className="email-title" >Email</h3>
      <p className="email-text">Email</p>
       <img src="/images/help-support3.png"
         alt="line" 
         className="line-image" />
          <h3 className="message-title" >Message</h3>
         <p className="message-text">Message</p>
       <img src="/images/help-support4.png"
         alt="line" 
         className="line-image1" />
         <button className="Send-button">Send message</button>
      </div> 
      </div> 
      </div>
     </div>
     </div> 
</section>
<section className="footer">
  <div className="footer-grid">
  <div className="footer-b">
    <h3 className="footer-title">Blueprint Designs</h3>
      <div className="footer-columns">
    <ul className="footer-list">
      <li>About</li>
      <li>Services</li>
      <li>Designers</li>
      <li>Resources</li>
      <li>Contact</li>
    </ul>
      <ul className="footer-list">
        <li>Instagram</li>
        <li>Facebook</li>
        <li>YouTube</li>
        <li>LinkedIn</li>
        <li>Press</li>
      </ul>
      <ul className="footer-list">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>   
      </ul>
      
    </div>
    <p className="reservation">&copy;[2025] Blueprint Designs.All Rights Reserved.</p>
    </div>
    
    
  <div className="footer-a">
  <p className="footer-title-a">
    Find<br/>
    Support<br/>
    Guidance<br/>
    and Balance.
  </p>

  <button className="find-button">Find support Now</button>
   <img src="/com (1).png"
         alt="find" 
         className="find-image" />
     
  
</div>
</div>
  

</section>

      






</>
  );
};

export default Hero;
