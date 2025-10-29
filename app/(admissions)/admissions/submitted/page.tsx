import React, { Suspense } from "react";
import SubmittedClient from "./SubmittedClient";

export default function SubmissionSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto py-24 px-4">Loading...</div>
      }
    >
      <SubmittedClient />
    </Suspense>
  );
}
