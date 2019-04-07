import * as Pizzas from './pizzas.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface ProductsState {
  pizzas: Pizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: Pizzas.reducer,
};
