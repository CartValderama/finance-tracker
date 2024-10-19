import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
} from "@clerk/clerk-react";

export default function Auth() {
  return (
    <div className="flex gap-2">
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
