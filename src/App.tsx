import './index.css';
import GallerySlider from './components/GallerySlider';

export default function App() {

  const NostoProjectImages = Array.from({ length: 12 }, (_, i) => `assets/img/Nosto/admin-${i + 1}.png`);
  const NewsCorpProjectImages = Array.from({ length: 9 }, (_, i) => `assets/img/NewsCorp/project-${i + 1}.png`);
  const ExpertiseEventsWebsiteImages = Array.from({ length: 8 }, (_, i) => `assets/img/ExpertiseEvents/website/website-${i + 1}.png`);
  const ExpertiseEventsLandingpageImages = Array.from({ length: 8 }, (_, i) => `assets/img/ExpertiseEvents/landing_page/landingpage-${i + 1}.png`);


  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Peng Zhou</h1>
        <p className="text-lg">Front-End Developer | React | APIs | CMS</p>
        <p className="text-sm mt-2 text-gray-200">
          Passionate about building accessible, scalable, and user-friendly web applications
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a Front-End Developer with over 10 years of experience building responsive, accessible, and high-performing web applications. Skilled in React, Redux, TypeScript, and modern tooling such as Tailwind, Cypress, and Storybook, I specialize in delivering scalable UI solutions and design systems, with a proven track record collaborating across design and engineering teams to create inclusive and engaging digital experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-white p-8 shadow-inner">
      <GallerySlider title="Nosto Projects" images={NostoProjectImages} />
      <GallerySlider title="News Corp Projects" images={NewsCorpProjectImages} />
      <GallerySlider title="Expertise Events Website Projects" images={ExpertiseEventsWebsiteImages} />
      <GallerySlider title="Expertise Events Landing page Projects" images={ExpertiseEventsLandingpageImages} />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{display: "none"}}>
          {/* Project 1 */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="/assets/project1.png"
              alt="Project 1 screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">E-commerce UI</h3>
              <p className="text-gray-600">
                React + REST API integration for product listing and checkout.
              </p>
              <div className="mt-2">
                <a
                  href="https://github.com/your-username/project1"
                  className="text-indigo-600 hover:underline mr-3"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link.com"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="/assets/project2.png"
              alt="Project 2 screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">CMS Integration</h3>
              <p className="text-gray-600">
                Custom WordPress theme with React front-end.
              </p>
              <div className="mt-2">
                <a
                  href="https://github.com/your-username/project2"
                  className="text-indigo-600 hover:underline mr-3"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">
          Let’s connect! Reach me via{" "}
          <a
            href="mailto:peterzhou.syd@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            Email
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/peng-zhou-6ba5234b/"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center p-4 mt-6">
        <p>© {new Date().getFullYear()} Peng Zhou</p>
      </footer>
    </div>
  );
}