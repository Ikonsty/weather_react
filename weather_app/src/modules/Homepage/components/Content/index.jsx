/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import { Button, Grid } from "@material-ui/core";

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CommentForm from "../CommentForm";
import WComment from "../WComment";

const initState = [
];

const Content = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, updateItems] = useState(initState);
  const [open, setOpen] = useState(false);

  const addWComment = ({ title, description, type }) => {
    updateItems([
      ...items,
      {
        id: items.length + 1,
        title,
        description,
        type,
      },
    ]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={handleClickOpen}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <WComment
        open={open}
        handleClose={handleClose}
        addWComment={addWComment}
      />
      <div>
        <Grid container spacing={1}>
          {items.map((item) => (
            <CommentForm
              title={item.title}
              description={item.description}
              type={item.type}
              key={item.id}
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Content;
