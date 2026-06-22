function Feedback({ values, total }) {
  const { good, neutral, bad } = values;


  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div style={{ marginTop: '20px', fontSize: '18px', lineHeight: '2' }}>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive: {positivePercentage}%</div>
    </div>
  );
}

export default Feedback;