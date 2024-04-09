import React from 'react'
import '../Styles/Leaderboard.css';

 const Leaderboard = () => {
    const students = [
        { name: 'John Doe', marks: 95 },
        { name: 'Jane Smith', marks: 90 },
        { name: 'Alice Johnson', marks: 85 }
        // Add more students here
      ];

  return (
    <div>
    <h1>Quiz Leaderboard</h1>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Student Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Leaderboard;