import React, {Component} from "react";
import CacheRoute, {CacheSwitch} from "react-router-cache-route";
import {asyncRouter, nomatch} from "choerodon-hap-front-boot";

const GridService = asyncRouter(() => import('./src/gridService'));
const GridXML = asyncRouter(() => import('./src/gridXML'));

export default ({ match }) => (
  <CacheSwitch>
      <CacheRoute exact path={`${match.url}/datasetService`} cacheKey={`${match.url}/datasetService`} component={GridService} />
      <CacheRoute exact path={`${match.url}/datasetXML`} cacheKey={`${match.url}/datasetXML`} component={GridXML} />
      <CacheRoute path="*" component={nomatch} />
  </CacheSwitch>
);

