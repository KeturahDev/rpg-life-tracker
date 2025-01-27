import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>RPG Life Tracker</h1>
      <div className="card">
        <p>
          Welcome to the app that turns your everyday tasks into an RPG-style
          adventure! If you’ve ever struggled to balance work, health, finances,
          and social life—or just wished mundane tasks felt more rewarding—this
          system is here to help. With a fun, customizable approach, you’ll
          level up different areas of your life, earn rewards, and stay
          motivated like never before.
        </p>
        <h2>Why This Approach?</h2>
        <p>
          Traditional productivity apps focus on to-do lists and deadlines, but
          they often feel like more work. This system makes self-improvement
          engaging and rewarding by turning your tasks into an interactive game.
          Whether you're trying to improve your fitness, manage your finances,
          or simply have more fun, it encourages consistent progress without
          burnout.
        </p>
      </div>
      <button onClick={() => navigate("new-user")}>Get Started!</button>
    </div>
  );
};

export default Home;
