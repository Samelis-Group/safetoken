import {
  Button,
  Container,
  CopyButton,
  Group,
  Slider,
  Stack,
  Text,
  TextInput,
  Title,
  Image,
} from "@mantine/core";
import { useState } from "react";
import "./App.css";
import generatePassword from "./utils/key-generator";

function App() {
  const [key, setKey] = useState<string>("");
  const [length, setLength] = useState<number>(32);

  const handleGenerate = () => {
    const newKey = generatePassword(length);
    setKey(newKey);
  };

  return (
    <div className="space-y-4 w-72 md:w-96">
      <div className="flex flex-col items-center justify-center space-y-2">
        <Image radius="md" w={50} src="logo-key-gen-core.jpg" />
        <Title order={2} c="green">
          Key Generator
        </Title>
      </div>
      <div className="flex flex-col space-y-2 mb-8 ">
        <Text size="sm">Key length: {length} characters</Text>

        <TextInput value={key} readOnly placeholder="Click generate" />
        <Slider
          value={length}
          onChange={setLength}
          min={8}
          max={64}
          step={1}
          marks={[
            { value: 8, label: "8" },
            { value: 32, label: "32" },
            { value: 64, label: "64" },
          ]}
        />
      </div>

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
    </div>
  );
}

export default App;
