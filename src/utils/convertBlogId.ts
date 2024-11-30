export const getBlogId = (id: string) => {
    const blogId = Number.parseInt(id, 10)

    const previousId = (blogId - 1).toString().padStart(3, '0')
    const nextId = (blogId + 1).toString().padStart(3, '0')
    return { previousId, nextId }
}
