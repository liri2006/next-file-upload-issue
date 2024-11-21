"use client";

import { useActionState } from "react";
import { myAction } from "./action";

export default function AccountFormTest() {
  const [formState, formAction, isPending] = useActionState(myAction, null);

  return (
    <form action={formAction}>
      <input name="text" />
      <input type="file" name="apiKey" />

      <div>{isPending ? "...pending" : "Ready to submit"}</div>

      <button type="submit" disabled={isPending}>
        Save changes
      </button>
    </form>
  );
}
