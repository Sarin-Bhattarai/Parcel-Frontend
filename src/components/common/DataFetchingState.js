import React from "react";

const DataFetchingState = ({ loading, error, children, onClickTryAgain }) => {
  if (error) {
    return (
      <div>
        <button onClick={onClickTryAgain}>Try Again</button>
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return children;
};

export default DataFetchingState;
