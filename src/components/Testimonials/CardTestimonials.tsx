import { FaStar } from "react-icons/fa";

interface ICardTestimonialsProps {
    img: string,
    name: string,
    company: string,
}

const CardTestimonials = ({ img, name, company }: ICardTestimonialsProps) => {
    return (
        <div className="border border-[#006B6A] px-7 py-7 rounded-md">
            <div className="flex text-[#006B6A] gap-2 text-2xl pb-8">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."</p>

            <div className="flex items-center gap-3  pt-10">
                <img src={img} alt="person" className="rounded-full h-14 w-14" />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p>{company}</p>
                </div>

            </div>
        </div>
    )
}

export default CardTestimonials