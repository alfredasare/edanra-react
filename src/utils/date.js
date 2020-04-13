// date calculator //
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

export const dateChecker = (property_date) => {
    let propertyDate = property_date;

// get day for upload date
    const upload_day = propertyDate.getDate();

// convert date to time
    const propertyDate_ms = propertyDate.getTime();


// const daysRemaining = daysBetween(new Date(newDate));

    const endDate = new Date('2020-07-31');
// convert endDate into time
    const endDate_ms = endDate.getTime();

    const todayDate = new Date();

    if (propertyDate_ms <= endDate_ms) {
        // find diff between today date and uploaded date
        let diffDate = daysBetween(propertyDate, todayDate);
        if (diffDate < 92) {
            propertyDate.setDate(upload_day + 92);
            let daysDiff = daysBetween(todayDate, propertyDate);
            let daysLeft = daysDiff + 1;

            // set status as: hosted
            // console.log('status: Hosted');
            // console.log('days left', daysLeft);
            return {status: 'Hosted', daysLeft: daysLeft }
        } else {
            // set status as: pending
            // console.log('status: Pending');
            return {status: 'Pending', daysLeft: 0}
        }
    } else {
        // set status as: pending
        // console.log('status: Pending');
        return {status: 'Pending', daysLeft: 0}
    }
};
