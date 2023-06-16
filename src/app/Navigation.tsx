"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Bad CLS Bad LCP" },
  { href: "/good-cls-good-lcp", label: "Good CLS Good LCP" },
  { href: "/good-cls-bad-lcp", label: "Good CLS Bad LCP" },
  { href: "/bad-cls-good-lcp", label: "Bad CLS Good LCP" },
];

type Props = {};

export default function Navigation({}: Props) {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-4 bg-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          {links.map(({ href, label }) => {
            const isActive = href === pathname;

            return (
              <li>
                <Link
                  href={href}
                  className={`${
                    isActive ? "text-blue-500" : "text-gray-800"
                  } font-medium hover:font-bold`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
