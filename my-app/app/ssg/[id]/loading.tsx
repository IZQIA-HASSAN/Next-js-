// app/posts/[id]/loading.tsx
export default function Loading() {
  return (
    <div style={{ padding: '1rem' }}>
      {/* Title skeleton */}
      <div
        style={{
          height: '2rem',
          width: '70%',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '1rem',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
      {/* Body skeleton — a few lines */}
      {[100, 100, 80, 90, 60].map((width, i) => (
        <div
          key={i}
          style={{
            height: '1rem',
            width: `${width}%`,
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      ))}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}