// - Break down App.js into components
//     - You should have an Emails component that renders a list
//     - You should have an Email component that is a list item
// - Break down app.css into stylesheets
// - Pass through the relevant data as props to each component
// - Pass through the relevant functions as props to each component
// - Get the search input to work in the header section so that users can search for emails by title

import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import Main from './components/Main'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header emails={emails} setEmails={setEmails} initialEmails={initialEmails} />
      <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} hideRead={hideRead} setHideRead={setHideRead} />
      <Main filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} />
    </div>
  )
}

export default App
