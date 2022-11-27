const width = 30
const height = 30
const radius = 10

export const SubmittingIcon = () => {
  const whole = Math.PI * radius * 2
  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='green' />
          <stop offset='100%' stopColor='#05a' />
        </linearGradient>
      </defs>
      <circle
        cx={width / 2}
        cy={height / 2}
        r={radius}
        strokeWidth='5'
        stroke='url(#linear)'
        opacity={0.2}
        fill='none'
      />
      <circle
        cx={width / 2}
        cy={height / 2}
        r={radius}
        strokeWidth='4'
        strokeLinecap='round'
        stroke='url(#linear)'
        fill='none'
      >
        <animate
          attributeName='stroke-dasharray'
          values={`0,${whole};${whole},0;0,${whole}`}
          dur='2s'
          repeatCount='indefinite'
        />

        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          from={`0 ${width / 2} ${height / 2} `}
          to={`360 ${width / 2} ${height / 2} `}
          dur='1s'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  )
}
