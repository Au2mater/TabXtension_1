tableau.extensions.initializeAsync();
const dashboard = tableau.extensions.dashboardContent.dashboard;
const selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Overview');

const heading = document.getElementById('heading');
heading.textContent = selectedWorksheet.name;
  
