import "./button.css"

function Button ({text, type}) {
    return (
        <button className={`Button ${type}`}>
            {text}
        </button>
    );
}

export default Button;