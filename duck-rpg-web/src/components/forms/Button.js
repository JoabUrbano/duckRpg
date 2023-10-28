function Button({type, text, onClick, id}) {
    return(
        <div className="
            text-gray-200
            text-xl
            text-center
            hover:text-orange-500
            bg-cor-barra
            hover:bg-cor-barra-clara
            active:bg-slate-900
            h-10
            w-24
            rounded-xl
            p-1"
            >
        <button type={type} onClick={onClick} id={id}>{text}</button>
        </div>
    )
}

export default Button;
