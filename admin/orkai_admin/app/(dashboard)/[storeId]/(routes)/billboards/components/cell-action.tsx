"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BillboardColumn } from "./columns";
import { Copy, Edit, MoreHorizontal, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

interface cellActionProps {
  data: BillboardColumn;
}

export const CellAction: React.FC<cellActionProps> = ({ data }) => {
  const onCopy = (id: string) =>
  {
    navigator.clipboard.writeText(id);
    toast.success("Copied to your clipboard");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="h-8 w-8 p-0">
          <span className="sr-only">Menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onCopy(data.id)}>
          <Copy className="h-4 w-4 mr-2" />
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
