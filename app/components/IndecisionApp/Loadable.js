/**
 *
 * Asynchronously loads the component for IndecisionApp
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
