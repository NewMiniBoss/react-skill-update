import './CampoTexto.css'
const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    return (
        <div className='CampoTexto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}
export default CampoTexto