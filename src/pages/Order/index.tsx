import React from 'react'
import List from '@/components/List'
import { ListData } from '@/config/grid'

const marketing: React.FC = () => (
  <div className="bottom60">
    <List list={ListData} />
  </div>
)

export default marketing
