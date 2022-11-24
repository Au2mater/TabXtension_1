tableau.extensions.initializeAsync().then(() => {
    let dashboard = tableau.extensions.dashboardContent.dashboard;
    let selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Overview');
  
    let heading = document.getElementById('heading');
    heading.textContent = selectedWorksheet.name;

  });
  
