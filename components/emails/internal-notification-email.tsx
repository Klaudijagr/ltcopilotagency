import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface InternalNotificationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  serviceInterest?: string;
  message: string;
  consent: boolean;
}

export const InternalNotificationEmail: React.FC<
  Readonly<InternalNotificationEmailProps>
> = ({ firstName, lastName, email, serviceInterest, message, consent }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Contact Form Submission</Heading>
        <Text style={paragraph}>
          You received a new message from the CoPilot Agency website contact
          form.
        </Text>
        <Hr style={hr} />
        <Text style={details}>
          <strong>First Name:</strong> {firstName}
        </Text>
        <Text style={details}>
          <strong>Last Name:</strong> {lastName}
        </Text>
        <Text style={details}>
          <strong>Email:</strong> {email}
        </Text>
        {serviceInterest ? (
          <Text style={details}>
            <strong>Service Interest:</strong> {serviceInterest}
          </Text>
        ) : null}
        <Hr style={hr} />
        <Heading style={messageHeading}>Situation:</Heading>
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />
        <Text style={details}>
          <strong>Consent Given:</strong> {consent ? "Yes" : "No"}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
  textAlign: "center" as const,
};

const messageHeading = {
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "30px",
  marginBottom: "10px",
  paddingLeft: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  padding: "0 20px",
};

const details = {
  fontSize: "14px",
  lineHeight: "20px",
  padding: "0 20px",
  margin: "5px 0",
};

const hr = {
  borderColor: "#f0f0f0",
  margin: "20px 0",
};

export default InternalNotificationEmail;
