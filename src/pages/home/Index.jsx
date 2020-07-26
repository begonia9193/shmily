import React from 'react'
import { Button } from 'antd'
import HomeStyle from './index.less'
import LoveTime from '@/components/love-time/LoveTime.jsx'

const Home = () => {
  return (
    <div className='page-home'>
      <h1 className="title">global less</h1>
      <h1 className={HomeStyle.title}>Welcome to Lovers Client !</h1>
      <Button>antd button</Button>
      <LoveTime />
    </div>
  )
}

export default Home
