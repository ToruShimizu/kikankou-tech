const emojiMap = {
    book_1: '📕',
    book_2: '📗',
    book_3: '📘',
    book_4: '📙',
    write: '✍️',
    programmer: '👨‍💻',
    memo: '📝',
    palette: '🎨',
    muscle: '💪',
    eyes: '👀',
    mentor: '👨‍🏫',
    handshake: '🤝',
    thinking: '🤔',
    direct_hit: '🎯',
    man_construction_worker: '👷‍♂️',
    wrench: '🔧',
    portfolio: '🗂️',
    bag_1: '💼',
    rocket: '🚀',
    fire: '🔥',
    sparkles: '✨',
    party_popper: '🎉',
    paperclip: '📎',
}

export const convertEmoji = (text: string) => {
    return emojiMap[text as keyof typeof emojiMap] || ''
}
