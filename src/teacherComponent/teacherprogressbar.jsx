import React, { useState, useEffect } from 'react';

const Circle = ({ value, label }) => {
  const getStrokeColor = (value) => {
    if (value < 50) return '#ec0c0c';
    if (value < 75) return 'yellow';
    return '#23b9ea';
  };

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="circle-wrap">
      <svg className="circle" width="80" height="80">
        <circle className="circle-background" cx="40" cy="40" r={radius} />
        <circle
          className="circle-progress"
          cx="40"
          cy="40"
          r={radius}
          stroke={getStrokeColor(value)}
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset }}
        />
      </svg>

      <div className="inside-circle">{value}%</div>
      <div className="label">{label}</div>
    </div>
  );
};

const ProgressBar = ({ data }) => {
  const [uniqueLabelsAndValues, setUniqueLabelsAndValues] = useState(new Set());

  useEffect(() => {
    // Extract unique combinations of label and value
    const uniqueCombinations = new Set(data.map(item => `${item.label}-${item.value}`));
    setUniqueLabelsAndValues(uniqueCombinations);
  }, [data]);

  return (
    <div className="all">
      {[...uniqueLabelsAndValues].map((combination, index) => {
        const [label, value] = combination.split('-');
        return <Circle key={index} value={parseInt(value)} label={label} />;
      })}
    </div>
  );
};

export default ProgressBar;
