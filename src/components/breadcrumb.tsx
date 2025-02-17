import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

type BreadCrumbType = {
  title: string;
  link: string;
};

type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};

export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      {items?.map((item: BreadCrumbType, index: number) => (
        <React.Fragment key={item.title}>
          <Icons.chevronRight className={cn("h-4 w-4", index === items.length - 1 ? "" : "hidden")} />
          <Link
            href={item.link}
            className={cn("font-medium", index === items.length - 1 ? "pointer-events-none text-foreground" : "text-muted-foreground")}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
