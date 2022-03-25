export declare type InfoMessages = string[];

export const INSTRUCTIONS_MSGS: { [index: number]: InfoMessages } = {
  0: [
    "<br>New component creation with UI elements which trigger <b>http request to server</b> and displays the returned value",
    "<br><b>Implementation steps:</b>",
    "1. Create a new component inside the current tab",
    "2. Add UI elements to new component: Button, Input (number) and a display element to your choosing",
    "3. Add input and output properties to the new component",
    "4. Create a POST request method inside <b>RestService</b> (use the given url)",
    "5. Use the existing models in <i>app-data</i> file in <i>models</i> folder to support the data flow",
    "5. Implement the existing <i>onSendBtnClick</i> method for button click event inside <i>HomeComponenet</i>",
    "6. The new handler needs to use the new POST request implemented in section 4 to call the server",
    "7. Value of the Returned object from the server should be dispalyed in your new display element inside the new componenet",
  ],
  1: [
    "<br><b>Use created component and http post request from the first tab to implement a <b>rudux</b> pattern flow",
    "<br><b>Implementation steps:</b>",
    "1. Use the existing actions (<i>PostData,PostDataSuccess</i>) in the <i>actions</i> folder",
    "2. Implement existing <i>onSendBtnClickRedux</i> method for button click event inside <i>HomeComponenet</i>",
    "3. Create a new effect in <i>AppEffects</i> existing class",
    "4. New created effect should trigger http POST request",
    "5. Returned model from the server should be updated in the existing <b>store</b>",
    "6. Add suitable case in existing <i>appReducer</i> to be able to update the store",
    "7. Create subscription to data object in the store, use <i>getDisplayData</i> selector",
    "8. Display the new updated value from the store (server returned object) in new component display element",
  ],
  2: [
    "<br><b>Use the created component in the first tab and display it dynamically</b>",
    "<br><b>Implementation steps:</b>",
    "1. Implement <i>createComponent</i> method in <i>HomeComponenet</i>",
    "2. Use existing <i>Create</i> button to trigger the <b>dynamic component creation</b>",
  ],
  3: [],
};
