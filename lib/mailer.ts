import { SendEmail } from "@/app/components/layouts/Email/SendEmail";
import nodemailer from "nodemailer";
import { render } from "react-email";

type sendMailProps = {
  name: string;
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP_HOST,
  port: Number(process.env.EMAIL_SMTP_PORT),
  auth: {
    user: process.env.EMAIL_SMTP_USER,
    pass: process.env.EMAIL_SMTP_PASS,
  },
});


export const sendMail = async ({
  name,
  email,
  message
}: sendMailProps) =>  {
  const emailHtml = await render(
    SendEmail({ name, email, message }),
  );

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Contact from ${name}`,
    html: emailHtml,
  });
}