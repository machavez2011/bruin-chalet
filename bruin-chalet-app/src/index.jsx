import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// need router
import CalendarPicker from './components/calendar/calendar-picker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalendarPicker />
  </React.StrictMode>,
)
