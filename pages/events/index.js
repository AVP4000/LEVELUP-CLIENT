import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getEvents } from '../../utils/data/eventData';
import EventCard from '../../components/event/EventCard';

function Home() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <article className="games">
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px' }}>
        <h1>Events</h1>
        <Button onClick={() => {
          router.push('/events/new');
        }}
        >Register New Event
        </Button>
      </div>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="game">
          <EventCard description={event.description} date={event.date} time={event.time} organizer={event.organizer} game={event.game} />
        </section>
      ))}
    </article>
  );
}

export default Home;
