import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/leaderboardSlice';
import '../styles/AddScoreModal.css';

const AddScoreModal = () => {
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');

  const dispatch = useDispatch();

  const handleAddScore = () => {
    dispatch(addScore({ name: username, amount: `₹${amount}`, time }));
    
    setUsername('');
    setAmount('');
    setTime('');
  };

  return (
    <div className="add-score-modal">
      <h2>Add Score</h2>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time (MM:SS:MS)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleAddScore}>Add</button> {}
    </div>
  );
};

export default AddScoreModal;
