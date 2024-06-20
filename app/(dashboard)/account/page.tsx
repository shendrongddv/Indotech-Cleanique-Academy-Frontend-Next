import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const AccoundPage = async () => {
  const { userId } = auth();

  // Check complete registration
  const isRegistered = await db.user.findFirst({
    where: {
      userId: userId?.toString(),
    },
  });
  return <div>{isRegistered ? <h1>Menu</h1> : <h1>Registrasi</h1>}</div>;
};

export default AccoundPage;
