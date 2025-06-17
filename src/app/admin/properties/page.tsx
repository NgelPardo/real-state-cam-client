import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function page() {

    const session = await auth();
        
    if(!session?.user) redirect("/auth/login");

  return (
    <div>Properties</div>
  )
}
