const Timetable = ({ data }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const generateTimetable = () => {
    const timetable = {};
    days.forEach(day => {
      timetable[day] = {};
      times.forEach(time => {
        const slot = data.find(item => item.day === day && item.startTime === time);
        timetable[day][time] = slot || { courseName: '', room: '',teacherName:'' };
      });
    });

    return timetable;
  };

  const timetable = generateTimetable();

  return (
    <div className="timetable-container">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time}>
              <td>{time}</td>
              {days.map(day => (
                <td key={day}>
                  <div>{timetable[day][time].courseName}</div>
                  <div>{timetable[day][time].room}</div>
                  <div>{timetable[day][time].teacherName}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
