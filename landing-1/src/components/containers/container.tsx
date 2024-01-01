import React from 'react'

const Container = (children : React.ReactNode) => {
  return (
    <section className='mx-auto relative lg:px-32 md:px-16 px-8 '>
      {children}
    </section>
  )
}

export default Container
