import { useState } from 'react'
import Layout from '../../components/Layout'
import thumbnail01 from '../../images/projects/01.png'
import thumbnail02 from '../../images/projects/02.png'
import thumbnail03 from '../../images/projects/03.png'
import thumbnail04 from '../../images/projects/04.png'
import thumbnail05 from '../../images/projects/05.png'
import thumbnail06 from '../../images/projects/06.png'
import thumbnail07 from '../../images/projects/07.png'
import thumbnail08 from '../../images/projects/08.png'
import thumbnail09 from '../../images/projects/09.png'
import thumbnail10 from '../../images/projects/10.png'
import thumbnail11 from '../../images/projects/11.png'
import thumbnail12 from '../../images/projects/12.png'
import thumbnail13 from '../../images/projects/13.png'
import thumbnail14 from '../../images/projects/14.png'
import thumbnail15 from '../../images/projects/15.png'
import featured1 from '../../images/projects/featured1.png'
import featured2 from '../../images/projects/featured2.png'
import featured3 from '../../images/projects/featured3.png'
import ProjectArray from './ProjectArray'
import './projects.css'

const Projects = () => {

  const featured = [
    {
      title: 'Trading Journal',
      desc: (<>An app to help me keep track of my trades.<br />Built with: React, Material-UI, Firebase.</>),
      link: 'https://trading-journal-c6889.web.app/',
      source: 'https://github.com/npcpratt/trading-journal',
    },
    {
      title: 'A Blog Website',
      desc: (<>Built with: Gatsby, React, and Tailwind CSS.</>),
      link: 'https://nutrafam-website.web.app/',
      source: 'https://github.com/npcpratt/nutrafam',
    },
    {
      title: 'My Porfolio Website',
      desc: (<>Yep, the one you're looking at right now.<br />Built with: React (TypeScript) and Tailwind.</>),
      source: 'https://github.com/npcpratt/portfolio',
    },
  ]

  const [active, setActive] = useState(0)

  function handleChange(direction: string) {
    if (direction === "next") {
      setActive(prev => prev === 2 ? 0 : prev + 1)
    } else {
      setActive(prev => prev === 0 ? 2 : prev - 1)
    }
  }

  return (
    <Layout location='projects'>
      <section id='recent-projects' className='px-8 pb-10 sm:pb-20 bg-gradient-to-br from-slate-50 to-slate-200'>
        <div className='max-w-screen-2xl w-full mx-auto py-16'>
          <h2 className='font-semibold tracking-tight mb-10'>Featured Projects</h2>
          <div className='grid lg:grid-cols-2 justify-items-center gap-4 lg:gap-8 w-full'>
            <div className='flex items-center'>
              <button onClick={() => handleChange("prev")} className='mr-4 outline-none h-8 w-8 sm:h-10 sm:w-10 text-sm sm:text-lg flex items-center justify-center rounded-full shadow-md transition-all bg-gray-50 active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div id='slides'>
                <img src={featured1} className={`-ml-4 image ${active === 0 ? "" : "hidden"}`} alt="Thumbnail" />
                <img src={featured2} className={`-ml-4 image ${active === 1 ? "" : "hidden"}`} alt="Thumbnail" />
                <img src={featured3} className={`-ml-4 image ${active === 2 ? "" : "hidden"}`} alt="Thumbnail" />
              </div>
              <button onClick={() => handleChange("next")} className='ml-4 outline-none h-8 w-8 sm:h-10 sm:w-10 text-sm sm:text-lg flex items-center justify-center rounded-full shadow-md transition-all bg-gray-50 active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className='pt-10 lg:pt-2 xl:pt-10'>
              <h2 className='font-bold tracking-tight mb-4'>{featured[active].title}</h2>
              <p className='mb-8 max-w-lg text-gray-800'>{featured[active].desc}</p>
              <div className="flex">
                {
                  featured[active].link &&
                  <a className='flex items-center py-1 px-2.5 shadow bg-blue-700 rounded-md sm:text-lg text-white transition-all hover:bg-blue-600 active:bg-blue-800 mr-3' href={featured[active].link}>View<i className='ml-2 text-xs sm:text-sm fa fa-external-link'></i></a>
                }
                <a className='flex items-center py-1 px-2.5 shadow bg-gray-700 rounded-md sm:text-lg text-white transition-all hover:bg-gray-600 active:bg-gray-800' href={featured[active].source}>Source<i className='ml-2 fab fa-github'></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 sm:px-8 py-20'>
        <div className='max-w-screen-2xl mx-auto'>
          <h2 className='font-semibold my-4'>All Projects</h2>
          <p className='text-gray-800'>These are some of the projects I made while learning through <code><a href="https://freecodecamp.org" className='hover:underline whitespace-nowrap'>freeCodeCamp<i className='transform translate-x-0.5 translate-y-0.5 mr-1 text-2xl fab fa-free-code-camp'></i></a></code>.</p>
          <div className="py-0 sm:py-4 md:px-6">
            <ProjectArray
              title='Responsive Web Design'
              certification='https://www.freecodecamp.org/certification/pratvar/responsive-web-design'
              array={[
                {
                  name: 'Tribute Page',
                  link: 'https://npcpratt.github.io/fCC-projects/html-css/tribute-page',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/html-css/tribute-page',
                  image: thumbnail01
                },
                {
                  name: 'Survey Form',
                  link: 'https://npcpratt.github.io/fCC-projects/html-css/survey-form',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/html-css/survey-form',
                  image: thumbnail02
                },
                {
                  name: 'Product Landing Page',
                  link: 'https://npcpratt.github.io/fCC-projects/html-css/product-landing-page',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/html-css/product-landing-page',
                  image: thumbnail03
                },
                {
                  name: 'Technical Documentation Page',
                  link: 'https://npcpratt.github.io/fCC-projects/html-css/technical-documentation-page',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/html-css/technical-documentation-page',
                  image: thumbnail04
                },
                {
                  name: 'Personal Portfolio Webpage',
                  link: 'https://npcpratt.github.io/fCC-projects/html-css/personal-portfolio-webpage',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/html-css/personal-portfolio-webpage',
                  image: thumbnail05
                },
              ]}
            />
            <ProjectArray
              type='text'
              title='Javascript Algorithms and Data Structures'
              certification='https://www.freecodecamp.org/certification/pratvar/javascript-algorithms-and-data-structures'
              array={[
                {
                  name: 'Palindrome Checker',
                  link: 'https://github.com/npcpratt/fCC-projects/blob/master/javascript/palindrome-checker.js',
                },
                {
                  name: 'Romal Numeral Converter',
                  link: 'https://github.com/npcpratt/fCC-projects/blob/master/javascript/roman-numeral-converter.js',
                },
                {
                  name: 'Caesars Cipher',
                  link: 'https://github.com/npcpratt/fCC-projects/blob/master/javascript/caesars-cipher.js',
                },
                {
                  name: 'Telephone Number Validator',
                  link: 'https://github.com/npcpratt/fCC-projects/blob/master/javascript/telephone-number-validator.js',
                },
                {
                  name: 'Cash Register',
                  link: 'https://github.com/npcpratt/fCC-projects/blob/master/javascript/cash-register.js',
                },
              ]}
            />
            <ProjectArray
              title='Front End Libraries'
              certification='https://www.freecodecamp.org/certification/pratvar/front-end-libraries'
              array={[
                {
                  name: 'Random Quote Machine',
                  link: 'https://npcpratt.github.io/fCC-projects/frontend-libs/random-quote',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/frontend-libs/random-quote',
                  image: thumbnail06
                },
                {
                  name: 'Markdown Previewer',
                  link: 'https://npcpratt.github.io/fCC-projects/frontend-libs/markdown-previewer',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/frontend-libs/markdown-previewer',
                  image: thumbnail07
                },
                {
                  name: 'Drum Machine',
                  link: 'https://npcpratt.github.io/fCC-projects/frontend-libs/drum-machine',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/frontend-libs/drum-machine',
                  image: thumbnail08
                },
                {
                  name: 'JavaScript Calculator',
                  link: 'https://npcpratt.github.io/fCC-projects/frontend-libs/js-calculator',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/frontend-libs/js-calculator',
                  image: thumbnail09
                },
                {
                  name: '25 + 5 Clock',
                  link: 'https://npcpratt.github.io/fCC-projects/frontend-libs/pomodoro-timer',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/frontend-libs/pomodoro-timer',
                  image: thumbnail10
                },
              ]}
            />
            <ProjectArray
              title='Data Visualization'
              certification='https://www.freecodecamp.org/certification/pratvar/data-visualization'
              array={[
                {
                  name: 'Bar Chart',
                  link: 'https://npcpratt.github.io/fCC-projects/data-visualization/bar-chart',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/data-visualization/bar-chart',
                  image: thumbnail11
                },
                {
                  name: 'Scatterplot Graph',
                  link: 'https://npcpratt.github.io/fCC-projects/data-visualization/scatterplot-graph',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/data-visualization/scatterplot-graph',
                  image: thumbnail12
                },
                {
                  name: 'Heat Map',
                  link: 'https://npcpratt.github.io/fCC-projects/data-visualization/heat-map',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/data-visualization/heat-map',
                  image: thumbnail13
                },
                {
                  name: 'Choropleth Map',
                  link: 'https://npcpratt.github.io/fCC-projects/data-visualization/choropleth-map',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/data-visualization/choropleth-map',
                  image: thumbnail14
                },
                {
                  name: 'Treemap Diagram',
                  link: 'https://npcpratt.github.io/fCC-projects/data-visualization/treemap',
                  source: 'https://github.com/npcpratt/fCC-projects/tree/master/data-visualization/treemap',
                  image: thumbnail15
                },
              ]}
            />
            <ProjectArray
              type='text'
              title='APIs and Microservices'
              certification='https://www.freecodecamp.org/certification/pratvar/apis-and-microservices'
              array={[
                {
                  name: 'Timestamp Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-timestamp',
                },
                {
                  name: 'Request Header Parser Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-headerparser',
                },
                {
                  name: 'URL Shortener Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-urlshortener',
                },
                {
                  name: 'Exercise Tracker',
                  link: 'https://repl.it/@pratvar/boilerplate-project-exercisetracker',
                },
                {
                  name: 'File Metadata Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-filemetadata',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
