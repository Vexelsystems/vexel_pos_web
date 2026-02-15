import { generatePageMetadata } from "@/lib/seo";
import SignUpClient from "./SignUpClient";

export async function generateMetadata() {
  return await generatePageMetadata({
    title: "Start Your Free Trial | Vexel POS",
    description:
      "Register today and transform your business with Vexel POS. Enjoy a free 14-day trial with all premium features included.",
    keywords: [
      "Vexel POS trial",
      "free POS software test",
      "start SaaS POS journey",
      "POS registration Sri Lanka",
      "business account creation",
    ],
    path: "/get-started",
  });
}

export default function SignUpPage() {
  return <SignUpClient />;
}
