export default function calculateTimeAgo(date:string) {
    const today = new Date().getTime();
    const currentDate = new Date(date).getTime();
    const difference: number = (today - currentDate)/ (1000 * 3600 * 24);
    let displayString: string;
    if (difference > 360) {
        displayString = Math.floor(difference / 360) + ' years';
      } else if (difference < 1) {
        displayString = Math.floor(difference * 24) + ' hours'
      } else {
        displayString = Math.floor(difference) + ' days';
      }
      return `Posted ${displayString} ago`;
}
