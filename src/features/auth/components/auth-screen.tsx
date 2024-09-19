"use client";

import { useCallback, useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  const handleSetStateAction = useCallback(
    (value: SignInFlow) => {
      setState(value);
    },
    [state]
  );

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={handleSetStateAction} />
        ) : (
          <SignUpCard setState={handleSetStateAction} />
        )}
      </div>
    </div>
  );
};
