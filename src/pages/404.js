import React from 'react';

export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/#404';
  }

  return null;
}