import { useState } from 'react'
import { IMood } from '../models/mood'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

var getDaysArray = function (moods: IMood[]) {
  const { min, max } = moods.reduce<{ min?: Date; max?: Date }>(
    (acc, mood) => {
      const date = new Date(mood.date)
      if (!acc.min || date < acc.min) {
        acc.min = date
      }
      if (!acc.max || date > acc.max) {
        acc.max = date
      }
      return acc
    },
    { min: undefined, max: undefined }
  )
  if (min === undefined || max === undefined) return []

  var arr: { weekDay: number; date: Date; mood?: IMood }[][] = [[]]
  var week = 0
  for (
    var dt = new Date(max);
    dt >= new Date(min);
    dt.setDate(dt.getDate() - 1)
  ) {
    const weekDay = dt.getDay()
    if (weekDay === 1) {
      arr.push([])
      ++week
    }
    arr[week].push({
      weekDay: weekDay,
      date: new Date(dt),
      mood: moods.find(
        (mood) => new Date(mood.date).toDateString() === dt.toDateString()
      ),
    })
  }
  return arr
}

export const MoodDiagram = ({ data }: { data: IMood[] }) => {
  const [selectedDay, setSelectedDay] = useState<{
    week: number
    day: number
  }>()

  const moodDays = getDaysArray(data)

  return (
    <table>
      <thead>
        <tr>
          {days.map((day, idx) => (
            <th key={idx}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {moodDays.map((week, idx) => (
          <tr key={idx}>
            {[1, 2, 3, 4, 5, 6, 0].map((idy) => {
              const date = week.find((day) => day.weekDay === idy)

              return (
                <td
                  key={idy}
                  title='hey'
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 5,
                    textAlign: 'center',
                    cursor: Boolean(date?.mood) ? 'pointer' : 'default',
                    backgroundColor: Boolean(date?.mood)
                      ? `rgba(0,128,0,${date?.mood?.mood}`
                      : 'lightgrey',
                    position: 'relative',
                  }}
                  onClick={() =>
                    setSelectedDay((s) =>
                      s === undefined ? { week: idx, day: idy } : undefined
                    )
                  }
                >
                  {date?.mood?.mood}
                  {date &&
                    selectedDay?.week === idx &&
                    selectedDay?.day === idy && (
                      <span
                        style={{
                          position: 'absolute',
                          backgroundColor: 'lightgrey',
                          borderRadius: 5,
                          zIndex: 1,
                          transform: 'translateX(-50%)',
                          width: '160px',
                          top: '100%',
                          left: '50%',
                        }}
                      >
                        <p>Date: {date?.mood?.date}</p>
                        <p>Mood: {date?.mood?.mood}</p>
                        <p>Body: {date?.mood?.body}</p>
                        <p>Mind: {date?.mood?.mind}</p>
                        <p>Exercise: {date?.mood?.exercise}</p>
                        <p>Social: {date?.mood?.social}</p>
                        <p>Note: {date?.mood?.note}</p>
                      </span>
                    )}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
