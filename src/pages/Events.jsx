import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import EventList from '../components/EventList';

const Events = () => {
  return (
    <div className="min-h-screen bg-navy-blue text-gold p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Community Events</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <EventList />
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;
