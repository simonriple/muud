import { useState } from 'react'

const svgWidth = 300
const svgHeight = 900
const dimension = svgWidth / 7
const padding = 5

export const MoodDiagram = ({ data }: { data: { value: number }[] }) => {
  //   const [selectedDay, setSelectedDay] = useState()
  //   const [toolTipLocation, setToolTipLocation] = useState()
  return (
    <>
      <svg width={svgWidth} height={svgHeight}>
        {data.map((day, idx) => (
          <rect
            key={idx}
            x={dimension * (idx % 7)}
            y={dimension * Math.floor(idx / 7)}
            width={dimension - padding}
            height={dimension - padding}
            rx={5}
            // fill="#ce6353"
            fill='green'
            opacity={day.value}
            // onMouseEnter={(e) => {
            //   console.log(e)
            //   setSelectedDay(day)
            //   setToolTipLocation({
            //     top: e.clientY,
            //     left: e.clientX,
            //   })

            //   // setToolTipLocation({
            //   //   x: dimension * (idx % 7),
            //   //   y: dimension * Math.floor(idx / 7)
            //   // });
            // }}
            // onMouseLeave={() => {
            //   setSelectedDay(undefined)
            //   setToolTipLocation(undefined)
            // }}
          />
        ))}
        {/* {selectedDay && toolTipLocation && (
          <g>
            <rect
              x={toolTipLocation.x - dimension * 0.5}
              y={toolTipLocation.y - dimension * 2}
              width={dimension * 2 - padding}
              height={dimension * 2 - padding}
              rx={5}
              fill="red"
            />
            <text
              x={toolTipLocation.x - dimension * 0.5}
              y={toolTipLocation.y - dimension * 2}
            >
              {selectedDay.value}
            </text>
          </g>
        )} */}
      </svg>
      {/* {selectedDay && toolTipLocation && (
        <div
          style={{
            position: 'absolute',
            top: toolTipLocation.top,
            left: toolTipLocation.left,
            backgroundColor: 'grey',
          }}
        >
          <p>{selectedDay.value}</p>
        </div>
      )} */}
    </>
  )
}
