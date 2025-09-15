import { cn } from "@/lib/utils";
import { IconCar } from "@tabler/icons-react";
import { IconCheckupList } from "@tabler/icons-react";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconCertificate,
  IconRouteAltLeft,
  IconTerminal2,
  IconCashRegister,
  IconShieldBolt 
} from "@tabler/icons-react";
import { Philosopher } from 'next/font/google'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })

export default function Bento({ mainfeatures }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 px-3 md:px-10 mx-auto">
      {mainfeatures.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}


const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >

      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      {index >= 3 && (
        <>
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200  inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[85%] blur-sm" />
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200 inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[85%]" />
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200 inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[35%] blur-sm" />
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200 inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[35%]" />
        </>
      )}
      {index < 3 && (
        <>
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200  inset-x-10 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[85%] blur-sm" />
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200 inset-x-10 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[85%]" />
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200 inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[35%] blur-sm" />
          <div className="absolute opacity-0 group-hover/feature:opacity-100 transition duration-200 inset-x-40 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[35%]" />
        </>
      )}
      <div className="text-2xl font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-8 group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className={cn("group-hover/feature:text-blue-500 group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100", philosopher.className)}>
          {title}
        </span>
      </div>
      <p className=" text-neutral-500 dark:text-neutral-300 max-w-xl relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
