export default function Tables() {
  return (
    // it has to be wrapped in a fragment because we are returning multiple elements
    <>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th align="center">Topic</th>
              <th align="center">Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td align="center">HTML</td>
              <td align="center">2/3/21</td>
              <td align="right">85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td align="center">CSS</td>
              <td align="center">2/10/21</td>
              <td align="right">90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td align="center">JavaScript</td>
              <td align="center">2/17/21</td>
              <td align="right">95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td align="center">DOM</td>
              <td align="center">2/24/21</td>
              <td align="right">88</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td align="center">JavaScript Events</td>
              <td align="center">3/3/21</td>
              <td align="right">92</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td align="center">React Basics</td>
              <td align="center">3/10/21</td>
              <td align="right">87</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td align="center">React Components</td>
              <td align="center">3/17/21</td>
              <td align="right">94</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td align="center">Props and State</td>
              <td align="center">3/24/21</td>
              <td align="right">91</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td align="center">React Forms</td>
              <td align="center">3/31/21</td>
              <td align="right">89</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td align="center">Routing</td>
              <td align="center">4/7/21</td>
              <td align="right">96</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td align="right">90.7</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-your-table">
        <h4>Class of this smester</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Class Name</th>
              <th align="center">Class Number</th>
              <th align="center">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programing Design Paradign</td>
              <td align="center">CS5010</td>
              <td align="center">A</td>
            </tr>
            <tr>
              <td>Website Development</td>
              <td align="center">CS5610</td>
              <td align="center">A+</td>
            </tr>
            <tr>
              <td>COOP Build Resume</td>
              <td align="center">EXED6000</td>
              <td align="center">A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}