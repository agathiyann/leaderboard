
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdTrophy } from "react-icons/io";
import { BiSolidTimer } from "react-icons/bi";
import '../styles/Leaderboard.css';


const Leaderboard = () => {
  const scores = useSelector(state => state.leaderboard.scores);
  const dispatch = useDispatch();

  useEffect(() => {
    const footer = document.querySelector('.footer');
    let scrollInterval = setInterval(() => {
      footer.scrollLeft += 1;
    }, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="leaderboard">
      <h1 className="italic">FASTEST OF TODAY</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th><IoMdTrophy /></th>
              <th>Name</th>
              <th>Amount</th>
              <th><BiSolidTimer />Time</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index} className={index < 3 ? `top-three top-three-${index + 1}` : ''}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.amount}</td>
                <td>{score.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {scores.length > 0 && (
        <div className="recent-entry">
          <h2>Recent Entry</h2>
          <div>{scores[scores.length - 1].name} - {scores[scores.length - 1].time}</div>
        </div>
      )}
      <div className="footer"></div>
    </div>
  );
};

export default Leaderboard;
