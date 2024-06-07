import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const calendarContainerStyle = {
    // width: '95%',
    // height: '80%',
    // padding: '20px',
 
    borderRadius: '12px',
    // Transparent background
    // backdropFilter: 'blur(10px)', // Optional: blur effect
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const calendarStyle = {
    width: '100%',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    color: '#333', // Dark font color
  };

  const calendarStyleOverride = `
  .react-calendar {
    background:transparent !important; /* Transparent calendar background */
    color: #333 !important; /* Dark font color */
    border-radius: 12px !important; /* Rounded borders */
  }

  .react-calendar__tile {
    background: transparent !important; /* Slightly transparent tile background */
    color: #333 !important; /* Dark font color */
    border-radius: 8px !important; /* Rounded borders for the tiles */
    padding: 10px !important;
  }

  .react-calendar__navigation {
    background: !important; /* Slightly transparent navigation background */
    color: #333 !important; /* Dark font color */
  }

  .react-calendar__month-view__weekdays {
    background: transparent !important; /* Slightly transparent weekdays background */
    color: #333 !important; /* Dark font color */
  }

  .react-calendar__tile--active {
    background: rgba(0, 123, 255, 0.8) !important; /* Slightly transparent active tile background */
    color: #fff !important; /* Light font color for active tile */
  }

  .react-calendar__tile--now {
    background: rgba(255, 255, 0, 0.2)
     !important; /* Transparent yellowish background for today's date */
    color: #333 !important; /* Dark font color */
  }

  .react-calendar__tile--now:enabled:active,
  .react-calendar__tile--now:enabled:focus {
    background: rgba(0, 0, 255, 0.5) !important; /* Semi-transparent blue background for the current date indicator */
    color: #fff !important; /* Light font color for current date indicator */
  }
`;


  return (
    <div style={calendarContainerStyle}>
      <style>
        {calendarStyleOverride}
      </style>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => view === 'month' ? 'react-calendar__tile' : null}
        style={calendarStyle}
      />
    </div>
  );
};

export default CustomCalendar;
