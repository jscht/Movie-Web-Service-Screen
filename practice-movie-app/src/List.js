import PropTypes from "prop-types";
import Button from "./Button";

function List(props) {
    console.log(props)
    return (
        <li key={props.index}>
           {props.item}&emsp;
           <Button onClicked={props.del} />
        </li>
    );
}

List.propTypes = {
    item: PropTypes.string.isRequired,
};

export default List