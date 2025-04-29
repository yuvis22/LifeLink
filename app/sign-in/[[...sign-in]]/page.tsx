import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | LifeLink Blood Donor Network",
  description:
    "Sign in to your LifeLink account to manage your blood donations and find donors.",
};

export default function SignInPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to your account to access your donation history and find
            donors.
          </p>
        </div>
        <SignIn
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
