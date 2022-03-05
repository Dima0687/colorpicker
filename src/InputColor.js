import colorNames from "colornames";

const InputColor = ({ 
    colorValue, 
    setColorValue, 
    setHexValue,
    isDarkText,
    setIsDarkText 
}) => {
    return (
        <form id="colorForm" onSubmit={ e => e.preventDefault() }>
            <label>Wähle eine Farbe!</label>
            <input 
                autoFocus
                type='text'
                id='colorPicker'
                placeholder='Gib die gewünschte Farbe ein!'   
                required
                value={colorValue}
                onChange={e => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}   
            />

            <button
                type='button'
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Textfarbe ändern!
            </button>
        </form>
    )
}

export default InputColor
