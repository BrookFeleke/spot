"use client";
// components/SignInButton.js

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div>
      {loading ? (
        <button disabled>Loading...</button>
      ) : session ? (
        <>
          <h1>Access Token</h1>
          <p>{session.accessToken}</p>
          <h1>Refresh Token</h1>
          <p>{session.refreshToken}</p>
          <h1>User</h1>
          <p>{session.user?.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("spotify")}>Sign In with Spotify</button>
      )}
    </div>
  );
}
