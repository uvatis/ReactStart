/**
 *
 * @param {String} value
 * @param {String} placeholder
 * @param {(v: boolean) => void} onChange
 * @returns {*}
 * @constructor
 */
// eslint-disable-next-line react/prop-types
export function Input ({value, placeholder, onChange}) {
    return <div className="m-3">
        <input
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>

}