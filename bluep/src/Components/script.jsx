import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 2) % 2); // 2 cards
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  return (
    <section className="Testimonials">
      <div className="card-wrapper">
        <div className="card-tracker">
          <div className="card first-card">
            <h5>TESTIMONIALS</h5>
            <p className="testimonials">
              What Our Clients<br /> Are Saying
            </p>
            <p className="testimonials-a">
              Positive experience from clients and<br /> Blueprint Designs programs
            </p>
            <div className="arrow-buttons">
              <button className="arrow-left" onClick={handlePrev}>&#8592;</button>
              <button className="arrow-right" onClick={handleNext}>&#8594;</button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className={`card-a ${activeIndex === 0 ? "active" : "hidden"}`}>
            <p className="feedback">
              “Blueprint Designs truly understood our vision and brought it to life with clarity 
              and creativity. Their team guided us through every stage with professionalism and helped 
              turn our rough ideas into a polished, impactful design. We're proud of the result and grateful for their support.”
            </p>
            <p className="client">-James Erick.02.</p>
          </div>

          <div className={`card-b ${activeIndex === 1 ? "active" : "hidden"}`}>
            <p className="feedback a">
              “Blueprint Designs was a game-changer. 
              Their creative and strategic approach helped us connect with our audience. 
              Truly collaborative and highly recommended!”
            </p>
            <p className="client">-Jane Amore.52.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

