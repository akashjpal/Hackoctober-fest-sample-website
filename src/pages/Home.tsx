function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <h1>Welcome to Hacktoberfest 2026</h1>
        <p className="hero-subtitle">
          Hacktoberfest is a celebration of open source software. 
          This year, we're making it bigger and better than ever!
        </p>
        <img src="/hacktoberfest-banner.png" alt="" />
        {/* a11yfix: issue_image-alt__img_src___hacktober (image-alt) */}
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Open Source Contributions</h3>
            <p>
              Make four pull requests to any public repository on GitHub 
              during October to earn your Hacktoberfest tee shirt.
            </p>
          </div>
          <div className="feature-card">
            <h3>Community Events</h3>
            <p>
              Join virtual and in-person events hosted by the community 
              around the world.
            </p>
          </div>
          <div className="feature-card">
            <h3>Learning Resources</h3>
            <p>
              Access tutorials, guides, and mentorship to help you 
              get started with open source.
            </p>
          </div>
        </div>
      </section>

      <section className="participation-section">
        <h2>How to Participate</h2>
        <ul>
          <li>Sign up on the Hacktoberfest website</li>
          <li>Find a project you'd like to contribute to</li>
          <li>Submit a pull request before October 31st</li>
          <li>Get your free Hacktoberfest swag!</li>
        </ul>
        <div className="cta-section">
          <button>Register Now</button>
          <a href="https://hacktoberfest.com">Learn More</a>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Participants Say</h2>
        <blockquote>
          <p>"Hacktoberfest changed my life. I went from never contributing to open source to becoming a maintainer."</p>
          <cite>— Jane Developer</cite>
        </blockquote>
        <blockquote>
          <p>"The community is so welcoming and supportive. Highly recommend it to everyone!"</p>
          <cite>— Alex Contributor</cite>
        </blockquote>
      </section>

      <div className="decorative-icons">
        <span>🎉</span>
        <span>🎨</span>
        <span>🚀</span>
      </div>
    </div>
  )
}

export default Home