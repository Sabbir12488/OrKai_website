"use client";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export const BillboardCilent = () => {
  const router = useRouter();
  const param = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboard (0)"
          description="Manage billboards for your store"
        />
        <Button
          variant={"default"}
          size={"sm"}
          onClick={() => router.push(`/${param.storeId}/billboards/new`)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};
