import Link from "next/link";
import React from "react";

interface Props {
  event: EventType;
}
const EventsCard = ({ event }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{event?.title}</h3>
      <p className="text-gray-600 mb-4">Date: {event.date}</p>
      <p className="text-gray-600 mb-2 text-sm"> Venue: {event.venue}</p>
      <p className="text-gray-700">{event.description}</p>
      <Link
        href="/#"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Learn More
      </Link>
    </div>
  );
};

export default EventsCard;
