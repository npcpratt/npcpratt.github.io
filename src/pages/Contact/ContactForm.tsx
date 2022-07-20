import { useForm } from "@formspree/react";

const ContactForm = () => {

  const [state, handleSubmit] = useForm("xleogqql");

  console.log(state.errors)

  return (
    <form
      className='max-w-sm w-full p-6 rounded-xl bg-white shadow-lg sm:shadow-xl'
      onSubmit={handleSubmit}
    >
      <h2 className='text-gray-800 font-bold mb-5'>Contact Form</h2>
      <div className='flex flex-col'>
        <label className='mb-1' htmlFor="name">Name</label>
        <input className='mb-4 p-2 border rounded bg-gray-50 hover:bg-white' type="text" name="name" id="name" placeholder="Name" />
        <label className='mb-1' htmlFor="email">Email</label>
        <input className='mb-4 p-2 border rounded bg-gray-50 hover:bg-white' type="email" name="email" id="email" placeholder="Email" />
        <label className='mb-1' htmlFor="message">Message</label>
        <textarea className='mb-4 p-2 h-36 border rounded bg-gray-50 hover:bg-white focus:outline-none' name="message" id="message" placeholder="Message..." />
      </div>
      {state.succeeded
        ? <p>Thanks!</p>
        : <button className='my-1.5 focus:outline-none bg-blue-700 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md px-2 py-2'>
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      }
    </form>
  )
}

export default ContactForm