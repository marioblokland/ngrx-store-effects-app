import * as Pizzas from './pizzas.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as PizzaReducers from './pizzas.reducers';

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

export const getAllPizzas = createSelector(getPizzaState, PizzaReducers.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, PizzaReducers.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, PizzaReducers.getPizzasLoading);
