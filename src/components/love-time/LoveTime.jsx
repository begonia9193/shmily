import React, { useState } from 'react'
import moment from 'moment'

const getTime = () => {
  let start = moment('2018-07-25 17:20:14')
  const timeCalc = (dateStr) => {
    const result = moment().diff(start, dateStr)
    start = start.add(result, dateStr)
    return result
  }
  const year = timeCalc('year')
  const month = timeCalc('months')
  const day = timeCalc('days')
  const hour = timeCalc('hours')
  const minutes = timeCalc('minutes')
  const seconds = timeCalc('seconds')
  return `${year}年${month}个月${day}天 ${hour}小时${minutes}分钟${seconds}秒`
}

export default () => {
  const [time, setTime] = useState(getTime())
  setInterval(() => {
    setTime(getTime())
  }, 1000);
  return <h1>{time}</h1>
}
