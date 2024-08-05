import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ReputationStaking from '@/components/ReputationStaking';

const Reputation = () => {
  return (
    <div className="min-h-screen bg-navy-blue text-gold p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Reputation Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Reputation Staking</CardTitle>
        </CardHeader>
        <CardContent>
          <ReputationStaking />
        </CardContent>
      </Card>
    </div>
  );
};

export default Reputation;
