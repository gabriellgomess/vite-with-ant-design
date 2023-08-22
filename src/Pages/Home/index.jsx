import React from "react";
import { Button, Typography, Input } from "antd";

const Home = () => {
  return (
    <div>
      <Typography.Title level={1}>Home</Typography.Title>      
      <Input placeholder="Basic usage" />
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Home;
