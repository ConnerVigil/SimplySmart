/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button, Grid, Typography } from "@mui/material";
import { type GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import { type AppProps } from "next/app";
import styles from "./index.module.css";

export default function SignIn({ providers }: { providers: AppProps }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
      className={styles.main}
      gap={5}
    >
      <Grid item>
        <Typography variant="h1" className={styles.title}>
          Sign In
        </Typography>
      </Grid>
      <Grid item>
        <div>
          {Object.values(providers).map((provider) => (
            <Button
              variant="contained"
              key={provider.id}
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}/home`,
                })
              }
            >
              Sign in with {provider.name}
            </Button>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
