const pages = [
    {
        id: "market",
        title: "Market",
        path: "/"
    },
    {
        id: "coin",
        title: "Coin Details",
        path: "/coin",
        isVariableItem: true,
        parent: "market"
    },
    {
        id: "about",
        title: "About",
        path: "/about"
    },
    {
        id: "faq",
        title: "FAQ",
        path: "/faq"
    }
]

export default pages