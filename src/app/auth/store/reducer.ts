import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../type/authState.interface";
import { authActions } from "./action";

const initialState : AuthStateInterface = {
  isSubmitting: false
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, // The name of the action we want to link to this reducer
      state=>({...state, isSubmitting:true}) // This shows how the state should change.
    )
  )
});

export const {name: authFeatureKey, reducer: authReducer, selectIsSubmitting} = authFeature;
// NgRX directly creates a selector whenever we use a createfeature() funciton
// Here in order to change the state we are changing isSubmitting from false -> true
// Hence, NgRX directly creates a selector called "selectIsSubmitting"
