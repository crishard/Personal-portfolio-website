interface IInputContactProps {
    type: string,
    label: string
}

export const InputContact = ({ type, label }: IInputContactProps) => {
    return (
        <div className="">
            <label className="">{label}</label>
            <input type={type} className="border border-primary block rounded-md w-full px-16 py-2 my-1" />
        </div>
    )
}
