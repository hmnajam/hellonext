"use client"

import Link from 'next/link';
import Example from '@/components/ui/navbar3';


export default function Testimonials() {
  return (
    <>
    <Example />
      <h1>Testimonials Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      
    </>
  );
}