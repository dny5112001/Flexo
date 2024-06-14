import React from "react";
import "./Notification.css";

const Notification = () => {
  return (
    <div className="notification">
      <div className="request1">
        <div>
          <img
            src="https://i.pinimg.com/564x/f8/1b/fc/f81bfcf2feeac70590bbc9f0cf03e7bd.jpg"
            alt=""
          />
          <p>Karan asked to connect</p>
        </div>

        <div>
          <button>Accept</button>
          <button>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
