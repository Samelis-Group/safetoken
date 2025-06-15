import {
  Button,
  Container,
  CopyButton,
  Group,
  Stack,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import "./App.css";
import { Image } from "@mantine/core";
import generatePassword from "./utils/key-generator";

function App() {
  const [key, setKey] = useState<string>("");

  const handleGenerate = () => {
    const newKey = generatePassword(32);
    setKey(newKey);
  };

  return (
    <Container size="sm" pt="xl">
      <Stack>
        <div className="flex flex-col items-center justify-center mb-5 space-y-2">
          <Image radius="md" w={50} src="logo-key-gen-core.jpg" />
          <h1 className="text-xl font-bold text-green-600">Key Generator</h1>
        </div>

        

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
