import Sidebar from "@/components/Sidebar";
import HeaderNav from "@/components/HeaderNav";
import SectionCard from "@/components/SectionCard";
import { FaMobileAlt, FaLaptopCode, FaPalette, FaServer } from "react-icons/fa";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <>
      <div className="flex justify-between mx-auto md:flex">
        <Sidebar />
        <InfoCard />
      </div>
    </>
  );
}
