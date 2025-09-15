export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br></br>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={60} rows={10}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <td></td>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} type = "number"/>
          </td>
        </tr>
	<td><br></br></td>
        
       <tr>
	  <td align="right" valign="top">
		<label  htmlFor="wd-group">Assignment Group</label>
	  </td>
	<td>
		<select id="wd-group">
			<label  htmlFor="wd-group">Assignment Group</label>
	  		<option value="QUIZZES">QUIZZES</option>
	  		<option selected value="ASSIGNMENTS">
			ASSIGNMENTS</option>
		</select>
	</td><br></br>
	</tr>
	<tr><br></br></tr>
	<tr>
	  <td align="right" valign="top">
		<label  htmlFor="wd-display-grade-as">Display Grade as</label>
	  </td>
	<td>
		<select id="wd-display-grade-as">
			<label  htmlFor="wd-display-grade-as">Assignment Group</label>
	  		<option value="Points">Points</option>
	  		<option selected value="Percentage">
			Percentage</option>
		</select>
	</td><br></br>
	</tr>
	<tr><br></br></tr>
	<tr>
	  <td align="right" valign="top">
		<label  htmlFor="wd-submission-type">Submission Type</label>
	  </td>
	<td>
		<select id="wd-submission-type">
			<label  htmlFor="wd-submission-type">Submission Type</label>
	  		<option selected value="Online">
			Online</option>
		</select>
	</td><br />
	</tr>
	<tr>
	  <td align="right" valign="top">
	  </td>
	  <td>
		<label>Online Entry Options</label><br/>

		<input type="checkbox" name="check-option" id="wd-text-entry"/>
		<label htmlFor="wd-text-entry">Text Entry</label><br/>

		<input type="checkbox" name="check-option" id="wd-website-url"/>
		<label htmlFor="wd-website-url">Website URL</label><br/>

		<input type="checkbox" name="check-option" id="wd-media-recordings"/>
		<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

		<input type="checkbox" name="check-option" id="wd-student-annotation"/>
		<label htmlFor="wd-student-annotation">Student Annotation</label><br />

		<input type="checkbox" name="check-option" id="wd-file-upload"/>
		<label htmlFor="wd-file-upload">File Uploads</label>
	  </td>
	</tr>
	<tr><br /></tr>
	<tr>
		<td align="right" valign="top">
		Assign &nbsp;
		<label htmlFor="wd-assign-to">Assign to</label>
		</td>
		<td>
		<br></br>
		<td align="right" valign="top"></td>
		<input id="wd-assign-to" defaultValue={"Everyone"} />
		</td>
	</tr>
	<br />
	<tr>
		<td align="right" valign="top">
			<label htmlFor="wd-due-date"> Due </label>
			<br />
		</td>
		<td>
			<br />
			<input type="date"
			defaultValue="2024-05-13"
			id="wd-due-date"/><br/>
		</td>
	</tr>
	<tr>
		
		<td align="right" valign="top">
			<label htmlFor="wd-available-from"> Available From </label>
		</td>
		<td>
			<br />
			<input type="date"
			defaultValue="2024-05-06"
			id="wd-available-from"/><br/>
		</td>
		<td>
			<label htmlFor="wd-available-until"> Until </label>
			<br />
			<input type="date"
			defaultValue="2024-05-20"
			id="wd-available-until"/><br/>
		</td>
	</tr>

      </table>
    </div>
);}