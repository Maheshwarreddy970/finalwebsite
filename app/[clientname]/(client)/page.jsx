import { getFeaturedCars } from "@/actions/home";
import Herosection from "@/components/landingpage/Herosection";
import EmiCalculator from "./(main)/cars/[id]/_components/emi-calculator";
import Featured from "@/components/landingpage/Featured";
import Customerstories from "@/components/landingpage/customers";
import BodyType from "@/components/landingpage/BodyType";
import Searchsection from "@/components/landingpage/Searchsection";
import Bento from "@/components/landingpage/Bento";
import TeamSection from "@/components/landingpage/TeamSection";
import { IconCar } from "@tabler/icons-react";
import { IconCheckupList } from "@tabler/icons-react";
import {
  IconCurrencyDollar,
  IconCertificate,

  IconCashRegister,
  IconShieldBolt
} from "@tabler/icons-react";


export default async function Home() {
  const featuredCars = await getFeaturedCars();
  const features = [
    {
      title: "Certified Quality Inspection",
      description:
        "Every vehicle undergoes our comprehensive 150+ point inspection process covering engine performance, safety systems, brakes, transmission, and electrical components. Our certified technicians ensure each car meets our strict quality standards before it reaches our showroom floor.",
      icon: <IconCertificate className=" size-8 group-hover/feature:text-blue-500" />,
    },
    {
      title: "Flexible Financing Options",
      description:
        "Get approved today with $0 down payment options available. We welcome all credit types - bad credit, no credit, or first-time buyers. Our network of trusted lenders compete to offer you the best rates starting as low as 2.9% APR.",
      icon: <IconCurrencyDollar className=" size-8 group-hover/feature:text-blue-500" />,
    },
    {
      title: "Trade-In & Instant Cash",
      description:
        "Get an instant cash offer for your current vehicle in minutes. Use your trade-in value as down payment or walk away with cash in hand. We accept vehicles in any condition - running or not, paid off or with existing loans.",
      icon: <IconCashRegister className=" size-8 group-hover/feature:text-blue-500" />,
    },
    {
      title: "Extended Warranty Coverage",
      description: "Drive with complete peace of mind with our extended warranty options covering up to 7 years or 100,000 miles. Additional protection plans include gap insurance, tire and wheel coverage, and comprehensive mechanical breakdown protection.",
      icon: <IconShieldBolt className=" size-8 group-hover/feature:text-blue-500" />,
    },
    {
      title: "Complete Vehicle History",
      description: "Every car comes with a free comprehensive vehicle history report showing accident history, previous ownership, service records, and title information. We guarantee clean titles with no flood damage or major accident history on all our vehicles.",
      icon: <IconCheckupList className=" size-8 group-hover/feature:text-blue-500" />,
    },
    {
      title: "Transparent Pricing Promise",
      description:
        "No hidden fees, no surprise charges, no haggling pressure. Our upfront pricing includes all costs with detailed breakdowns so you know exactly what you're paying. What you see is what you get - guaranteed transparent transactions every time.",
      icon: <IconCar className=" size-8 group-hover/feature:text-blue-500" />,
    }
  ];
  return (
    <>
      <Herosection></Herosection>
      <Featured Cars={featuredCars}></Featured>
      <Bento mainfeatures={features} />
      <div className="px-3 mt-10 md:px-10">
        <EmiCalculator className={' max-h-[150vh] overflow-y-visible'} />
      </div>
      <Customerstories></Customerstories>
      <Searchsection></Searchsection>
      <BodyType></BodyType>
      <TeamSection></TeamSection>
    </>
  );
}
