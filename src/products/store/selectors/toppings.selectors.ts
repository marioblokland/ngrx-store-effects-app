import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingState,
  fromToppings.getToppingsEntities
);

export const getSelectedToppings = createSelector(
  getToppingState, fromToppings.getSelectedToppings
);

export const getAllToppings = createSelector(getToppingEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id)]);
});

export const getToppingsLoaded = createSelector(getToppingState, fromToppings.getToppingsLoaded);
export const getToppingsLoading = createSelector(getToppingState, fromToppings.getToppingsLoading);

