"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./styles/dashboard.module.css";
export default function Login() {
  const [login, setLogin] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      router.push("/home");
    } else {
      setLogin(true);
    }
  }, [session]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {login ? (
        <button
          onClick={() => signIn("google")}
          className={styles.signInButton}
        >
          Sign in
        </button>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
