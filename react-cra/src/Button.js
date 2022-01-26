import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props){
    //console.log(props)
    return(
        <button 
            className={styles.btn}
            onClick={props.click}
        >
            {props.showing ? "Hide" : props.text}
        </button>
    )
}

Button.defaultProps = { // default 값을 주는 방법
    // text: 'xx'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button