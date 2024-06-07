
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
  <circle
    className="circle-background"
    cx="40"
    cy="40"
    r={radius}
  />
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
  return (
    <div className="all">
      {data.map((item, index) => (
        <Circle key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

export default ProgressBar;
