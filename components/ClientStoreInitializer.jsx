// src/components/ClientStoreInitializer.jsx
"use client";
import { useEffect } from "react";
import { useClientStore } from "@/store/useClientStore";

export default function ClientStoreInitializer({ clientInfo }) {
  const setClientInfo = useClientStore((state) => state.setClientInfo);

  useEffect(() => {
    setClientInfo(clientInfo);
  }, [clientInfo, setClientInfo]);

  return null;
}
