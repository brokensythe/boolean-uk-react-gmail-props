        // currentTab
        // setCurrentTab
        // unreadEmails
        // starredEmails
        // hideRead
        // setHideRead
import "../styling/left-menu.css"

function LeftMenu(props) {
    return  <nav className="left-menu">
    <ul className="inbox-list">
      <li
        key="inbox"
        className={`item ${props.currentTab === 'inbox' ? 'active' : ''}`}
        onClick={() => props.setCurrentTab('inbox')}
      >
        <span className="label">Inbox</span>
        <span className="count">{props.unreadEmails.length}</span>
      </li>
      <li
        key="starred"
        className={`item ${props.currentTab === 'starred' ? 'active' : ''}`}
        onClick={() => props.setCurrentTab('starred')}
      >
        <span className="label">Starred</span>
        <span className="count">{props.starredEmails.length}</span>
      </li>

      <li key="hide-read" className="item toggle">
        <label htmlFor="hide-read">Hide read</label>
        <input
          id="hide-read"
          type="checkbox"
          checked={props.hideRead}
          onChange={e => props.setHideRead(e.target.checked)}
        />
      </li>
    </ul>
  </nav>
}


export default LeftMenu