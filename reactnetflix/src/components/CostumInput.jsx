function CostumInput({ label, text, handleChange }) {


    return (
        <label>
            {label}
            {' '}
            <input value={text}
                onChange={handleChange}
            />
        </label>
    )
}


export default CostumInput