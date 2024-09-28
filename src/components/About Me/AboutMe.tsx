import aboutImage from "../../assets/About Me.png"
export const AboutMe = () => {
    return (
        <section className="px-20 py-20 grid grid-cols-2 items-center gap-16 text-body">
            <img src={aboutImage} alt="me" />
            <div>
                <p className="font-medium text-heading-color">About</p>
                <h2 className="text-5xl font-semibold text-heading-color pt-2.5 pb-4">About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.

                </p>
                <p className="pt-6">
                    Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                </p>
            </div>
        </section>
    )
}