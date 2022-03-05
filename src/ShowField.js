const ShowField = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section 
            id='showfield'
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? '#000' : '#FFF'
            }}
        >
            <p>{colorValue ? colorValue : "Keine Farbe ausgewählt!"}</p>
            <p>{hexValue ? hexValue : null }</p>
        </section>
    )
}

ShowField.defaultProps = {
    colorValue: "Keine Farbe ausgewählt!"
}

export default ShowField
