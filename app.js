
function countDown(){

//setting the startdate, and the halloween date.
const halloween = new Date('10/31/2023 00:00:00').getTime();
const startDate = new Date().getTime();

//then making variable to subtract the dates.
const timeBetween = (halloween - startDate);

// how time works
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

//assigning variables to floormath method and doing the calculations
const textDay = Math.floor(timeBetween / days);
const textHour = Math.floor((timeBetween % days) / hours);
const textMin = Math.floor((timeBetween % hours) / minutes);
const textSeconds = Math.floor((timeBetween % minutes) / seconds);


//getting the html tags by id and callings its innerhtml and displaying the calc variables.
document.getElementById('days').innerHTML = textDay;
document.getElementById('hours').innerHTML = formatTime(textHour);
document.getElementById('mins').innerHTML = formatTime(textMin);
document.getElementById('secs').innerHTML = formatTime(textSeconds);



}

//setting the interval to numbers we like.
setInterval(countDown, 1000);

//making a formaTime function and having a time parameter to add a 0 in front of text that would be single digit eventually.
function formatTime(time){
    return time < 10 ?`0${time}` : time;
}
