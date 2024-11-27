import { getRssString } from '@astrojs/rss'
import { getBlogs } from '../library/microcms'
import { META_TITLE, META_DESCRIPTION } from './constants/meta'
import { ja } from 'date-fns/locale'
import { format } from 'date-fns'

export const GET = async (context) => {
    const posts = await getBlogs({
        limit: 10,
        orders: '-publishedAt',
    })

    const rss = await getRssString({
        title: META_TITLE,
        description: META_DESCRIPTION,
        site: context.site,
        items: posts.contents.map((post) => {
            const date = format(new Date(post.publishedAt), 'yyyy-MM-dd', {
                locale: ja,
            })

            return {
                link: new URL(`blog/${post.id}`, context.site.href).href,
                title: post.title,
                description: `${post.description}...`,
                pubDate: date,
                content: post.content,
            }
        }),
    })
    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=3600',
        },
    })
}
