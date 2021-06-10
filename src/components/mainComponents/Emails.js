// filteredEmails
// toggleRead

import Email from "./emailsComponents/Email.js"

// toggleStar
function Emails(props) {
    return  <ul>
    {props.filteredEmails.map((email, index) => (
      <Email toggleRead={props.toggleRead} toggleStar={props.toggleStar} email={email} index={index} />
    ))}
  </ul>
}

export default Emails 