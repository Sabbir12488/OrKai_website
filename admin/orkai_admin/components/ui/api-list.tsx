"use client";

import { useOrigine } from "@/hooks/use-origin";

import { useParams } from "next/navigation";
import { ApiAlart } from "@/components/ui/api-alart";

interface apiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<apiListProps> = ({
  entityIdName,
  entityName,
}) => {
  const params = useParams();
  const origin = useOrigine();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlart
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlart
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlart
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlart
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlart
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
