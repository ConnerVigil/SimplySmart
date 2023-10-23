// SignOutButton.js

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    // Call your sign-out function here
    await signOut();

    // Redirect to the sign-in page
    console.log("Sign out successful");
  };

  const handleRedirect = async () => {
    await router.push("/");
  };

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return (
    <button
      onClick={() => {
        handleSignOut();
        handleRedirect();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
