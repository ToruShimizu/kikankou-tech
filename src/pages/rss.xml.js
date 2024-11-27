import rss from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'シミティーブログ',
        description:
            '30歳で工場勤務からWebエンジニアに転職した男性の、キャリアチェンジへの決意と葛藤。安定した仕事を捨てる覚悟、将来への不安、そして挑戦する勇気を赤裸々に語る転職体験記。未経験からのキャリアチェンジに悩む全ての人へのメッセージ。',
        site: context.site,
        items: [],
    })
}
