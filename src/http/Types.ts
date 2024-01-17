export interface Tt {
    collection: {
        version: string,
        href: string,
        items: Array<
            {
                href: string,
            }>
    }
}
export interface Tz {
    collection: {
        version: string,
        href: string,
        items: Array<
            {
                href: string,
                data: Array<{
                    center: string,
                    title: string,
                    keywords: Array<string>

                    location: string,
                    nasa_id: string,
                    date_created: string,
                    media_type: string,
                    description: string
                }>
                links: Array<{
                    href: string,
                    rel: string,
                    render: string
                }>
            }>
    }

}
export interface InternalProps {
    token: string,
    title: string,
    url: string,
    date: string,
    explanation: string
}