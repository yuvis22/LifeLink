import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | LifeLink Blood Donor Network",
  description:
    "Create your LifeLink account to start donating blood and saving lives.",
};

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join LifeLink
          </h1>
          <p className="text-gray-600">
            Create an account to start your journey as a blood donor and help
            save lives.
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-rose-600 hover:bg-rose-700 text-white",
              footerActionLink: "text-rose-600 hover:text-rose-700",
            },
          }}
        />
      </div>
    </div>
  );
}
