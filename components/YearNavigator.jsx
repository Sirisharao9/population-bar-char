export default function YearNavigator({ onPrev, onNext, disablePrev, disableNext }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <button onClick={onPrev} disabled={disablePrev} style={{ padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', borderRadius: '4px', border: 'none', cursor: disablePrev ? 'not-allowed' : 'pointer' }}>
        Previous
      </button>
      <button onClick={onNext} disabled={disableNext} style={{ padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', borderRadius: '4px', border: 'none', cursor: disableNext ? 'not-allowed' : 'pointer' }}>
        Next
      </button>
    </div>
  );
}