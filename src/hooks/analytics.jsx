// useAnalytics.js
import { useEffect } from "react";

export default function useAnalytics(event) {
    useEffect(() => {
        console.log(`Analytics Event: ${event}`);
    }, [event]);
}
