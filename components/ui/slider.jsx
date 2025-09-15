import NumberFlow from '@number-flow/react'
import * as RadixSlider from '@radix-ui/react-slider'
import clsx from 'clsx'

export default function Slider({ value, className, ...props }) {
	return (
		<RadixSlider.Root
			{...props}
			value={value}
			className={clsx(className, 'relative flex h-5 group/slider w-[90%] mx-auto touch-none select-none items-center')}
		>
			<RadixSlider.Track className="relative h-[6px] grow rounded-full bg-zinc-100  ">
				<RadixSlider.Range className="absolute h-full rounded-full bg-black  group-hover/slider:bg-[rgb(252,82,18)] " />
			</RadixSlider.Track>
			<RadixSlider.Thumb
				className="relative hover:text-[rgb(252,82,18)]   block h-5 w-5 rounded-[1rem] bg-white shadow-md  hover:scale-[1.15] transition-all duration-300 ease-in-out hover:shadow-lg  hover:ring ring-[rgb(252,82,18)]"
				aria-label="Volume"
			>
				{value?.[0] != null && (
					<NumberFlow
						willChange
						value={value[0]}
						isolate
						continuous
						opacityTiming={{
							duration: 250,
							easing: 'ease-out'
						}}
						transformTiming={{
							easing: `linear(0, 0.0033 0.8%, 0.0263 2.39%, 0.0896 4.77%, 0.4676 15.12%, 0.5688, 0.6553, 0.7274, 0.7862, 0.8336 31.04%, 0.8793, 0.9132 38.99%, 0.9421 43.77%, 0.9642 49.34%, 0.9796 55.71%, 0.9893 62.87%, 0.9952 71.62%, 0.9983 82.76%, 0.9996 99.47%)`,
							duration: 500
						}}
						className="absolute  bottom-6 left-1/2 -translate-x-1/2 text-lg text-black group-hover/slider:text-[rgb(252,82,18)]  font-semibold  "
					/>
				)}
			</RadixSlider.Thumb>
		</RadixSlider.Root>
	)
}

export { Slider }