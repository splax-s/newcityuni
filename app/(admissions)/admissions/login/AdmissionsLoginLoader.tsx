"use client";
import dynamic from 'next/dynamic';
import React from 'react';

const AdmissionsLoginClient = dynamic(
  () => import('./AdmissionsLoginClient'),
  {
    ssr: false,
    loading: () => <div className="max-w-md mx-auto p-8">Loading…</div>,
  }
);

export default function AdmissionsLoginLoader() {
  return <AdmissionsLoginClient />;
}
