function calculateTimeDifference(leadingTime: string, currentTime: string): string {
    if (!leadingTime || !currentTime) return '';
    
    const [leadingTimeMinutes, leadingTimeSeconds, leadingTimeMilliseconds] = leadingTime.split(/[.:]+/);
    
    const [currentTimeMinutes, currentTimeSeconds, currentTimeMilliseconds] = currentTime.split(/[.:]+/);
    
    const leadingTimeInMilliseconds = (leadingTimeMinutes * 60000) + (leadingTimeSeconds * 1000) + Number(leadingTimeMilliseconds);

const currentTimeInMilliseconds = (currentTimeMinutes * 60000) + (currentTimeSeconds * 1000) + Number(currentTimeMilliseconds);

console.log(currentTimeInMilliseconds);

return String((currentTimeInMilliseconds - leadingTimeInMilliseconds) / 1000);
}

export default calculateTimeDifference;