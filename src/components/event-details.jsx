export default function EvenDetails() {
    // Dummy Daten
    const event = {
        title: "Example Event",
        date: "12-12-2024",
        time: "12:00 PM",
        location: "Example Location",
        description: "This is an example event description."
      };




    return (
        <div id="event-details" className="container mx-auto">
          <div>
            <h1>{event.title}</h1>
    
            <div>
                <p>
                {event.description}  
                </p>
                <p>
                    <strong>Date:</strong> {event.date}
                </p>
                <p>
                    <strong>Time:</strong> {event.time}
                </p>
                <p>
                    <strong>Location:</strong> {event.location}
                </p>
            </div>
          </div>
        </div>
      );
    }