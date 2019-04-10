import * as Pizzas from './pizzas.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as PizzaReducers from './pizzas.reducers';
import { createTemplateData } from '@angular/core/src/view/refs';

export interface ProductsState {
  pizzas: Pizzas.PizzaState,
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: Pizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzaState, PizzaReducers.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id)]);
});
export const getPizzasLoaded = createSelector(getPizzaState, PizzaReducers.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, PizzaReducers.getPizzasLoading);
