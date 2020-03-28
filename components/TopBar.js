import React from 'react';

import Button from "./Button"

class TopBar extends React.Component {

    render () {
        return (
            <div style = {styles.topbar}>
                <Button
                    value = 'GraphiQL'
                    onClick_ = {() => {alert(1)}}
                />
            </div>
        )
    }

};

var styles = {
    topbar : {
        fontSize : "13px",
        fontWeight : "bold",
        textAlign : "right",
        padding : "15px"
    }
}

export default TopBar;