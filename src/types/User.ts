export type Avatar = {
    link: string
}

export type User = {
    username: string | undefined,
    avatar: Avatar | undefined,
    badges: string[] | undefined,
    accent_color: string | undefined,
    global_name: string | undefined,
    banner_link: string | null | undefined,
    banner_color: string | undefined
}