import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// Define response data type
type Data = { message?: string; error?: string; };

// Email validation schema
//const EmailSchema = z
//  .string()
//  .email({ message: "Please enter a valid email address" });

// Subscription handler function
export async function POST(
  req: Request
) {
  const payload = await req.json();
  console.log(payload.email)
  console.log("IN API")
  // 1. Validate email address
  //const emailValidation = EmailSchema.safeParse(req.body);
  //if (!emailValidation.success) {
  //  console.log("here")
  //  return new Response("Please enter a valid email address", {status: 400});
  //}

  // 2. Retrieve Brevo credentials from environment variables
  const API_KEY = process.env.BREVO_API_KEY;
  const API_SERVER = process.env.BREVO_API_SERVER;

  // 3. Construct Brevo API request URL
  const url = `${API_SERVER}`;

  // 4. Prepare request data
  const data = {
    email: payload.email,
    includeListIds: [8],
    templateId: 9,
    redirectionUrl: "https://meetsync.me"
  };

  // 5. Set request headers
  const options = {
    headers: {
      "Content-Type": "application/json",
      "Api-Key": API_KEY,
    },
  };

  // 6. Send POST request to BREVO API
  try {
    const response = await axios.post(url, data, options);
    console.log(response.status)
    console.log(response.data)
    if (response.status == 200 || response.status == 201 || response.status == 204) {
      return new Response("Awesome! You have successfully subscribed!", {status: 201});
    }
  } catch (error) {
    console.log(error)
    
    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title == "Member Exists") {
        return new Response("Uh oh, it looks like this email's already subscribed🧐", {status: 400});
      }
    }

    return new Response("Oops! There was an error subscribing you to the newsletter. Please email me at contact@musify.at and I'll add you to the list.", {status: 500});
  }
};