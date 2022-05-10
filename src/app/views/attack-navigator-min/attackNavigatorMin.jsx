import React, { Component } from "react";

import Navigator from "./attackNavigatorMade";
import NavigatorMin from "./attackNavigationTable";

import style from "./style.css";

class AttackNavigatorMin extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="m-sm-30">
                {/* <Navigator /> */}
                <NavigatorMin />
            </div>
        );
    }
}

export default AttackNavigatorMin;