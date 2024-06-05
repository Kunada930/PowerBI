import React from "react"
import Main from "./components/main";
import Page from "./components/page";
function App() {
  return (
    <div>
      <Main />
      <Page 
        title='PMED'
        imageUrl='blob:https://www.facebook.com/01acc357-e2ce-4e57-a666-80d45d8ec3bb'
        body='The Planning, Monitoring, and Evaluation Division (PMED) is a key organizational unit responsible for overseeing and ensuring the effective implementation of programs and projects.'
      />
    </div>
  );
}

export default App;
