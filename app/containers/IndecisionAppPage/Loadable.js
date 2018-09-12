/**
 *
 * Asynchronously loads the component for IndecisionAppPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
