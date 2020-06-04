// date calculator //
const todayDate = new Date();

const daysBetween = (firstDate, secondDate) => {
    let firstDate_ms;
    let secondDate_ms;
    //Get 1 day in milliseconds
    // let one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    firstDate_ms = firstDate.getTime();
    secondDate_ms = secondDate.getTime();

    // Calculate the difference in milliseconds
    let difference_ms = secondDate_ms - firstDate_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    // let seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    // let minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    // let hours = Math.floor(difference_ms % 24);
    // return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
    return Math.floor(difference_ms / 24);
//    add one up to round up the remaining hours and minutes ...
};

export const dateChecker = (property_date, subscription_type, renew_date) => {
    let propertyDate = property_date;
    let endDate;
    let daysInterval;
    let daysLeft;
    // console.log(subscription_type);

    if (subscription_type.toLowerCase() === 'free_three') {
        daysInterval = 186;
        endDate = renew_date;
    } else if (subscription_type.toLowerCase() === 'three_months') {
        // console.log('three_months');
        daysInterval = 93;
        renew_date.setDate(renew_date.getDate() + daysInterval);
        // console.log(renew_date);
        return renew_date >= todayDate ? {status: 'Hosted', daysLeft: daysBetween(todayDate, renew_date) + 1} :
            {status: 'Pending', daysLeft: 0}
    } else if (subscription_type.toLowerCase() === 'six_months') {
        // console.log('six_months');
        daysInterval = 186;
        renew_date.setDate(renew_date.getDate() + daysInterval);
        return renew_date >= todayDate ? {status: 'Hosted', daysLeft: daysBetween(todayDate, renew_date) + 1} :
            {status: 'Pending', daysLeft: 0}
    } else if (subscription_type.toLowerCase() === 'annual') {
        // console.log('annual');
        daysInterval = 365;
        renew_date.setDate(renew_date.getDate() + daysInterval);
        return renew_date >= todayDate ? {status: 'Hosted', daysLeft: daysBetween(todayDate, renew_date) + 1} :
            {status: 'Pending', daysLeft: 0}
    }


// get day for upload date
    const upload_day = propertyDate.getDate();

// convert date to time
    const propertyDate_ms = propertyDate.getTime();

// convert endDate into time
    const endDate_ms = endDate.getTime();

    if (propertyDate_ms <= endDate_ms) {
        // find diff between today date and uploaded date
        let diffDate = daysBetween(propertyDate, todayDate);
        if (diffDate < daysInterval) {
            propertyDate.setDate(upload_day + daysInterval);
            let daysDiff = daysBetween(todayDate, propertyDate);
            daysLeft = daysDiff + 1;

            return {status: 'Hosted', daysLeft: daysLeft}
        } else {
            return {status: 'Pending', daysLeft: 0}
        }
    } else {
        return {status: 'Pending', daysLeft: 0}
    }
};