import { useEffect } from "react";
export default function useScript(url: string, onload: () => void) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = onload;
    document.head.appendChild(script);
    // clean up
    // logout시 script가 없어 에러가 발생하여 지우지 않음
    // return () => {
    //   document.head.removeChild(script);
    // };
  }, [url, onload]);
}
