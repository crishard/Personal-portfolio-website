import { Fade, Zoom } from "react-awesome-reveal"
import CardTestimonials from "./CardTestimonials"

const Testimonials = () => {
    return (
        <section className="px-10 sm:px-20 bg-bg-shade py-32" id="testimonials">

            <div>
                <Zoom triggerOnce={true} duration={2000}>
                    <p className="font-semibold text-heading-color pb-4">Clients Feedback</p>
                    <h1 className="text-5xl font-semibold text-heading-color max-[960px]:text-4xl  max-[600px]:text-3xl">Customer testimonials</h1>
                </Zoom>

            </div>

            <div className="grid grid-cols-3 gap-7 sm:pt-20 pt-10 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                <Fade direction="left" cascade triggerOnce={true} duration={1000}>
                    <CardTestimonials img={"https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?t=st=1727454589~exp=1727458189~hmac=c436a4ae15592fa7818fe82f13e6d31125d628bb520354e857f6d2f59652c9f6&w=740"} name={"Dianne Russell"} company={"Starbucks"} />
                    <CardTestimonials img={"https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?t=st=1727454589~exp=1727458189~hmac=c436a4ae15592fa7818fe82f13e6d31125d628bb520354e857f6d2f59652c9f6&w=740"} name={"Kristin Watson"} company={"Louis Vuitton"} />
                    <CardTestimonials img={"https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?t=st=1727454589~exp=1727458189~hmac=c436a4ae15592fa7818fe82f13e6d31125d628bb520354e857f6d2f59652c9f6&w=740"} name={"Kathryn Murphy"} company={"McDonald's"} />
                </Fade>

            </div>
        </section>
    )
}

export default Testimonials