import React from 'react'
import Auth from '../Components/Auth'

function Home() {

  const [showAuth, setShowAuth] = React.useState(false)

  return (
    <div className='p-10 bg-[#030303] '>

      <button
        onClick={() => setShowAuth(true)}
        className='bg-black text-white px-6 py-3 rounded-xl'
      >
        Open
      </button>

      {
        showAuth && (
        <Auth onClose={() => setShowAuth(false)} />
        )
      }

    </div>
  )
}

export default Home