import React, {Component} from "react";
import CacheRoute, {CacheSwitch} from "react-router-cache-route";
import {asyncRouter, nomatch} from "choerodon-hap-front-boot";


const GRID = asyncRouter(() => import('./src/main/grid'));
const GRIDXML = asyncRouter(() => import('./src/main/gridXML'));

export default class RouteIndex extends Component {
    render() {
        const {match} = this.props;
        return (
            <CacheSwitch>
                <CacheRoute exact path={`${match.url}/main/grid`} component={GRID}/>
                <CacheRoute exact path={`${match.url}/main/gridXML`} component={GRIDXML}/>
            </CacheSwitch>
        );
    }
}
