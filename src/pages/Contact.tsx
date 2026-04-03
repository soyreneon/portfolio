import { useState } from "react";
import {
  Container,
  Stack,
  Input,
  Textarea,
  Button,
  Card,
  Alert,
  Text,
} from "@chakra-ui/react";
export function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <Container maxW="4xl">
      <Stack gap={12} align="center" textAlign="center">
        <Card.Root
          maxW="sm"
          px={4}
          py={6}
          background={"accent.50"}
          _dark={{ background: "accent.900" }}
        >
          <Card.Header>
            <Card.Title>Sign up</Card.Title>
            <Card.Description>
              Fill in the form below to get in touch
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <form onSubmit={onSubmit}>
                <Input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  mb={3}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  mb={3}
                />
                <Textarea name="message" required rows={8} mb={3} />
                <Button
                  type="submit"
                  variant="solid"
                  px={5}
                  alignSelf="flex-end"
                >
                  Submit
                </Button>
                {result && (
                  <Alert.Root status="success">
                    <Alert.Indicator />
                    <Alert.Title>{result}</Alert.Title>
                  </Alert.Root>
                )}
              </form>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Text textStyle={"xs"} color={"primary.400"}>
              I respond as soon as possible.
            </Text>
          </Card.Footer>
        </Card.Root>
      </Stack>
    </Container>
  );
}
