'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react';
import { useId } from "react";
import { Philosopher, Great_Vibes } from 'next/font/google'


const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

const features = [
  {
    title: "Certified Quality Inspection",
    description: "Every vehicle undergoes our comprehensive 150+ point inspection process covering engine performance, safety systems, brakes, transmission, and electrical components. Our certified technicians ensure each car meets our strict quality standards before it reaches our showroom floor.",
    iconType: "inspection",
    gradient: "from-green-300/30 to-green-500/30" // Green for quality/safety
  },
  {
    title: "Transparent Pricing Promise",
    description: "No hidden fees, no surprise charges, no haggling pressure. Our upfront pricing includes all costs with detailed breakdowns so you know exactly what you're paying. What you see is what you get - guaranteed transparent transactions every time.",
    iconType: "pricing",
    gradient: "from-blue-300/30 to-blue-500/30" // Blue for transparency/finance
  },
  {
    title: "Complete Vehicle History",
    description: "Every car comes with a free comprehensive vehicle history report showing accident history, previous ownership, service records, and title information. We guarantee clean titles with no flood damage or major accident history on all our vehicles.",
    iconType: "history",
    gradient: "from-orange-300/30 to-orange-500/30" // Orange for history/records
  },
  {
    title: "Trade-In & Instant Cash",
    description: "Get an instant cash offer for your current vehicle in minutes. Use your trade-in value as down payment or walk away with cash in hand. We accept vehicles in any condition - running or not, paid off or with existing loans.",
    iconType: "tradeIn",
    gradient: "from-purple-300/30 to-purple-500/30" // Purple for deals/exchange
  },
  {
    title: "Flexible Financing Options",
    description: "Get approved today with $0 down payment options available. We welcome all credit types - bad credit, no credit, or first-time buyers. Our network of trusted lenders compete to offer you the best rates starting as low as 2.9% APR.",
    iconType: "creditCard",
    gradient: "from-indigo-300/30 to-indigo-500/30" // Indigo for financing
  },
  {
    title: "Extended Warranty Coverage",
    description: "Drive with complete peace of mind with our extended warranty options covering up to 7 years or 100,000 miles. Additional protection plans include gap insurance, tire and wheel coverage, and comprehensive mechanical breakdown protection.",
    iconType: "warranty",
    gradient: "from-teal-300/30 to-teal-500/30" // Teal for protection/coverage (no red)
  }
];

export default function Features() {
  // Helper function to render icons based on iconType
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "inspection":
        return <InspectionIcon />;
      case "pricing":
        return <PricingIcon />;
      case "history":
        return <HistoryIcon />;
      case "creditCard":
        return (
          <FlippableCreditCard
            cardholderName="RAVI KATIYAR"
            cardNumber="•••• •••• •••• 1939"
            expiryDate="12/27"
            cvv="987"
          />
        );
      case "tradeIn":
        return (
          <div className='h-12 w-20 animate-line-shadow transition-all ease-in-out'>
            <img
              src={'/car-rental-sale-concept-car-sharing-service-.jpg'}
              className='h-full w-full object-cover'
              width={200}
              height={200}
              alt='car'
            />
          </div>
        );
      case "warranty":
        return (
          <div className='h-12 w-20 relative animate-line-shadow transition-all ease-in-out'>
            <img
              src={'/carear.jpeg'}
              className='h-full w-full object-cover'
              width={200}
              height={200}
              alt='car'
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-6 px-3 md:px-10">
      <div>
        <div
          className={cn('  text-center  text-4xl md:text-6xl font-semibold text-black  ', philosopher.className)}
        >
          Why Choose Us for <br></br>Your  <span className={greatVibes.className}>Next</span>   Car
        </div>
        <p className=' max-w-2xl mt-2 mx-auto text-center '>Experience unbeatable quality, transparent pricing, and personalized service. Discover why thousands of drivers trust our dealership for reliable vehicles, simple financing, and ongoing support every step of the way.</p>
      </div>
      <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} className='relative overflow-hidden' gradient={feature.gradient}>
            <Grid size={20} gradient={feature.gradient} />
            <CardHeader className="pb-3">
              <CardHeading
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              >
                {renderIcon(feature.iconType)}
              </CardHeading>
            </CardHeader>
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className, gradient }) => (
  <Card className={cn('group relative border-gray-300 hover:ring-1 ring-black/10 transition-all ease-in-out duration-300 shadow-md hover:shadow-xl border rounded-2xl ', className)}>
    {children}
  </Card>
);

