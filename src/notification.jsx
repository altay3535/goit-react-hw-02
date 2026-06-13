function Notification({ message }) {
  return (
    <p style={{ marginTop: '20px', color: '#666', fontSize: '16px', fontStyle: 'italic' }}>
      {message}
    </p>
  );
}

export default Notification;