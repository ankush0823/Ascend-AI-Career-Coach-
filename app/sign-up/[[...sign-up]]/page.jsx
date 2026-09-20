import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 bg-[#050814]">
      <SignUp fallbackRedirectUrl="/onboarding" signInUrl="/sign-in" />
    </div>
  );
}
