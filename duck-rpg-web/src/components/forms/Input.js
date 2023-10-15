function Input({type, text, name, placeholder, handleOnChange, value}) {
    return(
        <div className="pl-2 text-xl">
            {name && <label className="pr-2"htmlFor={name}>{text}:</label>}
            <input
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

export default Input;
