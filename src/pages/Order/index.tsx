import React from 'react'
import List from '@/components/List'
import { ListData } from '@/env/constant'

const marketing: React.FC = () => (
  <div className="bottom60">
    <List list={ListData} />
  </div>
)

export default marketing
