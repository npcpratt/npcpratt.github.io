import Layout from '../../components/Layout';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Layout location='contact'>
      <section className='w-full flex-grow flex items-center bg-blueGrey-50 px-8'>
        <div className='max-w-screen-xl w-full mx-auto py-12 flex flex-col sm:flex-row items-center sm:justify-evenly'>
          <ContactForm />
          <div className='mt-8 sm:mt-0 sm:ml-4 max-w-sm w-full px-6 py-8 sm:py-12 rounded-xl bg-white shadow-lg sm:shadow-xl'>
            <h3 className='text-gray-800 font-bold mb-2 sm:-mt-2'>Email</h3>
            <p className='mb-12'><a className='hover:text-blue-900' href="mailto:pratikvar@pm.me">pratikvar@pm.me</a></p>
            <h3 className='text-gray-800 font-bold my-4'>Social Links</h3>
            <ul className='text-2xl md:text-3xl grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 sm:gap-4 md:gap-1 mb-3'>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-blue-800' href="https://facebook.com/pratvar.dev"><i className='fab fa-facebook' /><span style={{ fontSize: 0 }}>Facebook</span></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-lightBlue-500' href="https://twitter.com/pratvar"><i className='fab fa-twitter' /><span style={{ fontSize: 0 }}>Twitter</span></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-blue-800' href="https://linkedin.com/in/pratv"><i className='fab fa-linkedin' /><span style={{ fontSize: 0 }}>Linkedin</span></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-gray-600' href="https://github.com/pratvar"><i className='fab fa-github' /><span style={{ fontSize: 0 }}>Github</span></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-orange-700' href="https://stackoverflow.com/users/5686477/pratik-var"><i className='fab fa-stack-overflow' /><span style={{ fontSize: 0 }}>Stack Overflow</span></a></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact