export const formSectionData = {
  placeholders: {
    firstName: "John",
    lastName: "Smith",
    email: "john@company.com",
    serviceInterest: "Select a service",
    message: "Briefly describe what you're facing or looking to achieve...",
  },
  serviceInterestOptions: [
    "Strategic Communications",
    "Crisis Management",
    "Political & Campaign",
    "Executive Training",
    "Digital Reputation",
    "AI Business Optimization",
    "Multiple Services",
  ],
  buttonText: {
    default: "Send Message",
    submitting: "Sending...",
  },
  toastMessages: {
    success: {
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch soon.",
    },
    error: {
      title: "Something went wrong",
      descriptionDefault:
        "There was a problem sending your message. Please try again later.",
      descriptionUnexpected:
        "An unexpected error occurred. Please try again later.",
    },
  },
};
