import {Alert, AlertTitle} from "@/components/ui/alert"
import { Server } from "lucide-react";

interface apiAlartProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<apiAlartProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<apiAlartProps["variant"], string> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlart: React.FC<apiAlartProps> = ({
  title,
  description,
  variant = "public",
}) => {
    return(
        <Alert>
            <Server className="h-4 w-4"/>
            <AlertTitle className="flex items-center gap-x-2">
                {title}
            </AlertTitle>
        </Alert>
    )
};
