/**
 *
 * @param {boolean} checked
 * @param {(v: boolean) => void}) onChange
 * @param {String} label
 * @returns {String} id
 * @constructor
 */
// eslint-disable-next-line react/prop-types
export function CheckBox ({checked, onChange, label, id}) {
    return <div className="form-check">
        <input checked={checked}
               id={id}
               type="checkbox"
               onChange={(e) => onChange(e.target.checked)}
               className="form-check-input"
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}