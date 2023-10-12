import { BackendErrorsInterface } from "src/app/shared/type/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/type/currentUser.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
