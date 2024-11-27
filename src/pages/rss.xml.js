import { getRssString } from '@astrojs/rss'
import { getBlogs } from '../library/microcms'
import { META_TITLE, META_DESCRIPTION } from './constants/meta'

export const GET = async (context) => {
    const posts = await getBlogs()

    const rss = await getRssString({
        title: META_TITLE,
        description: META_DESCRIPTION,
        site: context.site,
        items: posts.contents.map((post) => ({
            link: new URL(`blog/${post.id}`, context.site.href).href,
            title: post.title,
            description: `${post.description}...`,
            pubDate: post.publishedAt,
            content: post.content,
        })),
    })
    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
