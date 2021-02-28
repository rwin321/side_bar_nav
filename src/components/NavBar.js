import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {sideBarData} from './data'
import './NavBar.css'
import {IconContext} from "react-icons";

const NavBar = () => {

	const [sidebar, setSidebar] = useState(false)

	const showSideBar = () => setSidebar(!sidebar)

	return (
		<>
			<IconContext.Provider value = {{color: '#fff'}}>
				<div className = 'navbar'>
					<Link to = '#' className = 'menu-bars'>
						<FaBars onClick = {showSideBar} />
					</Link>
				</div>
				<nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className = 'nav-menu-items' onClick = {showSideBar}>
						<li className = 'navbar-toggle'>
							<Link to = '#' className = 'menu-bars'>
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{sideBarData.map((item, id) => {
							return (
								<li key = {id} className = {item.cName}>
									<Link to = {item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	)
}

export default NavBar