import { useState } from 'react';
import Description from './components/description';
import Options from './components/options';
import Feedback from './components/feedback';
import Notification from './notification';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%', maxWidth: '450px' }}>
      <Description />
      <Options 
        onUpdate={updateFeedback} 
        onReset={handleReset} 
        total={totalFeedback} 
      />
      {totalFeedback > 0 ? (
        <Feedback values={feedback} total={totalFeedback} />
      ) : (
        <Notification message="No feedback yet." />
      )}

    </div>
  );
}

export default App;