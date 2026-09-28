export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <div>
        <label htmlFor="wd-your-form-first-name">First Name</label>
        <input
          id="wd-your-form-first-name"
          type="text"
          placeholder="First name"
          defaultValue="Hung-Ju"
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-last-name">Last Name</label>
        <input
          id="wd-your-form-last-name"
          type="text"
          placeholder="Last name"
          defaultValue="Lin"
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-student-id">Student ID</label>
        <input
          id="wd-your-form-student-id"
          type="text"
          placeholder="001234567"
          defaultValue="001234567"
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-password">Password</label>
        <input
          id="wd-your-form-password"
          type="password"
          placeholder="Enter your password"
          defaultValue="samplePassword123"
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-bio">Why I am taking this course</label>
        <textarea
          id="wd-your-form-bio"
          cols={50}
          rows={5}
          placeholder="I want to build modern web apps and improve my design and development skills."
          defaultValue="I want to build modern web apps and improve my design and development skills."
        />
      </div>

      <div>
        <h5>Class Standing</h5>
        <label>
          <input type="radio" name="class-standing" value="freshman" />
          Freshman
        </label>
        <label>
          <input type="radio" name="class-standing" value="sophomore" />
          Sophomore
        </label>
        <label>
          <input type="radio" name="class-standing" value="junior" />
          Junior
        </label>
        <label>
          <input type="radio" name="class-standing" value="senior" />
          Senior
        </label>
        <label>
          <input type="radio" name="class-standing" value="graduate" defaultChecked />
          Graduate
        </label>
      </div>

      <div>
        <h5>Enrollment Status</h5>
        <label>
          <input type="radio" name="enrollment-status" value="full-time" defaultChecked />
          Full-time
        </label>
        <label>
          <input type="radio" name="enrollment-status" value="part-time" />
          Part-time
        </label>
      </div>

      <div>
        <h5>Interests</h5>
        <label>
          <input type="checkbox" name="interests" value="javascript" defaultChecked />
          JavaScript
        </label>
        <label>
          <input type="checkbox" name="interests" value="react" defaultChecked />
          React
        </label>
        <label>
          <input type="checkbox" name="interests" value="python" />
          Python
        </label>
        <label>
          <input type="checkbox" name="interests" value="ai" />
          AI/ML
        </label>
      </div>

      <div>
        <label htmlFor="wd-your-form-major">Major</label>
        <select id="wd-your-form-major" defaultValue="computer-science">
          <option value="computer-science">Computer Science</option>
          <option value="data-science">Data Science</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="information-science">Information Science</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-your-form-topics">Topics to deepen this term</label>
        <select
          id="wd-your-form-topics"
          multiple
          size={5}
          defaultValue={["nextjs", "nodejs"]}
        >
          <option value="nextjs">Next.js</option>
          <option value="nodejs">Node.js</option>
          <option value="typescript">TypeScript</option>
          <option value="databases">Databases</option>
          <option value="testing">Testing</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-your-form-email">School Email</label>
        <input
          id="wd-your-form-email"
          type="email"
          placeholder="jane@university.edu"
          defaultValue="jane@university.edu"
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-grad-year">Expected Graduation Year</label>
        <input
          id="wd-your-form-grad-year"
          type="number"
          min={2025}
          max={2030}
          defaultValue={2027}
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-birthday">Birthday</label>
        <input
          id="wd-your-form-birthday"
          type="date"
          defaultValue="2000-01-21"
        />
      </div>

      <div>
        <label htmlFor="wd-your-form-excitement">Course excitement level</label>
        <input
          id="wd-your-form-excitement"
          type="range"
          min={0}
          max={10}
          step={1}
          defaultValue={8}
        />
      </div>

      <div>
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}
