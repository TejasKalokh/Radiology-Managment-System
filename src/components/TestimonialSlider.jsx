import { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import classNames from "classnames";

const testimonialList = [
	[
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "Akshay Kumar",
			rating: 3.5,
			content:
				'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
		},
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			name: "Arjun Kapur",
			rating: 4.5,
			content:
				'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
		},
	],
	[
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			name: "Raima Sen",
			rating: 5,
			content:
				'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
		},
		{
			photo:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "Akshay Kumar",
			rating: 3.5,
			content:
				'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
		},
	],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("flex flex-wrap gap-0.5", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-[22px] text-yellow-500"
						/>
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							className="text-[22px] text-yellow-500"
						/>
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-[22px] text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
	const { rating, content, photo, name } = item;
	return (
		<div className="bg-white text-black shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
			<div className="mt-4">
				<div className="flex justify-between items-center mb-6">
					<div className="flex items-center">
						<div className="mr-2">
							<img
								src={photo}
								alt={name}
								className="max-w-full h-auto rounded-full border"
								width="47"
							/>
						</div>
						<div>
							<h5 className="text-xl break-all font-medium">{name}</h5>
						</div>
					</div>
					<Rating rating={rating} showLabel={false} />
				</div>
				<p className="leading-[1.8] opacity-80 mb-6">{content}</p>
			</div>
		</div>
	);
};
TestimonialItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const TestimonialSlider = () => {
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex >= testimonialList.length - 1 ? 0 : prevIndex + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="py-14 md:py-24 bg-white text-black">
			<div className="container px-4 mx-auto relative text-center">
				<h2 className="text-3xl font-bold mb-6">What Our Patients Say About Us!</h2>
				<p className="text-lg opacity-80 mb-12">"Because your words matter—see how our commitment to accuracy, technology, and care has built trust with our patients."</p>
				<div className="grid grid-cols-2 gap-6 mt-12">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-2 md:col-span-1" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
				</div>
				<div className="flex justify-center mt-6 space-x-4">
					<button onClick={() => handleControl("prev")} className="p-2 rounded-full text-white hover:opacity-80 transition" style={{ backgroundColor: "rgb(37 99 235 / var(--tw-bg-opacity, 1))" }}>⬅</button>
					<button onClick={() => handleControl("next")} className="p-2 rounded-full text-white hover:opacity-80 transition" style={{ backgroundColor: "rgb(37 99 235 / var(--tw-bg-opacity, 1))" }}>➡</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSlider;
