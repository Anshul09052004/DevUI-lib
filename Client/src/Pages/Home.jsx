import React from 'react'
import Auth from '../Components/Auth'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Steps from '../Components/Steps'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'


function Home() {

  const [showAuth, setShowAuth] = React.useState(false)

  return (
    <div className='bg-[#120202] min-h-screen w-full overflow-x-hidden'>

      <div className='w-full px-3 sm:px-5 md:px-8 lg:px-10 pt-3 sm:pt-5'>
        <Navbar setShowAuth={setShowAuth} />
      </div>


      <div className='w-full flex flex-col gap-5 px-3 sm:px-5 md:px-8 lg:px-10 py-5'>

       
        <Hero setShowAuth={setShowAuth} />
        <Features />
        <Steps />
        <Banner setShowAuth={setShowAuth} />
        <Footer />

      </div>
      {
        showAuth && (
          <div
            className='
              fixed inset-0
              z-999
              bg-black/70
              backdrop-blur-md
              overflow-y-auto
              flex
              items-start sm:items-center
              justify-center
              p-0 sm:p-4 lg:p-8
            '
          >

            {/* Modal Wrapper */}
            <div className='w-full flex items-center justify-center min-h-screen sm:min-h-fit'>

              <Auth onClose={() => setShowAuth(false)} />

            </div>

          </div>
        )
      }

    </div>
  )
}

export default Home