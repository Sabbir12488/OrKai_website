"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export const BillboardCilent = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Billboard" description="Manage billboards for your store"/>
        <Button variant={"default"} size={"sm"}>
          <Plus className="h-4 w-4 mr-2"/>
          Add New
        </Button>
      </div>
      <Separator/>
    </>
  );
};
