"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// dynamic with ssr:false must be used in a Client Component.
const AdmissionsDashboardClient = dynamic(
  () => import('./AdmissionsDashboardClient'),
  {
    ssr: false,
    loading: () => <div className="max-w-6xl mx-auto p-8">Loading dashboard…</div>,
  }
);

export default function AdmissionsDashboardLoader() {
  return <AdmissionsDashboardClient />;
}
