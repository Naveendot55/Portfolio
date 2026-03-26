import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Git",
  "VS Code",
  "Microsoft Excel",
  "UI Development",
  "Responsive Design",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with HTML, CSS, and JavaScript to showcase skills and projects.",
    stack: ["HTML", "CSS", "JavaScript"],
    metrics: ["Responsive layout", "Clean UI"],
  },
  {
    title: "Age Calculator",
    description:
      "Responsive age calculator that computes years, months, and days from a date of birth.",
    stack: ["HTML", "CSS", "JavaScript"],
    metrics: ["Date functions", "Instant results"],
  },
];

const education = [
  {
    program: "B.Tech in Computer Science Engineering (CSE)",
    school: "St. Mary’s Engineering College, Hyderabad",
    period: "2022 — 2026 · 72%",
  },
  {
    program: "Intermediate (12th)",
    school: "Telangana State Board — Sai Sri Jr. College",
    period: "2020 — 2022",
  },
  {
    program: "SSC (10th)",
    school: "Telangana State Board — ZP High School",
    period: "2019 — 2020",
  },
];

const stats = [
  { label: "Frontend Projects", value: "6+" },
  { label: "Core Skills", value: "10+" },
  { label: "Current CGPA", value: "—" },
];

export default function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="logo">
          <span className="logo-mark">NM</span>
          <div>
            <p className="logo-title">Naveen Myana</p>
            <p className="logo-sub">Frontend Developer</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn btn-primary">Download Resume</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Frontend Portfolio</p>
            <h1>Building responsive, user-friendly web experiences.</h1>
            <p className="lead">
              Frontend Developer with strong skills in HTML, CSS, JavaScript, and
              React. Passionate about UI development and problem-solving, eager
              to contribute as a Software Engineer Trainee.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Hire Me</button>
              <button className="btn btn-ghost">View Projects</button>
            </div>
            <div className="hero-tags">
              <span>React</span>
              <span>UI Development</span>
              <span>Responsive Design</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <h3>Currently Based</h3>
              <p>Hyderabad, India</p>
              <div className="panel-pill">Open to Internships</div>
            </div>
            <div className="panel-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div>
            <h2>About</h2>
            <p>
              I build responsive and user-friendly web applications with a
              focus on clean UI, accessibility, and performance. I enjoy
              turning ideas into real products and collaborating with teams.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <h3>Frontend Focus</h3>
              <p>HTML, CSS, JavaScript, React, Tailwind, and Bootstrap.</p>
            </div>
            <div className="about-card">
              <h3>Problem Solving</h3>
              <p>Strong foundation in programming and logical thinking.</p>
            </div>
            <div className="about-card">
              <h3>Team Ready</h3>
              <p>Communication skills, time management, and leadership.</p>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Frontend technologies, frameworks, and tools.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="section-title">
            <h2>Projects</h2>
            <p>Selected work showcasing UI and JavaScript skills.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <div className="badges">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="metrics">
                    {project.metrics.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                </div>
                <button className="btn btn-ghost">View project</button>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="experience">
          <div className="section-title">
            <h2>Education</h2>
            <p>Academic background in Computer Science and Engineering.</p>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.program} className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <h3>{item.program}</h3>
                  <p className="muted">{item.school}</p>
                  <p className="muted">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <div className="section-title">
            <h2>Additional Info</h2>
            <p>Languages and interests outside of development.</p>
          </div>
          <div className="testimonial-grid">
            <figure className="testimonial-card">
              <blockquote>Languages: English, Hindi, Telugu.</blockquote>
              <figcaption>
                <strong>Communication</strong>
                <span>Multilingual</span>
              </figcaption>
            </figure>
            <figure className="testimonial-card">
              <blockquote>
                Hobbies: Exploring the internet, photography, travelling, and
                listening to music.
              </blockquote>
              <figcaption>
                <strong>Interests</strong>
                <span>Creative + Curious</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <h2>Let’s connect.</h2>
            <p>
              Reach out for internships, freelance work, or collaborations.
            </p>
            <div className="contact-details">
              <p>Email: naveenmyana555@gmail.com</p>
              <p>Phone: +91 9347030980</p>
              <p>
                GitHub: <span>Naveendot55</span>
              </p>\r\n            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Project overview" rows="4" />
            <button className="btn btn-primary" type="button">
              Send message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Naveen Myana. Frontend Developer.</p>
        <div className="footer-links">
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>Email</span>
        </div>
      </footer>
    </div>
  );
}

