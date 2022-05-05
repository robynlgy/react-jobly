import { useContext } from "react";
import AlertContext from "./AlertContext";

function Alert() {
  const { alerts } = useContext(AlertContext);
  const success = alerts.includes("Successfully updated!") ? true : false;

  if (success) {
    return (
      <div className="alert alert-success">
        {alerts.map((alert, idx) => (
          <p key={idx}>{alert}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="alert alert-danger">
      {alerts.map((alert, idx) => (
        <p key={idx}>{alert}</p>
      ))}
    </div>
  );
}

export default Alert;
