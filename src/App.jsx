function App() {
  return (
    <div className="App scroll-smooth">
      <Hero />
      <AboutSection />
      <div id="projects" className="h-[25vh] flex justify-center items-center bg-black bg-cover">
        <h1 className="text-6xl md:text-8xl font-bold text-white">My Projects</h1>
      </div>
      <div className="bg-[url('/beach.webp')] bg-cover">
        <ProjectSection
          heading="Sunscren shop"
          paragraph="This shop was built using Next.js and Tailwind CSS. The project
          consists of a landing page, a special offer page, a list of products
          which can be filtered and product page. The page stores its data on
          the MongoDB Atlas instance and is currently hosted on Netlify."
          repolink="https://github.com/avgmathenjoyer/store"
          demoLink="https://tubular-cranachan-e346e0.netlify.app/"
          title="sunny beach, oil painting, trending on artstation HQ, high res,
        warm, happy, 8k"
        />
      </div>
      <div className="bg-[url('/concert.webp')] bg-cover">
        <ProjectSection
          heading="Wordlist"
          paragraph="This app uses Spotify API to create playlists from words from given
        sentences. It was built using Next.js and Tailwind CSS. It
        demonstrates the use of Spotify authorization workflow to create
        private playlists on user's account."
          repoLink="https://github.com/avgmathenjoyer/wordlist"
          demoLink="https://transcendent-starlight-d45333.netlify.app/"
          title="concert, energetic, oil painting, trending on artstation, dark,
        happy"
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div
      className={`w-screen h-screen flex flex-col bg-[url('/belotto.webp')] bg-cover text-white`}
    >
      <nav className="w-screen flex justify-end h-12 text-xl lg:text-2xl mt-4">
        <a href="/#about" className="mx-6 hover:cursor-pointer">
          about me
        </a>
        <a href="/#projects" className="mx-6 hover:cursor-pointer">
          projects
        </a>
      </nav>
      <div className="ml-4 lg:ml-12 flex flex-col h-full justify-end">
        <div className="backdrop-blur-xs lg:backdrop-blur-none">
          <h3 className="text-lg md:text-xl lg:text-3xl backdrop-filter">
            Programming and machine learning enthusiast.
          </h3>
          <h1 className="drop-shadow-2xl font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
            DAWID JASIOROWSKI
          </h1>
        </div>
      </div>
      <div className="text-white flex flex-row-reverse text-sm md:text-lg lg:text-2xl mr-3 mb-8 italic mt-12">
        <div className="backdrop-contrast-50 px-4">
          <h4>AI Generated</h4>
          <h4>
            Vienna, oil painting, Bernardo Belotto, dark, cold, 8k, high res
          </h4>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div
      id="about"
      className="w-screen h-screen flex flex-col bg-[url('/monet.webp')] bg-cover text-white"
    >
      <div className="ml-4 lg:ml-12 drop-shadow-2xl mt-[15vh] xl:mt-[30vh] lg:w-3/5 backdrop-blur-xs">
        <h1 className="text-5xl 2xl:text-7xl font-bold">About me</h1>
        <p className="text-2xl 2xl:text-4xl">
          I'm a 19-year-old first year Computer Science student at Jagiellonian University.
          I'm really into both front-end and back-end technologies and have been experimenting 
          with combining them with machine learning tools to make websites look and work even better. 
          This portfolio is a perfect example of how I've used this philosophy on the front-end 
          side - all the background images were created using AI.
        </p>
      </div>
      <div className="text-white flex flex-row-reverse text-sm md:text-lg xl:text-2xl ml-2 mr-3 mb-8 italic mt-12 h-full items-end">
        <div className="backdrop-contrast-50 px-4">
          <h4>AI Generated</h4>
          <h4>
            cinematic shot of city, oil painting, Claude Monet, trending on
            artstation HQ, Greg Rutkowski
          </h4>
        </div>
      </div>
    </div>
  );
}

function RepoLink({ link }) {
  return (
    <a href={link}>
      <button className="bg-black text-lg lg:text-2xl p-2 rounded-xl m-4">
        Link to Github Repo
      </button>
    </a>
  );
}

function DemoLink({ link }) {
  return (
    <a href={link}>
      <button className="bg-blue-600 text-lg lg:text-2xl p-2 rounded-xl m-4">
        See the live demo
      </button>
    </a>
  );
}

function ProjectSection({
  heading,
  paragraph,
  title,
  repoLink,
  demoLink,
}) {
  return (
    <section
      className={`w-screen h-screen flex flex-col text-white`}
    >
      <div className="mt-[15vh] 2xl:mt-[30vh] ml-4 lg:ml-12 w-full lg:w-3/5 drop-shadow-2xl p-4 rounded-xl inline-block backdrop-blur-xs">
        <h1 className="text-5xl xl:text-7xl font-bold mb-2">{heading}</h1>
        <p className="text-2xl xl:text-4xl w-full">{paragraph}</p>
        <div className="flex flex-row">
          <RepoLink link={repoLink} />
          <DemoLink link={demoLink} />
        </div>
      </div>
      <div className="text-white flex flex-row-reverse text-sm md:text-lg xl:text-2xl ml-2 mr-3 mb-8 italic mt-12 h-full items-end">
        <div className="backdrop-contrast-50 px-4">
          <h4>AI Generated</h4>
          <h4>{title}</h4>
        </div>
      </div>
    </section>
  );
}

export default App;
