import css from './App.module.css';

import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedValues = window.localStorage.getItem('values');

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('values', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalRating = clicks.good + clicks.neutral + clicks.bad;

  const goodFeedbackRating = () => {
    return Math.round(((clicks.good + clicks.neutral) / totalRating) * 100);
  };

  return (
    <div className={css.wrapper}>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalRating={totalRating}
        resetFeedback={resetFeedback}
      />

      {totalRating !== 0 ? (
        <Feedback
          values={clicks}
          totalRating={totalRating}
          goodFeedbackRating={goodFeedbackRating}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
