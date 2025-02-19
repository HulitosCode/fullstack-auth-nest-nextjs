import { getSession } from "@/lib/session";
import { Role } from "@/lib/type";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getSession();
  if (!session || !session.user) redirect("/auth/signin");
  if (session.user.role !== Role.ADMIN) redirect("/auth/signin");
  console.log({ session });
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
