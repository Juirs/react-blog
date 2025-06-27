function calculateReadTime(content) {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.round((words / 100) * 0.3);
    return minutes < 1 ? 1 : minutes;
}

export default calculateReadTime;