import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Progress, Button as AntButton } from "antd";
import "@ant-design/v5-patch-for-react-19";
export default function Result() {
  const location = useLocation();
  const { correct = 0, wrong = 0 } = location.state || {};
  const total = correct + wrong;
  const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  let message = "Great Effort!";
  if (scorePercentage > 80) {
    message = "Excellent Work!";
  } else if (scorePercentage < 50) {
    message = "Keep Practicing!";
  }
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center space-y-6 relative overflow-hidden">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Your Result
        </h1>

        <p className="text-xl text-slate-600">{message}</p>

        <div>
          <Progress
            type="dashboard"
            percent={scorePercentage}
            format={(percent) => `${percent}%`}
            strokeColor={{ "0%": "#87d068", "100%": "#108ee9" }}
            size={180}
          />
        </div>

        <div className="text-lg font-medium text-slate-700 space-y-2">
          <p>
            Total Questions: <span className="font-bold">{total}</span>
          </p>
          <p>
            Correct Answers:{" "}
            <span className="font-bold text-green-600">{correct}</span>
          </p>
          <p>
            Wrong Answers:{" "}
            <span className="font-bold text-red-600">{wrong}</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 pt-4">
          <Link to="/">
            <AntButton type="primary" size="large">
              Go to Home
            </AntButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
