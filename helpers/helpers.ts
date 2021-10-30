export const calcTime = ({ date }: { date: string }): string => {
    const past: any = new Date(date);
    const now: any = new Date();

    let diffInMilliSeconds = Math.abs(now - past) / 1000;

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    let difference = '';
    if (days > 0)
        difference += (days === 1) ? `${days} day, ` : `${days} days, `;

    if (hours > 0)
        difference += (hours === 1) ? `${hours} hour and ` : `${hours} hours and `;

    if (minutes > 0)
        difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : ` ${minutes} minutes`;

    return difference;
}