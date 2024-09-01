export interface INavLink {
    url: string
    text: string
}

export const navLinks: Array<INavLink> = [
    { url: "/dashboard", text: "Категории" },
    { url: "/dashboard/albums", text: "Товары" },
    { url: "/dashboard", text: "Новости" },
    { url: "/dashboard/users", text: "Админы" },
]