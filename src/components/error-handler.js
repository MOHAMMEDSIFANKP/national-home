import { useMemo } from "react";
import "./error-handler.css";

const ErrorHandler = ({ ourPresence, propDebugCommit }) => {
  const errorHandlerStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div className="error-handler" style={errorHandlerStyle}>
      <img
        className="error-handler-child"
        alt=""
        src="/group-1171274710-1.svg"
      />
      <div className="our-presence-wrapper">
        <h1 className="our-presence">{ourPresence}</h1>
      </div>
    </div>
  );
};

export default ErrorHandler;
