import React from 'react'


function Announcements(props) {
  return (
    <div> 
        <p className="announce">{props.announce}</p>
        <a className="link-announce" href={props.linkannounce}target="_blank"a>{props.linkname}</a>

    </div>
  )
}

export default Announcements