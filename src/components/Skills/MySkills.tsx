import img2 from "../../assets/Branding & Logo.png"
import img1 from "../../assets/Strategy & Direction.png"
import img3 from "../../assets/UI & UX Design.png"
import img4 from "../../assets/Webflow Development.png"
import { CardSkill } from "./CardSkill"

export const MySkills = () => {
    return (
        <article className="px-10 sm:px-20 text-body py-20">
            <p className="font-semibold text-heading-color">My Skills</p>
            <h2 className="text-5xl font-semibold text-heading-color">My Expertise</h2>

            <div className="grid grid-cols-4  max-[1010px]:grid-cols-3 justify-between max-[860px]:grid-cols-2 gap-4 pt-16 max-[560px]:grid-cols-1">
                <CardSkill text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} img={img1} title={"Strategy & Direction"} />
                <CardSkill text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} img={img2} title={"Branding & Logo"} />
                <CardSkill text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} img={img3} title={"UI & UX Design"} />
                <CardSkill text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."} img={img4} title={"Webflow Development"} />
            </div>
        </article>
    )
}
