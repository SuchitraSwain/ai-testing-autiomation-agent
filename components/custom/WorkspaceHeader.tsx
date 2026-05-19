import Image from "next/image";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

type WorkspaceHeaderProps = {
  className?: string;
};

export default function WorkspaceHeader({ className }: WorkspaceHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <Image
        src="/logo.svg"
        alt="AutoTest AI"
        width={168}
        height={32}
        className={cn("h-8 w-auto shrink-0", className)}
        priority
      />
      <ul className="flex items-center gap-6 text-xl text-foreground">
        <li className="cursor-pointer hover:text-primary">Workspace</li>
        <li className="cursor-pointer hover:text-primary">Pricing</li>
        <li className="cursor-pointer hover:text-primary">Support</li>
      </ul>

      <UserButton />
    </div>
  );
}
