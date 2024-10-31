import Image from "next/image";
import Hello from "@/app/components/hello"

export default function Home() {
  console.log("Client or Server?")
  return (
    <>
      <h1 className='text-3xl'>Welcome Next.js 15</h1>
      <Hello />
    </>
  );
}
