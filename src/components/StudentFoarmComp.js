import React from 'react';

const studentFoarmComp = () => {
  return (
    <>
    <div style={{backgroundColor:"rgb(3, 78, 68)", color: "white"}}>
    <table>
      <tr>
        <td>FIRST NAME</td>
        <td>
          <input type="text" name="" id="" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>
      <tr>
        <td>LAST NAME</td>
        <td>
          <input type="text" name="" id="" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>
      <tr>
        <td>DATE OF BIRTH</td>
        <td>
          <input type="date" name="" id="" />
        </td>
      </tr>
      <tr>
        <td>EMAIL ID</td>
        <td>
          <input type="email" name="" id="" />
        </td>
      </tr>
      <tr>
        <td>MOBILE NUMBER</td>
        <td>
          <input type="text" name="" id="" />
          (10 digit number)
        </td>
      </tr>
      <tr>
        <td>GENDER</td>
        <td>
          Male
          <input type="radio" name="x" id="" />
          Female <input type="radio" name="x" id="" />
        </td>
      </tr>
      <tr>
        <td>ADDRESS</td>
        <td>
          {" "}
          <textarea name="" id="" cols="49" rows="6" />
        </td>
      </tr>
      <tr>
        <td>CITY</td>
        <td>
          <input type="text" name="" id="" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>
      <tr>
        <td>PIN CODE</td>
        <td>
          <input type="text" name="" id="" /> (6 digit number)
        </td>
      </tr>
      <tr>
        <td>STATE</td>
        <td>
          <input type="text" name="" id="" />
          (max 30 characters a-z and A-Z)
        </td>
      </tr>
      <td>COUNTRY</td>
      <td>
        <input type="text" name="" id="" />
      </td>
      <tr />
      <tr>
        <td>HOBBIES</td>
        <td>
          Drawing <input type="checkbox" name="" id="" />
          Singing
          <input type="checkbox" name="" id="" />
          Dancing
          <input type="checkbox" name="" id="" />
          Sketching
          <input type="checkbox" name="" id="" />
          <br />
          Others
          <input type="checkbox" name="" id="" />
          <input type="text" name="" id="" />
        </td>
      </tr>
      <tr>
        <td>QUALIFICATION</td>
        <tr>
          <td>SI NO</td>
          <td>Examination</td>
          <td>Board</td>
          <td>Percentage</td>
          <td>Year of Passing</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Class X</td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Class XII</td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Graduatio</td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Masters</td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>(10 char max)</td>
          <td>(Upto 2 decimal)</td>
          <td></td>
        </tr>
      </tr>
      <tr>
        <td>
          COURSES <br /> APPLIED FOR
        </td>
        <td>
          BCA
          <input type="radio" name="course" value="" id="" />
          B.Com <input type="radio" name="course" value="" id="" />
          B.Sc
          <input type="radio" name="course" value="" id="" /> B.A
          <input type="radio" name="course" value="" id="" />
        </td>
      </tr>

      <tr>
        <td style= {{padding:"8px", borderRadius: "2px", color: "white", textAlign: "center"}}>
          <button ></button><input type="submit" value="Submit"  />{" "}
          <input type="reset" value="Reset" />
        </td>
        <td>
          <a
            href="/"
            style={{backgroundColor: "white", color: "black", borderRadius: "5px",
               textDecoration: "none", padding:"8px"}}
          >
            {" "}
            Back{" "}
          </a>
        </td>
      </tr>
    </table>
    </div>
  </>
)
}
export default studentFoarmComp;


