"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/good-cls-good-lcp", label: "+C+L" },
  { href: "/good-cls-bad-lcp", label: "+C-L" },
  { href: "/bad-cls-good-lcp", label: "-C+L" },
  { href: "/bad-cls-bad-lcp", label: "-C-L" },
];

type Props = {};

export default function SoftNavigation({}: Props) {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between py-2 bg-gray-200 border-b-2 border-solid border-stone-400">
      <div className="container mx-auto px-4 flex">
        <p className="mr-2">SoftNav</p>
        <ul className="flex space-x-4">
          {links.map(({ href, label }) => {
            const isActive = href === pathname;

            return (
              <li key={href}>
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
    </div>
  );
}
