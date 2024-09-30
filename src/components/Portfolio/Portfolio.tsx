import { Fade, Zoom } from "react-awesome-reveal";
import { FaDribbble } from "react-icons/fa";
import img2 from "../../assets/Placeholder/Image-1.png";
import img3 from "../../assets/Placeholder/Image-2.png";
import img1 from "../../assets/Placeholder/Image.png";
import { CardPortfolio } from "./CardPortfolio";

export const Portfolio = () => {
  return (
    <article className="px-10 sm:px-20" id="portfolio">
      <div className="flex justify-between py-16 items-center">
        <div>
          <Zoom triggerOnce={true} duration={2000}>
            <p className="font-semibold text-heading-color pb-4 max-[960px]:pb-2">Recent Projects</p>
            <h1 className="text-5xl font-semibold text-heading-color max-[960px]:text-4xl  max-[600px]:text-3xl">My Portfolio</h1>
          </Zoom>

        </div>

        <Fade direction="right" cascade triggerOnce={true} duration={2000}>
          <button className="flex items-center gap-2  bg-dribble text-white px-4 py-3 rounded-lg"><FaDribbble className="text-3xl" /> <span className="max-[480px]:hidden">Visit My Dribble</span></button>
        </Fade>

      </div>
      <div className="grid grid-cols-3 gap-6 pt-6 max-[870px]:grid-cols-2 max-[720px]:grid-cols-1">
        <Fade direction="left" cascade triggerOnce={true} duration={1000}>
          <CardPortfolio img={img1} title={"Ahuse"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} />
          <CardPortfolio img={img2} title={"App Dashboard"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} />
          <CardPortfolio img={img3} title={"Easy Rent"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."} />
        </Fade>

      </div>
    </article>
  )
}
