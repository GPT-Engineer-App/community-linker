import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const members = [
  { id: 1, name: "Alice", address: "0x1234...5678" },
  { id: 2, name: "Bob", address: "0x2345...6789" },
  { id: 3, name: "Charlie", address: "0x3456...7890" },
  { id: 4, name: "Diana", address: "0x4567...8901" },
];

const ReputationStaking = () => {
  const [availablePoints, setAvailablePoints] = useState(1000);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleStake = () => {
    const stakeAmount = parseInt(amount);
    if (recipient && stakeAmount && stakeAmount <= availablePoints) {
      setAvailablePoints(availablePoints - stakeAmount);
      setRecipient('');
      setAmount('');
      // Here you would typically call an API to update the staking on the backend
    }
  };

  return (
    <div className="space-y-4">
      <p>Available Reputation Points: {availablePoints}</p>
      <Select onValueChange={setRecipient} value={recipient}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a member" />
        </SelectTrigger>
        <SelectContent>
          {members.map((member) => (
            <SelectItem key={member.id} value={member.address}>
              {member.name} ({member.address})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to stake"
      />
      <Button onClick={handleStake} disabled={!recipient || !amount || parseInt(amount) > availablePoints}>
        Stake Reputation
      </Button>
    </div>
  );
};

export default ReputationStaking;
