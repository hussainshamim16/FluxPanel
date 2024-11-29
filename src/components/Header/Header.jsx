import React from 'react'
import logo from "../"

const Header = () => {
  return (
 <>
<div className="navbar bg-base-100 px-7 py-7">
  <div className="flex-1">
    {/* <a className="btn btn-ghost text-xl"><img src="" alt="" /></a> */}
    <img src="./" alt="" srcset="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
 </>
  )
}

export default Header