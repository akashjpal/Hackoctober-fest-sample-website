

function About() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <h1>About Hacktoberfest 2026</h1>
        <p>
          Hacktoberfest is an annual celebration of open source software 
          organized by DigitalOcean and the open source community. 
          This year marks another exciting edition of the event.
        </p>
      </section>

      <section className="about-details">
        <h2>What is Hacktoberfest?</h2>
        <p>
          Hacktoberfest is a month-long celebration of open source 
          contributions. Participants are encouraged to make four pull 
          requests to public repositories on GitHub during October. 
          Those who complete the challenge earn a limited-edition 
          Hacktoberfest t-shirt and other swag.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to welcome new contributors to the open source 
          community, provide them with guidance and support, and help 
          them make meaningful contributions to projects they care about.
        </p>

        <h2>Timeline</h2>
        <ol>
          <li>October 1 - Hacktoberfest begins</li>
          <li>October 15 - Mid-month check-in and community events</li>
          <li>October 31 - Hacktoberfest ends, swag distribution begins</li>
        </ol>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/team-member1.jpg" />
            <h3>Sarah Chen</h3>
            <p>Event Lead</p>
          </div>
          <div className="team-member">
            <img src="/team-member2.jpg" />
            <h3>Marcus Johnson</h3>
            <p>Community Manager</p>
          </div>
          <div className="team-member">
            <img src="/team-member3.jpg" />
            <h3>Priya Patel</h3>
            <p>Outreach Coordinator</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <div className="decorative-icons">
        <span>🎉</span>
        <span>🎨</span>
        <span>🚀</span>
      </div>

      <p className="fine-print" style={{ color: '#c0c0c0' }}>
        This is some fine print that is hard to read against the white background.
      </p>
    </div>
  )
}

export default About