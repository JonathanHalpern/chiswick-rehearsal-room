import CMS from 'netlify-cms';

import { TimeControl, TimePreview } from './time';

import {
  CustomPathImageControl,
  CustomPathImagePreview,
} from './customPathImage';

CMS.registerWidget('time', TimeControl, TimePreview);

CMS.registerWidget(
  'custompathimage',
  CustomPathImageControl,
  CustomPathImagePreview,
);
