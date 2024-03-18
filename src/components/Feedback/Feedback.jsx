const Feedback = ({ values, totalRating, goodFeedbackRating }) => {
  return (
    <ul>
      <li>Good: {values.good}</li>
      <li>Neutral: {values.neutral}</li>
      <li>Bad: {values.bad}</li>
      <li>Total: {totalRating}</li>
      <li>Positive: {goodFeedbackRating()}%</li>
    </ul>
  );
};

export default Feedback;
