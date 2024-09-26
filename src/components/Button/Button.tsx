interface IButtonProps{
    text: string
}

const Button = ({text}: IButtonProps) => {
    return (
        <button className="px-4 py-3 bg-primary text-white hover:text-primary hover:bg-white border border-primary rounded">{text}</button>
    )
}

export default Button