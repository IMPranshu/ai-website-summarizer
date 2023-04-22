import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col' >
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src ={logo} alt="suma_logo" className='w-28 object-contain' />

            <button
              type="button"
              onClick={() => window.open('https://github.com/IMPranshu')}
              className='black_btn'
             >
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Websites with <br className='max-md:hidden' />
            <span className='orange_gradient'>ChatGPT-4</span>
        </h1>
        <h2 className='desc'>
            Save your reading time with "Summarize", an open-source summary generator that transforms lengthy articles into short and accurate summaries.
        </h2>

    </header>
      )
}

export default Hero