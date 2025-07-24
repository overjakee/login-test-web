import "@/styles/globals.css";
import { useRouter } from 'next/router';
import type { AppProps } from "next/app";
import AuthGuard from "../components/AuthGuard";
import LogoutButton from '../components/LogoutButton';
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  const hideLogoutOn = ['/', '/register'];
  const showLogout = ready && !hideLogoutOn.includes(router.pathname);

  // หน้าต้องซ่อน Layout เช่น login/register
  const useLayout = !hideLogoutOn.includes(router.pathname);

  return (
    <AuthGuard>
      {useLayout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthGuard>
  );
}
