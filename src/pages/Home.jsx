import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../components/Home'

function HomePage() {
  return (
    <div>
        <DefaultLayout>
            <Home />
        </DefaultLayout>
    </div>
  )
}

export default HomePage