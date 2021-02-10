import React from 'react';
import PropTypes from 'prop-types';
import style from './statistics.module.css';

const Statistics = ({ stats, title }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

    <ul className={style.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={style.item}
          style={{ backgroundColor: randomColor() }}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default Statistics;
