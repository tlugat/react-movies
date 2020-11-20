import React from 'react'
import '../Footer/Footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__elem'>
        <div className='footer__partone'> 
          <ul>
            <li>Terms/conditions</li>
            <li>Cookies policy  </li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='footer__parttwo'>
          <ul>
            <li>Privacy policy </li>
            <li>Notifications</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="footer__buttons"> 
      <button className='footer__button'>Contact Us</button>
      <div className='footer__logo'>
       <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.53945 2.95185H8V0.125185C7.74802 0.0866667 6.88143 0 5.87218 0C3.76635 0 2.32381 1.47185 2.32381 4.17704V6.66667H0V9.82667H2.32381V17.7778H5.1729V9.82741H7.40272L7.75669 6.66741H5.17224V4.49037C5.1729 3.57704 5.39422 2.95185 6.53945 2.95185Z" fill="white"/>
      </svg>
       <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0217 5.88007C19.9748 4.81739 19.8029 4.08681 19.5567 3.45375C19.3027 2.78177 18.9119 2.18015 18.4 1.68002C17.8997 1.17211 17.294 0.777437 16.6297 0.527448C15.9929 0.281275 15.266 0.109427 14.2031 0.0625734C13.1322 0.0117516 12.7923 0 10.0764 0C7.3605 0 7.02056 0.0117516 5.9537 0.0586054C4.89082 0.105459 4.1601 0.27746 3.52707 0.52348C2.85481 0.777437 2.25308 1.16814 1.75285 1.68002C1.24484 2.18015 0.850248 2.78574 0.600059 3.44993C0.353839 4.08681 0.181958 4.81342 0.135095 5.8761C0.0842636 6.94672 0.0725098 7.2866 0.0725098 10.002C0.0725098 12.7174 0.0842636 13.0572 0.131126 14.1239C0.177989 15.1866 0.350023 15.9172 0.596243 16.5502C0.850248 17.2222 1.24484 17.8238 1.75285 18.3239C2.25308 18.8319 2.85878 19.2265 3.5231 19.4765C4.1601 19.7227 4.88685 19.8945 5.94989 19.9414C7.01659 19.9884 7.35669 20 10.0726 20C12.7885 20 13.1284 19.9884 14.1953 19.9414C15.2582 19.8945 15.9889 19.7227 16.6219 19.4765C17.9663 18.9569 19.0292 17.8942 19.5489 16.5502C19.795 15.9133 19.967 15.1866 20.0139 14.1239C20.0608 13.0572 20.0725 12.7174 20.0725 10.002C20.0725 7.2866 20.0685 6.94672 20.0217 5.88007ZM18.2203 14.0458C18.1772 15.0225 18.0131 15.55 17.8764 15.9016C17.5402 16.7729 16.8486 17.4644 15.9771 17.8005C15.6254 17.9372 15.0941 18.1013 14.1209 18.1442C13.0658 18.1912 12.7494 18.2028 10.0804 18.2028C7.41133 18.2028 7.09093 18.1912 6.03965 18.1442C5.0627 18.1013 4.53515 17.9372 4.18345 17.8005C3.74978 17.6402 3.35504 17.3863 3.03463 17.0542C2.70247 16.7299 2.44846 16.3391 2.28819 15.9056C2.15141 15.5539 1.98732 15.0225 1.94442 14.0497C1.89741 12.9948 1.88581 12.6783 1.88581 10.0098C1.88581 7.34124 1.89741 7.02089 1.94442 5.96996C1.98732 4.99321 2.15141 4.46576 2.28819 4.11413C2.44846 3.68039 2.70247 3.28587 3.0386 2.96537C3.36282 2.63327 3.7536 2.37932 4.18742 2.21922C4.53912 2.08247 5.07064 1.91841 6.04361 1.87537C7.09871 1.82852 7.4153 1.81677 10.0842 1.81677C12.7572 1.81677 13.0736 1.82852 14.1249 1.87537C15.1019 1.91841 15.6294 2.08247 15.9811 2.21922C16.4148 2.37932 16.8095 2.63327 17.1299 2.96537C17.4621 3.28968 17.7161 3.68039 17.8764 4.11413C18.0131 4.46576 18.1772 4.99702 18.2203 5.96996C18.2672 7.02486 18.2789 7.34124 18.2789 10.0098C18.2789 12.6783 18.2672 12.9909 18.2203 14.0458Z" fill="white"/>
      <path d="M10.0765 4.86389C7.23951 4.86389 4.93774 7.16503 4.93774 10.0015C4.93774 12.8381 7.23951 15.1392 10.0765 15.1392C12.9136 15.1392 15.2152 12.8381 15.2152 10.0015C15.2152 7.16503 12.9136 4.86389 10.0765 4.86389ZM10.0765 13.3342C8.236 13.3342 6.7431 11.8418 6.7431 10.0015C6.7431 8.1613 8.236 6.66888 10.0765 6.66888C11.9171 6.66888 13.4098 8.1613 13.4098 10.0015C13.4098 11.8418 11.9171 13.3342 10.0765 13.3342Z" fill="white"/>
      <path d="M16.6182 4.66137C16.6182 5.32375 16.0811 5.86082 15.4184 5.86082C14.7559 5.86082 14.2188 5.32375 14.2188 4.66137C14.2188 3.99884 14.7559 3.46191 15.4184 3.46191C16.0811 3.46191 16.6182 3.99884 16.6182 4.66137Z" fill="white"/>
      </svg>
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2.5401C21.1819 2.90149 20.3101 3.14103 19.4012 3.25733C20.3363 2.69518 21.0499 1.81179 21.3854 0.747026C20.5136 1.27041 19.5511 1.6401 18.5254 1.84641C17.6976 0.958872 16.5179 0.40918 15.2309 0.40918C12.7339 0.40918 10.7236 2.4501 10.7236 4.9521C10.7236 5.3121 10.7539 5.65826 10.8281 5.98779C7.0785 5.80364 3.76063 3.99395 1.53175 1.23718C1.14262 1.91703 0.914375 2.69518 0.914375 3.53287C0.914375 5.1058 1.71875 6.5001 2.91775 7.30733C2.19313 7.29349 1.48225 7.08164 0.88 6.74795C0.88 6.7618 0.88 6.7798 0.88 6.79779C0.88 9.00487 2.44337 10.8381 4.4935 11.2604C4.12637 11.3615 3.72625 11.4099 3.311 11.4099C3.02225 11.4099 2.73075 11.3933 2.45712 11.3324C3.0415 13.131 4.69975 14.4533 6.6715 14.4963C5.137 15.705 3.18863 16.4333 1.07938 16.4333C0.7095 16.4333 0.35475 16.4167 0 16.371C1.99787 17.6684 4.36562 18.4092 6.919 18.4092C15.2185 18.4092 19.756 11.4861 19.756 5.48518C19.756 5.28441 19.7491 5.09056 19.7395 4.8981C20.6346 4.25841 21.3867 3.45949 22 2.5401Z" fill="white"/>
      </svg>
      </div>
      </div>
    </div>
  )
}

export default Footer
