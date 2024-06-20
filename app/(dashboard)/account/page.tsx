import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import RegistrationForm from "./_components/registration-form";
import AccountIntroPage from "./_components/account-home";

const AccoundPage = async () => {
  const { userId } = auth();

  // Check complete registration
  const isRegistered = await db.user.findFirst({
    where: {
      userId: userId?.toString(),
    },
  });
  return (
    <div>{isRegistered ? <AccountIntroPage /> : <RegistrationForm />}</div>
  );
};

export default AccoundPage;
