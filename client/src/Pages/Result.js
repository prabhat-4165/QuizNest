import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/Result.css';

const ResultPage = () => {
  // Assuming you have a route parameter for the student's ID or username
  const { studentId } = useParams();

  // Dummy data for the result, replace it with actual data from your backend
  const resultData = {
    studentId: "john_doe",
    marks: 85,
    feedback: "Good job! Keep up the good work.",
  };

  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <div>
        <p><strong>Student ID:</strong> {resultData.studentId}</p>
        <p><strong>Marks Obtained:</strong> {resultData.marks}</p>
        <p><strong>Feedback:</strong> {resultData.feedback}</p>
      </div>
    </div>
  );
};

export default ResultPage;
