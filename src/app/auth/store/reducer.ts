import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../type/authState.interface";
import { authActions } from "./action";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState : AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, // The name of the action we want to link to this reducer
      state=>({
        ...state,
        isSubmitting:true,
        validationErrors: null
    })), // This shows how the state should change.
    on(authActions.registerSuccess, (state,action)=>({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })),
    on(authActions.registerFaliure, (state,action)=>({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),
    on(authActions.login,
      state=>({
        ...state,
        isSubmitting:true,
        validationErrors: null
    })),
    on(authActions.loginSuccess, (state,action)=>({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })),
    on(authActions.loginFaliure, (state,action)=>({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),
    on(authActions.getCurrentUser,
      state=>({
        ...state,
        isLoading:true
    })),
    on(authActions.getCurrentUserSuccess, (state,action)=>({
      ...state,
      isLoading:false,
      currentUser: action.currentUser
    })),
    on(authActions.getCurrentUserFailure, (state)=>({
      ...state,
      isLoading:false,
      currentUser : null
    })),
    on(routerNavigatedAction, (state)=>({
      ...state,
      validationErrors:null
    }))
  )
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectCurrentUser,
  selectValidationErrors,
  selectIsLoading
} = authFeature;
// NgRX directly creates a selector whenever we use a createfeature() funciton
// Here in order to change the state we are changing isSubmitting from false -> true
// Hence, NgRX directly creates a selector called "selectIsSubmitting"
