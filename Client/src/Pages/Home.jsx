import React from 'react'
import Auth from '../Components/Auth'
import Navbar from '../Components/Navbar'

function Home() {

  const [showAuth, setShowAuth] = React.useState(false)

  return (
    <div className='bg-[#120202] min-h-screen w-full overflow-x-hidden'>

      {/* Navbar */}
      <div className='w-full px-3 sm:px-5 md:px-8 lg:px-10 pt-3 sm:pt-5'>
        <Navbar setShowAuth={setShowAuth} />
      </div>

      {/* Home Content Area */}
      <div className='w-full flex flex-col gap-5 px-3 sm:px-5 md:px-8 lg:px-10 py-5'>



      </div>

      {/* Auth Modal */}
      {
        showAuth && (
          <div className='fixed inset-0 z-999 overflow-y-auto'>
            <Auth onClose={() => setShowAuth(false)} />
          </div>
        )
      }

    </div>
  )
}

export default Home