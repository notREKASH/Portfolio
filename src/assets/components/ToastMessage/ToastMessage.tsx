import React from "react";
import "./toast-message.scss";

interface ToastMessageProps {
  message: string;
  type: string;
}

function ToastMessage({ message, type }: ToastMessageProps) {
  return (
    <div className={`toast-message ${type}`}>
      <p>{message}</p>
    </div>
  );
}

export default ToastMessage;