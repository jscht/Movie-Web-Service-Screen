function Button(props) {
    return (
        <button
            onClick={props.onClicked}
        >
            ❌
        </button>
    );
}

export default Button