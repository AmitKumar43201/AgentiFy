'use client'
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
   <main>
    <div className="w-full h-14 bg-blue-300 flex justify-between items-center p-3.5 " >
      <span>Agentify</span>
      <Button onClick={() => router.push('/sign-up')}>SignUp</Button>
      <Button onClick={() => router.push('/sign-in')}>Login</Button>
    </div>
    <Button onClick={() => router.push('/dashboard')}>Dashboard</Button>
   </main>
  )
}


