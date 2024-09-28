import { LuMoveUpRight } from "react-icons/lu";

interface ICardPortfolioProps {
    img: string,
    title: string,
    text: string
}
export const CardPortfolio = ({ img, title, text }: ICardPortfolioProps) => {
    return (
        <div className="shadow-md shadow-gray-300 rounded-sm">
            <img src={img} alt="portfolio" className="" />
            <div className="px-3 py-5">
                <h3 className="font-semibold text-xl pb-3">{title}</h3>
                <p>{text}</p>

                <button className="flex items-center gap-2 text-heading-color font-medium border-b-[1px] pt-4 border-primary">View In Dribble <LuMoveUpRight /></button>
            </div>

        </div>
    )
}
