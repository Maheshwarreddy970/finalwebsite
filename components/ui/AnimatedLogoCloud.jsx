import Image from "next/image";

const logos = [
  { id: "logo-1", name: "AlbaCars", url: "/main/albacars-logo.avif" },
  { id: "logo-2", name: "CarzillaMotors", url: "/main/449211480_755180400025517_911900011317799563_n.jpg" },
  { id: "logo-3", name: "F1rstMotors", url: "/main/logo-dark.svg" },
  { id: "logo-4", name: "VIP Motors", url: "/main/logo-white.png.png" },
  { id: "logo-5", name: "Tesla", url: "/Tesla.png" },
  { id: "logo-6", name: "Audi", url: "/Audi.png" },
  { id: "logo-7", name: "BMW", url: "/BMW.png" },
  { id: "logo-8", name: "Mercedes", url: "/Mercedes Benz.png" },
  { id: "logo-9", name: "Toyota", url: "/Toyota.png" },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full md:py-5">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div
          className="group relative flex gap-14 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 10%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-4"
                >
                  {logos.map((logo) => {
                    if (!logo.url) {
                      console.warn(`Skipping logo "${logo.name}" due to empty src`);
                      return null; // Skip rendering if src is empty
                    }
                    return (
                      <Image
                        key={logo.id}
                        src={logo.url}
                        height={100}
                        width={100}
                        className="h-12 w-28 md:h-14 md:w-36 px-2 object-contain"
                        alt={`${logo.name} logo`}
                      />
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;