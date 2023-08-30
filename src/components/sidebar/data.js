// 

import {HiSquares2X2,HiChatBubbleLeft, HiUser,HiChartPie,HiFolder,HiShoppingCart,HiHeart,HiCog6Tooth} from "react-icons/hi2"
export const data = [{
        id: "dashboard",
        title: "Dashboard",
        icon: HiSquares2X2,

        hover: "Dashboard",
        path:"/dashboard"

    },
    {
        id: "user",
        title: "User",
        icon: HiUser,

        hover: "User",
        path:"/dashboard/user"

    },
    {
        id: "message",
        title: "Message",
        icon: HiChatBubbleLeft,

        hover: "Message",
        path:"/dashboard/message"

    },
    {
        id: "analytic",
        title: "Analytic",
        icon: HiChartPie,

        hover: "Analytic",
        path:"/dashboard/analytic"

    },
    {
        id: "file",
        title: "File Manager",
        icon: HiFolder,

        hover: "Files",
        path:"/dashboard/file"

    },
    {
        id: "order",
        title: "Order",
        icon: HiShoppingCart,

        hover: "Order",
        path:"/dashboard/order"

    },
    {
        id: "saved",
        title: "Saved",
        icon: HiHeart,

        hover: "Saved",
        path:"/dashboard/saved"

    },
    {
        id: "setting",
        title: "Setting",
        icon: HiCog6Tooth,

        hover: "Setting",
        path:"/dashboard/setting"

    },

]