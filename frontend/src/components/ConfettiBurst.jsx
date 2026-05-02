const pieces = Array.from({ length: 18 }, (_, index) => index)

const ConfettiBurst = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {pieces.map((piece) => (
      <span
        key={piece}
        className="absolute top-0 h-3 w-3 animate-confetti rounded-full bg-amber-300"
        style={{
          left: `${(piece * 5) % 100}%`,
          animationDelay: `${piece * 90}ms`,
          backgroundColor: ['#f9b572', '#ef7d57', '#2f6f5e', '#7dd3fc'][piece % 4],
        }}
      />
    ))}
  </div>
)

export default ConfettiBurst
