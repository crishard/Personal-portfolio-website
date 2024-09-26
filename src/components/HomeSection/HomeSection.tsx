import heroImage from "../../assets/Group 11 1.png"
import Button from "../Button/Button"
export const HomeSection = () => {
  return (
    <section className="grid grid-cols-2 items-center bg-bg-shade gap-3 px-20 text-">
      <div>
        <p className="font-semibold text-heading-color">Hey, I am John</p>
        <h1 className="text-5xl font-semibold text-heading-color py-4">
          I create <span className="text-primary">product design</span>  and brand experience
        </h1>

        <p className="pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <Button text={"Get In Touch"} />
      </div>
      <img src={heroImage} alt="me" />
    </section>
  )
}
