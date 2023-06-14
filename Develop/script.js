var currentDay = $('#currentDay');
currentDay.text(dayjs().format('MMMM DD, YYYY'));

 $('.saveBtn').on('click', function(){
  var userInput = $('#text').val();
  var hours = $(this).parent().attr('id');
  console.log('button clicked');
  localStorage.setItem(hours, userInput);
});

$('.time-block').each(function(){
  var setTime = +$(this).attr('id').split('-')[1];
  var currentTime = +dayjs().format('HH');
  if (currentTime < setTime){
    $(this).addClass('future')
  }
  else if (currentTime > setTime){
    $(this).addClass('past')
  }
  else {
    $(this).addClass('present')
  }
});

$('#hour-9').children('textarea').val(localStorage.getItem('hour-9'));
$('#hour-10').children('textarea').val(localStorage.getItem('hour-10'));
$('#hour-11').children('textarea').val(localStorage.getItem('hour-11'));
$('#hour-12').children('textarea').val(localStorage.getItem('hour-12'));
$('#hour-13').children('textarea').val(localStorage.getItem('hour-13'));
$('#hour-14').children('textarea').val(localStorage.getItem('hour-14'));
$('#hour-15').children('textarea').val(localStorage.getItem('hour-15'));
$('#hour-16').children('textarea').val(localStorage.getItem('hour-16'));
$('#hour-17').children('textarea').val(localStorage.getItem('hour-17'));