import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Components/Footer'
import Banner from './Banner'
import Loading from './Components/LoadingComponents/Loading'
import StartOnLoad from './Components/LoadingComponents/StartOnLoad'

function App() {

  const Navigation = useNavigation();
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1700);
  }, [])


  return (
    <>


      {
        Load ? <StartOnLoad /> :
          <>
            <header id="navtag">

              <Navbar />
            </header>


            <main className='min-h-screen '>
              <Banner />

              {
                Navigation.state == 'idle' ?
                  <Outlet /> : <Loading />
              }

            </main>


            <footer >
              <Footer />

            </footer>

          </>
      }












    </>
  )
}

export default App