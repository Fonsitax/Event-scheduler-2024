import { Link } from 'react-router-dom';

export default function EvenDetails() {
  // Dummy Daten
  const events = [
    {
      id: 1,
      title: 'Event 1',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus tempora iste dolor, molestiae unde recusandae ipsam sit consequatur consectetur. Porro corrupti hic soluta illo accusamus cupiditate consequuntur, animi quo distinctio.',
      date: '2023-04-01',
      location: 'Adress1',
    },
    {
      id: 2,
      title: 'Event 2',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores cumque veniam sed sint, est voluptatum. Quisquam odio cupiditate excepturi ducimus ab, magnam aspernatur earum minima voluptatem, iusto error deleniti non!',
      date: '2023-04-15',
      location: 'Adress2',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All events:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Link
            to={`/event-details/${event.id}`}
            key={event.id}
            className="card card-bordered shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="card-body p-4 border-2 rounded-md">
              <img
                src="https://picsum.photos/seed/picsum/500/200"
                alt="Event Image"
                className="mb-4"
              />
              <h2 className="card-title font-semibold">{event.title}</h2>
              <p className="mb-4">Date: {event.date}</p>
              <label className="font-semibold">Description:</label>
              <p className="mb-4">{event.description}</p>
              <label className="font-semibold">Location:</label>
              <p>{event.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
