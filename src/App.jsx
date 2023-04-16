import { useState, useEffect } from 'react'
import { SmallCardContainer, BigCardContainer } from './components';


function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const html = document.documentElement;

  const toggle = () =>{
    if(theme == "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  useEffect(() => {
    switch (theme) {
      case "dark":
        html.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break;
      case "light":
        html.classList.remove("dark")
        localStorage.setItem("theme", "light")
      default:
        break;
    }
  }, [theme])

  console.log(theme)

  return (
    <>
      <section className='pt-5 mb-5 bg-blue-100 dark:bg-blue-700 h-[200px] sm:h-[200px]'>
        <div className="container mx-auto flex flex-col sm:justify-between sm:items-center sm:flex-row  py-3 divide-y divide-blue-300 xs:divide-y sm:divide-y-0 ">
          <div className='text-blue-700 dark:text-blue-100  '>
            <h4 className='text-3xl font-bold mb-1'>Social Media Dashboard</h4>
            <h5 className='text-md text-blue-300 font-medium'>Total Followers: 23,004</h5>
          </div>


          <label className="relative flex xs:justify-between sm:justify-center items-center mb-5 cursor-pointer">
            <span className="mr-3 text-sm font-medium text-blue-300 capitalize">Dark Mode</span>
            <input type="checkbox" value="" className="peer/input sr-only" onClick={ toggle } />
            <div className={`w-11 h-5 relative transition-all bg-lime rounded-full peer/toggle
            after:content-[''] after:w-5 after:h-5 after:absolute after:rounded-full  after:bg-blue-400 after:peer-checked/input:bg-blue-100 "peer-checked/input:after:translate-x-full"
           ${theme === 'light' ? "after:translate-x-full" : "after:translate-x-0" } "peer-checked/input:after:transition-all peer-checked/input:bg-blue-300 
            `}></div>

          </label>
        </div>
      </section>

      <section className='container mx-auto -translate-y-[80px]'>
        <BigCardContainer />
        <SmallCardContainer />
      </section>

    </>

  )
}

export default App;