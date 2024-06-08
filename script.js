function updateTime() {
  const options = { timeZone: 'Europe/Prague', hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' };
  const pragueTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
  document.getElementById('time').textContent = pragueTime;
}

setInterval(updateTime, 1000);
updateTime();