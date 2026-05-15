import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";

export default function TestJoy() {
  return (
    <CssVarsProvider>
      <Textarea
  color="neutral"
  minRows={2}
  size="sm"
  variant="outlined"
  placeholder="Type anything…"
/>
    </CssVarsProvider>
  );
}
