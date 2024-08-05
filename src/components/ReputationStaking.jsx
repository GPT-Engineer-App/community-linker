import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <Input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient's address"
      />
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
