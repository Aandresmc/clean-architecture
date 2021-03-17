import React from "react";
import { useStyles } from "./style";

export const Form: React.FC<any> = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      data-testid='form'
      {...other}
    >
      {props.children}
    </form>
  );
};
