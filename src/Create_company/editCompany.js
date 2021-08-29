import React from 'react'

function EditCompany() {
    return (
        <div>
         <div id="wrapper">
  <p><a className="button" href="#popup1">Click Me</a></p>
	<p><a className="button" href="#popup2">Click Me Too</a></p>
</div>

<div id="popup1" className="overlay">
	<div className="popup">
		<h2>Info box</h2>
		<a className="close" href="#">&times;</a>
		<div className="content">
			<p>This is done totally without JavaScript. Just HTML and CSS.</p>
		</div>
	</div>
</div>   
        </div>
    )
}

export default EditCompany
