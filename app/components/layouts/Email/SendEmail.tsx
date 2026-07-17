import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Hr,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

interface SendEmailProps {
  name: string;
  email: string;
  message: string;
}

export const SendEmail = ({ name, email, message }: SendEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />

        <Preview>New portfolio contact from {name}</Preview>

        <Body className="bg-zinc-100 py-10 font-sans">
          <Container className="mx-auto max-w-150 rounded-xl bg-white p-10">
            <Heading className="m-0 text-3xl font-bold text-zinc-900">
              📩 New Contact Message
            </Heading>

            <Text className="mt-3 text-zinc-500">
              Someone has contacted you through your portfolio website.
            </Text>

            <Hr className="my-8" />

            <Section>
              <Text className="mb-1 text-sm font-semibold text-zinc-900">
                Name
              </Text>

              <Text className="mt-0 text-zinc-600">{name}</Text>
            </Section>

            <Section className="mt-6">
              <Text className="mb-1 text-sm font-semibold text-zinc-900">
                Email
              </Text>

              <Text className="mt-0 text-blue-600">{email}</Text>
            </Section>

            <Section className="mt-6">
              <Text className="mb-1 text-sm font-semibold text-zinc-900">
                Message
              </Text>

              <Text className="mt-0 whitespace-pre-line rounded-lg bg-zinc-100 p-4 text-zinc-700">
                {message}
              </Text>
            </Section>

            <Hr className="my-8" />
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
