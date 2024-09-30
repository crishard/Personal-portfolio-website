import { Fade, Zoom } from "react-awesome-reveal"
import heroImage from "../../assets/Group 11 1.png"
import Button from "../Button/Button"
export const HomeSection = () => {
  return (
    <section className="grid grid-cols-2 items-center bg-bg-shade px-10 sm:px-20 gap-5 py-20  max-[900px]:block " id="home">
      <Fade direction='left' duration={2000} triggerOnce={true}>
        <div>
          <p className="font-semibold text-heading-color">Hey, I am John</p>
          <h1 className="text-5xl max-[960px]:text-4xl  max-[600px]:text-3xl max-[960px]:py-2 font-semibold text-heading-color py-4">
            I create <span className="text-primary">product design</span>  and brand experience
          </h1>

          <p className="pb-8 max-[900px]:pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <Button text={"Get In Touch"} />
        </div>
      </Fade>
      <Zoom duration={2000} triggerOnce={true}>
        <img src={heroImage} alt="me" className="max-[900px]:pt-8" />

      </Zoom>

    </section>
  )
}
