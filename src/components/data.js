import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const sideBarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Reports',
		path: '/reports',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Products',
		path: '/products',
		icon: <RiIcons.RiProductHuntLine />,
		cName: 'nav-text'
	},
	{
		title: 'Messages',
		path: '/messages',
		icon: <BiIcons.BiMessageDetail />,
		cName: 'nav-text'
	},
	{
		title: 'Support',
		path: '/support',
		icon: <BiIcons.BiSupport />,
		cName: 'nav-text'
	}
]