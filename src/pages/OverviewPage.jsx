import { useEffect } from 'react';
import { getWeather } from '../api/weather'; // adjust path to wherever you put it

function OverviewPage() {
  useEffect(() => {
    getWeather('stockholm');
  }, []);

  return <h1>Weather Today</h1>;
}

export default OverviewPage