import React from 'react'

const Container = (children : React.ReactNode) => {
  return (
    <section className=' lg:px-32 md:px-16 px-8 '>
      {children}
    </section>
  )
}

export default Container
