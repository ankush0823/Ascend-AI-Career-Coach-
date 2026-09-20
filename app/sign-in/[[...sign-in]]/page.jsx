import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 bg-[#050814]">
      <SignIn fallbackRedirectUrl="/onboarding" signUpUrl="/sign-up" />
    </div>
  );
}
