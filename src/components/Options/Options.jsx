import css from './Options.module.css';
import clsx from 'clsx';

const Options = ({ updateFeedback, totalRating, resetFeedback }) => {
  return (
    <div className={css.wrapper}>
      <button
        className={clsx(css.button, css.good)}
        onClick={() => updateFeedback('good')}
        type="button"
      >
        Good
      </button>
      <button
        className={clsx(css.button, css.neutral)}
        onClick={() => updateFeedback('neutral')}
        type="button"
      >
        Neutral
      </button>
      <button
        className={clsx(css.button, css.bad)}
        onClick={() => updateFeedback('bad')}
        type="button"
      >
        Bad
      </button>
      {totalRating !== 0 ? (
        <button
          className={clsx(css.button, css.reset)}
          onClick={resetFeedback}
          type="button"
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
