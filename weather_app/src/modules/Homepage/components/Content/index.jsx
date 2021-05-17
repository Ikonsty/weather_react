/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import { Button, Grid } from "@material-ui/core";

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const initState = [
  {
    id: 1,
    title: "title1",
    description: "description1",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
  },
];

const Content = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, updateItems] = useState(initState);
};

export default Content;
