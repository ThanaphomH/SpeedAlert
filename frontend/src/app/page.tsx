"use client"
import { Main } from "@/components/component/main";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Main />
      </NextUIProvider>
    </QueryClientProvider>

  );
}
