
const BtnRemove = ({id, onRemove}) => {
    return (
        <button className="remove" onClick={() => onRemove(id)}>Remove</button>
    )
}
export default BtnRemove
