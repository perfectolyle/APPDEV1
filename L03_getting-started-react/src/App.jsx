import './App.css'

function App() {
  return (
    <main className="about-me">
      <header>
        <h1>About Me</h1>
        <p className="subtitle">Getting Started with React</p>
      </header>

      <hr />

      <section>
        <h2>Full Name</h2>
        <p>Perfecto S. Gardoce III</p>
      </section>

      <section>
        <h2>Course &amp; Year</h2>
        <p>BSIS 3 &mdash; Bachelor of Science in Information Systems, Third Year</p>
      </section>

      <section>
        <h2>Fun Fact</h2>
        <ul>
          <li>I&apos;m from Tarlac, and JavaScript was the first programming language I truly enjoyed learning.</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>What I Have Learned So Far</h2>
        <p>
          So far in this course, I have moved from writing plain JavaScript to
          building actual applications with modern tools like Git and React. The
          earlier activities, such as practicing version control in the Git Dojo
          and completing my first assignment, helped me understand how real
          projects are structured, tracked, and shared. Setting up this React
          project taught me how components, JSX, and the development server work
          together, and I found it interesting how JSX lets me write markup and
          logic in the same place. The most challenging part was getting
          comfortable with the project structure and the tooling around it, but
          working through it made me more confident as a developer. These
          experiences connect directly to my goal of building meaningful software
          and preparing for a career in the field of Information Systems and
          technology.
        </p>
      </section>
    </main>
  )
}

export default App
