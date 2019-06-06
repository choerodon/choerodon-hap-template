import React, { Component } from 'react';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { asyncRouter, nomatch } from '@choerodon/boot';

const Grid = asyncRouter(() => import('./src/grid'));

export default ({ match }) => (
<CacheSwitch>
<CacheRoute exact path={`${match.url}/grid`} cacheKey={`${match.url}/grid`} component={Grid} />
<CacheRoute path="*" component={nomatch} />
</CacheSwitch>
);
