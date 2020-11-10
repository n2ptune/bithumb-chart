import { useEffect, useState } from 'react'
import getTicker from '../../api/bithumb/ticker'

export default async function Ticker() {
  // const data = await getTicker()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchTicker() {}
  })

  return <div className="ticker">{data}</div>
}
