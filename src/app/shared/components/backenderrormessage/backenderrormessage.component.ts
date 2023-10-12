import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../type/backendErrors.interface';

@Component({
  selector: 'app-backenderrormessage',
  templateUrl: './backenderrormessage.component.html'
})
export class BackenderrormessageComponent implements OnInit{
  @Input() backenderrors: BackendErrorsInterface = {};
  errorMessages : string[] = [];
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backenderrors).map((name:string)=>{
      const messages = this.backenderrors[name].join(' ')
      return `${name} ${messages}`
    })
  }
}
/**
 *  1. `this.errorMessages = ...`: This code is assigning a new value to the `errorMessages` property of the
 * current object (`this`). It is creating an array of error messages and assigning it to
 * `this.errorMessages`.
 * 2. `Object.keys(this.backenderrors)`: This part of the code retrieves an array of all the property
 * names (keys) of the `this.backenderrors` object. It assumes that `this.backenderrors` is an object where
 * each property represents a type of error, and the value associated with each property is an array of
 * error messages for that type.
 * 3. `.map((name: string) => { ... })`: The `map` function is called on the array of keys returned by
 * `Object.keys`. For each key (represented as `name`), a function is applied.
 * 4. Inside the `map` function:
   - `const messages = this.backenderrors[name].join(' ')`: This line takes the array of error messages
   associated with the current `name` and joins them into a single string with spaces between each message.
   It assumes that each error message is stored as a string in the `this.backenderrors` object.
   - `return `${name} ${messages}``: This line constructs a string that combines the `name` of the error
   type and the joined error messages with a space in between. This string represents one error message for
   the current error type.
  5. Finally, the `map` function creates an array of these constructed error messages, and that array is assigned to `this.errorMessages`. So, after this code is executed, `this.errorMessages` will be an array of error messages based on the contents of `this.backenderrors`.
  For example, if `this.backenderrors` looked something like this:

  ```javascript
  {
    "Validation": ["Field is required.", "Invalid email format."],
    "Server": ["Internal server error."]
  }
  ```

  After running the provided code, `this.errorMessages` would become an array like this:

  ```javascript
  [
    "Validation Field is required. Invalid email format.",
    "Server Internal server error."
  ]
  ```

  These error messages are constructed by combining the error type (`Validation` or `Server`) with the
  associated error messages for each type.
**/
