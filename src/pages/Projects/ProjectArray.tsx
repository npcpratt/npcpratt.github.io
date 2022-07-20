import './projects.css'


const ProjectArray = ({ type, title, certification, array }: any) => {
  let content;
  if (type === 'text') content = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-3 mb-8'>
      {
        array.map((project: any, i: number) => {
          return (
            <div key={i} className='border flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md hover:bg-white shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-100'>
              <div className="cursor-default">{project.name}</div>
              <a href={project.link} className='hover:underline ml-4 border-l-2 pl-2 whitespace-nowrap'>View <i className='fa fa-external-link text-xs'></i></a>
            </div>
          )
        })
      }
    </div>
  )
  else content = (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-3 mb-8">
      {
        array.map((project: any, i: number) => {
          return (
            <div key={i} className="w-full border group relative bg-gray-50 rounded-lg overflow-hidden shadow transition-all duration-100 transform hover:-translate-y-0.5 hover:shadow-md hover:bg-white">
              <div className="relative w-full h-auto bg-gray-200">
                <img src={project.image} alt="Thumbnail" />
                <div className='flex justify-evenly items-center absolute top-0 w-full h-full bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-100' style={{ backdropFilter: 'blur(20px)' }}>
                  <a href={project.link} className='flex items-center px-2 py-1 text-lg text-white rounded-md bg-blue-700 hover:bg-blue-600 active:bg-blue-800'>View<i className='fa fa-external-link text-xs ml-1.5'></i></a>
                  <a href={project.source} className='px-2 py-1 text-lg text-white rounded-md bg-gray-700 hover:bg-gray-600 active:bg-gray-800'>Source<i className='fab fa-github ml-1.5'></i></a>
                </div>
              </div>
              <div className='flex items-center justify-between py-2 px-3 cursor-default'>
                {project.name}
              </div>
            </div>
          )
        })
      }
    </div>
  )
  return (
    <div className='my-20'>
      <div className='flex items-center justify-between my-2'>
        <h3 className='font-bold'>{title}</h3>
        <a href={certification} className='whitespace-nowrap px-2 py-1 ml-4 rounded-md text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-800 transition-all'>View Certification</a>
      </div>
      <hr />
      {content}
    </div>
  )
}

export default ProjectArray
