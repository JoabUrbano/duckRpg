export default function Input({type, text, name, placeholder, handleOnChange, value}) {
    return(
        <div className="pl-2 text-xl">
            {name && <label className="pr-2" htmlFor={name}>{text}:</label>}
            <input className="text-center text-orange-700"
            type={type}
            text={text}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}
