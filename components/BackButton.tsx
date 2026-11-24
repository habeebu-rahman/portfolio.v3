'use client';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <button type="button" className="button button-outline" onClick={() => history.back()}>
      <ArrowLeft size={16} /> Go back
    </button>
  );
}
