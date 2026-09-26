import Image from "next/image";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import CardSection from "./component/CardSection";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <div className="px-6 sm:px-8 md:px-12  ">
    <h1 className="font-bold text-[50px]">THE LIBRARY</h1>
    <p className="text-gray-400 text-sm mb-5">Twelve lifts covering every major muscle group</p>
</div>
<Suspense fallback={
  
  <span className="ml-90 loading loading-spinner text-secondary"></span>

}>
<CardSection ></CardSection>
</Suspense>


        </div>

  );
}
