import React, { useState } from "react";
import {
  Button,
  TextInput,
  Stack,
  Container,
  CopyButton,
  Group,
} from "@mantine/core";
import generatePassword from "./utils/key-generator";
import "./App.css";

function App() {
  const [key, setKey] = useState<string>("");

  const handleGenerate = () => {
    const newKey = generatePassword(32);
    setKey(newKey);
  };

  return (
    <Container size="sm" pt="xl">
      <Stack>
        <h1 className="text-xl font-bold text-green-600">Key Generator</h1>

        <TextInput value={key} readOnly placeholder="Click generate" />

        <Group justify="space-between">
          <Button onClick={handleGenerate} variant="filled">
            Generate Key
          </Button>

          <CopyButton value={key}>
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "green"} onClick={copy}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            )}
          </CopyButton>
        </Group>
      </Stack>
    </Container>
  );
}

export default App;
