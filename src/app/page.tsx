"use client";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div className="h-screen w-full flex flex-col gap-y-2 items-center justify-center">
      Home Page
      <Button variant={"outline"} onClick={signOut}>
        Logout
      </Button>
    </div>
  );
}
