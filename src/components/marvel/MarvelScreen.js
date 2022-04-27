import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div>
        <h1 className='mt-5'>Heroes de Marvel</h1>
        <hr />
        <HeroList publisher='Marvel Comics' />
    </div>
  )
}