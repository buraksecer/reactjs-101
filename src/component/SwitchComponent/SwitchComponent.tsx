import { Switch } from "@mui/material";
import React from "react";

export interface SwitchComponentProps {
    onChange(value: boolean): void;
    checked: boolean
}

export const SwitchComponent: React.FC<SwitchComponentProps> = ({
    onChange,
    checked
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      color={"default"}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}