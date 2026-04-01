type StampProps = {
  color?: string
  text?: string
  size?: number
}

export function Stamp({
  color = '#ff0000',
  text = 'MENSAGEM',
  size = 200,
}: StampProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculos */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke={color}
        strokeWidth="6"
      />
      <circle
        cx="100"
        cy="100"
        r="65"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />

      {/* Faixa central */}
      <rect
        x="20"
        y="85"
        width="160"
        height="30"
        fill="white"
        stroke={color}
        strokeWidth="4"
      />

      {/* Texto */}
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize="16"
        fontWeight="bold"
      >
        {text}
      </text>

      {/* Estrelas topo */}
      <text x="70" y="35" fill={color} fontSize="10">
        ★
      </text>
      <text x="90" y="28" fill={color} fontSize="10">
        ★
      </text>
      <text x="110" y="35" fill={color} fontSize="10">
        ★
      </text>

      {/* Estrelas base */}
      <text x="70" y="175" fill={color} fontSize="10">
        ★
      </text>
      <text x="90" y="182" fill={color} fontSize="10">
        ★
      </text>
      <text x="110" y="175" fill={color} fontSize="10">
        ★
      </text>
    </svg>
  )
}
