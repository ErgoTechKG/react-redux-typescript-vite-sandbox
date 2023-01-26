import React from "react";
import { useNavigate } from "../lib/react-redux-history";

import { useSelector } from "../store";
import { Card } from 'flowbite-react';

const Home: React.FC = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const replace = useNavigate({ replace: true });
  const loggedIn = !!user;
  const status = loggedIn ? (
    <p>
      <button onClick={navigate("/profile")}>Profile</button>
      <button onClick={navigate("/people")}>People</button>
    </p>
  ) : (
    <p>
      Please
      <button onClick={replace("/signin")}>Sign in</button>

      <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold text-blue-600 mb-8 border-b-4 border-purple-600">
        Install Vite + React + Flowbite
      </h1>
      <div className="max-w-sm">
        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Install & setup flowbite in react js
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
    </p>
  );
  return <div className="Home">{status}</div>;
};

export default Home;
