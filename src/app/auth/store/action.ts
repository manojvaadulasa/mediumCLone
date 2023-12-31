import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../type/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/type/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/type/backendErrors.interface";
import { LoginRequestInterface } from "../type/loginRequest.interface";

export const authActions = createActionGroup({
  source: 'auth', // This is the same as writing the prefix [Auth] for each of the action
  events: {
    Register: props<{request: RegisterRequestInterface}>(), // Here Register is the same as the suffix
    // Register in '[Auth] Register' the first one and the name of the action register=createAction()
    'Register success': props<{currentUser: CurrentUserInterface}>(),
    'Register faliure': props<{errors: BackendErrorsInterface}>(),

    Login: props<{request: LoginRequestInterface}>(),
    'Login success': props<{currentUser: CurrentUserInterface}>(),
    'Login faliure': props<{errors: BackendErrorsInterface}>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{currentUser: CurrentUserInterface}>(),
    'Get current user failure': emptyProps()
  }
});


/** When we want to create 3 different action we could do it like this too. Or we can combine them and do it as well.
  export const register = createAction(
    '[Auth] Register', // This is the name of the action.
    props<{request: RegisterRequestInterface}>() // Whenever, we call this action we should get an argument
    // of the type "RegisterRequestInterface"
  );
  export const registerSuccess = createAction(
    '[Auth] Register Success', // This is the name of the action.
    props<{request: RegisterRequestInterface}>() // Whenever, we call this action we should get an argument
    // of the type "RegisterRequestInterface"
  );
  export const registerFailure = createAction(
    '[Auth] Register Failure', // This is the name of the action.
    props<{request: RegisterRequestInterface}>() // Whenever, we call this action we should get an argument
    // of the type "RegisterRequestInterface"
  );
**/
