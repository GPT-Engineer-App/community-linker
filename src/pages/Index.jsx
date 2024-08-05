import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = () => {
    // Implement wallet connection logic here
    setIsConnected(true);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-blue">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gold">Membership Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={connectWallet} className="w-full bg-gold text-navy-blue hover:bg-gold/90">
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-blue text-gold p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Community Membership Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/events">
              <Button className="w-full">View Events</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/chat">
              <Button className="w-full">Open Chat</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Reputation Staking</CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="/reputation">
              <Button className="w-full">Manage Reputation</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
