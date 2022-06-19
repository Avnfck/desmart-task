const dateCheck = (year, month, day) => {
    const currentDate = new Date();
    const inDate = new Date(year, month - 1, day);
    if (inDate.getDay() === 6 || inDate.getDay() === 0) {
        return 'We are open every Mon-Fri 9-17. Please book appoitment on week day and between working hours.';
    }
    if (inDate.getFullYear() < currentDate.getFullYear()) {
        return 'Cannot book appointment in the past year, as long as you get some time travel machine :)';
    }
    if ((inDate.getDate() <= currentDate.getDate() && inDate.getMonth() + 1 == currentDate.getMonth() + 1) || inDate.getMonth() + 1 < currentDate.getMonth() + 1) {
        return 'Cannot book appoitment in the past or same day of booking. Please choose future date.';
    }
    return true;
};
export default dateCheck;
