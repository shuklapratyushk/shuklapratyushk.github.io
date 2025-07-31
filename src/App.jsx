import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white px-6 pt-10">
      
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="-ml-10">
          <img
            src={`${import.meta.env.BASE_URL}Shaving.jpg`}
            alt="Pratyush Shukla"
            className="w-75 h-75 object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
        </div>

        <div className="text-center md:text-left max-w-md">
          <h1 className="text-4xl font-bold text-blue-950 mb-6 transition duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
            <Typewriter
              words={['Pratyush Shukla']}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>

          <div className="text-lg text-gray-600 space-y-0">
            <h2 className="text-2xl font-semibold text-black mb-4 transition duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
              <Typewriter
                words={['I build stuff.']}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={3000}
                loop={true}
              />
            </h2>
            <p className="transition duration-300 hover:scale-105 hover:shadow-sm cursor-pointer">
              pratyushs2009@gmail.com
            </p>
            <p className="transition duration-300 hover:scale-105 hover:shadow-sm cursor-pointer">
              Student @ Justin Wakeland High School
            </p>
            <a className="underline" href="https://github.com/Pratprat1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span> / </span>
            <a className="underline" href="https://www.instagram.com/pratyush.s1/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-13 text-left max-w-2xl px-4">
        <h4 className="text-0.5x1 font-times text-gray-600 mb-0.1">
          I am drawn toward the fields of biomedical engineering, computer science, physics, and mathematics. 
          Specifically, I wish to explore the intersectionality of these areas in my research.
        </h4>
      </div>

      <div className="mt-5 w-full px-4">
        <hr className="mx-auto w-full max-w-2xl border-t border-gray-400" />
      </div>

      <div className="mt-5 text-left w-full max-w-2xl px-4">
        <h4 className="text-1xl font-bold text-gray-800 mb-2">
          Relevant skills:
        </h4>
        <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed">
          <li>Languages: C++, Python JavaScript, SQL, R</li>
          <li>Miscellaneous: FlutterFlow, TensorFlow, NumPy, MatPlotLib, DSA</li>
          <li>User Interface Design</li>
        </ul>
      </div>

      <div className="mt-5 w-full px-4">
        <hr className="mx-auto w-full max-w-2xl border-t border-gray-400" />
      </div>

      <div className="mt-5 text-left w-full max-w-2xl px-4">
        <h4 className="text-1xl font-bold text-gray-800 mb-2">
          📖❤️
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed underline">

            <a href="https://paulgraham.com/determination.html" target="_blank" rel="noopener noreferrer">
              The Anatomy Of Determination -Paul Graham
            </a>

            <br></br>
            <a href="https://sites.evergreen.edu/politicalshakespeares/wp-content/uploads/sites/226/2015/12/Borges-The-Library-of-Babel.pdf" target="_blank" rel="noopener noreferrer">
              The Library of Babel -Jorge Luis Borges
            </a>

        </ul>
      </div>

    </div>
  
  );
}