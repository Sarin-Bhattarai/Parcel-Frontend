import React from "react";
import { Button, Space } from "antd";

const DataFetchingState = ({ loading, error, children, onClickTryAgain }) => {
  if (error) {
    return (
      <div>
        <Space align="center">
          <Button type="primary" onClick={onClickTryAgain}>
            Try Again
          </Button>
        </Space>
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return children;
};
export default DataFetchingState;
