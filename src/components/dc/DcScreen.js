import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div>
        <h1 className='mt-5'>Heroes de DC</h1>
        <hr />
        <HeroList publisher="DC Comics" />
    </div>
  )
}
