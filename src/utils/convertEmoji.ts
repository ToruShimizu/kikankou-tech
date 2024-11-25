const emojiMap = {
    book_1: '📕',
    book_2: '📗',
    book_3: '📘',
    book_4: '📙',
}

export const convertEmoji = (text: string) => {
    return emojiMap[text as keyof typeof emojiMap] || ''
}
