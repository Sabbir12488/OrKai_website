"use client";

import { UseStoreModel } from "@/hooks/use-store-model";

import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = UseStoreModel((state) => state.onOpen);
  const isOpen = UseStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
