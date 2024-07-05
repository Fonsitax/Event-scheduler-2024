import { Link, useParams } from 'react-router-dom';
import { catchEvent } from './fetchdata';
import { useEffect, useState } from 'react';

export default function EvenDetails() {
  const { id } = useParams();

  const [event, setevent] = useState({});

  useEffect(() => {
    catchEvent(id).then((data) => setevent(data));
  }, [id]);

  // Dummy Daten
  /* const events = [
    {
      id: 1,
      title: 'Event 1',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus tempora iste dolor, molestiae unde recusandae ipsam sit consequatur consectetur. Porro corrupti hic soluta illo accusamus cupiditate consequuntur, animi quo distinctio.',
      date: '2023-04-01',
      location: 'Adress1',
    },
  ]; */

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-0 p-12 text-center">
          Event im Detail:
        </h2>
        <div className=" flex items-top justify-center ">
          <div className="card-body p-4 border-2 rounded-md max-w-66">
            <img
              src="https://picsum.photos/seed/picsum/500/200"
              alt="Event Image"
              className="mb-4 mx-4"
            />
            <h2 className="card-title font-semibold">{event.title}</h2>
            <p className="mb-4">Date: {event.date}</p>
            <label className="font-semibold">Description:</label>
            <p className="mb-4">{event.description}</p>
            <label className="font-semibold">Location:</label>
            <p>{event.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
