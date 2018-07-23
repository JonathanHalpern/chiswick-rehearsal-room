import CMS from 'netlify-cms';

import { TimeControl, TimePreview } from './time';

CMS.registerWidget('time', TimeControl, TimePreview);
