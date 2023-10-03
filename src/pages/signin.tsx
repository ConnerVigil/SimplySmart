/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { type GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import { type AppProps } from "next/app";

export default function SignIn({ providers }: { providers: AppProps }) {
  return (
    <>
      <h1>Sign in</h1>
      <div>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.id}
            onClick={() =>
              signIn(provider.id, {
                callbackUrl:
                  "https://simply-smart-gsf4tu24g-connervigil.vercel.app",
              })
            }
          >
            Sign in with Google
          </button>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
