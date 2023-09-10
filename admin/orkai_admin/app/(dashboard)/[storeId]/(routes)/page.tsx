import prismadb from "@/lib/prismadb";

interface PageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<PageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Store name {store?.name}</div>;
};

export default DashboardPage;
