// 

import {HiChatBubbleLeft, HiUser,HiChartPie,HiFolder,HiShoppingCart,HiHeart,HiCog6Tooth} from "react-icons/hi2"

import {  FaStore, FaMale } from 'react-icons/fa'
import { MdNotifications, MdRestaurantMenu } from 'react-icons/md'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { HiSquares2X2 } from 'react-icons/hi2'
import { RiCustomerService2Fill } from 'react-icons/ri'

export const data = [{
        id: "dashboard",
        title: "Dashboard",
        icon: HiSquares2X2,

        hover: "Dashboard",
        path:"/dashboard/admin"

    },
    {
        id: "orders",
        title: "Orders",
        icon: HiOutlineNewspaper,

        hover: "Orders",
        path:"/dashboard/admin/orders"

    },
    {
        id: "workers",
        title: "Workers",
        icon: FaMale,

        hover: "Workers",
        path:"/dashboard/admin/workers"

    },
    {
        id: "menu",
        title: "Menu",
        icon:MdRestaurantMenu ,

        hover: "Menu",
        path:"/dashboard/admin/menu"

    },
    {
        id: "store",
        title: "Store",
        icon: FaStore,

        hover: "Store",
        path:"/dashboard/admin/store"

    },
    {
        id: "services",
        title: "Services",
        icon: RiCustomerService2Fill,

        hover: "Store",
        path:"/dashboard/admin/services"

    },
   

]

export const data1=[
    {
        id: "noticications",
        title: "Notificatios",
        icon: MdNotifications,

        hover: "Notifications",
        path:"/dashboard/admin/noticications"

    },

    {
        id: "saved",
        title: "Saved",
        icon: HiHeart,

        hover: "Saved",
        path:"/dashboard/admin/saved"

    },
    {
        id: "setting",
        title: "Setting",
        icon: HiCog6Tooth,

        hover: "Setting",
        path:"/dashboard/admin/setting"

    },
]