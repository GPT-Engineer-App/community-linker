import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Chat from '../components/Chat';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-navy-blue text-gold p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Community Chat</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat Room</CardTitle>
        </CardHeader>
        <CardContent>
          <Chat />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatPage;