const CardHeading = ({ title, description, children, gradient }) => (
  <div className="p-2 relative flex gap-1 flex-col">
    <span className='mb-4 z-20'>
      <div className={``}>
        {children}
      </div>
    </span>
    <span className="text-xl font-bold text-neutral-800 relative z-20">
      {title}
    </span>
    <p className="text-neutral-600  text-sm font-normal relative z-20">
      {description}
    </p>
  </div>
);

const Grid = ({ gradient, pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-[70%] top-0 -ml-28 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className={cn(`absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100`, gradient)}>
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}




const InspectionIcon = () => (
  <>
    <style dangerouslySetInnerHTML={{
      __html: `
        .inspection-container {
          width: 80px;
          height: 80px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .clipboard {
          width: 50px;
          height: 60px;
          border-radius: 6px;
          position: relative;
          animation: clipboardFloat 3s ease-in-out infinite;
        }
        
        .clipboard::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 16px;
          border: 2px solid #954520;
          background: #954520;
          border-radius: 4px;
        }
        
        .checklist {
          position: absolute;
          top: 12px;
          left: 8px;
          right: 8px;
        }
        
        .check-item {
          display: flex;
          align-items: center;
          margin-bottom: 6px;
          opacity: 0;
          transform: translateX(-10px);
          animation: checkItemCycle 4s ease-in-out infinite;
        }
        
        .check-item:nth-child(1) { animation-delay: 0s; }
        .check-item:nth-child(2) { animation-delay: 0.8s; }
        .check-item:nth-child(3) { animation-delay: 1.6s; }
        
        .check-box {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          margin-right: 4px;
          position: relative;
        }
        
        .check-mark {
          position: absolute;
          top: -1px;
          left: 1px;
          width: 4px;
          height: 8px;
          border: solid #22C55E;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg) scale(0);
          animation: checkMarkCycle 4s ease-in-out infinite;
          animation-delay: inherit;
        }
        
        .check-line {
          height: 2px;
          border-radius: 1px;
          flex: 1;
          transform: scaleX(0);
          transform-origin: left;
          animation: lineGrow 4s ease-in-out infinite;
          animation-delay: inherit;
        }
        
        @keyframes clipboardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes checkItemCycle {
          0%, 100% { opacity: 0; transform: translateX(-10px); }
          25%, 75% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes checkMarkCycle {
          0%, 100% { transform: rotate(45deg) scale(0); }
          25%, 75% { transform: rotate(45deg) scale(1); }
        }
        
        @keyframes lineGrow {
          0%, 100% { transform: scaleX(0); }
          25%, 75% { transform: scaleX(1); }
        }
      `
    }} />
    <div className="inspection-container">
      <div className="clipboard bg-white  border shadow-md">
        <div className="checklist">
          <div className="check-item">
            <div className="check-box border shadow ">
              <div className="check-mark"></div>
            </div>
            <div className="check-line bg-black"></div>
          </div>
          <div className="check-item">
            <div className="check-box border shadow ">
              <div className="check-mark"></div>
            </div>
            <div className="check-line bg-black"></div>
          </div>
          <div className="check-item">
            <div className="check-box border shadow ">
              <div className="check-mark"></div>
            </div>
            <div className="check-line bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const FlippableCreditCard = forwardRef(
  ({ className, cardholderName, cardNumber, expiryDate, cvv, ...props }, ref) => {
    return (
      <>
        <style>{`
          @keyframes cardFlip {
            0%, 10% { 
              transform: rotateY(0deg); 
            }
            50% { 
              transform: rotateY(180deg); 
            }
            60%, 100% { 
              transform: rotateY(360deg); 
            }
          }
          .flippable-card {
            animation: cardFlip 4s ease-in-out infinite;
          }
          .flippable-card:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* The main container uses perspective to create the 3D effect. */}
        <div
          className={cn("group h-14 w-24 [perspective:850px]", className)}
          ref={ref}
          {...props}
        >
          {/* The inner container handles the transform animation. */}
          <div className="flippable-card relative h-full w-full shadow-md border rounded border-gray-200 [transform-style:preserve-3d]">

            {/* --- CARD FRONT --- */}
            <div className="absolute h-full w-full rounded bg-card text-card-foreground [backface-visibility:hidden]">
              <div className="relative flex h-full flex-col justify-between p-[3px]">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <svg
                    className="h-2.25 w-2.25"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                  >
                    <image
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCETamiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCS24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                      alt="Mastercard Logo"
                    />
                  </svg>
                  <p className="font-bold tracking-widest text-[5.5px]">MASTERCARD</p>
                </div>

                {/* Card Number */}
                <div className="text-center font-mono text-[6.5px] tracking-widest leading-[0.8]">
                  {cardNumber}
                </div>

                {/* Card Footer */}
                <div className="flex items-end justify-between space-x-0.5">
                  <div className="text-left flex-1 pr-0.5">
                    <p className="text-[5.5px] font-semibold uppercase opacity-70 leading-[0.8]">Card Holder</p>
                    <p className="font-mono text-[5.5px] font-medium truncate leading-[0.8]">{cardholderName}</p>
                  </div>
                  <div className="text-right flex-1 pl-0.5">
                    <p className="text-[5.5px] font-semibold uppercase opacity-70 leading-[0.8]">Expires</p>
                    <p className="font-mono text-[5.5px] font-medium leading-[0.8]">{expiryDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CARD BACK --- */}
            <div className="absolute h-full w-full rounded bg-card text-card-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="flex h-full flex-col">
                {/* Magnetic Strip */}
                <div className="mt-0.5 h-2.25 w-full bg-neutral-900" />

                {/* CVV Section */}
                <div className="mx-0.5 mt-0.5 flex justify-end">
                  <div className="flex h-2.75 w-full items-center justify-end rounded bg-neutral-200 pr-0.5 ">
                    <p className="font-mono text-[5.5px] text-black ">{cvv}</p>
                  </div>
                </div>

                <p className="self-end pr-0.5 text-[5.5px] font-semibold uppercase opacity-70 leading-[0.8]">CVV</p>

                {/* Signature Logo */}
                <div className="mt-auto p-0.5 text-right">
                  <svg
                    className="h-1.75 w-1.75 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
                    <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

const HistoryIcon = () => (
  <>
    <style dangerouslySetInnerHTML={{
      __html: `
        .history-container {
         
          position: relative;
        }
        
        .document {
        
          border-radius: 8px;
          position: relative;
          transition: var(--transition-smooth);
          animation: documentFloat 3s ease-in-out infinite;
        }
        
        .document::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          background: hsl(var(--border));
          clip-path: polygon(0 0, 100% 100%, 0 100%);
        }
        
        .doc-lines {
          padding: 8px 6px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        
        .doc-line {
          height: 2px;
          border-radius: 1px;
          transform: scaleX(0);
          transform-origin: left;
          animation: lineWrite 4s ease-in-out infinite;
        }
        
        .doc-line:nth-child(1) {
          width: 80%;
          animation-delay: 0s;
        }
        
        .doc-line:nth-child(2) {
          width: 90%;
          animation-delay: 0.5s;
        }
        
        .doc-line:nth-child(3) {
          width: 70%;
          animation-delay: 1s;
        }
        
        .doc-line:nth-child(4) {
          width: 85%;
          animation-delay: 1.5s;
        }
        
        .verified-badge {
          position: absolute;
          bottom: -5px;
          right: -5px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, hsl(var(--success)), hsl(var(--success) / 0.8));
          border: 2px solid hsl(var(--card));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: badgeGlow 2s ease-in-out infinite;
        }
        
        .verified-check {
          width: 10px;
          height: 10px;
          stroke: hsl(var(--success-foreground));
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        
        @keyframes documentFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes lineWrite {
          0%, 100% { transform: scaleX(0); }
          25%, 75% { transform: scaleX(1); }
        }
        
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 5px hsl(var(--success) / 0.5); }
          50% { box-shadow: 0 0 15px hsl(var(--success) / 0.8); }
        }
      `
    }} />
    <div className="history-container relative flex justify-start items-center ">
      <div className="document   border shadow  w-14 h-[4.5rem] ">
        <img src={'/history.png'} className='absolute -top-2.5 -right-2.5 ' height={25} width={25} alt='history'></img>
        <div className="doc-lines">
          <div className="doc-line bg-black"></div>
          <div className="doc-line bg-black"></div>
          <div className="doc-line bg-black"></div>
          <div className="doc-line bg-black"></div>
        </div>
        <div className="doc-lines">
          <div className="doc-line bg-black"></div>
          <div className="doc-line bg-black"></div>
          <div className="doc-line bg-black"></div>
          <div className="doc-line bg-black"></div>
        </div>

        <div className="verified-badge">
          <svg className="verified-check" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      </div>
    </div>
  </>
);

const PricingIcon = () => (
  <>
    <style dangerouslySetInnerHTML={{
      __html: `
        .pricing-container {
          width: 80px;
          height: 60px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .receipt {
          padding: 6px;
          border-radius: 6px;
          position: relative;
          transition: var(--transition-smooth);
          animation: receiptFloat 3s ease-in-out infinite;
        }

        .receipt-header {
          text-align: center;
          font-size: 6px;
          font-weight: bold;
          margin-bottom: 4px;
          color: hsl(var(--foreground));
          animation: headerPulse 2s ease-in-out infinite;
        }

        .receipt-items {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 4px;
        }

        .receipt-item {
          display: flex;
          justify-content: space-between;
          font-size: 4px;
          color: hsl(var(--muted-foreground));
          opacity: 0;
          transform: translateX(-5px);
          animation: itemSlide 4s ease-in-out infinite;
        }

        .receipt-item:nth-child(1) {
          animation-delay: 0s;
        }
        
        .receipt-item:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .receipt-item:nth-child(3) {
          animation-delay: 1s;
        }

        .receipt-total {
          border-top: 1px solid hsl(var(--border));
          padding-top: 2px;
          display: flex;
          justify-content: space-between;
          font-size: 5px;
          font-weight: bold;
          color: hsl(var(--foreground));
          animation: totalHighlight 3s ease-in-out infinite;
        }

        .transparent-stamp {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, hsl(var(--success)), hsl(var(--success) / 0.8));
          color: hsl(var(--success-foreground));
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6px;
          font-weight: bold;
          animation: stampRotate 4s ease-in-out infinite;
        }
        
        @keyframes receiptFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }
        
        @keyframes headerPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes itemSlide {
          0%, 100% { opacity: 0; transform: translateX(-5px); }
          25%, 75% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes totalHighlight {
          0%, 100% { color: hsl(var(--foreground)); }
          50% { color: hsl(var(--success)); }
        }
        
        @keyframes stampRotate {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(10deg); }
        }
      `
    }} />
    <div className="pricing-container">
      <div className="receipt border shadow  w-16 h-[5rem] flex justify-center items-center flex-col">
        <div className="receipt-header">INVOICE</div>
        <div className="receipt-items">
          <div className="receipt-item">
            <span>Base Price</span>
            <span>$25,999</span>
          </div>
          <div className="receipt-item">
            <span>Inspection</span>
            <span>$0</span>
          </div>
          <div className="receipt-item">
            <span>Fees</span>
            <span>$0</span>
          </div>
        </div>
        <div className="receipt-total">
          <span>Total:</span>
          <span>$25,999</span>
        </div>
        <div className=" absolute -top-1 -right-1 flex justify-center items-center w-5 h-5 p-1 border shadow text-white bg-green-500 rounded-full"><div>✓</div></div>
      </div>
    </div>
  </>
);
