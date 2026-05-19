import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

const EmptyWorkspace = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <Image src={"/file.png"} alt="empty-workspace" width={70} height={70} />

      <h2 className="text-2xl font-medium text-foreground">
        No Repositories Added
      </h2>
      <p className="text-sm text-muted-foreground mt-3">
        Connect your Github account and add repositories to generate and run
        test cases
      </p>
      <Button className="mt-5 gap-3">
        <Link className="h-4 w-4 mr-2" /> Connect Repository
      </Button>
    </div>
  );
};

export default EmptyWorkspace;
