import Nav from "./Component/Nav";
import TypeAnimation from 'react-type-animation';
import Hero from './assets/Images/hero-right.png'
import About from './assets/Images/about-left.png'
import {FaDev, FaFacebookSquare, FaInstagramSquare, FaGithub} from 'react-icons/fa'

function App() {
  return (
    <div>
      <Nav />
      <div className="w-full pt-48 bg-Boddy">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="">
                <p className="font-bold text-3xl">Welcom to My World</p>
                <h1 className="font-bold text-5xl w-full flex py-5">Hi i'm Tuvshinbayar 
                  <TypeAnimation
                    cursor={false}
                    sequence={['Want', 10, 'For']}
                    wrapper="h2"
                    className="text-5xl text-pink-600 font-bold ml-2"
                  />
                </h1>
                <p className="font-bold text-3xl">Product Developer</p>
                <p className="w-3/4 pt-5 text-para font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum iste eos ducimus voluptatem modi totam, nulla veritatis distinctio beatae maiores.</p>
                <div className="flex pt-5 space-x-5 items-center">
                  <button className="bg-Button shadow-xl hover:bg-Hover hover:origin-top-left duration-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>CV Download</span>
                  </button>
                  <FaFacebookSquare className="text-5xl" />
                  <FaInstagramSquare className="text-5xl" />
                  <FaGithub className="text-5xl" />
                </div>
              </div>
            <div className="relative">
              <img src={Hero} />
              <FaDev className="text-7xl absolute top-10 -left-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-Boddy">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex justify-center w-1/2">
              <img src={About} />
            </div>
            <div className="flex flex-col w-1/2">
              <p className="font-bold text-3xl text-pink-600 pt-10">About Me</p>
              <h1 className="font-bold text-5xl w-3/4 pt-5">1 Year’s Exprience on Product <span className="text-pink-600">Developer.</span></h1>
              <p className="text-para pt-5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
