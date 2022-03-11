import { Link } from 'react-router-dom'
import Projects from '../components/Projects'
import bgImg from '../images/portfolio-bg.jpg'

const Home = () => {
  return (
    <main>
      <section className='relative h-screen w-full overflow-hidden'>
          <img className='relative w-full h-full object-cover animate-scaleBg' src={bgImg} alt='background image'/>
          <section className='absolute flex flex-col min-h-screen top-35% left-10% text-6xl text-red-100 cursive'>
              <h1>HI, I'm <Link to='/about' className='hover-nav-name text-red-200 text-6xl font-bold'>Bodiseowei</Link>.</h1>
              <h2>Software Developer</h2>
              <a target='_blank' href='https://drive.google.com/file/d/1-IWP7aJSIc0pB8c4a0zQoDOCKh7iGXsZ/view?usp=sharing' className='border-2 border-grey-400 w-44 p-5 mt-5 hover:scale-110 transition ease-in-out duration-200'>RESUME</a>
          </section>  
      </section>
      <Projects />
    </main>
  )
}

export default Home  