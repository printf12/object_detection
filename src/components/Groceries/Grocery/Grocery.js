import React from 'react';

const Grocery = (props) => {

    return (
        <tr onClick={props.click}>
            <td>{props.name}</td>
            <td>{props.EISSTERN}</td>
            <td>{props.SEV_INF}</td>

        </tr>
    )
}

export default Grocery
