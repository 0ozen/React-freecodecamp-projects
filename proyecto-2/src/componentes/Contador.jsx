import '../estilos/contador.css';

export function Contador({ numClick }) {
    return (
        <div className="contador">
            {numClick}
        </div>
    )
}