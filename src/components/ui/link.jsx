import React from 'react'
import Link from "next/link";

export default function LinkCustom({ children, ...props }) {
  return (
    <Link
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary hover:bg-primary-light py-2 px-4 text-white underline-offset-4 shadow-link transition active:scale-95 active:shadow-none"
      {...props}
    >
      {children}
    </Link>
  );
}
