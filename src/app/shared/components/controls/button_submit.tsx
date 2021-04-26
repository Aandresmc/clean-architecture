import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React from "react";

import styled from 'styled-components';


type Props = {
  isLoading: boolean,
  label: string
};

const StyledButton = styled(({ ...props }) => (
  <Button  {...props} variant="contained" color="primary" data-testid="submit" type="submit">
    {props.disabled ? <CircularProgress size={30} color="inherit" /> : props.label}
  </Button>
))`
    margin-top: 24px;
  `;

export const ButtonSubmitComponent: React.FC<Props> = ({ isLoading , label }: Props) => <StyledButton disabled={isLoading} label={label} />;
