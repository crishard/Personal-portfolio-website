import { InputContact } from "./InputContact"

export const Contact = () => {
    return (
        <section className="px-20 py-28 text-body  flex justify-center">
            <div>
            <div className="text-center pb-10">
                <p className="font-semibold text-heading-color">Get In Touch</p>
                <h1 className="text-5xl font-semibold text-heading-color py-5">Contact Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <form action="#" className="">
                <div className="flex gap-6">
                    <InputContact type={"text"} label={"First name"} />
                    <InputContact type={"text"} label={"Last name"} />

                </div>

                <div className="flex gap-6 my-4">
                    <InputContact type={"text"} label={"Email"} />
                    <InputContact type={"text"} label={"Phone number"} />
                </div>



                <label className="">Chose a topic</label>
                <div className="border bg-white border-primary w-fu rounded-md px-6  py-2 my-1 w-full focus:border-primary focus-visible:border-primary pr-10">
                    <select className="w-full bg-white border-none outline-none" >
                        <option value="#">Select one...</option>
                    </select>
                </div>

                <label className=" pt-6 pb-1" htmlFor="">Message</label>
                <textarea name="" rows={6} id="" className="border border-primary block rounded-md w-full  px-4 py-2 my-1 " placeholder="Type your message..."></textarea>

                <div className=" pt-8 text-sm">
                    <input type="checkbox" />
                    <label htmlFor=""> I accept the terms</label>
                </div>
                <div className="flex justify-center pt-10">
                <button className="px-12 py-3.5 bg-primary text-white hover:text-primary hover:bg-white border border-primary rounded transition-colors duration-500">Submit</button>
                </div>

            </form>
            </div>
            
        </section>
    )
}
