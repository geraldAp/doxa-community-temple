import Link from "next/link";
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { EventType } from "@/types/Event";

interface Props {
  event: EventType;
}

const EventsCard = ({ event }: Props) => {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all h-full flex flex-col">
      <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-secondary-foreground">
        <Calendar size={20} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 line-clamp-2">{event?.title}</h3>
      
      <div className="space-y-2 mb-6 text-muted-foreground text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 shrink-0" />
          <span>{event.date ? new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Date TBD'}</span>
        </div>
        {event.venue && (
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="line-clamp-1">{event.venue}</span>
          </div>
        )}
      </div>

      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
        {event.description}
      </p>

      <Link
        href={event.slug?.current ? `/events/${event.slug.current}` : "#"}
        className="text-primary font-medium hover:underline inline-flex items-center mt-auto"
      >
        Learn More
      </Link>
    </div>
  );
};

export default EventsCard;
