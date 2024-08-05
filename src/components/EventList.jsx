import { useState } from 'react';
import { Button } from "@/components/ui/button";

const EventList = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Community Meetup', date: '2023-06-15', rsvp: false },
    { id: 2, name: 'Web3 Workshop', date: '2023-06-22', rsvp: false },
    { id: 3, name: 'Networking Night', date: '2023-06-29', rsvp: false },
  ]);

  const handleRSVP = (id) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, rsvp: !event.rsvp } : event
    ));
  };

  return (
    <div className="space-y-4">
      {events.map(event => (
        <div key={event.id} className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{event.name}</h3>
            <p className="text-sm">{event.date}</p>
          </div>
          <Button 
            onClick={() => handleRSVP(event.id)}
            variant={event.rsvp ? "secondary" : "default"}
          >
            {event.rsvp ? 'Cancel RSVP' : 'RSVP'}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
