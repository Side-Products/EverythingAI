import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollToPageTop({ samePage, changingValue }) {
  const router = useRouter();

  const dependency = samePage ? changingValue : router.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dependency]);

  return null;
}
