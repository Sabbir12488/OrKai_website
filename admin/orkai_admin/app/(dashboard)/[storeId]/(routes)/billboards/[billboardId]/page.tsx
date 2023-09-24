import prismadb from "@/lib/prismadb";
import React from "react";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return <div>This is a form for billboards: {billboard?.label}</div>;
};

export default BillboardPage;
