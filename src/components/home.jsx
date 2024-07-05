import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function HomePage() {

  const [events, setEvents] = useState([]);

  const url = 'http://localhost:3001/api/events';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Events');
        }
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data.results)) {
        setEvents(data.results);
      } else {
        console.error('Array mit Events erwartet')
        setEvents([]);
      }
    } catch (error) {
        console.error('Fehler beim Laden der Events:', error);
      }
    };

    fetchEvents();

  }, []);

  console.log(events);

  return (
    <div className="container mx-auto mt-10 p-14">
      <h1 className="text-3xl font-bold mb-4">Alle Events:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="card card-bordered shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link
            to={`/event-details/${event.id}`}>
            <div className="card-body p-4 border-2 rounded-md">
              <img
                src="https://picsum.photos/500/200"

                alt="Event Image"
                className="mb-4"
              />
              <h2 className="card-title font-semibold">{event.title}</h2>
              <p className="mb-4">Date: {event.date}</p>
              <label className="font-semibold">Description:</label>
              <p>{event.description}</p>
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
}
