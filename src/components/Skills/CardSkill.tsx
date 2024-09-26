interface ICardSkillProps {
    text: string,
    img: string,
    title: string
}

export const CardSkill = ({ img, text, title }: ICardSkillProps) => {
    return (
        <div className="bg-bg-shade px-4 py-6 drop-shadow-sm hover:shadow-primary rounded-md">
            <img src={img} alt="skill" className="h-20 w-20" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{text}</p>
        </div>
    )
}
