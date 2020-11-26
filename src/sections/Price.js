import React from 'react';
import NavigationBar from '../components/NavigationBar.js';

export default function Price(props) {
    return <React.Fragment>
        <NavigationBar/>
        <div style={style_Navigation_Shadow}></div>
        <embed style={priceWrapper} src={require("../assets/Price.svg")} type="image/svg+xml"></embed>
    </React.Fragment>
}

const style_Navigation_Shadow = {
    height: "96px"
}

const priceWrapper = {
    width: "100%"
}
