export const GetStartedButton = () => (
  <Link
    href="https://cal.com/maheshwar-reddy-20/15min"
    className="group hover:-translate-y-1 relative justify-center items-center flex gap-2 rounded-2xl border-2 shadow-xl border-neutral-950 bg-neutral-900 px-6 py-3 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-neutral-950/50"
  >
    <span className="absolute left-0 top-0 size-full rounded-2xl border-neutral-500 shadow-inner shadow-white/60 group-active:shadow-white/10"></span>
    <span className="absolute left-0 top-0 size-full rotate-180 rounded-2xl border-neutral-300 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
    Get Started
    <svg
      stroke="currentColor"
      fill="currentColor"
      className="transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-2 scale-x-[-1]"
      strokeWidth="9"
      viewBox="0 0 256 256"
      height="25px"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M216.71,102,199.4,72a24,24,0,0,0-43.57,4.52L134.74,40a24,24,0,0,0-43.69,4.9A24,24,0,0,0,51.61,72l5.31,9.19a24,24,0,0,0-25.71,35.47l40,69.32a83.4,83.4,0,0,0,51,39.14,84.45,84.45,0,0,0,21.88,2.9,84,84,0,0,0,72.6-126Zm.67,61.67A76,76,0,0,1,78.16,182l-40-69.32a16,16,0,0,1,27.71-16L85.09,130A4,4,0,0,0,92,126L58.54,68A16,16,0,1,1,86.25,52l31.17,54a4,4,0,1,0,6.93-4L100.1,60a16,16,0,0,1,27.72-16l35,60.63a44,44,0,0,0-7.28,57.61,4,4,0,1,0,6.62-4.49,36,36,0,0,1,8.22-49,4,4,0,0,0,1.07-5.2L164.76,92a16,16,0,1,1,27.71-16l17.31,30A75.52,75.52,0,0,1,217.38,163.65ZM188.12,32.74A4,4,0,0,1,193,29.9,55.65,55.65,0,0,1,227.11,56l.33.58A4,4,0,0,1,226,62a4,4,0,0,1-5.47-1.46l-.33-.57A47.62,47.62,0,0,0,191,37.63,4,4,0,0,1,188.12,32.74ZM77.75,234.48A4,4,0,0,1,74.61,236a4,4,0,0,1-2.47-.86A115.55,115.55,0,0,1,43.53,202a4,4,0,1,1,6.92-4,107.72,107.72,0,0,0,26.64,30.86A4,4,0,0,1,77.75,234.48Z"></path>
    </svg>
  </Link>
);