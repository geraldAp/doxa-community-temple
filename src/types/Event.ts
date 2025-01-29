interface EventType {
  _id: string;
  title: string;
  date: string;
  description: string;
  venue: string;
  slug: {
    current: string;
  };
}
