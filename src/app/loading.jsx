import React from 'react'
import { Spin,Space  } from 'antd'
const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <Space size="middle">
    
      <Spin size="large" />
  </Space>
    </div>
  )
}

export default Loading