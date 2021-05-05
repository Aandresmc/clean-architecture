import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React from "react";

import styled from 'styled-components';


type Props = {
  isLoading: boolean
};

const StyledButton = styled(({ ...props }) => (
  <Button  {...props} variant="contained" color="primary" data-testid="submit" type="submit">
    {props.disabled ? <CircularProgress size={30} color="inherit"/> : "Ingresar"}
  </Button>
))`
    margin-top: 24px;
  `;

export const ButtonSubmitComponent: React.FC<Props> = ({ isLoading }: Props) => <StyledButton disabled={isLoading} />;
