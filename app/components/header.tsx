import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 grid place-content-center border">
      <Button variant="ghost" asChild>
        <Link href="/">
          <h1 className="font-bold">RESERVE-DEMO</h1>
        </Link>
      </Button>
    </header>
  );
}
