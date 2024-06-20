const AccountIntroPage = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <Component
        title="Tahap 1"
        text="Lorem ipsum dolor sit amet consectetur adipiscing, elit sagittis himenaeos fringilla metus."
        link="/account"
        linkLabel="Kerjakan"
        isComplete={true}
      />

      <Component
        title="Tahap 2"
        text="Lorem ipsum dolor sit amet consectetur adipiscing, elit sagittis himenaeos fringilla metus."
        link="/account/skrinning-1"
        linkLabel="Kerjakan"
        isComplete={false}
      />

      <Component
        title="Tahap 3"
        text="Lorem ipsum dolor sit amet consectetur adipiscing, elit sagittis himenaeos fringilla metus."
        link="/account/skrinning-2"
        linkLabel="Kerjakan"
        isComplete={false}
      />
    </div>
  );
};

export default AccountIntroPage;

// Component
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  title: string;
  text: string;
  link: string;
  linkLabel: string;
  isComplete?: boolean;
};

export function Component({ title, text, link, linkLabel, isComplete }: Props) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {text}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild disabled={isComplete}>
          <Link href={link}>{linkLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
