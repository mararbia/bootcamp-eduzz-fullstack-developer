const Button = ({ children, className, onClick }) => {
    return (
        <button 
                type="button" 
                className={className}
                onClick={onClick}
            >
                Adicionar
            </button>
    )
}

export default Button;