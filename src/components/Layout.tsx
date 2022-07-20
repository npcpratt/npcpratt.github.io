import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import favicon from '../images/favicon.svg'

const Layout = ({ location, description, children }: any) => {
  let title, url;
  if (location === 'about') {
    title = 'Pratik V | Front-End Developer'
    url = 'https://pratvar.com'
  } else if (location === 'projects') {
    title = 'Projects | Pratik V'
    url = 'https://pratvar.com/projects'
  } else if (location === 'contact') {
    title = 'Contact | Pratik V'
    url = 'https://pratvar.com/contact'
  }

  let image = 'https://pratvar.com/images/profile.jpg'

  return (
    <div className='flex flex-col min-h-screen'>
      <Helmet title={title}>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <script src="https://kit.fontawesome.com/775cd725b8.js" crossOrigin="anonymous"></script>
        <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
        {description && <meta name="description" content={description} />}

        <meta name="og:type" content="website" />
        <meta name="og:url" content={url} />
        <meta name="og:title" content={title} />
        {description && <meta name="og:description" content={description} />}
        <meta name="og:image" content={image} />

        <meta name="twitter:creator" content="@pratvar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="og:image" content={image} />

      </Helmet>
      <nav className='bg-white bg-opacity-70 fixed w-full z-50 shadow-md select-none' style={{ backdropFilter: 'saturate(180%) blur(20px)' }}>
        <ul className='flex max-w-screen-2xl w-full mx-auto justify-center md:justify-end px-8 py-4 md:px-16 sm:text-lg'>
          <li><Link to="/" className={`px-3.5 py-2 rounded-full transition-all duration-100 ${location === 'about' ? 'font-bold' : 'hover:bg-blue-600 hover:shadow-md hover:text-white active:bg-blue-800'}`}>About</Link></li>
          <li><Link to="/projects" className={`ml-3 px-3.5 py-2 rounded-full transition-all duration-100 ${location === 'projects' ? 'font-bold' : 'hover:bg-blue-600 hover:shadow-md hover:text-white active:bg-blue-800'}`}>Projects</Link></li>
          <li><Link to="/contact" className={`ml-3 px-3.5 py-2 rounded-full transition-all duration-100 ${location === 'contact' ? 'font-bold' : 'hover:bg-blue-600 hover:shadow-md hover:text-white active:bg-blue-800'}`}>Contact</Link></li>
        </ul>
      </nav>

      <main className='pt-12 sm:pt-14 flex-grow w-full flex flex-col'>{children}</main>

      <footer className='px-6 py-8 sm:px-8 sm:py-16 md:px-14 bg-gray-50'>
        <div className='flex flex-col-reverse items-center gap-6 sm:flex-row justify-between max-w-screen-xl mx-auto'>
          <p className='text-gray-700'>© 2022 Pratik V</p>
          <p className='font-semibold'>Designed and coded by Pratik.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout