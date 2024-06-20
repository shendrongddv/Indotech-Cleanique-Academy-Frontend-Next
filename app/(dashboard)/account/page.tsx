import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import RegistrationForm from "./_components/registration-form";

const AccoundPage = async () => {
  const { userId } = auth();

  // Check complete registration
  const isRegistered = await db.user.findFirst({
    where: {
      userId: userId?.toString(),
    },
  });
  return <div>{isRegistered ? <h1>Menu</h1> : <RegistrationForm />}</div>;
};

export default AccoundPage;
