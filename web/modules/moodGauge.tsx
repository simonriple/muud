const mood = 1

const width = 300
const height = 180
const radius = 100

export const MoodGauge = () => {
  const half = Math.PI * radius
  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
          {/* <stop offset="0%" stopColor="#fff1c6" />
          <stop offset="100%" stopColor="#ce6353" /> */}
          <stop offset='0%' stopColor='green' />
          <stop offset='100%' stopColor='#05a' />
        </linearGradient>
      </defs>
      <circle
        cx={width / 2}
        cy={40}
        r={radius}
        strokeWidth='50'
        strokeLinecap='round'
        strokeDasharray={`${half}, ${half * 2}`}
        style={{
          transformOrigin: 'center',
          transform: 'rotate(180deg)',
        }}
        stroke='url(#linear)'
        opacity={0.2}
        fill='none'
      />
      <circle
        cx={width / 2}
        cy={40}
        r={radius}
        strokeWidth='40'
        strokeLinecap='round'
        style={{
          transformOrigin: 'center',
          transform: 'rotate(180deg)',
        }}
        stroke='url(#linear)'
        fill='none'
      >
        <animate
          attributeName='stroke-dasharray'
          values={`0, ${half * 2};${half * mood}, ${half * 2}`}
          dur='2s'
          fill='freeze'
        />
      </circle>
    </svg>
  )
}
