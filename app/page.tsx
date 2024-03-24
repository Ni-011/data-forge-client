import Image from "next/image";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-10 gap-40 items-center">
        <h1 className="text-5xl pt-10">Data-Forge</h1>
        <Form />
      </div>
    </main>
  );
}
