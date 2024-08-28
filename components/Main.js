import React, { Children } from 'react'

export default function main(props) {
    const { children } = props
    return (
    <main className='flex-1 flex flex-col p-4 sm:p-8'>
        { children }
    </main>
  )
}
