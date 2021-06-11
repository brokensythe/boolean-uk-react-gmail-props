// filteredEmails
// toggleRead
// toggleStar

import "../styling/main.css"
import Emails from "./mainComponents/Emails";

function Main(props) {
    return <main className="emails">
        <Emails filteredEmails={props.filteredEmails} toggleRead={props.toggleRead} toggleStar={props.toggleStar} />
  </main>
}


export default Main