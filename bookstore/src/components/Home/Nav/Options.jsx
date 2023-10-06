import {IoIosArrowDown} from "react-icons/io"

function Options() {
  return (
    <div className='option-container'>
      <table>
        <thead>
          <tr>
          <th>نوجوان</th>
          <th>ادبیات</th>
          <th>روانشناسی</th>
          <th>رمان</th>
          <th>خارجی</th>
          <th>تاریخ</th>
          <th>هنر</th>
          <th>
            
            سایر دسته بندی ها
            <IoIosArrowDown className="arrow-down"/>
           {/* Option Components for سایر دسته بندی ها*/}
          </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Options