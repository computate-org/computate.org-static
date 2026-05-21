
async function websocketContract(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketContract', function (error, message) {
      var json = JSON.parse(message['body']);
      var contractId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + contractId + ' ');
      $box.setAttribute('id', 'box-' + contractId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + contractId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + contractId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + contractId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-file-contract"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify contracts in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + contractId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + contractId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + contractId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + contractId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + contractId);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + contractId);
      } else {
        document.querySelector('.box-' + contractId)?.remove();
      }
      if(contractId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketContractInner(apiRequest) {
  var contractId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(contractId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputRegion = null;
        var inputStartDate = null;
        var inputName = null;
        var inputAbbreviation = null;
        var inputInvestmentYearsTotal = null;
        var inputInvestmentYears = null;
        var inputInvestmentsPerYear = null;
        var inputInvestmentsPerYearCumulative = null;
        var inputAssetClasses = null;
        var inputAssetClassesTargetIrr = null;
        var inputRevenueStreams = null;
        var inputEconomicOutputProjections = null;
        var inputTotalGdpImpact = null;
        var inputEconomicOutputProjectionsDataset = null;
        var inputCumulativeInvestmentChart = null;
        var inputArchitectsPerYear = null;
        var inputRemoteDevelopersPerYear = null;
        var inputOnsiteDevelopersPerYear = null;
        var inputInstructorsPerYear = null;
        var inputRemoteDeveloperPayPerYear = null;
        var inputOnsiteDeveloperPayPerYear = null;
        var inputArchitectPayPerYear = null;
        var inputInstructorPayPerYear = null;
        var inputSubscriptionsPerYear = null;
        var inputSubscriptionCostsPerYear = null;
        var inputTotalSubscriptionCostPerYear = null;
        var inputEmployeeSubscriptionCostsPerYear = null;
        var inputEmployeesPerYearChart = null;
        var inputEmployeePayPerYearChart = null;
        var inputGkeStagingEnvironments = null;
        var inputOpenshiftDedicatedManagementClusters = null;
        var inputOpenshiftDedicatedWorkerClusters = null;
        var inputOpenshiftControlPlaneNodes = null;
        var inputOpenshiftControlPlaneCores = null;
        var inputOpenshiftControlPlaneHourlyPricePerCore = null;
        var inputOpenshiftInfraNodes = null;
        var inputOpenshiftInfraCores = null;
        var inputOpenshiftInfraHourlyPricePerCore = null;
        var inputManagementClusterNodes = null;
        var inputWorkerClusterApplicationNodes = null;
        var inputOpenshiftWorkerCores = null;
        var inputOpenshiftManagementClusterWorkerNodesPerYear = null;
        var inputOpenshiftApplicationClusterWorkerNodesPerYear = null;
        var inputOpenshiftWorkerNodesPerYear = null;
        var inputOpenshiftManagementClusterWorkerCoresPerYear = null;
        var inputOpenshiftApplicationClusterWorkerCoresPerYear = null;
        var inputOpenshiftWorkerCoresPerYear = null;
        var inputOpenshiftWorkerHourlyPricePerCore = null;
        var inputOpenshiftSSDStorageTiBPerYear = null;
        var inputOpenshiftSSDStoragePricePerGiB = null;
        var inputOpenshiftCostsPerClusterPerYearChart = null;
        var inputOpenshiftCostsPerYearChart = null;
        var inputProjectExpensesChart = null;
        var inputEconomicOutputChart = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputDisplayName = null;
        var inputContractId = null;
        var inputEmployeesPerYearDataset = null;
        var inputSubscriptionCostsPerYearDataset = null;
        var inputEmployeePayPerYearDataset = null;
        var inputTotalOpenshiftControlPlaneCores = null;
        var inputTotalOpenshiftInfraCores = null;
        var inputOpenshiftCostsPerClusterPerYearDataset = null;
        var inputOpenshiftCostsPerYearDataset = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Contract_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Contract_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Contract_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Contract_Page_archived');
        if(vars.includes('region'))
          inputRegion = $response.querySelector('.Contract_Page_region');
        if(vars.includes('startDate'))
          inputStartDate = $response.querySelector('.Contract_Page_startDate');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Contract_Page_name');
        if(vars.includes('abbreviation'))
          inputAbbreviation = $response.querySelector('.Contract_Page_abbreviation');
        if(vars.includes('investmentYearsTotal'))
          inputInvestmentYearsTotal = $response.querySelector('.Contract_Page_investmentYearsTotal');
        if(vars.includes('investmentYears'))
          inputInvestmentYears = $response.querySelector('.Contract_Page_investmentYears');
        if(vars.includes('investmentsPerYear'))
          inputInvestmentsPerYear = $response.querySelector('.Contract_Page_investmentsPerYear');
        if(vars.includes('investmentsPerYearCumulative'))
          inputInvestmentsPerYearCumulative = $response.querySelector('.Contract_Page_investmentsPerYearCumulative');
        if(vars.includes('assetClasses'))
          inputAssetClasses = $response.querySelector('.Contract_Page_assetClasses');
        if(vars.includes('assetClassesTargetIrr'))
          inputAssetClassesTargetIrr = $response.querySelector('.Contract_Page_assetClassesTargetIrr');
        if(vars.includes('revenueStreams'))
          inputRevenueStreams = $response.querySelector('.Contract_Page_revenueStreams');
        if(vars.includes('economicOutputProjections'))
          inputEconomicOutputProjections = $response.querySelector('.Contract_Page_economicOutputProjections');
        if(vars.includes('totalGdpImpact'))
          inputTotalGdpImpact = $response.querySelector('.Contract_Page_totalGdpImpact');
        if(vars.includes('economicOutputProjectionsDataset'))
          inputEconomicOutputProjectionsDataset = $response.querySelector('.Contract_Page_economicOutputProjectionsDataset');
        if(vars.includes('cumulativeInvestmentChart'))
          inputCumulativeInvestmentChart = $response.querySelector('.Contract_Page_cumulativeInvestmentChart');
        if(vars.includes('architectsPerYear'))
          inputArchitectsPerYear = $response.querySelector('.Contract_Page_architectsPerYear');
        if(vars.includes('remoteDevelopersPerYear'))
          inputRemoteDevelopersPerYear = $response.querySelector('.Contract_Page_remoteDevelopersPerYear');
        if(vars.includes('onsiteDevelopersPerYear'))
          inputOnsiteDevelopersPerYear = $response.querySelector('.Contract_Page_onsiteDevelopersPerYear');
        if(vars.includes('instructorsPerYear'))
          inputInstructorsPerYear = $response.querySelector('.Contract_Page_instructorsPerYear');
        if(vars.includes('remoteDeveloperPayPerYear'))
          inputRemoteDeveloperPayPerYear = $response.querySelector('.Contract_Page_remoteDeveloperPayPerYear');
        if(vars.includes('onsiteDeveloperPayPerYear'))
          inputOnsiteDeveloperPayPerYear = $response.querySelector('.Contract_Page_onsiteDeveloperPayPerYear');
        if(vars.includes('architectPayPerYear'))
          inputArchitectPayPerYear = $response.querySelector('.Contract_Page_architectPayPerYear');
        if(vars.includes('instructorPayPerYear'))
          inputInstructorPayPerYear = $response.querySelector('.Contract_Page_instructorPayPerYear');
        if(vars.includes('subscriptionsPerYear'))
          inputSubscriptionsPerYear = $response.querySelector('.Contract_Page_subscriptionsPerYear');
        if(vars.includes('subscriptionCostsPerYear'))
          inputSubscriptionCostsPerYear = $response.querySelector('.Contract_Page_subscriptionCostsPerYear');
        if(vars.includes('totalSubscriptionCostPerYear'))
          inputTotalSubscriptionCostPerYear = $response.querySelector('.Contract_Page_totalSubscriptionCostPerYear');
        if(vars.includes('employeeSubscriptionCostsPerYear'))
          inputEmployeeSubscriptionCostsPerYear = $response.querySelector('.Contract_Page_employeeSubscriptionCostsPerYear');
        if(vars.includes('employeesPerYearChart'))
          inputEmployeesPerYearChart = $response.querySelector('.Contract_Page_employeesPerYearChart');
        if(vars.includes('employeePayPerYearChart'))
          inputEmployeePayPerYearChart = $response.querySelector('.Contract_Page_employeePayPerYearChart');
        if(vars.includes('gkeStagingEnvironments'))
          inputGkeStagingEnvironments = $response.querySelector('.Contract_Page_gkeStagingEnvironments');
        if(vars.includes('openshiftDedicatedManagementClusters'))
          inputOpenshiftDedicatedManagementClusters = $response.querySelector('.Contract_Page_openshiftDedicatedManagementClusters');
        if(vars.includes('openshiftDedicatedWorkerClusters'))
          inputOpenshiftDedicatedWorkerClusters = $response.querySelector('.Contract_Page_openshiftDedicatedWorkerClusters');
        if(vars.includes('openshiftControlPlaneNodes'))
          inputOpenshiftControlPlaneNodes = $response.querySelector('.Contract_Page_openshiftControlPlaneNodes');
        if(vars.includes('openshiftControlPlaneCores'))
          inputOpenshiftControlPlaneCores = $response.querySelector('.Contract_Page_openshiftControlPlaneCores');
        if(vars.includes('openshiftControlPlaneHourlyPricePerCore'))
          inputOpenshiftControlPlaneHourlyPricePerCore = $response.querySelector('.Contract_Page_openshiftControlPlaneHourlyPricePerCore');
        if(vars.includes('openshiftInfraNodes'))
          inputOpenshiftInfraNodes = $response.querySelector('.Contract_Page_openshiftInfraNodes');
        if(vars.includes('openshiftInfraCores'))
          inputOpenshiftInfraCores = $response.querySelector('.Contract_Page_openshiftInfraCores');
        if(vars.includes('openshiftInfraHourlyPricePerCore'))
          inputOpenshiftInfraHourlyPricePerCore = $response.querySelector('.Contract_Page_openshiftInfraHourlyPricePerCore');
        if(vars.includes('managementClusterNodes'))
          inputManagementClusterNodes = $response.querySelector('.Contract_Page_managementClusterNodes');
        if(vars.includes('workerClusterApplicationNodes'))
          inputWorkerClusterApplicationNodes = $response.querySelector('.Contract_Page_workerClusterApplicationNodes');
        if(vars.includes('openshiftWorkerCores'))
          inputOpenshiftWorkerCores = $response.querySelector('.Contract_Page_openshiftWorkerCores');
        if(vars.includes('openshiftManagementClusterWorkerNodesPerYear'))
          inputOpenshiftManagementClusterWorkerNodesPerYear = $response.querySelector('.Contract_Page_openshiftManagementClusterWorkerNodesPerYear');
        if(vars.includes('openshiftApplicationClusterWorkerNodesPerYear'))
          inputOpenshiftApplicationClusterWorkerNodesPerYear = $response.querySelector('.Contract_Page_openshiftApplicationClusterWorkerNodesPerYear');
        if(vars.includes('openshiftWorkerNodesPerYear'))
          inputOpenshiftWorkerNodesPerYear = $response.querySelector('.Contract_Page_openshiftWorkerNodesPerYear');
        if(vars.includes('openshiftManagementClusterWorkerCoresPerYear'))
          inputOpenshiftManagementClusterWorkerCoresPerYear = $response.querySelector('.Contract_Page_openshiftManagementClusterWorkerCoresPerYear');
        if(vars.includes('openshiftApplicationClusterWorkerCoresPerYear'))
          inputOpenshiftApplicationClusterWorkerCoresPerYear = $response.querySelector('.Contract_Page_openshiftApplicationClusterWorkerCoresPerYear');
        if(vars.includes('openshiftWorkerCoresPerYear'))
          inputOpenshiftWorkerCoresPerYear = $response.querySelector('.Contract_Page_openshiftWorkerCoresPerYear');
        if(vars.includes('openshiftWorkerHourlyPricePerCore'))
          inputOpenshiftWorkerHourlyPricePerCore = $response.querySelector('.Contract_Page_openshiftWorkerHourlyPricePerCore');
        if(vars.includes('openshiftSSDStorageTiBPerYear'))
          inputOpenshiftSSDStorageTiBPerYear = $response.querySelector('.Contract_Page_openshiftSSDStorageTiBPerYear');
        if(vars.includes('openshiftSSDStoragePricePerGiB'))
          inputOpenshiftSSDStoragePricePerGiB = $response.querySelector('.Contract_Page_openshiftSSDStoragePricePerGiB');
        if(vars.includes('openshiftCostsPerClusterPerYearChart'))
          inputOpenshiftCostsPerClusterPerYearChart = $response.querySelector('.Contract_Page_openshiftCostsPerClusterPerYearChart');
        if(vars.includes('openshiftCostsPerYearChart'))
          inputOpenshiftCostsPerYearChart = $response.querySelector('.Contract_Page_openshiftCostsPerYearChart');
        if(vars.includes('projectExpensesChart'))
          inputProjectExpensesChart = $response.querySelector('.Contract_Page_projectExpensesChart');
        if(vars.includes('economicOutputChart'))
          inputEconomicOutputChart = $response.querySelector('.Contract_Page_economicOutputChart');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Contract_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Contract_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Contract_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Contract_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Contract_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Contract_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Contract_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Contract_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Contract_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Contract_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Contract_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Contract_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Contract_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Contract_Page_solrId');
        if(vars.includes('displayName'))
          inputDisplayName = $response.querySelector('.Contract_Page_displayName');
        if(vars.includes('contractId'))
          inputContractId = $response.querySelector('.Contract_Page_contractId');
        if(vars.includes('employeesPerYearDataset'))
          inputEmployeesPerYearDataset = $response.querySelector('.Contract_Page_employeesPerYearDataset');
        if(vars.includes('subscriptionCostsPerYearDataset'))
          inputSubscriptionCostsPerYearDataset = $response.querySelector('.Contract_Page_subscriptionCostsPerYearDataset');
        if(vars.includes('employeePayPerYearDataset'))
          inputEmployeePayPerYearDataset = $response.querySelector('.Contract_Page_employeePayPerYearDataset');
        if(vars.includes('totalOpenshiftControlPlaneCores'))
          inputTotalOpenshiftControlPlaneCores = $response.querySelector('.Contract_Page_totalOpenshiftControlPlaneCores');
        if(vars.includes('totalOpenshiftInfraCores'))
          inputTotalOpenshiftInfraCores = $response.querySelector('.Contract_Page_totalOpenshiftInfraCores');
        if(vars.includes('openshiftCostsPerClusterPerYearDataset'))
          inputOpenshiftCostsPerClusterPerYearDataset = $response.querySelector('.Contract_Page_openshiftCostsPerClusterPerYearDataset');
        if(vars.includes('openshiftCostsPerYearDataset'))
          inputOpenshiftCostsPerYearDataset = $response.querySelector('.Contract_Page_openshiftCostsPerYearDataset');

        jsWebsocketContract(contractId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listContract = JSON.parse($response.querySelector('.pageForm .listContract')?.value);


        if(inputPk) {
          document.querySelectorAll('.Contract_Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Contract_Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Contract_Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Contract_Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_archived'));
        }

        if(inputRegion) {
          document.querySelectorAll('.Contract_Page_region').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRegion.getAttribute('value');
            else
              item.textContent = inputRegion.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_region'));
        }

        if(inputStartDate) {
          document.querySelectorAll('.Contract_Page_startDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputStartDate.getAttribute('value');
            else
              item.textContent = inputStartDate.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_startDate'));
        }

        if(inputName) {
          document.querySelectorAll('.Contract_Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_name'));
        }

        if(inputAbbreviation) {
          document.querySelectorAll('.Contract_Page_abbreviation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAbbreviation.getAttribute('value');
            else
              item.textContent = inputAbbreviation.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_abbreviation'));
        }

        if(inputInvestmentYearsTotal) {
          document.querySelectorAll('.Contract_Page_investmentYearsTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentYearsTotal.getAttribute('value');
            else
              item.textContent = inputInvestmentYearsTotal.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentYearsTotal'));
        }

        if(inputInvestmentYears) {
          document.querySelectorAll('.Contract_Page_investmentYears').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentYears.getAttribute('value');
            else
              item.textContent = inputInvestmentYears.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentYears'));
        }

        if(inputInvestmentsPerYear) {
          document.querySelectorAll('.Contract_Page_investmentsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentsPerYear.getAttribute('value');
            else
              item.textContent = inputInvestmentsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentsPerYear'));
        }

        if(inputInvestmentsPerYearCumulative) {
          document.querySelectorAll('.Contract_Page_investmentsPerYearCumulative').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentsPerYearCumulative.getAttribute('value');
            else
              item.textContent = inputInvestmentsPerYearCumulative.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentsPerYearCumulative'));
        }

        if(inputAssetClasses) {
          document.querySelectorAll('.Contract_Page_assetClasses').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAssetClasses.getAttribute('value');
            else
              item.textContent = inputAssetClasses.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_assetClasses'));
        }

        if(inputAssetClassesTargetIrr) {
          document.querySelectorAll('.Contract_Page_assetClassesTargetIrr').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAssetClassesTargetIrr.getAttribute('value');
            else
              item.textContent = inputAssetClassesTargetIrr.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_assetClassesTargetIrr'));
        }

        if(inputRevenueStreams) {
          document.querySelectorAll('.Contract_Page_revenueStreams').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRevenueStreams.getAttribute('value');
            else
              item.textContent = inputRevenueStreams.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_revenueStreams'));
        }

        if(inputEconomicOutputProjections) {
          document.querySelectorAll('.Contract_Page_economicOutputProjections').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEconomicOutputProjections.getAttribute('value');
            else
              item.textContent = inputEconomicOutputProjections.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_economicOutputProjections'));
        }

        if(inputTotalGdpImpact) {
          document.querySelectorAll('.Contract_Page_totalGdpImpact').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTotalGdpImpact.getAttribute('value');
            else
              item.textContent = inputTotalGdpImpact.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_totalGdpImpact'));
        }

        if(inputEconomicOutputProjectionsDataset) {
          document.querySelectorAll('.Contract_Page_economicOutputProjectionsDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEconomicOutputProjectionsDataset.getAttribute('value');
            else
              item.textContent = inputEconomicOutputProjectionsDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_economicOutputProjectionsDataset'));
        }

        if(inputCumulativeInvestmentChart) {
          document.querySelectorAll('.Contract_Page_cumulativeInvestmentChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCumulativeInvestmentChart.getAttribute('value');
            else
              item.textContent = inputCumulativeInvestmentChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputCumulativeInvestmentChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_cumulativeInvestmentChart'));
        }

        if(inputArchitectsPerYear) {
          document.querySelectorAll('.Contract_Page_architectsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchitectsPerYear.getAttribute('value');
            else
              item.textContent = inputArchitectsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_architectsPerYear'));
        }

        if(inputRemoteDevelopersPerYear) {
          document.querySelectorAll('.Contract_Page_remoteDevelopersPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRemoteDevelopersPerYear.getAttribute('value');
            else
              item.textContent = inputRemoteDevelopersPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_remoteDevelopersPerYear'));
        }

        if(inputOnsiteDevelopersPerYear) {
          document.querySelectorAll('.Contract_Page_onsiteDevelopersPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOnsiteDevelopersPerYear.getAttribute('value');
            else
              item.textContent = inputOnsiteDevelopersPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_onsiteDevelopersPerYear'));
        }

        if(inputInstructorsPerYear) {
          document.querySelectorAll('.Contract_Page_instructorsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInstructorsPerYear.getAttribute('value');
            else
              item.textContent = inputInstructorsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_instructorsPerYear'));
        }

        if(inputRemoteDeveloperPayPerYear) {
          document.querySelectorAll('.Contract_Page_remoteDeveloperPayPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRemoteDeveloperPayPerYear.getAttribute('value');
            else
              item.textContent = inputRemoteDeveloperPayPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_remoteDeveloperPayPerYear'));
        }

        if(inputOnsiteDeveloperPayPerYear) {
          document.querySelectorAll('.Contract_Page_onsiteDeveloperPayPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOnsiteDeveloperPayPerYear.getAttribute('value');
            else
              item.textContent = inputOnsiteDeveloperPayPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_onsiteDeveloperPayPerYear'));
        }

        if(inputArchitectPayPerYear) {
          document.querySelectorAll('.Contract_Page_architectPayPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchitectPayPerYear.getAttribute('value');
            else
              item.textContent = inputArchitectPayPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_architectPayPerYear'));
        }

        if(inputInstructorPayPerYear) {
          document.querySelectorAll('.Contract_Page_instructorPayPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInstructorPayPerYear.getAttribute('value');
            else
              item.textContent = inputInstructorPayPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_instructorPayPerYear'));
        }

        if(inputSubscriptionsPerYear) {
          document.querySelectorAll('.Contract_Page_subscriptionsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSubscriptionsPerYear.getAttribute('value');
            else
              item.textContent = inputSubscriptionsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_subscriptionsPerYear'));
        }

        if(inputSubscriptionCostsPerYear) {
          document.querySelectorAll('.Contract_Page_subscriptionCostsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSubscriptionCostsPerYear.getAttribute('value');
            else
              item.textContent = inputSubscriptionCostsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_subscriptionCostsPerYear'));
        }

        if(inputTotalSubscriptionCostPerYear) {
          document.querySelectorAll('.Contract_Page_totalSubscriptionCostPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTotalSubscriptionCostPerYear.getAttribute('value');
            else
              item.textContent = inputTotalSubscriptionCostPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_totalSubscriptionCostPerYear'));
        }

        if(inputEmployeeSubscriptionCostsPerYear) {
          document.querySelectorAll('.Contract_Page_employeeSubscriptionCostsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEmployeeSubscriptionCostsPerYear.getAttribute('value');
            else
              item.textContent = inputEmployeeSubscriptionCostsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_employeeSubscriptionCostsPerYear'));
        }

        if(inputEmployeesPerYearChart) {
          document.querySelectorAll('.Contract_Page_employeesPerYearChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEmployeesPerYearChart.getAttribute('value');
            else
              item.textContent = inputEmployeesPerYearChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputEmployeesPerYearChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_employeesPerYearChart'));
        }

        if(inputEmployeePayPerYearChart) {
          document.querySelectorAll('.Contract_Page_employeePayPerYearChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEmployeePayPerYearChart.getAttribute('value');
            else
              item.textContent = inputEmployeePayPerYearChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputEmployeePayPerYearChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_employeePayPerYearChart'));
        }

        if(inputGkeStagingEnvironments) {
          document.querySelectorAll('.Contract_Page_gkeStagingEnvironments').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGkeStagingEnvironments.getAttribute('value');
            else
              item.textContent = inputGkeStagingEnvironments.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_gkeStagingEnvironments'));
        }

        if(inputOpenshiftDedicatedManagementClusters) {
          document.querySelectorAll('.Contract_Page_openshiftDedicatedManagementClusters').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftDedicatedManagementClusters.getAttribute('value');
            else
              item.textContent = inputOpenshiftDedicatedManagementClusters.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftDedicatedManagementClusters'));
        }

        if(inputOpenshiftDedicatedWorkerClusters) {
          document.querySelectorAll('.Contract_Page_openshiftDedicatedWorkerClusters').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftDedicatedWorkerClusters.getAttribute('value');
            else
              item.textContent = inputOpenshiftDedicatedWorkerClusters.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftDedicatedWorkerClusters'));
        }

        if(inputOpenshiftControlPlaneNodes) {
          document.querySelectorAll('.Contract_Page_openshiftControlPlaneNodes').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftControlPlaneNodes.getAttribute('value');
            else
              item.textContent = inputOpenshiftControlPlaneNodes.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftControlPlaneNodes'));
        }

        if(inputOpenshiftControlPlaneCores) {
          document.querySelectorAll('.Contract_Page_openshiftControlPlaneCores').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftControlPlaneCores.getAttribute('value');
            else
              item.textContent = inputOpenshiftControlPlaneCores.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftControlPlaneCores'));
        }

        if(inputOpenshiftControlPlaneHourlyPricePerCore) {
          document.querySelectorAll('.Contract_Page_openshiftControlPlaneHourlyPricePerCore').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftControlPlaneHourlyPricePerCore.getAttribute('value');
            else
              item.textContent = inputOpenshiftControlPlaneHourlyPricePerCore.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftControlPlaneHourlyPricePerCore'));
        }

        if(inputOpenshiftInfraNodes) {
          document.querySelectorAll('.Contract_Page_openshiftInfraNodes').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftInfraNodes.getAttribute('value');
            else
              item.textContent = inputOpenshiftInfraNodes.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftInfraNodes'));
        }

        if(inputOpenshiftInfraCores) {
          document.querySelectorAll('.Contract_Page_openshiftInfraCores').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftInfraCores.getAttribute('value');
            else
              item.textContent = inputOpenshiftInfraCores.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftInfraCores'));
        }

        if(inputOpenshiftInfraHourlyPricePerCore) {
          document.querySelectorAll('.Contract_Page_openshiftInfraHourlyPricePerCore').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftInfraHourlyPricePerCore.getAttribute('value');
            else
              item.textContent = inputOpenshiftInfraHourlyPricePerCore.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftInfraHourlyPricePerCore'));
        }

        if(inputManagementClusterNodes) {
          document.querySelectorAll('.Contract_Page_managementClusterNodes').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputManagementClusterNodes.getAttribute('value');
            else
              item.textContent = inputManagementClusterNodes.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_managementClusterNodes'));
        }

        if(inputWorkerClusterApplicationNodes) {
          document.querySelectorAll('.Contract_Page_workerClusterApplicationNodes').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWorkerClusterApplicationNodes.getAttribute('value');
            else
              item.textContent = inputWorkerClusterApplicationNodes.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_workerClusterApplicationNodes'));
        }

        if(inputOpenshiftWorkerCores) {
          document.querySelectorAll('.Contract_Page_openshiftWorkerCores').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftWorkerCores.getAttribute('value');
            else
              item.textContent = inputOpenshiftWorkerCores.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftWorkerCores'));
        }

        if(inputOpenshiftManagementClusterWorkerNodesPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftManagementClusterWorkerNodesPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftManagementClusterWorkerNodesPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftManagementClusterWorkerNodesPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftManagementClusterWorkerNodesPerYear'));
        }

        if(inputOpenshiftApplicationClusterWorkerNodesPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftApplicationClusterWorkerNodesPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftApplicationClusterWorkerNodesPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftApplicationClusterWorkerNodesPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftApplicationClusterWorkerNodesPerYear'));
        }

        if(inputOpenshiftWorkerNodesPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftWorkerNodesPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftWorkerNodesPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftWorkerNodesPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftWorkerNodesPerYear'));
        }

        if(inputOpenshiftManagementClusterWorkerCoresPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftManagementClusterWorkerCoresPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftManagementClusterWorkerCoresPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftManagementClusterWorkerCoresPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftManagementClusterWorkerCoresPerYear'));
        }

        if(inputOpenshiftApplicationClusterWorkerCoresPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftApplicationClusterWorkerCoresPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftApplicationClusterWorkerCoresPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftApplicationClusterWorkerCoresPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftApplicationClusterWorkerCoresPerYear'));
        }

        if(inputOpenshiftWorkerCoresPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftWorkerCoresPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftWorkerCoresPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftWorkerCoresPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftWorkerCoresPerYear'));
        }

        if(inputOpenshiftWorkerHourlyPricePerCore) {
          document.querySelectorAll('.Contract_Page_openshiftWorkerHourlyPricePerCore').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftWorkerHourlyPricePerCore.getAttribute('value');
            else
              item.textContent = inputOpenshiftWorkerHourlyPricePerCore.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftWorkerHourlyPricePerCore'));
        }

        if(inputOpenshiftSSDStorageTiBPerYear) {
          document.querySelectorAll('.Contract_Page_openshiftSSDStorageTiBPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftSSDStorageTiBPerYear.getAttribute('value');
            else
              item.textContent = inputOpenshiftSSDStorageTiBPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftSSDStorageTiBPerYear'));
        }

        if(inputOpenshiftSSDStoragePricePerGiB) {
          document.querySelectorAll('.Contract_Page_openshiftSSDStoragePricePerGiB').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftSSDStoragePricePerGiB.getAttribute('value');
            else
              item.textContent = inputOpenshiftSSDStoragePricePerGiB.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftSSDStoragePricePerGiB'));
        }

        if(inputOpenshiftCostsPerClusterPerYearChart) {
          document.querySelectorAll('.Contract_Page_openshiftCostsPerClusterPerYearChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftCostsPerClusterPerYearChart.getAttribute('value');
            else
              item.textContent = inputOpenshiftCostsPerClusterPerYearChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputOpenshiftCostsPerClusterPerYearChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_openshiftCostsPerClusterPerYearChart'));
        }

        if(inputOpenshiftCostsPerYearChart) {
          document.querySelectorAll('.Contract_Page_openshiftCostsPerYearChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftCostsPerYearChart.getAttribute('value');
            else
              item.textContent = inputOpenshiftCostsPerYearChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputOpenshiftCostsPerYearChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_openshiftCostsPerYearChart'));
        }

        if(inputProjectExpensesChart) {
          document.querySelectorAll('.Contract_Page_projectExpensesChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProjectExpensesChart.getAttribute('value');
            else
              item.textContent = inputProjectExpensesChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputProjectExpensesChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_projectExpensesChart'));
        }

        if(inputEconomicOutputChart) {
          document.querySelectorAll('.Contract_Page_economicOutputChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEconomicOutputChart.getAttribute('value');
            else
              item.textContent = inputEconomicOutputChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputEconomicOutputChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_economicOutputChart'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Contract_Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Contract_Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Contract_Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Contract_Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Contract_Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Contract_Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Contract_Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Contract_Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Contract_Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Contract_Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Contract_Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Contract_Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Contract_Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Contract_Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_solrId'));
        }

        if(inputDisplayName) {
          document.querySelectorAll('.Contract_Page_displayName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayName.getAttribute('value');
            else
              item.textContent = inputDisplayName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_displayName'));
        }

        if(inputContractId) {
          document.querySelectorAll('.Contract_Page_contractId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputContractId.getAttribute('value');
            else
              item.textContent = inputContractId.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_contractId'));
        }

        if(inputEmployeesPerYearDataset) {
          document.querySelectorAll('.Contract_Page_employeesPerYearDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEmployeesPerYearDataset.getAttribute('value');
            else
              item.textContent = inputEmployeesPerYearDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_employeesPerYearDataset'));
        }

        if(inputSubscriptionCostsPerYearDataset) {
          document.querySelectorAll('.Contract_Page_subscriptionCostsPerYearDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSubscriptionCostsPerYearDataset.getAttribute('value');
            else
              item.textContent = inputSubscriptionCostsPerYearDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_subscriptionCostsPerYearDataset'));
        }

        if(inputEmployeePayPerYearDataset) {
          document.querySelectorAll('.Contract_Page_employeePayPerYearDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEmployeePayPerYearDataset.getAttribute('value');
            else
              item.textContent = inputEmployeePayPerYearDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_employeePayPerYearDataset'));
        }

        if(inputTotalOpenshiftControlPlaneCores) {
          document.querySelectorAll('.Contract_Page_totalOpenshiftControlPlaneCores').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTotalOpenshiftControlPlaneCores.getAttribute('value');
            else
              item.textContent = inputTotalOpenshiftControlPlaneCores.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_totalOpenshiftControlPlaneCores'));
        }

        if(inputTotalOpenshiftInfraCores) {
          document.querySelectorAll('.Contract_Page_totalOpenshiftInfraCores').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTotalOpenshiftInfraCores.getAttribute('value');
            else
              item.textContent = inputTotalOpenshiftInfraCores.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_totalOpenshiftInfraCores'));
        }

        if(inputOpenshiftCostsPerClusterPerYearDataset) {
          document.querySelectorAll('.Contract_Page_openshiftCostsPerClusterPerYearDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftCostsPerClusterPerYearDataset.getAttribute('value');
            else
              item.textContent = inputOpenshiftCostsPerClusterPerYearDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftCostsPerClusterPerYearDataset'));
        }

        if(inputOpenshiftCostsPerYearDataset) {
          document.querySelectorAll('.Contract_Page_openshiftCostsPerYearDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpenshiftCostsPerYearDataset.getAttribute('value');
            else
              item.textContent = inputOpenshiftCostsPerYearDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_openshiftCostsPerYearDataset'));
        }

          pageGraphContract();
      });
    });
  }
}

function pageGraphContract(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'contracts';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphContractPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqContract_time').innerText = '';
  searchPage('Contract', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqContract_time').value = x;
      document.querySelector('#fqContract_time').onchange();
      searchPage('Contract');
    }, speedRate);
  });
}

// Search //

async function searchContract($formFilters, success, error) {
  var filters = searchContractFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchContractVals(filters, target, success, error);
}

function searchContractFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterRegion = $formFilters.querySelector('.valueRegion')?.value;
    if(filterRegion != null && filterRegion !== '')
      filters.push({ name: 'fq', value: 'region:' + filterRegion });

    var filterStartDate = $formFilters.querySelector('.valueStartDate')?.value;
    if(filterStartDate != null && filterStartDate !== '')
      filters.push({ name: 'fq', value: 'startDate:' + filterStartDate });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterAbbreviation = $formFilters.querySelector('.valueAbbreviation')?.value;
    if(filterAbbreviation != null && filterAbbreviation !== '')
      filters.push({ name: 'fq', value: 'abbreviation:' + filterAbbreviation });

    var filterInvestmentYearsTotal = $formFilters.querySelector('.valueInvestmentYearsTotal')?.value;
    if(filterInvestmentYearsTotal != null && filterInvestmentYearsTotal !== '')
      filters.push({ name: 'fq', value: 'investmentYearsTotal:' + filterInvestmentYearsTotal });

    var filterInvestmentYears = $formFilters.querySelector('.valueInvestmentYears')?.value;
    if(filterInvestmentYears != null && filterInvestmentYears !== '')
      filters.push({ name: 'fq', value: 'investmentYears:' + filterInvestmentYears });

    var filterInvestmentsPerYear = $formFilters.querySelector('.valueInvestmentsPerYear')?.value;
    if(filterInvestmentsPerYear != null && filterInvestmentsPerYear !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYear:' + filterInvestmentsPerYear });

    var filterInvestmentsPerYearCumulative = $formFilters.querySelector('.valueInvestmentsPerYearCumulative')?.value;
    if(filterInvestmentsPerYearCumulative != null && filterInvestmentsPerYearCumulative !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYearCumulative:' + filterInvestmentsPerYearCumulative });

    var filterAssetClasses = $formFilters.querySelector('.valueAssetClasses')?.value;
    if(filterAssetClasses != null && filterAssetClasses !== '')
      filters.push({ name: 'fq', value: 'assetClasses:' + filterAssetClasses });

    var filterAssetClassesTargetIrr = $formFilters.querySelector('.valueAssetClassesTargetIrr')?.value;
    if(filterAssetClassesTargetIrr != null && filterAssetClassesTargetIrr !== '')
      filters.push({ name: 'fq', value: 'assetClassesTargetIrr:' + filterAssetClassesTargetIrr });

    var filterRevenueStreams = $formFilters.querySelector('.valueRevenueStreams')?.value;
    if(filterRevenueStreams != null && filterRevenueStreams !== '')
      filters.push({ name: 'fq', value: 'revenueStreams:' + filterRevenueStreams });

    var filterEconomicOutputProjections = $formFilters.querySelector('.valueEconomicOutputProjections')?.value;
    if(filterEconomicOutputProjections != null && filterEconomicOutputProjections !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjections:' + filterEconomicOutputProjections });

    var filterTotalGdpImpact = $formFilters.querySelector('.valueTotalGdpImpact')?.value;
    if(filterTotalGdpImpact != null && filterTotalGdpImpact !== '')
      filters.push({ name: 'fq', value: 'totalGdpImpact:' + filterTotalGdpImpact });

    var filterEconomicOutputProjectionsDataset = $formFilters.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
    if(filterEconomicOutputProjectionsDataset != null && filterEconomicOutputProjectionsDataset !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjectionsDataset:' + filterEconomicOutputProjectionsDataset });

    var filterArchitectsPerYear = $formFilters.querySelector('.valueArchitectsPerYear')?.value;
    if(filterArchitectsPerYear != null && filterArchitectsPerYear !== '')
      filters.push({ name: 'fq', value: 'architectsPerYear:' + filterArchitectsPerYear });

    var filterRemoteDevelopersPerYear = $formFilters.querySelector('.valueRemoteDevelopersPerYear')?.value;
    if(filterRemoteDevelopersPerYear != null && filterRemoteDevelopersPerYear !== '')
      filters.push({ name: 'fq', value: 'remoteDevelopersPerYear:' + filterRemoteDevelopersPerYear });

    var filterOnsiteDevelopersPerYear = $formFilters.querySelector('.valueOnsiteDevelopersPerYear')?.value;
    if(filterOnsiteDevelopersPerYear != null && filterOnsiteDevelopersPerYear !== '')
      filters.push({ name: 'fq', value: 'onsiteDevelopersPerYear:' + filterOnsiteDevelopersPerYear });

    var filterInstructorsPerYear = $formFilters.querySelector('.valueInstructorsPerYear')?.value;
    if(filterInstructorsPerYear != null && filterInstructorsPerYear !== '')
      filters.push({ name: 'fq', value: 'instructorsPerYear:' + filterInstructorsPerYear });

    var filterRemoteDeveloperPayPerYear = $formFilters.querySelector('.valueRemoteDeveloperPayPerYear')?.value;
    if(filterRemoteDeveloperPayPerYear != null && filterRemoteDeveloperPayPerYear !== '')
      filters.push({ name: 'fq', value: 'remoteDeveloperPayPerYear:' + filterRemoteDeveloperPayPerYear });

    var filterOnsiteDeveloperPayPerYear = $formFilters.querySelector('.valueOnsiteDeveloperPayPerYear')?.value;
    if(filterOnsiteDeveloperPayPerYear != null && filterOnsiteDeveloperPayPerYear !== '')
      filters.push({ name: 'fq', value: 'onsiteDeveloperPayPerYear:' + filterOnsiteDeveloperPayPerYear });

    var filterArchitectPayPerYear = $formFilters.querySelector('.valueArchitectPayPerYear')?.value;
    if(filterArchitectPayPerYear != null && filterArchitectPayPerYear !== '')
      filters.push({ name: 'fq', value: 'architectPayPerYear:' + filterArchitectPayPerYear });

    var filterInstructorPayPerYear = $formFilters.querySelector('.valueInstructorPayPerYear')?.value;
    if(filterInstructorPayPerYear != null && filterInstructorPayPerYear !== '')
      filters.push({ name: 'fq', value: 'instructorPayPerYear:' + filterInstructorPayPerYear });

    var filterSubscriptionsPerYear = $formFilters.querySelector('.valueSubscriptionsPerYear')?.value;
    if(filterSubscriptionsPerYear != null && filterSubscriptionsPerYear !== '')
      filters.push({ name: 'fq', value: 'subscriptionsPerYear:' + filterSubscriptionsPerYear });

    var filterSubscriptionCostsPerYear = $formFilters.querySelector('.valueSubscriptionCostsPerYear')?.value;
    if(filterSubscriptionCostsPerYear != null && filterSubscriptionCostsPerYear !== '')
      filters.push({ name: 'fq', value: 'subscriptionCostsPerYear:' + filterSubscriptionCostsPerYear });

    var filterTotalSubscriptionCostPerYear = $formFilters.querySelector('.valueTotalSubscriptionCostPerYear')?.value;
    if(filterTotalSubscriptionCostPerYear != null && filterTotalSubscriptionCostPerYear !== '')
      filters.push({ name: 'fq', value: 'totalSubscriptionCostPerYear:' + filterTotalSubscriptionCostPerYear });

    var filterEmployeeSubscriptionCostsPerYear = $formFilters.querySelector('.valueEmployeeSubscriptionCostsPerYear')?.value;
    if(filterEmployeeSubscriptionCostsPerYear != null && filterEmployeeSubscriptionCostsPerYear !== '')
      filters.push({ name: 'fq', value: 'employeeSubscriptionCostsPerYear:' + filterEmployeeSubscriptionCostsPerYear });

    var filterGkeStagingEnvironments = $formFilters.querySelector('.valueGkeStagingEnvironments')?.value;
    if(filterGkeStagingEnvironments != null && filterGkeStagingEnvironments !== '')
      filters.push({ name: 'fq', value: 'gkeStagingEnvironments:' + filterGkeStagingEnvironments });

    var filterOpenshiftDedicatedManagementClusters = $formFilters.querySelector('.valueOpenshiftDedicatedManagementClusters')?.value;
    if(filterOpenshiftDedicatedManagementClusters != null && filterOpenshiftDedicatedManagementClusters !== '')
      filters.push({ name: 'fq', value: 'openshiftDedicatedManagementClusters:' + filterOpenshiftDedicatedManagementClusters });

    var filterOpenshiftDedicatedWorkerClusters = $formFilters.querySelector('.valueOpenshiftDedicatedWorkerClusters')?.value;
    if(filterOpenshiftDedicatedWorkerClusters != null && filterOpenshiftDedicatedWorkerClusters !== '')
      filters.push({ name: 'fq', value: 'openshiftDedicatedWorkerClusters:' + filterOpenshiftDedicatedWorkerClusters });

    var filterOpenshiftControlPlaneNodes = $formFilters.querySelector('.valueOpenshiftControlPlaneNodes')?.value;
    if(filterOpenshiftControlPlaneNodes != null && filterOpenshiftControlPlaneNodes !== '')
      filters.push({ name: 'fq', value: 'openshiftControlPlaneNodes:' + filterOpenshiftControlPlaneNodes });

    var filterOpenshiftControlPlaneCores = $formFilters.querySelector('.valueOpenshiftControlPlaneCores')?.value;
    if(filterOpenshiftControlPlaneCores != null && filterOpenshiftControlPlaneCores !== '')
      filters.push({ name: 'fq', value: 'openshiftControlPlaneCores:' + filterOpenshiftControlPlaneCores });

    var filterOpenshiftControlPlaneHourlyPricePerCore = $formFilters.querySelector('.valueOpenshiftControlPlaneHourlyPricePerCore')?.value;
    if(filterOpenshiftControlPlaneHourlyPricePerCore != null && filterOpenshiftControlPlaneHourlyPricePerCore !== '')
      filters.push({ name: 'fq', value: 'openshiftControlPlaneHourlyPricePerCore:' + filterOpenshiftControlPlaneHourlyPricePerCore });

    var filterOpenshiftInfraNodes = $formFilters.querySelector('.valueOpenshiftInfraNodes')?.value;
    if(filterOpenshiftInfraNodes != null && filterOpenshiftInfraNodes !== '')
      filters.push({ name: 'fq', value: 'openshiftInfraNodes:' + filterOpenshiftInfraNodes });

    var filterOpenshiftInfraCores = $formFilters.querySelector('.valueOpenshiftInfraCores')?.value;
    if(filterOpenshiftInfraCores != null && filterOpenshiftInfraCores !== '')
      filters.push({ name: 'fq', value: 'openshiftInfraCores:' + filterOpenshiftInfraCores });

    var filterOpenshiftInfraHourlyPricePerCore = $formFilters.querySelector('.valueOpenshiftInfraHourlyPricePerCore')?.value;
    if(filterOpenshiftInfraHourlyPricePerCore != null && filterOpenshiftInfraHourlyPricePerCore !== '')
      filters.push({ name: 'fq', value: 'openshiftInfraHourlyPricePerCore:' + filterOpenshiftInfraHourlyPricePerCore });

    var filterManagementClusterNodes = $formFilters.querySelector('.valueManagementClusterNodes')?.value;
    if(filterManagementClusterNodes != null && filterManagementClusterNodes !== '')
      filters.push({ name: 'fq', value: 'managementClusterNodes:' + filterManagementClusterNodes });

    var filterWorkerClusterApplicationNodes = $formFilters.querySelector('.valueWorkerClusterApplicationNodes')?.value;
    if(filterWorkerClusterApplicationNodes != null && filterWorkerClusterApplicationNodes !== '')
      filters.push({ name: 'fq', value: 'workerClusterApplicationNodes:' + filterWorkerClusterApplicationNodes });

    var filterOpenshiftWorkerCores = $formFilters.querySelector('.valueOpenshiftWorkerCores')?.value;
    if(filterOpenshiftWorkerCores != null && filterOpenshiftWorkerCores !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerCores:' + filterOpenshiftWorkerCores });

    var filterOpenshiftManagementClusterWorkerNodesPerYear = $formFilters.querySelector('.valueOpenshiftManagementClusterWorkerNodesPerYear')?.value;
    if(filterOpenshiftManagementClusterWorkerNodesPerYear != null && filterOpenshiftManagementClusterWorkerNodesPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftManagementClusterWorkerNodesPerYear:' + filterOpenshiftManagementClusterWorkerNodesPerYear });

    var filterOpenshiftApplicationClusterWorkerNodesPerYear = $formFilters.querySelector('.valueOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
    if(filterOpenshiftApplicationClusterWorkerNodesPerYear != null && filterOpenshiftApplicationClusterWorkerNodesPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftApplicationClusterWorkerNodesPerYear:' + filterOpenshiftApplicationClusterWorkerNodesPerYear });

    var filterOpenshiftWorkerNodesPerYear = $formFilters.querySelector('.valueOpenshiftWorkerNodesPerYear')?.value;
    if(filterOpenshiftWorkerNodesPerYear != null && filterOpenshiftWorkerNodesPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerNodesPerYear:' + filterOpenshiftWorkerNodesPerYear });

    var filterOpenshiftManagementClusterWorkerCoresPerYear = $formFilters.querySelector('.valueOpenshiftManagementClusterWorkerCoresPerYear')?.value;
    if(filterOpenshiftManagementClusterWorkerCoresPerYear != null && filterOpenshiftManagementClusterWorkerCoresPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftManagementClusterWorkerCoresPerYear:' + filterOpenshiftManagementClusterWorkerCoresPerYear });

    var filterOpenshiftApplicationClusterWorkerCoresPerYear = $formFilters.querySelector('.valueOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
    if(filterOpenshiftApplicationClusterWorkerCoresPerYear != null && filterOpenshiftApplicationClusterWorkerCoresPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftApplicationClusterWorkerCoresPerYear:' + filterOpenshiftApplicationClusterWorkerCoresPerYear });

    var filterOpenshiftWorkerCoresPerYear = $formFilters.querySelector('.valueOpenshiftWorkerCoresPerYear')?.value;
    if(filterOpenshiftWorkerCoresPerYear != null && filterOpenshiftWorkerCoresPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerCoresPerYear:' + filterOpenshiftWorkerCoresPerYear });

    var filterOpenshiftWorkerHourlyPricePerCore = $formFilters.querySelector('.valueOpenshiftWorkerHourlyPricePerCore')?.value;
    if(filterOpenshiftWorkerHourlyPricePerCore != null && filterOpenshiftWorkerHourlyPricePerCore !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerHourlyPricePerCore:' + filterOpenshiftWorkerHourlyPricePerCore });

    var filterOpenshiftSSDStorageTiBPerYear = $formFilters.querySelector('.valueOpenshiftSSDStorageTiBPerYear')?.value;
    if(filterOpenshiftSSDStorageTiBPerYear != null && filterOpenshiftSSDStorageTiBPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftSSDStorageTiBPerYear:' + filterOpenshiftSSDStorageTiBPerYear });

    var filterOpenshiftSSDStoragePricePerGiB = $formFilters.querySelector('.valueOpenshiftSSDStoragePricePerGiB')?.value;
    if(filterOpenshiftSSDStoragePricePerGiB != null && filterOpenshiftSSDStoragePricePerGiB !== '')
      filters.push({ name: 'fq', value: 'openshiftSSDStoragePricePerGiB:' + filterOpenshiftSSDStoragePricePerGiB });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterDisplayName = $formFilters.querySelector('.valueDisplayName')?.value;
    if(filterDisplayName != null && filterDisplayName !== '')
      filters.push({ name: 'fq', value: 'displayName:' + filterDisplayName });

    var filterContractId = $formFilters.querySelector('.valueContractId')?.value;
    if(filterContractId != null && filterContractId !== '')
      filters.push({ name: 'fq', value: 'contractId:' + filterContractId });

    var filterEmployeesPerYearDataset = $formFilters.querySelector('.valueEmployeesPerYearDataset')?.value;
    if(filterEmployeesPerYearDataset != null && filterEmployeesPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'employeesPerYearDataset:' + filterEmployeesPerYearDataset });

    var filterSubscriptionCostsPerYearDataset = $formFilters.querySelector('.valueSubscriptionCostsPerYearDataset')?.value;
    if(filterSubscriptionCostsPerYearDataset != null && filterSubscriptionCostsPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'subscriptionCostsPerYearDataset:' + filterSubscriptionCostsPerYearDataset });

    var filterEmployeePayPerYearDataset = $formFilters.querySelector('.valueEmployeePayPerYearDataset')?.value;
    if(filterEmployeePayPerYearDataset != null && filterEmployeePayPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'employeePayPerYearDataset:' + filterEmployeePayPerYearDataset });

    var filterTotalOpenshiftControlPlaneCores = $formFilters.querySelector('.valueTotalOpenshiftControlPlaneCores')?.value;
    if(filterTotalOpenshiftControlPlaneCores != null && filterTotalOpenshiftControlPlaneCores !== '')
      filters.push({ name: 'fq', value: 'totalOpenshiftControlPlaneCores:' + filterTotalOpenshiftControlPlaneCores });

    var filterTotalOpenshiftInfraCores = $formFilters.querySelector('.valueTotalOpenshiftInfraCores')?.value;
    if(filterTotalOpenshiftInfraCores != null && filterTotalOpenshiftInfraCores !== '')
      filters.push({ name: 'fq', value: 'totalOpenshiftInfraCores:' + filterTotalOpenshiftInfraCores });

    var filterOpenshiftCostsPerClusterPerYearDataset = $formFilters.querySelector('.valueOpenshiftCostsPerClusterPerYearDataset')?.value;
    if(filterOpenshiftCostsPerClusterPerYearDataset != null && filterOpenshiftCostsPerClusterPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'openshiftCostsPerClusterPerYearDataset:' + filterOpenshiftCostsPerClusterPerYearDataset });

    var filterOpenshiftCostsPerYearDataset = $formFilters.querySelector('.valueOpenshiftCostsPerYearDataset')?.value;
    if(filterOpenshiftCostsPerYearDataset != null && filterOpenshiftCostsPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'openshiftCostsPerYearDataset:' + filterOpenshiftCostsPerYearDataset });
  }
  return filters;
}

function searchContractVals(filters, target, success, error) {


  fetch(
    '/en-us/api/contract?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestContractObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="{{ FONTAWESOME_STYLE }} fa-file-contract"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchContractVals($formFilters, target, success, error);
}

// GET //

async function getContract(pk) {
  fetch(
    '/en-us/api/contract/' + contractId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchContract($formFilters, $formValues, target, contractId, success, error) {
  var filters = patchContractFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueRegion = $formValues.querySelector('.valueRegion')?.value;
  var removeRegion = $formValues.querySelector('.removeRegion')?.value === 'true';
  var setRegion = removeRegion ? null : $formValues.querySelector('.setRegion')?.value;
  var addRegion = $formValues.querySelector('.addRegion')?.value;
  if(removeRegion || setRegion != null && setRegion !== '')
    vals['setRegion'] = setRegion;
  if(addRegion != null && addRegion !== '')
    vals['addRegion'] = addRegion;
  var removeRegion = $formValues.querySelector('.removeRegion')?.value;
  if(removeRegion != null && removeRegion !== '')
    vals['removeRegion'] = removeRegion;

  var valueStartDate = $formValues.querySelector('.valueStartDate')?.value;
  var removeStartDate = $formValues.querySelector('.removeStartDate')?.value === 'true';
  var setStartDate = removeStartDate ? null : $formValues.querySelector('.setStartDate')?.value;
  var addStartDate = $formValues.querySelector('.addStartDate')?.value;
  if(removeStartDate || setStartDate != null && setStartDate !== '')
    vals['setStartDate'] = setStartDate;
  if(addStartDate != null && addStartDate !== '')
    vals['addStartDate'] = addStartDate;
  var removeStartDate = $formValues.querySelector('.removeStartDate')?.value;
  if(removeStartDate != null && removeStartDate !== '')
    vals['removeStartDate'] = removeStartDate;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueAbbreviation = $formValues.querySelector('.valueAbbreviation')?.value;
  var removeAbbreviation = $formValues.querySelector('.removeAbbreviation')?.value === 'true';
  var setAbbreviation = removeAbbreviation ? null : $formValues.querySelector('.setAbbreviation')?.value;
  var addAbbreviation = $formValues.querySelector('.addAbbreviation')?.value;
  if(removeAbbreviation || setAbbreviation != null && setAbbreviation !== '')
    vals['setAbbreviation'] = setAbbreviation;
  if(addAbbreviation != null && addAbbreviation !== '')
    vals['addAbbreviation'] = addAbbreviation;
  var removeAbbreviation = $formValues.querySelector('.removeAbbreviation')?.value;
  if(removeAbbreviation != null && removeAbbreviation !== '')
    vals['removeAbbreviation'] = removeAbbreviation;

  var valueInvestmentYearsTotal = $formValues.querySelector('.valueInvestmentYearsTotal')?.value;
  var removeInvestmentYearsTotal = $formValues.querySelector('.removeInvestmentYearsTotal')?.value === 'true';
  var setInvestmentYearsTotal = removeInvestmentYearsTotal ? null : $formValues.querySelector('.setInvestmentYearsTotal')?.value;
  var addInvestmentYearsTotal = $formValues.querySelector('.addInvestmentYearsTotal')?.value;
  if(removeInvestmentYearsTotal || setInvestmentYearsTotal != null && setInvestmentYearsTotal !== '')
    vals['setInvestmentYearsTotal'] = setInvestmentYearsTotal;
  if(addInvestmentYearsTotal != null && addInvestmentYearsTotal !== '')
    vals['addInvestmentYearsTotal'] = addInvestmentYearsTotal;
  var removeInvestmentYearsTotal = $formValues.querySelector('.removeInvestmentYearsTotal')?.value;
  if(removeInvestmentYearsTotal != null && removeInvestmentYearsTotal !== '')
    vals['removeInvestmentYearsTotal'] = removeInvestmentYearsTotal;

  var valueInvestmentYears = $formValues.querySelector('.valueInvestmentYears')?.value;
  var removeInvestmentYears = $formValues.querySelector('.removeInvestmentYears')?.value === 'true';
  var setInvestmentYears = removeInvestmentYears ? null : $formValues.querySelector('.setInvestmentYears')?.value;
  var addInvestmentYears = $formValues.querySelector('.addInvestmentYears')?.value;
  if(removeInvestmentYears || setInvestmentYears != null && setInvestmentYears !== '')
    vals['setInvestmentYears'] = JSON.parse(setInvestmentYears);
  if(addInvestmentYears != null && addInvestmentYears !== '')
    vals['addInvestmentYears'] = addInvestmentYears;
  var removeInvestmentYears = $formValues.querySelector('.removeInvestmentYears')?.value;
  if(removeInvestmentYears != null && removeInvestmentYears !== '')
    vals['removeInvestmentYears'] = removeInvestmentYears;

  var valueInvestmentsPerYear = $formValues.querySelector('.valueInvestmentsPerYear')?.value;
  var removeInvestmentsPerYear = $formValues.querySelector('.removeInvestmentsPerYear')?.value === 'true';
  var setInvestmentsPerYear = removeInvestmentsPerYear ? null : $formValues.querySelector('.setInvestmentsPerYear')?.value;
  var addInvestmentsPerYear = $formValues.querySelector('.addInvestmentsPerYear')?.value;
  if(removeInvestmentsPerYear || setInvestmentsPerYear != null && setInvestmentsPerYear !== '')
    vals['setInvestmentsPerYear'] = JSON.parse(setInvestmentsPerYear);
  if(addInvestmentsPerYear != null && addInvestmentsPerYear !== '')
    vals['addInvestmentsPerYear'] = addInvestmentsPerYear;
  var removeInvestmentsPerYear = $formValues.querySelector('.removeInvestmentsPerYear')?.value;
  if(removeInvestmentsPerYear != null && removeInvestmentsPerYear !== '')
    vals['removeInvestmentsPerYear'] = removeInvestmentsPerYear;

  var valueInvestmentsPerYearCumulative = $formValues.querySelector('.valueInvestmentsPerYearCumulative')?.value;
  var removeInvestmentsPerYearCumulative = $formValues.querySelector('.removeInvestmentsPerYearCumulative')?.value === 'true';
  var setInvestmentsPerYearCumulative = removeInvestmentsPerYearCumulative ? null : $formValues.querySelector('.setInvestmentsPerYearCumulative')?.value;
  var addInvestmentsPerYearCumulative = $formValues.querySelector('.addInvestmentsPerYearCumulative')?.value;
  if(removeInvestmentsPerYearCumulative || setInvestmentsPerYearCumulative != null && setInvestmentsPerYearCumulative !== '')
    vals['setInvestmentsPerYearCumulative'] = JSON.parse(setInvestmentsPerYearCumulative);
  if(addInvestmentsPerYearCumulative != null && addInvestmentsPerYearCumulative !== '')
    vals['addInvestmentsPerYearCumulative'] = addInvestmentsPerYearCumulative;
  var removeInvestmentsPerYearCumulative = $formValues.querySelector('.removeInvestmentsPerYearCumulative')?.value;
  if(removeInvestmentsPerYearCumulative != null && removeInvestmentsPerYearCumulative !== '')
    vals['removeInvestmentsPerYearCumulative'] = removeInvestmentsPerYearCumulative;

  var valueAssetClasses = $formValues.querySelector('.valueAssetClasses')?.value;
  var removeAssetClasses = $formValues.querySelector('.removeAssetClasses')?.value === 'true';
  var setAssetClasses = removeAssetClasses ? null : $formValues.querySelector('.setAssetClasses')?.value;
  var addAssetClasses = $formValues.querySelector('.addAssetClasses')?.value;
  if(removeAssetClasses || setAssetClasses != null && setAssetClasses !== '')
    vals['setAssetClasses'] = JSON.parse(setAssetClasses);
  if(addAssetClasses != null && addAssetClasses !== '')
    vals['addAssetClasses'] = addAssetClasses;
  var removeAssetClasses = $formValues.querySelector('.removeAssetClasses')?.value;
  if(removeAssetClasses != null && removeAssetClasses !== '')
    vals['removeAssetClasses'] = removeAssetClasses;

  var valueAssetClassesTargetIrr = $formValues.querySelector('.valueAssetClassesTargetIrr')?.value;
  var removeAssetClassesTargetIrr = $formValues.querySelector('.removeAssetClassesTargetIrr')?.value === 'true';
  var setAssetClassesTargetIrr = removeAssetClassesTargetIrr ? null : $formValues.querySelector('.setAssetClassesTargetIrr')?.value;
  var addAssetClassesTargetIrr = $formValues.querySelector('.addAssetClassesTargetIrr')?.value;
  if(removeAssetClassesTargetIrr || setAssetClassesTargetIrr != null && setAssetClassesTargetIrr !== '')
    vals['setAssetClassesTargetIrr'] = JSON.parse(setAssetClassesTargetIrr);
  if(addAssetClassesTargetIrr != null && addAssetClassesTargetIrr !== '')
    vals['addAssetClassesTargetIrr'] = addAssetClassesTargetIrr;
  var removeAssetClassesTargetIrr = $formValues.querySelector('.removeAssetClassesTargetIrr')?.value;
  if(removeAssetClassesTargetIrr != null && removeAssetClassesTargetIrr !== '')
    vals['removeAssetClassesTargetIrr'] = removeAssetClassesTargetIrr;

  var valueRevenueStreams = $formValues.querySelector('.valueRevenueStreams')?.value;
  var removeRevenueStreams = $formValues.querySelector('.removeRevenueStreams')?.value === 'true';
  var setRevenueStreams = removeRevenueStreams ? null : $formValues.querySelector('.setRevenueStreams')?.value;
  var addRevenueStreams = $formValues.querySelector('.addRevenueStreams')?.value;
  if(removeRevenueStreams || setRevenueStreams != null && setRevenueStreams !== '')
    vals['setRevenueStreams'] = JSON.parse(setRevenueStreams);
  if(addRevenueStreams != null && addRevenueStreams !== '')
    vals['addRevenueStreams'] = addRevenueStreams;
  var removeRevenueStreams = $formValues.querySelector('.removeRevenueStreams')?.value;
  if(removeRevenueStreams != null && removeRevenueStreams !== '')
    vals['removeRevenueStreams'] = removeRevenueStreams;

  var valueEconomicOutputProjections = $formValues.querySelector('.valueEconomicOutputProjections')?.value;
  var removeEconomicOutputProjections = $formValues.querySelector('.removeEconomicOutputProjections')?.value === 'true';
  var setEconomicOutputProjections = removeEconomicOutputProjections ? null : $formValues.querySelector('.setEconomicOutputProjections')?.value;
  var addEconomicOutputProjections = $formValues.querySelector('.addEconomicOutputProjections')?.value;
  if(removeEconomicOutputProjections || setEconomicOutputProjections != null && setEconomicOutputProjections !== '')
    vals['setEconomicOutputProjections'] = JSON.parse(setEconomicOutputProjections);
  if(addEconomicOutputProjections != null && addEconomicOutputProjections !== '')
    vals['addEconomicOutputProjections'] = addEconomicOutputProjections;
  var removeEconomicOutputProjections = $formValues.querySelector('.removeEconomicOutputProjections')?.value;
  if(removeEconomicOutputProjections != null && removeEconomicOutputProjections !== '')
    vals['removeEconomicOutputProjections'] = removeEconomicOutputProjections;

  var valueTotalGdpImpact = $formValues.querySelector('.valueTotalGdpImpact')?.value;
  var removeTotalGdpImpact = $formValues.querySelector('.removeTotalGdpImpact')?.value === 'true';
  var setTotalGdpImpact = removeTotalGdpImpact ? null : $formValues.querySelector('.setTotalGdpImpact')?.value;
  var addTotalGdpImpact = $formValues.querySelector('.addTotalGdpImpact')?.value;
  if(removeTotalGdpImpact || setTotalGdpImpact != null && setTotalGdpImpact !== '')
    vals['setTotalGdpImpact'] = setTotalGdpImpact;
  if(addTotalGdpImpact != null && addTotalGdpImpact !== '')
    vals['addTotalGdpImpact'] = addTotalGdpImpact;
  var removeTotalGdpImpact = $formValues.querySelector('.removeTotalGdpImpact')?.value;
  if(removeTotalGdpImpact != null && removeTotalGdpImpact !== '')
    vals['removeTotalGdpImpact'] = removeTotalGdpImpact;

  var valueEconomicOutputProjectionsDataset = $formValues.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
  var removeEconomicOutputProjectionsDataset = $formValues.querySelector('.removeEconomicOutputProjectionsDataset')?.value === 'true';
  var setEconomicOutputProjectionsDataset = removeEconomicOutputProjectionsDataset ? null : $formValues.querySelector('.setEconomicOutputProjectionsDataset')?.value;
  var addEconomicOutputProjectionsDataset = $formValues.querySelector('.addEconomicOutputProjectionsDataset')?.value;
  if(removeEconomicOutputProjectionsDataset || setEconomicOutputProjectionsDataset != null && setEconomicOutputProjectionsDataset !== '')
    vals['setEconomicOutputProjectionsDataset'] = JSON.parse(setEconomicOutputProjectionsDataset);
  if(addEconomicOutputProjectionsDataset != null && addEconomicOutputProjectionsDataset !== '')
    vals['addEconomicOutputProjectionsDataset'] = addEconomicOutputProjectionsDataset;
  var removeEconomicOutputProjectionsDataset = $formValues.querySelector('.removeEconomicOutputProjectionsDataset')?.value;
  if(removeEconomicOutputProjectionsDataset != null && removeEconomicOutputProjectionsDataset !== '')
    vals['removeEconomicOutputProjectionsDataset'] = removeEconomicOutputProjectionsDataset;

  var valueCumulativeInvestmentChart = $formValues.querySelector('.valueCumulativeInvestmentChart')?.value;
  var removeCumulativeInvestmentChart = $formValues.querySelector('.removeCumulativeInvestmentChart')?.value === 'true';
  var setCumulativeInvestmentChart = removeCumulativeInvestmentChart ? null : $formValues.querySelector('.setCumulativeInvestmentChart')?.value;
  var addCumulativeInvestmentChart = $formValues.querySelector('.addCumulativeInvestmentChart')?.value;
  if(removeCumulativeInvestmentChart || setCumulativeInvestmentChart != null && setCumulativeInvestmentChart !== '')
    vals['setCumulativeInvestmentChart'] = JSON.parse(setCumulativeInvestmentChart);
  if(addCumulativeInvestmentChart != null && addCumulativeInvestmentChart !== '')
    vals['addCumulativeInvestmentChart'] = addCumulativeInvestmentChart;
  var removeCumulativeInvestmentChart = $formValues.querySelector('.removeCumulativeInvestmentChart')?.value;
  if(removeCumulativeInvestmentChart != null && removeCumulativeInvestmentChart !== '')
    vals['removeCumulativeInvestmentChart'] = removeCumulativeInvestmentChart;

  var valueArchitectsPerYear = $formValues.querySelector('.valueArchitectsPerYear')?.value;
  var removeArchitectsPerYear = $formValues.querySelector('.removeArchitectsPerYear')?.value === 'true';
  var setArchitectsPerYear = removeArchitectsPerYear ? null : $formValues.querySelector('.setArchitectsPerYear')?.value;
  var addArchitectsPerYear = $formValues.querySelector('.addArchitectsPerYear')?.value;
  if(removeArchitectsPerYear || setArchitectsPerYear != null && setArchitectsPerYear !== '')
    vals['setArchitectsPerYear'] = JSON.parse(setArchitectsPerYear);
  if(addArchitectsPerYear != null && addArchitectsPerYear !== '')
    vals['addArchitectsPerYear'] = addArchitectsPerYear;
  var removeArchitectsPerYear = $formValues.querySelector('.removeArchitectsPerYear')?.value;
  if(removeArchitectsPerYear != null && removeArchitectsPerYear !== '')
    vals['removeArchitectsPerYear'] = removeArchitectsPerYear;

  var valueRemoteDevelopersPerYear = $formValues.querySelector('.valueRemoteDevelopersPerYear')?.value;
  var removeRemoteDevelopersPerYear = $formValues.querySelector('.removeRemoteDevelopersPerYear')?.value === 'true';
  var setRemoteDevelopersPerYear = removeRemoteDevelopersPerYear ? null : $formValues.querySelector('.setRemoteDevelopersPerYear')?.value;
  var addRemoteDevelopersPerYear = $formValues.querySelector('.addRemoteDevelopersPerYear')?.value;
  if(removeRemoteDevelopersPerYear || setRemoteDevelopersPerYear != null && setRemoteDevelopersPerYear !== '')
    vals['setRemoteDevelopersPerYear'] = JSON.parse(setRemoteDevelopersPerYear);
  if(addRemoteDevelopersPerYear != null && addRemoteDevelopersPerYear !== '')
    vals['addRemoteDevelopersPerYear'] = addRemoteDevelopersPerYear;
  var removeRemoteDevelopersPerYear = $formValues.querySelector('.removeRemoteDevelopersPerYear')?.value;
  if(removeRemoteDevelopersPerYear != null && removeRemoteDevelopersPerYear !== '')
    vals['removeRemoteDevelopersPerYear'] = removeRemoteDevelopersPerYear;

  var valueOnsiteDevelopersPerYear = $formValues.querySelector('.valueOnsiteDevelopersPerYear')?.value;
  var removeOnsiteDevelopersPerYear = $formValues.querySelector('.removeOnsiteDevelopersPerYear')?.value === 'true';
  var setOnsiteDevelopersPerYear = removeOnsiteDevelopersPerYear ? null : $formValues.querySelector('.setOnsiteDevelopersPerYear')?.value;
  var addOnsiteDevelopersPerYear = $formValues.querySelector('.addOnsiteDevelopersPerYear')?.value;
  if(removeOnsiteDevelopersPerYear || setOnsiteDevelopersPerYear != null && setOnsiteDevelopersPerYear !== '')
    vals['setOnsiteDevelopersPerYear'] = JSON.parse(setOnsiteDevelopersPerYear);
  if(addOnsiteDevelopersPerYear != null && addOnsiteDevelopersPerYear !== '')
    vals['addOnsiteDevelopersPerYear'] = addOnsiteDevelopersPerYear;
  var removeOnsiteDevelopersPerYear = $formValues.querySelector('.removeOnsiteDevelopersPerYear')?.value;
  if(removeOnsiteDevelopersPerYear != null && removeOnsiteDevelopersPerYear !== '')
    vals['removeOnsiteDevelopersPerYear'] = removeOnsiteDevelopersPerYear;

  var valueInstructorsPerYear = $formValues.querySelector('.valueInstructorsPerYear')?.value;
  var removeInstructorsPerYear = $formValues.querySelector('.removeInstructorsPerYear')?.value === 'true';
  var setInstructorsPerYear = removeInstructorsPerYear ? null : $formValues.querySelector('.setInstructorsPerYear')?.value;
  var addInstructorsPerYear = $formValues.querySelector('.addInstructorsPerYear')?.value;
  if(removeInstructorsPerYear || setInstructorsPerYear != null && setInstructorsPerYear !== '')
    vals['setInstructorsPerYear'] = JSON.parse(setInstructorsPerYear);
  if(addInstructorsPerYear != null && addInstructorsPerYear !== '')
    vals['addInstructorsPerYear'] = addInstructorsPerYear;
  var removeInstructorsPerYear = $formValues.querySelector('.removeInstructorsPerYear')?.value;
  if(removeInstructorsPerYear != null && removeInstructorsPerYear !== '')
    vals['removeInstructorsPerYear'] = removeInstructorsPerYear;

  var valueRemoteDeveloperPayPerYear = $formValues.querySelector('.valueRemoteDeveloperPayPerYear')?.value;
  var removeRemoteDeveloperPayPerYear = $formValues.querySelector('.removeRemoteDeveloperPayPerYear')?.value === 'true';
  var setRemoteDeveloperPayPerYear = removeRemoteDeveloperPayPerYear ? null : $formValues.querySelector('.setRemoteDeveloperPayPerYear')?.value;
  var addRemoteDeveloperPayPerYear = $formValues.querySelector('.addRemoteDeveloperPayPerYear')?.value;
  if(removeRemoteDeveloperPayPerYear || setRemoteDeveloperPayPerYear != null && setRemoteDeveloperPayPerYear !== '')
    vals['setRemoteDeveloperPayPerYear'] = setRemoteDeveloperPayPerYear;
  if(addRemoteDeveloperPayPerYear != null && addRemoteDeveloperPayPerYear !== '')
    vals['addRemoteDeveloperPayPerYear'] = addRemoteDeveloperPayPerYear;
  var removeRemoteDeveloperPayPerYear = $formValues.querySelector('.removeRemoteDeveloperPayPerYear')?.value;
  if(removeRemoteDeveloperPayPerYear != null && removeRemoteDeveloperPayPerYear !== '')
    vals['removeRemoteDeveloperPayPerYear'] = removeRemoteDeveloperPayPerYear;

  var valueOnsiteDeveloperPayPerYear = $formValues.querySelector('.valueOnsiteDeveloperPayPerYear')?.value;
  var removeOnsiteDeveloperPayPerYear = $formValues.querySelector('.removeOnsiteDeveloperPayPerYear')?.value === 'true';
  var setOnsiteDeveloperPayPerYear = removeOnsiteDeveloperPayPerYear ? null : $formValues.querySelector('.setOnsiteDeveloperPayPerYear')?.value;
  var addOnsiteDeveloperPayPerYear = $formValues.querySelector('.addOnsiteDeveloperPayPerYear')?.value;
  if(removeOnsiteDeveloperPayPerYear || setOnsiteDeveloperPayPerYear != null && setOnsiteDeveloperPayPerYear !== '')
    vals['setOnsiteDeveloperPayPerYear'] = setOnsiteDeveloperPayPerYear;
  if(addOnsiteDeveloperPayPerYear != null && addOnsiteDeveloperPayPerYear !== '')
    vals['addOnsiteDeveloperPayPerYear'] = addOnsiteDeveloperPayPerYear;
  var removeOnsiteDeveloperPayPerYear = $formValues.querySelector('.removeOnsiteDeveloperPayPerYear')?.value;
  if(removeOnsiteDeveloperPayPerYear != null && removeOnsiteDeveloperPayPerYear !== '')
    vals['removeOnsiteDeveloperPayPerYear'] = removeOnsiteDeveloperPayPerYear;

  var valueArchitectPayPerYear = $formValues.querySelector('.valueArchitectPayPerYear')?.value;
  var removeArchitectPayPerYear = $formValues.querySelector('.removeArchitectPayPerYear')?.value === 'true';
  var setArchitectPayPerYear = removeArchitectPayPerYear ? null : $formValues.querySelector('.setArchitectPayPerYear')?.value;
  var addArchitectPayPerYear = $formValues.querySelector('.addArchitectPayPerYear')?.value;
  if(removeArchitectPayPerYear || setArchitectPayPerYear != null && setArchitectPayPerYear !== '')
    vals['setArchitectPayPerYear'] = setArchitectPayPerYear;
  if(addArchitectPayPerYear != null && addArchitectPayPerYear !== '')
    vals['addArchitectPayPerYear'] = addArchitectPayPerYear;
  var removeArchitectPayPerYear = $formValues.querySelector('.removeArchitectPayPerYear')?.value;
  if(removeArchitectPayPerYear != null && removeArchitectPayPerYear !== '')
    vals['removeArchitectPayPerYear'] = removeArchitectPayPerYear;

  var valueInstructorPayPerYear = $formValues.querySelector('.valueInstructorPayPerYear')?.value;
  var removeInstructorPayPerYear = $formValues.querySelector('.removeInstructorPayPerYear')?.value === 'true';
  var setInstructorPayPerYear = removeInstructorPayPerYear ? null : $formValues.querySelector('.setInstructorPayPerYear')?.value;
  var addInstructorPayPerYear = $formValues.querySelector('.addInstructorPayPerYear')?.value;
  if(removeInstructorPayPerYear || setInstructorPayPerYear != null && setInstructorPayPerYear !== '')
    vals['setInstructorPayPerYear'] = setInstructorPayPerYear;
  if(addInstructorPayPerYear != null && addInstructorPayPerYear !== '')
    vals['addInstructorPayPerYear'] = addInstructorPayPerYear;
  var removeInstructorPayPerYear = $formValues.querySelector('.removeInstructorPayPerYear')?.value;
  if(removeInstructorPayPerYear != null && removeInstructorPayPerYear !== '')
    vals['removeInstructorPayPerYear'] = removeInstructorPayPerYear;

  var valueSubscriptionsPerYear = $formValues.querySelector('.valueSubscriptionsPerYear')?.value;
  var removeSubscriptionsPerYear = $formValues.querySelector('.removeSubscriptionsPerYear')?.value === 'true';
  var setSubscriptionsPerYear = removeSubscriptionsPerYear ? null : $formValues.querySelector('.setSubscriptionsPerYear')?.value;
  var addSubscriptionsPerYear = $formValues.querySelector('.addSubscriptionsPerYear')?.value;
  if(removeSubscriptionsPerYear || setSubscriptionsPerYear != null && setSubscriptionsPerYear !== '')
    vals['setSubscriptionsPerYear'] = JSON.parse(setSubscriptionsPerYear);
  if(addSubscriptionsPerYear != null && addSubscriptionsPerYear !== '')
    vals['addSubscriptionsPerYear'] = addSubscriptionsPerYear;
  var removeSubscriptionsPerYear = $formValues.querySelector('.removeSubscriptionsPerYear')?.value;
  if(removeSubscriptionsPerYear != null && removeSubscriptionsPerYear !== '')
    vals['removeSubscriptionsPerYear'] = removeSubscriptionsPerYear;

  var valueSubscriptionCostsPerYear = $formValues.querySelector('.valueSubscriptionCostsPerYear')?.value;
  var removeSubscriptionCostsPerYear = $formValues.querySelector('.removeSubscriptionCostsPerYear')?.value === 'true';
  var setSubscriptionCostsPerYear = removeSubscriptionCostsPerYear ? null : $formValues.querySelector('.setSubscriptionCostsPerYear')?.value;
  var addSubscriptionCostsPerYear = $formValues.querySelector('.addSubscriptionCostsPerYear')?.value;
  if(removeSubscriptionCostsPerYear || setSubscriptionCostsPerYear != null && setSubscriptionCostsPerYear !== '')
    vals['setSubscriptionCostsPerYear'] = JSON.parse(setSubscriptionCostsPerYear);
  if(addSubscriptionCostsPerYear != null && addSubscriptionCostsPerYear !== '')
    vals['addSubscriptionCostsPerYear'] = addSubscriptionCostsPerYear;
  var removeSubscriptionCostsPerYear = $formValues.querySelector('.removeSubscriptionCostsPerYear')?.value;
  if(removeSubscriptionCostsPerYear != null && removeSubscriptionCostsPerYear !== '')
    vals['removeSubscriptionCostsPerYear'] = removeSubscriptionCostsPerYear;

  var valueTotalSubscriptionCostPerYear = $formValues.querySelector('.valueTotalSubscriptionCostPerYear')?.value;
  var removeTotalSubscriptionCostPerYear = $formValues.querySelector('.removeTotalSubscriptionCostPerYear')?.value === 'true';
  var setTotalSubscriptionCostPerYear = removeTotalSubscriptionCostPerYear ? null : $formValues.querySelector('.setTotalSubscriptionCostPerYear')?.value;
  var addTotalSubscriptionCostPerYear = $formValues.querySelector('.addTotalSubscriptionCostPerYear')?.value;
  if(removeTotalSubscriptionCostPerYear || setTotalSubscriptionCostPerYear != null && setTotalSubscriptionCostPerYear !== '')
    vals['setTotalSubscriptionCostPerYear'] = setTotalSubscriptionCostPerYear;
  if(addTotalSubscriptionCostPerYear != null && addTotalSubscriptionCostPerYear !== '')
    vals['addTotalSubscriptionCostPerYear'] = addTotalSubscriptionCostPerYear;
  var removeTotalSubscriptionCostPerYear = $formValues.querySelector('.removeTotalSubscriptionCostPerYear')?.value;
  if(removeTotalSubscriptionCostPerYear != null && removeTotalSubscriptionCostPerYear !== '')
    vals['removeTotalSubscriptionCostPerYear'] = removeTotalSubscriptionCostPerYear;

  var valueEmployeeSubscriptionCostsPerYear = $formValues.querySelector('.valueEmployeeSubscriptionCostsPerYear')?.value;
  var removeEmployeeSubscriptionCostsPerYear = $formValues.querySelector('.removeEmployeeSubscriptionCostsPerYear')?.value === 'true';
  var setEmployeeSubscriptionCostsPerYear = removeEmployeeSubscriptionCostsPerYear ? null : $formValues.querySelector('.setEmployeeSubscriptionCostsPerYear')?.value;
  var addEmployeeSubscriptionCostsPerYear = $formValues.querySelector('.addEmployeeSubscriptionCostsPerYear')?.value;
  if(removeEmployeeSubscriptionCostsPerYear || setEmployeeSubscriptionCostsPerYear != null && setEmployeeSubscriptionCostsPerYear !== '')
    vals['setEmployeeSubscriptionCostsPerYear'] = JSON.parse(setEmployeeSubscriptionCostsPerYear);
  if(addEmployeeSubscriptionCostsPerYear != null && addEmployeeSubscriptionCostsPerYear !== '')
    vals['addEmployeeSubscriptionCostsPerYear'] = addEmployeeSubscriptionCostsPerYear;
  var removeEmployeeSubscriptionCostsPerYear = $formValues.querySelector('.removeEmployeeSubscriptionCostsPerYear')?.value;
  if(removeEmployeeSubscriptionCostsPerYear != null && removeEmployeeSubscriptionCostsPerYear !== '')
    vals['removeEmployeeSubscriptionCostsPerYear'] = removeEmployeeSubscriptionCostsPerYear;

  var valueEmployeesPerYearChart = $formValues.querySelector('.valueEmployeesPerYearChart')?.value;
  var removeEmployeesPerYearChart = $formValues.querySelector('.removeEmployeesPerYearChart')?.value === 'true';
  var setEmployeesPerYearChart = removeEmployeesPerYearChart ? null : $formValues.querySelector('.setEmployeesPerYearChart')?.value;
  var addEmployeesPerYearChart = $formValues.querySelector('.addEmployeesPerYearChart')?.value;
  if(removeEmployeesPerYearChart || setEmployeesPerYearChart != null && setEmployeesPerYearChart !== '')
    vals['setEmployeesPerYearChart'] = JSON.parse(setEmployeesPerYearChart);
  if(addEmployeesPerYearChart != null && addEmployeesPerYearChart !== '')
    vals['addEmployeesPerYearChart'] = addEmployeesPerYearChart;
  var removeEmployeesPerYearChart = $formValues.querySelector('.removeEmployeesPerYearChart')?.value;
  if(removeEmployeesPerYearChart != null && removeEmployeesPerYearChart !== '')
    vals['removeEmployeesPerYearChart'] = removeEmployeesPerYearChart;

  var valueEmployeePayPerYearChart = $formValues.querySelector('.valueEmployeePayPerYearChart')?.value;
  var removeEmployeePayPerYearChart = $formValues.querySelector('.removeEmployeePayPerYearChart')?.value === 'true';
  var setEmployeePayPerYearChart = removeEmployeePayPerYearChart ? null : $formValues.querySelector('.setEmployeePayPerYearChart')?.value;
  var addEmployeePayPerYearChart = $formValues.querySelector('.addEmployeePayPerYearChart')?.value;
  if(removeEmployeePayPerYearChart || setEmployeePayPerYearChart != null && setEmployeePayPerYearChart !== '')
    vals['setEmployeePayPerYearChart'] = JSON.parse(setEmployeePayPerYearChart);
  if(addEmployeePayPerYearChart != null && addEmployeePayPerYearChart !== '')
    vals['addEmployeePayPerYearChart'] = addEmployeePayPerYearChart;
  var removeEmployeePayPerYearChart = $formValues.querySelector('.removeEmployeePayPerYearChart')?.value;
  if(removeEmployeePayPerYearChart != null && removeEmployeePayPerYearChart !== '')
    vals['removeEmployeePayPerYearChart'] = removeEmployeePayPerYearChart;

  var valueGkeStagingEnvironments = $formValues.querySelector('.valueGkeStagingEnvironments')?.value;
  var removeGkeStagingEnvironments = $formValues.querySelector('.removeGkeStagingEnvironments')?.value === 'true';
  var setGkeStagingEnvironments = removeGkeStagingEnvironments ? null : $formValues.querySelector('.setGkeStagingEnvironments')?.value;
  var addGkeStagingEnvironments = $formValues.querySelector('.addGkeStagingEnvironments')?.value;
  if(removeGkeStagingEnvironments || setGkeStagingEnvironments != null && setGkeStagingEnvironments !== '')
    vals['setGkeStagingEnvironments'] = setGkeStagingEnvironments;
  if(addGkeStagingEnvironments != null && addGkeStagingEnvironments !== '')
    vals['addGkeStagingEnvironments'] = addGkeStagingEnvironments;
  var removeGkeStagingEnvironments = $formValues.querySelector('.removeGkeStagingEnvironments')?.value;
  if(removeGkeStagingEnvironments != null && removeGkeStagingEnvironments !== '')
    vals['removeGkeStagingEnvironments'] = removeGkeStagingEnvironments;

  var valueOpenshiftDedicatedManagementClusters = $formValues.querySelector('.valueOpenshiftDedicatedManagementClusters')?.value;
  var removeOpenshiftDedicatedManagementClusters = $formValues.querySelector('.removeOpenshiftDedicatedManagementClusters')?.value === 'true';
  var setOpenshiftDedicatedManagementClusters = removeOpenshiftDedicatedManagementClusters ? null : $formValues.querySelector('.setOpenshiftDedicatedManagementClusters')?.value;
  var addOpenshiftDedicatedManagementClusters = $formValues.querySelector('.addOpenshiftDedicatedManagementClusters')?.value;
  if(removeOpenshiftDedicatedManagementClusters || setOpenshiftDedicatedManagementClusters != null && setOpenshiftDedicatedManagementClusters !== '')
    vals['setOpenshiftDedicatedManagementClusters'] = setOpenshiftDedicatedManagementClusters;
  if(addOpenshiftDedicatedManagementClusters != null && addOpenshiftDedicatedManagementClusters !== '')
    vals['addOpenshiftDedicatedManagementClusters'] = addOpenshiftDedicatedManagementClusters;
  var removeOpenshiftDedicatedManagementClusters = $formValues.querySelector('.removeOpenshiftDedicatedManagementClusters')?.value;
  if(removeOpenshiftDedicatedManagementClusters != null && removeOpenshiftDedicatedManagementClusters !== '')
    vals['removeOpenshiftDedicatedManagementClusters'] = removeOpenshiftDedicatedManagementClusters;

  var valueOpenshiftDedicatedWorkerClusters = $formValues.querySelector('.valueOpenshiftDedicatedWorkerClusters')?.value;
  var removeOpenshiftDedicatedWorkerClusters = $formValues.querySelector('.removeOpenshiftDedicatedWorkerClusters')?.value === 'true';
  var setOpenshiftDedicatedWorkerClusters = removeOpenshiftDedicatedWorkerClusters ? null : $formValues.querySelector('.setOpenshiftDedicatedWorkerClusters')?.value;
  var addOpenshiftDedicatedWorkerClusters = $formValues.querySelector('.addOpenshiftDedicatedWorkerClusters')?.value;
  if(removeOpenshiftDedicatedWorkerClusters || setOpenshiftDedicatedWorkerClusters != null && setOpenshiftDedicatedWorkerClusters !== '')
    vals['setOpenshiftDedicatedWorkerClusters'] = setOpenshiftDedicatedWorkerClusters;
  if(addOpenshiftDedicatedWorkerClusters != null && addOpenshiftDedicatedWorkerClusters !== '')
    vals['addOpenshiftDedicatedWorkerClusters'] = addOpenshiftDedicatedWorkerClusters;
  var removeOpenshiftDedicatedWorkerClusters = $formValues.querySelector('.removeOpenshiftDedicatedWorkerClusters')?.value;
  if(removeOpenshiftDedicatedWorkerClusters != null && removeOpenshiftDedicatedWorkerClusters !== '')
    vals['removeOpenshiftDedicatedWorkerClusters'] = removeOpenshiftDedicatedWorkerClusters;

  var valueOpenshiftControlPlaneNodes = $formValues.querySelector('.valueOpenshiftControlPlaneNodes')?.value;
  var removeOpenshiftControlPlaneNodes = $formValues.querySelector('.removeOpenshiftControlPlaneNodes')?.value === 'true';
  var setOpenshiftControlPlaneNodes = removeOpenshiftControlPlaneNodes ? null : $formValues.querySelector('.setOpenshiftControlPlaneNodes')?.value;
  var addOpenshiftControlPlaneNodes = $formValues.querySelector('.addOpenshiftControlPlaneNodes')?.value;
  if(removeOpenshiftControlPlaneNodes || setOpenshiftControlPlaneNodes != null && setOpenshiftControlPlaneNodes !== '')
    vals['setOpenshiftControlPlaneNodes'] = setOpenshiftControlPlaneNodes;
  if(addOpenshiftControlPlaneNodes != null && addOpenshiftControlPlaneNodes !== '')
    vals['addOpenshiftControlPlaneNodes'] = addOpenshiftControlPlaneNodes;
  var removeOpenshiftControlPlaneNodes = $formValues.querySelector('.removeOpenshiftControlPlaneNodes')?.value;
  if(removeOpenshiftControlPlaneNodes != null && removeOpenshiftControlPlaneNodes !== '')
    vals['removeOpenshiftControlPlaneNodes'] = removeOpenshiftControlPlaneNodes;

  var valueOpenshiftControlPlaneCores = $formValues.querySelector('.valueOpenshiftControlPlaneCores')?.value;
  var removeOpenshiftControlPlaneCores = $formValues.querySelector('.removeOpenshiftControlPlaneCores')?.value === 'true';
  var setOpenshiftControlPlaneCores = removeOpenshiftControlPlaneCores ? null : $formValues.querySelector('.setOpenshiftControlPlaneCores')?.value;
  var addOpenshiftControlPlaneCores = $formValues.querySelector('.addOpenshiftControlPlaneCores')?.value;
  if(removeOpenshiftControlPlaneCores || setOpenshiftControlPlaneCores != null && setOpenshiftControlPlaneCores !== '')
    vals['setOpenshiftControlPlaneCores'] = setOpenshiftControlPlaneCores;
  if(addOpenshiftControlPlaneCores != null && addOpenshiftControlPlaneCores !== '')
    vals['addOpenshiftControlPlaneCores'] = addOpenshiftControlPlaneCores;
  var removeOpenshiftControlPlaneCores = $formValues.querySelector('.removeOpenshiftControlPlaneCores')?.value;
  if(removeOpenshiftControlPlaneCores != null && removeOpenshiftControlPlaneCores !== '')
    vals['removeOpenshiftControlPlaneCores'] = removeOpenshiftControlPlaneCores;

  var valueOpenshiftControlPlaneHourlyPricePerCore = $formValues.querySelector('.valueOpenshiftControlPlaneHourlyPricePerCore')?.value;
  var removeOpenshiftControlPlaneHourlyPricePerCore = $formValues.querySelector('.removeOpenshiftControlPlaneHourlyPricePerCore')?.value === 'true';
  var setOpenshiftControlPlaneHourlyPricePerCore = removeOpenshiftControlPlaneHourlyPricePerCore ? null : $formValues.querySelector('.setOpenshiftControlPlaneHourlyPricePerCore')?.value;
  var addOpenshiftControlPlaneHourlyPricePerCore = $formValues.querySelector('.addOpenshiftControlPlaneHourlyPricePerCore')?.value;
  if(removeOpenshiftControlPlaneHourlyPricePerCore || setOpenshiftControlPlaneHourlyPricePerCore != null && setOpenshiftControlPlaneHourlyPricePerCore !== '')
    vals['setOpenshiftControlPlaneHourlyPricePerCore'] = setOpenshiftControlPlaneHourlyPricePerCore;
  if(addOpenshiftControlPlaneHourlyPricePerCore != null && addOpenshiftControlPlaneHourlyPricePerCore !== '')
    vals['addOpenshiftControlPlaneHourlyPricePerCore'] = addOpenshiftControlPlaneHourlyPricePerCore;
  var removeOpenshiftControlPlaneHourlyPricePerCore = $formValues.querySelector('.removeOpenshiftControlPlaneHourlyPricePerCore')?.value;
  if(removeOpenshiftControlPlaneHourlyPricePerCore != null && removeOpenshiftControlPlaneHourlyPricePerCore !== '')
    vals['removeOpenshiftControlPlaneHourlyPricePerCore'] = removeOpenshiftControlPlaneHourlyPricePerCore;

  var valueOpenshiftInfraNodes = $formValues.querySelector('.valueOpenshiftInfraNodes')?.value;
  var removeOpenshiftInfraNodes = $formValues.querySelector('.removeOpenshiftInfraNodes')?.value === 'true';
  var setOpenshiftInfraNodes = removeOpenshiftInfraNodes ? null : $formValues.querySelector('.setOpenshiftInfraNodes')?.value;
  var addOpenshiftInfraNodes = $formValues.querySelector('.addOpenshiftInfraNodes')?.value;
  if(removeOpenshiftInfraNodes || setOpenshiftInfraNodes != null && setOpenshiftInfraNodes !== '')
    vals['setOpenshiftInfraNodes'] = setOpenshiftInfraNodes;
  if(addOpenshiftInfraNodes != null && addOpenshiftInfraNodes !== '')
    vals['addOpenshiftInfraNodes'] = addOpenshiftInfraNodes;
  var removeOpenshiftInfraNodes = $formValues.querySelector('.removeOpenshiftInfraNodes')?.value;
  if(removeOpenshiftInfraNodes != null && removeOpenshiftInfraNodes !== '')
    vals['removeOpenshiftInfraNodes'] = removeOpenshiftInfraNodes;

  var valueOpenshiftInfraCores = $formValues.querySelector('.valueOpenshiftInfraCores')?.value;
  var removeOpenshiftInfraCores = $formValues.querySelector('.removeOpenshiftInfraCores')?.value === 'true';
  var setOpenshiftInfraCores = removeOpenshiftInfraCores ? null : $formValues.querySelector('.setOpenshiftInfraCores')?.value;
  var addOpenshiftInfraCores = $formValues.querySelector('.addOpenshiftInfraCores')?.value;
  if(removeOpenshiftInfraCores || setOpenshiftInfraCores != null && setOpenshiftInfraCores !== '')
    vals['setOpenshiftInfraCores'] = setOpenshiftInfraCores;
  if(addOpenshiftInfraCores != null && addOpenshiftInfraCores !== '')
    vals['addOpenshiftInfraCores'] = addOpenshiftInfraCores;
  var removeOpenshiftInfraCores = $formValues.querySelector('.removeOpenshiftInfraCores')?.value;
  if(removeOpenshiftInfraCores != null && removeOpenshiftInfraCores !== '')
    vals['removeOpenshiftInfraCores'] = removeOpenshiftInfraCores;

  var valueOpenshiftInfraHourlyPricePerCore = $formValues.querySelector('.valueOpenshiftInfraHourlyPricePerCore')?.value;
  var removeOpenshiftInfraHourlyPricePerCore = $formValues.querySelector('.removeOpenshiftInfraHourlyPricePerCore')?.value === 'true';
  var setOpenshiftInfraHourlyPricePerCore = removeOpenshiftInfraHourlyPricePerCore ? null : $formValues.querySelector('.setOpenshiftInfraHourlyPricePerCore')?.value;
  var addOpenshiftInfraHourlyPricePerCore = $formValues.querySelector('.addOpenshiftInfraHourlyPricePerCore')?.value;
  if(removeOpenshiftInfraHourlyPricePerCore || setOpenshiftInfraHourlyPricePerCore != null && setOpenshiftInfraHourlyPricePerCore !== '')
    vals['setOpenshiftInfraHourlyPricePerCore'] = setOpenshiftInfraHourlyPricePerCore;
  if(addOpenshiftInfraHourlyPricePerCore != null && addOpenshiftInfraHourlyPricePerCore !== '')
    vals['addOpenshiftInfraHourlyPricePerCore'] = addOpenshiftInfraHourlyPricePerCore;
  var removeOpenshiftInfraHourlyPricePerCore = $formValues.querySelector('.removeOpenshiftInfraHourlyPricePerCore')?.value;
  if(removeOpenshiftInfraHourlyPricePerCore != null && removeOpenshiftInfraHourlyPricePerCore !== '')
    vals['removeOpenshiftInfraHourlyPricePerCore'] = removeOpenshiftInfraHourlyPricePerCore;

  var valueManagementClusterNodes = $formValues.querySelector('.valueManagementClusterNodes')?.value;
  var removeManagementClusterNodes = $formValues.querySelector('.removeManagementClusterNodes')?.value === 'true';
  var setManagementClusterNodes = removeManagementClusterNodes ? null : $formValues.querySelector('.setManagementClusterNodes')?.value;
  var addManagementClusterNodes = $formValues.querySelector('.addManagementClusterNodes')?.value;
  if(removeManagementClusterNodes || setManagementClusterNodes != null && setManagementClusterNodes !== '')
    vals['setManagementClusterNodes'] = setManagementClusterNodes;
  if(addManagementClusterNodes != null && addManagementClusterNodes !== '')
    vals['addManagementClusterNodes'] = addManagementClusterNodes;
  var removeManagementClusterNodes = $formValues.querySelector('.removeManagementClusterNodes')?.value;
  if(removeManagementClusterNodes != null && removeManagementClusterNodes !== '')
    vals['removeManagementClusterNodes'] = removeManagementClusterNodes;

  var valueWorkerClusterApplicationNodes = $formValues.querySelector('.valueWorkerClusterApplicationNodes')?.value;
  var removeWorkerClusterApplicationNodes = $formValues.querySelector('.removeWorkerClusterApplicationNodes')?.value === 'true';
  var setWorkerClusterApplicationNodes = removeWorkerClusterApplicationNodes ? null : $formValues.querySelector('.setWorkerClusterApplicationNodes')?.value;
  var addWorkerClusterApplicationNodes = $formValues.querySelector('.addWorkerClusterApplicationNodes')?.value;
  if(removeWorkerClusterApplicationNodes || setWorkerClusterApplicationNodes != null && setWorkerClusterApplicationNodes !== '')
    vals['setWorkerClusterApplicationNodes'] = setWorkerClusterApplicationNodes;
  if(addWorkerClusterApplicationNodes != null && addWorkerClusterApplicationNodes !== '')
    vals['addWorkerClusterApplicationNodes'] = addWorkerClusterApplicationNodes;
  var removeWorkerClusterApplicationNodes = $formValues.querySelector('.removeWorkerClusterApplicationNodes')?.value;
  if(removeWorkerClusterApplicationNodes != null && removeWorkerClusterApplicationNodes !== '')
    vals['removeWorkerClusterApplicationNodes'] = removeWorkerClusterApplicationNodes;

  var valueOpenshiftWorkerCores = $formValues.querySelector('.valueOpenshiftWorkerCores')?.value;
  var removeOpenshiftWorkerCores = $formValues.querySelector('.removeOpenshiftWorkerCores')?.value === 'true';
  var setOpenshiftWorkerCores = removeOpenshiftWorkerCores ? null : $formValues.querySelector('.setOpenshiftWorkerCores')?.value;
  var addOpenshiftWorkerCores = $formValues.querySelector('.addOpenshiftWorkerCores')?.value;
  if(removeOpenshiftWorkerCores || setOpenshiftWorkerCores != null && setOpenshiftWorkerCores !== '')
    vals['setOpenshiftWorkerCores'] = setOpenshiftWorkerCores;
  if(addOpenshiftWorkerCores != null && addOpenshiftWorkerCores !== '')
    vals['addOpenshiftWorkerCores'] = addOpenshiftWorkerCores;
  var removeOpenshiftWorkerCores = $formValues.querySelector('.removeOpenshiftWorkerCores')?.value;
  if(removeOpenshiftWorkerCores != null && removeOpenshiftWorkerCores !== '')
    vals['removeOpenshiftWorkerCores'] = removeOpenshiftWorkerCores;

  var valueOpenshiftManagementClusterWorkerNodesPerYear = $formValues.querySelector('.valueOpenshiftManagementClusterWorkerNodesPerYear')?.value;
  var removeOpenshiftManagementClusterWorkerNodesPerYear = $formValues.querySelector('.removeOpenshiftManagementClusterWorkerNodesPerYear')?.value === 'true';
  var setOpenshiftManagementClusterWorkerNodesPerYear = removeOpenshiftManagementClusterWorkerNodesPerYear ? null : $formValues.querySelector('.setOpenshiftManagementClusterWorkerNodesPerYear')?.value;
  var addOpenshiftManagementClusterWorkerNodesPerYear = $formValues.querySelector('.addOpenshiftManagementClusterWorkerNodesPerYear')?.value;
  if(removeOpenshiftManagementClusterWorkerNodesPerYear || setOpenshiftManagementClusterWorkerNodesPerYear != null && setOpenshiftManagementClusterWorkerNodesPerYear !== '')
    vals['setOpenshiftManagementClusterWorkerNodesPerYear'] = JSON.parse(setOpenshiftManagementClusterWorkerNodesPerYear);
  if(addOpenshiftManagementClusterWorkerNodesPerYear != null && addOpenshiftManagementClusterWorkerNodesPerYear !== '')
    vals['addOpenshiftManagementClusterWorkerNodesPerYear'] = addOpenshiftManagementClusterWorkerNodesPerYear;
  var removeOpenshiftManagementClusterWorkerNodesPerYear = $formValues.querySelector('.removeOpenshiftManagementClusterWorkerNodesPerYear')?.value;
  if(removeOpenshiftManagementClusterWorkerNodesPerYear != null && removeOpenshiftManagementClusterWorkerNodesPerYear !== '')
    vals['removeOpenshiftManagementClusterWorkerNodesPerYear'] = removeOpenshiftManagementClusterWorkerNodesPerYear;

  var valueOpenshiftApplicationClusterWorkerNodesPerYear = $formValues.querySelector('.valueOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
  var removeOpenshiftApplicationClusterWorkerNodesPerYear = $formValues.querySelector('.removeOpenshiftApplicationClusterWorkerNodesPerYear')?.value === 'true';
  var setOpenshiftApplicationClusterWorkerNodesPerYear = removeOpenshiftApplicationClusterWorkerNodesPerYear ? null : $formValues.querySelector('.setOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
  var addOpenshiftApplicationClusterWorkerNodesPerYear = $formValues.querySelector('.addOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
  if(removeOpenshiftApplicationClusterWorkerNodesPerYear || setOpenshiftApplicationClusterWorkerNodesPerYear != null && setOpenshiftApplicationClusterWorkerNodesPerYear !== '')
    vals['setOpenshiftApplicationClusterWorkerNodesPerYear'] = JSON.parse(setOpenshiftApplicationClusterWorkerNodesPerYear);
  if(addOpenshiftApplicationClusterWorkerNodesPerYear != null && addOpenshiftApplicationClusterWorkerNodesPerYear !== '')
    vals['addOpenshiftApplicationClusterWorkerNodesPerYear'] = addOpenshiftApplicationClusterWorkerNodesPerYear;
  var removeOpenshiftApplicationClusterWorkerNodesPerYear = $formValues.querySelector('.removeOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
  if(removeOpenshiftApplicationClusterWorkerNodesPerYear != null && removeOpenshiftApplicationClusterWorkerNodesPerYear !== '')
    vals['removeOpenshiftApplicationClusterWorkerNodesPerYear'] = removeOpenshiftApplicationClusterWorkerNodesPerYear;

  var valueOpenshiftWorkerNodesPerYear = $formValues.querySelector('.valueOpenshiftWorkerNodesPerYear')?.value;
  var removeOpenshiftWorkerNodesPerYear = $formValues.querySelector('.removeOpenshiftWorkerNodesPerYear')?.value === 'true';
  var setOpenshiftWorkerNodesPerYear = removeOpenshiftWorkerNodesPerYear ? null : $formValues.querySelector('.setOpenshiftWorkerNodesPerYear')?.value;
  var addOpenshiftWorkerNodesPerYear = $formValues.querySelector('.addOpenshiftWorkerNodesPerYear')?.value;
  if(removeOpenshiftWorkerNodesPerYear || setOpenshiftWorkerNodesPerYear != null && setOpenshiftWorkerNodesPerYear !== '')
    vals['setOpenshiftWorkerNodesPerYear'] = JSON.parse(setOpenshiftWorkerNodesPerYear);
  if(addOpenshiftWorkerNodesPerYear != null && addOpenshiftWorkerNodesPerYear !== '')
    vals['addOpenshiftWorkerNodesPerYear'] = addOpenshiftWorkerNodesPerYear;
  var removeOpenshiftWorkerNodesPerYear = $formValues.querySelector('.removeOpenshiftWorkerNodesPerYear')?.value;
  if(removeOpenshiftWorkerNodesPerYear != null && removeOpenshiftWorkerNodesPerYear !== '')
    vals['removeOpenshiftWorkerNodesPerYear'] = removeOpenshiftWorkerNodesPerYear;

  var valueOpenshiftManagementClusterWorkerCoresPerYear = $formValues.querySelector('.valueOpenshiftManagementClusterWorkerCoresPerYear')?.value;
  var removeOpenshiftManagementClusterWorkerCoresPerYear = $formValues.querySelector('.removeOpenshiftManagementClusterWorkerCoresPerYear')?.value === 'true';
  var setOpenshiftManagementClusterWorkerCoresPerYear = removeOpenshiftManagementClusterWorkerCoresPerYear ? null : $formValues.querySelector('.setOpenshiftManagementClusterWorkerCoresPerYear')?.value;
  var addOpenshiftManagementClusterWorkerCoresPerYear = $formValues.querySelector('.addOpenshiftManagementClusterWorkerCoresPerYear')?.value;
  if(removeOpenshiftManagementClusterWorkerCoresPerYear || setOpenshiftManagementClusterWorkerCoresPerYear != null && setOpenshiftManagementClusterWorkerCoresPerYear !== '')
    vals['setOpenshiftManagementClusterWorkerCoresPerYear'] = JSON.parse(setOpenshiftManagementClusterWorkerCoresPerYear);
  if(addOpenshiftManagementClusterWorkerCoresPerYear != null && addOpenshiftManagementClusterWorkerCoresPerYear !== '')
    vals['addOpenshiftManagementClusterWorkerCoresPerYear'] = addOpenshiftManagementClusterWorkerCoresPerYear;
  var removeOpenshiftManagementClusterWorkerCoresPerYear = $formValues.querySelector('.removeOpenshiftManagementClusterWorkerCoresPerYear')?.value;
  if(removeOpenshiftManagementClusterWorkerCoresPerYear != null && removeOpenshiftManagementClusterWorkerCoresPerYear !== '')
    vals['removeOpenshiftManagementClusterWorkerCoresPerYear'] = removeOpenshiftManagementClusterWorkerCoresPerYear;

  var valueOpenshiftApplicationClusterWorkerCoresPerYear = $formValues.querySelector('.valueOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
  var removeOpenshiftApplicationClusterWorkerCoresPerYear = $formValues.querySelector('.removeOpenshiftApplicationClusterWorkerCoresPerYear')?.value === 'true';
  var setOpenshiftApplicationClusterWorkerCoresPerYear = removeOpenshiftApplicationClusterWorkerCoresPerYear ? null : $formValues.querySelector('.setOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
  var addOpenshiftApplicationClusterWorkerCoresPerYear = $formValues.querySelector('.addOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
  if(removeOpenshiftApplicationClusterWorkerCoresPerYear || setOpenshiftApplicationClusterWorkerCoresPerYear != null && setOpenshiftApplicationClusterWorkerCoresPerYear !== '')
    vals['setOpenshiftApplicationClusterWorkerCoresPerYear'] = JSON.parse(setOpenshiftApplicationClusterWorkerCoresPerYear);
  if(addOpenshiftApplicationClusterWorkerCoresPerYear != null && addOpenshiftApplicationClusterWorkerCoresPerYear !== '')
    vals['addOpenshiftApplicationClusterWorkerCoresPerYear'] = addOpenshiftApplicationClusterWorkerCoresPerYear;
  var removeOpenshiftApplicationClusterWorkerCoresPerYear = $formValues.querySelector('.removeOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
  if(removeOpenshiftApplicationClusterWorkerCoresPerYear != null && removeOpenshiftApplicationClusterWorkerCoresPerYear !== '')
    vals['removeOpenshiftApplicationClusterWorkerCoresPerYear'] = removeOpenshiftApplicationClusterWorkerCoresPerYear;

  var valueOpenshiftWorkerCoresPerYear = $formValues.querySelector('.valueOpenshiftWorkerCoresPerYear')?.value;
  var removeOpenshiftWorkerCoresPerYear = $formValues.querySelector('.removeOpenshiftWorkerCoresPerYear')?.value === 'true';
  var setOpenshiftWorkerCoresPerYear = removeOpenshiftWorkerCoresPerYear ? null : $formValues.querySelector('.setOpenshiftWorkerCoresPerYear')?.value;
  var addOpenshiftWorkerCoresPerYear = $formValues.querySelector('.addOpenshiftWorkerCoresPerYear')?.value;
  if(removeOpenshiftWorkerCoresPerYear || setOpenshiftWorkerCoresPerYear != null && setOpenshiftWorkerCoresPerYear !== '')
    vals['setOpenshiftWorkerCoresPerYear'] = JSON.parse(setOpenshiftWorkerCoresPerYear);
  if(addOpenshiftWorkerCoresPerYear != null && addOpenshiftWorkerCoresPerYear !== '')
    vals['addOpenshiftWorkerCoresPerYear'] = addOpenshiftWorkerCoresPerYear;
  var removeOpenshiftWorkerCoresPerYear = $formValues.querySelector('.removeOpenshiftWorkerCoresPerYear')?.value;
  if(removeOpenshiftWorkerCoresPerYear != null && removeOpenshiftWorkerCoresPerYear !== '')
    vals['removeOpenshiftWorkerCoresPerYear'] = removeOpenshiftWorkerCoresPerYear;

  var valueOpenshiftWorkerHourlyPricePerCore = $formValues.querySelector('.valueOpenshiftWorkerHourlyPricePerCore')?.value;
  var removeOpenshiftWorkerHourlyPricePerCore = $formValues.querySelector('.removeOpenshiftWorkerHourlyPricePerCore')?.value === 'true';
  var setOpenshiftWorkerHourlyPricePerCore = removeOpenshiftWorkerHourlyPricePerCore ? null : $formValues.querySelector('.setOpenshiftWorkerHourlyPricePerCore')?.value;
  var addOpenshiftWorkerHourlyPricePerCore = $formValues.querySelector('.addOpenshiftWorkerHourlyPricePerCore')?.value;
  if(removeOpenshiftWorkerHourlyPricePerCore || setOpenshiftWorkerHourlyPricePerCore != null && setOpenshiftWorkerHourlyPricePerCore !== '')
    vals['setOpenshiftWorkerHourlyPricePerCore'] = setOpenshiftWorkerHourlyPricePerCore;
  if(addOpenshiftWorkerHourlyPricePerCore != null && addOpenshiftWorkerHourlyPricePerCore !== '')
    vals['addOpenshiftWorkerHourlyPricePerCore'] = addOpenshiftWorkerHourlyPricePerCore;
  var removeOpenshiftWorkerHourlyPricePerCore = $formValues.querySelector('.removeOpenshiftWorkerHourlyPricePerCore')?.value;
  if(removeOpenshiftWorkerHourlyPricePerCore != null && removeOpenshiftWorkerHourlyPricePerCore !== '')
    vals['removeOpenshiftWorkerHourlyPricePerCore'] = removeOpenshiftWorkerHourlyPricePerCore;

  var valueOpenshiftSSDStorageTiBPerYear = $formValues.querySelector('.valueOpenshiftSSDStorageTiBPerYear')?.value;
  var removeOpenshiftSSDStorageTiBPerYear = $formValues.querySelector('.removeOpenshiftSSDStorageTiBPerYear')?.value === 'true';
  var setOpenshiftSSDStorageTiBPerYear = removeOpenshiftSSDStorageTiBPerYear ? null : $formValues.querySelector('.setOpenshiftSSDStorageTiBPerYear')?.value;
  var addOpenshiftSSDStorageTiBPerYear = $formValues.querySelector('.addOpenshiftSSDStorageTiBPerYear')?.value;
  if(removeOpenshiftSSDStorageTiBPerYear || setOpenshiftSSDStorageTiBPerYear != null && setOpenshiftSSDStorageTiBPerYear !== '')
    vals['setOpenshiftSSDStorageTiBPerYear'] = JSON.parse(setOpenshiftSSDStorageTiBPerYear);
  if(addOpenshiftSSDStorageTiBPerYear != null && addOpenshiftSSDStorageTiBPerYear !== '')
    vals['addOpenshiftSSDStorageTiBPerYear'] = addOpenshiftSSDStorageTiBPerYear;
  var removeOpenshiftSSDStorageTiBPerYear = $formValues.querySelector('.removeOpenshiftSSDStorageTiBPerYear')?.value;
  if(removeOpenshiftSSDStorageTiBPerYear != null && removeOpenshiftSSDStorageTiBPerYear !== '')
    vals['removeOpenshiftSSDStorageTiBPerYear'] = removeOpenshiftSSDStorageTiBPerYear;

  var valueOpenshiftSSDStoragePricePerGiB = $formValues.querySelector('.valueOpenshiftSSDStoragePricePerGiB')?.value;
  var removeOpenshiftSSDStoragePricePerGiB = $formValues.querySelector('.removeOpenshiftSSDStoragePricePerGiB')?.value === 'true';
  var setOpenshiftSSDStoragePricePerGiB = removeOpenshiftSSDStoragePricePerGiB ? null : $formValues.querySelector('.setOpenshiftSSDStoragePricePerGiB')?.value;
  var addOpenshiftSSDStoragePricePerGiB = $formValues.querySelector('.addOpenshiftSSDStoragePricePerGiB')?.value;
  if(removeOpenshiftSSDStoragePricePerGiB || setOpenshiftSSDStoragePricePerGiB != null && setOpenshiftSSDStoragePricePerGiB !== '')
    vals['setOpenshiftSSDStoragePricePerGiB'] = setOpenshiftSSDStoragePricePerGiB;
  if(addOpenshiftSSDStoragePricePerGiB != null && addOpenshiftSSDStoragePricePerGiB !== '')
    vals['addOpenshiftSSDStoragePricePerGiB'] = addOpenshiftSSDStoragePricePerGiB;
  var removeOpenshiftSSDStoragePricePerGiB = $formValues.querySelector('.removeOpenshiftSSDStoragePricePerGiB')?.value;
  if(removeOpenshiftSSDStoragePricePerGiB != null && removeOpenshiftSSDStoragePricePerGiB !== '')
    vals['removeOpenshiftSSDStoragePricePerGiB'] = removeOpenshiftSSDStoragePricePerGiB;

  var valueOpenshiftCostsPerClusterPerYearChart = $formValues.querySelector('.valueOpenshiftCostsPerClusterPerYearChart')?.value;
  var removeOpenshiftCostsPerClusterPerYearChart = $formValues.querySelector('.removeOpenshiftCostsPerClusterPerYearChart')?.value === 'true';
  var setOpenshiftCostsPerClusterPerYearChart = removeOpenshiftCostsPerClusterPerYearChart ? null : $formValues.querySelector('.setOpenshiftCostsPerClusterPerYearChart')?.value;
  var addOpenshiftCostsPerClusterPerYearChart = $formValues.querySelector('.addOpenshiftCostsPerClusterPerYearChart')?.value;
  if(removeOpenshiftCostsPerClusterPerYearChart || setOpenshiftCostsPerClusterPerYearChart != null && setOpenshiftCostsPerClusterPerYearChart !== '')
    vals['setOpenshiftCostsPerClusterPerYearChart'] = JSON.parse(setOpenshiftCostsPerClusterPerYearChart);
  if(addOpenshiftCostsPerClusterPerYearChart != null && addOpenshiftCostsPerClusterPerYearChart !== '')
    vals['addOpenshiftCostsPerClusterPerYearChart'] = addOpenshiftCostsPerClusterPerYearChart;
  var removeOpenshiftCostsPerClusterPerYearChart = $formValues.querySelector('.removeOpenshiftCostsPerClusterPerYearChart')?.value;
  if(removeOpenshiftCostsPerClusterPerYearChart != null && removeOpenshiftCostsPerClusterPerYearChart !== '')
    vals['removeOpenshiftCostsPerClusterPerYearChart'] = removeOpenshiftCostsPerClusterPerYearChart;

  var valueOpenshiftCostsPerYearChart = $formValues.querySelector('.valueOpenshiftCostsPerYearChart')?.value;
  var removeOpenshiftCostsPerYearChart = $formValues.querySelector('.removeOpenshiftCostsPerYearChart')?.value === 'true';
  var setOpenshiftCostsPerYearChart = removeOpenshiftCostsPerYearChart ? null : $formValues.querySelector('.setOpenshiftCostsPerYearChart')?.value;
  var addOpenshiftCostsPerYearChart = $formValues.querySelector('.addOpenshiftCostsPerYearChart')?.value;
  if(removeOpenshiftCostsPerYearChart || setOpenshiftCostsPerYearChart != null && setOpenshiftCostsPerYearChart !== '')
    vals['setOpenshiftCostsPerYearChart'] = JSON.parse(setOpenshiftCostsPerYearChart);
  if(addOpenshiftCostsPerYearChart != null && addOpenshiftCostsPerYearChart !== '')
    vals['addOpenshiftCostsPerYearChart'] = addOpenshiftCostsPerYearChart;
  var removeOpenshiftCostsPerYearChart = $formValues.querySelector('.removeOpenshiftCostsPerYearChart')?.value;
  if(removeOpenshiftCostsPerYearChart != null && removeOpenshiftCostsPerYearChart !== '')
    vals['removeOpenshiftCostsPerYearChart'] = removeOpenshiftCostsPerYearChart;

  var valueProjectExpensesChart = $formValues.querySelector('.valueProjectExpensesChart')?.value;
  var removeProjectExpensesChart = $formValues.querySelector('.removeProjectExpensesChart')?.value === 'true';
  var setProjectExpensesChart = removeProjectExpensesChart ? null : $formValues.querySelector('.setProjectExpensesChart')?.value;
  var addProjectExpensesChart = $formValues.querySelector('.addProjectExpensesChart')?.value;
  if(removeProjectExpensesChart || setProjectExpensesChart != null && setProjectExpensesChart !== '')
    vals['setProjectExpensesChart'] = JSON.parse(setProjectExpensesChart);
  if(addProjectExpensesChart != null && addProjectExpensesChart !== '')
    vals['addProjectExpensesChart'] = addProjectExpensesChart;
  var removeProjectExpensesChart = $formValues.querySelector('.removeProjectExpensesChart')?.value;
  if(removeProjectExpensesChart != null && removeProjectExpensesChart !== '')
    vals['removeProjectExpensesChart'] = removeProjectExpensesChart;

  var valueEconomicOutputChart = $formValues.querySelector('.valueEconomicOutputChart')?.value;
  var removeEconomicOutputChart = $formValues.querySelector('.removeEconomicOutputChart')?.value === 'true';
  var setEconomicOutputChart = removeEconomicOutputChart ? null : $formValues.querySelector('.setEconomicOutputChart')?.value;
  var addEconomicOutputChart = $formValues.querySelector('.addEconomicOutputChart')?.value;
  if(removeEconomicOutputChart || setEconomicOutputChart != null && setEconomicOutputChart !== '')
    vals['setEconomicOutputChart'] = JSON.parse(setEconomicOutputChart);
  if(addEconomicOutputChart != null && addEconomicOutputChart !== '')
    vals['addEconomicOutputChart'] = addEconomicOutputChart;
  var removeEconomicOutputChart = $formValues.querySelector('.removeEconomicOutputChart')?.value;
  if(removeEconomicOutputChart != null && removeEconomicOutputChart !== '')
    vals['removeEconomicOutputChart'] = removeEconomicOutputChart;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  var valueDisplayName = $formValues.querySelector('.valueDisplayName')?.value;
  var removeDisplayName = $formValues.querySelector('.removeDisplayName')?.value === 'true';
  var setDisplayName = removeDisplayName ? null : $formValues.querySelector('.setDisplayName')?.value;
  var addDisplayName = $formValues.querySelector('.addDisplayName')?.value;
  if(removeDisplayName || setDisplayName != null && setDisplayName !== '')
    vals['setDisplayName'] = setDisplayName;
  if(addDisplayName != null && addDisplayName !== '')
    vals['addDisplayName'] = addDisplayName;
  var removeDisplayName = $formValues.querySelector('.removeDisplayName')?.value;
  if(removeDisplayName != null && removeDisplayName !== '')
    vals['removeDisplayName'] = removeDisplayName;

  var valueContractId = $formValues.querySelector('.valueContractId')?.value;
  var removeContractId = $formValues.querySelector('.removeContractId')?.value === 'true';
  var setContractId = removeContractId ? null : $formValues.querySelector('.setContractId')?.value;
  var addContractId = $formValues.querySelector('.addContractId')?.value;
  if(removeContractId || setContractId != null && setContractId !== '')
    vals['setContractId'] = setContractId;
  if(addContractId != null && addContractId !== '')
    vals['addContractId'] = addContractId;
  var removeContractId = $formValues.querySelector('.removeContractId')?.value;
  if(removeContractId != null && removeContractId !== '')
    vals['removeContractId'] = removeContractId;

  var valueEmployeesPerYearDataset = $formValues.querySelector('.valueEmployeesPerYearDataset')?.value;
  var removeEmployeesPerYearDataset = $formValues.querySelector('.removeEmployeesPerYearDataset')?.value === 'true';
  var setEmployeesPerYearDataset = removeEmployeesPerYearDataset ? null : $formValues.querySelector('.setEmployeesPerYearDataset')?.value;
  var addEmployeesPerYearDataset = $formValues.querySelector('.addEmployeesPerYearDataset')?.value;
  if(removeEmployeesPerYearDataset || setEmployeesPerYearDataset != null && setEmployeesPerYearDataset !== '')
    vals['setEmployeesPerYearDataset'] = JSON.parse(setEmployeesPerYearDataset);
  if(addEmployeesPerYearDataset != null && addEmployeesPerYearDataset !== '')
    vals['addEmployeesPerYearDataset'] = addEmployeesPerYearDataset;
  var removeEmployeesPerYearDataset = $formValues.querySelector('.removeEmployeesPerYearDataset')?.value;
  if(removeEmployeesPerYearDataset != null && removeEmployeesPerYearDataset !== '')
    vals['removeEmployeesPerYearDataset'] = removeEmployeesPerYearDataset;

  var valueSubscriptionCostsPerYearDataset = $formValues.querySelector('.valueSubscriptionCostsPerYearDataset')?.value;
  var removeSubscriptionCostsPerYearDataset = $formValues.querySelector('.removeSubscriptionCostsPerYearDataset')?.value === 'true';
  var setSubscriptionCostsPerYearDataset = removeSubscriptionCostsPerYearDataset ? null : $formValues.querySelector('.setSubscriptionCostsPerYearDataset')?.value;
  var addSubscriptionCostsPerYearDataset = $formValues.querySelector('.addSubscriptionCostsPerYearDataset')?.value;
  if(removeSubscriptionCostsPerYearDataset || setSubscriptionCostsPerYearDataset != null && setSubscriptionCostsPerYearDataset !== '')
    vals['setSubscriptionCostsPerYearDataset'] = JSON.parse(setSubscriptionCostsPerYearDataset);
  if(addSubscriptionCostsPerYearDataset != null && addSubscriptionCostsPerYearDataset !== '')
    vals['addSubscriptionCostsPerYearDataset'] = addSubscriptionCostsPerYearDataset;
  var removeSubscriptionCostsPerYearDataset = $formValues.querySelector('.removeSubscriptionCostsPerYearDataset')?.value;
  if(removeSubscriptionCostsPerYearDataset != null && removeSubscriptionCostsPerYearDataset !== '')
    vals['removeSubscriptionCostsPerYearDataset'] = removeSubscriptionCostsPerYearDataset;

  var valueEmployeePayPerYearDataset = $formValues.querySelector('.valueEmployeePayPerYearDataset')?.value;
  var removeEmployeePayPerYearDataset = $formValues.querySelector('.removeEmployeePayPerYearDataset')?.value === 'true';
  var setEmployeePayPerYearDataset = removeEmployeePayPerYearDataset ? null : $formValues.querySelector('.setEmployeePayPerYearDataset')?.value;
  var addEmployeePayPerYearDataset = $formValues.querySelector('.addEmployeePayPerYearDataset')?.value;
  if(removeEmployeePayPerYearDataset || setEmployeePayPerYearDataset != null && setEmployeePayPerYearDataset !== '')
    vals['setEmployeePayPerYearDataset'] = JSON.parse(setEmployeePayPerYearDataset);
  if(addEmployeePayPerYearDataset != null && addEmployeePayPerYearDataset !== '')
    vals['addEmployeePayPerYearDataset'] = addEmployeePayPerYearDataset;
  var removeEmployeePayPerYearDataset = $formValues.querySelector('.removeEmployeePayPerYearDataset')?.value;
  if(removeEmployeePayPerYearDataset != null && removeEmployeePayPerYearDataset !== '')
    vals['removeEmployeePayPerYearDataset'] = removeEmployeePayPerYearDataset;

  var valueTotalOpenshiftControlPlaneCores = $formValues.querySelector('.valueTotalOpenshiftControlPlaneCores')?.value;
  var removeTotalOpenshiftControlPlaneCores = $formValues.querySelector('.removeTotalOpenshiftControlPlaneCores')?.value === 'true';
  var setTotalOpenshiftControlPlaneCores = removeTotalOpenshiftControlPlaneCores ? null : $formValues.querySelector('.setTotalOpenshiftControlPlaneCores')?.value;
  var addTotalOpenshiftControlPlaneCores = $formValues.querySelector('.addTotalOpenshiftControlPlaneCores')?.value;
  if(removeTotalOpenshiftControlPlaneCores || setTotalOpenshiftControlPlaneCores != null && setTotalOpenshiftControlPlaneCores !== '')
    vals['setTotalOpenshiftControlPlaneCores'] = setTotalOpenshiftControlPlaneCores;
  if(addTotalOpenshiftControlPlaneCores != null && addTotalOpenshiftControlPlaneCores !== '')
    vals['addTotalOpenshiftControlPlaneCores'] = addTotalOpenshiftControlPlaneCores;
  var removeTotalOpenshiftControlPlaneCores = $formValues.querySelector('.removeTotalOpenshiftControlPlaneCores')?.value;
  if(removeTotalOpenshiftControlPlaneCores != null && removeTotalOpenshiftControlPlaneCores !== '')
    vals['removeTotalOpenshiftControlPlaneCores'] = removeTotalOpenshiftControlPlaneCores;

  var valueTotalOpenshiftInfraCores = $formValues.querySelector('.valueTotalOpenshiftInfraCores')?.value;
  var removeTotalOpenshiftInfraCores = $formValues.querySelector('.removeTotalOpenshiftInfraCores')?.value === 'true';
  var setTotalOpenshiftInfraCores = removeTotalOpenshiftInfraCores ? null : $formValues.querySelector('.setTotalOpenshiftInfraCores')?.value;
  var addTotalOpenshiftInfraCores = $formValues.querySelector('.addTotalOpenshiftInfraCores')?.value;
  if(removeTotalOpenshiftInfraCores || setTotalOpenshiftInfraCores != null && setTotalOpenshiftInfraCores !== '')
    vals['setTotalOpenshiftInfraCores'] = setTotalOpenshiftInfraCores;
  if(addTotalOpenshiftInfraCores != null && addTotalOpenshiftInfraCores !== '')
    vals['addTotalOpenshiftInfraCores'] = addTotalOpenshiftInfraCores;
  var removeTotalOpenshiftInfraCores = $formValues.querySelector('.removeTotalOpenshiftInfraCores')?.value;
  if(removeTotalOpenshiftInfraCores != null && removeTotalOpenshiftInfraCores !== '')
    vals['removeTotalOpenshiftInfraCores'] = removeTotalOpenshiftInfraCores;

  var valueOpenshiftCostsPerClusterPerYearDataset = $formValues.querySelector('.valueOpenshiftCostsPerClusterPerYearDataset')?.value;
  var removeOpenshiftCostsPerClusterPerYearDataset = $formValues.querySelector('.removeOpenshiftCostsPerClusterPerYearDataset')?.value === 'true';
  var setOpenshiftCostsPerClusterPerYearDataset = removeOpenshiftCostsPerClusterPerYearDataset ? null : $formValues.querySelector('.setOpenshiftCostsPerClusterPerYearDataset')?.value;
  var addOpenshiftCostsPerClusterPerYearDataset = $formValues.querySelector('.addOpenshiftCostsPerClusterPerYearDataset')?.value;
  if(removeOpenshiftCostsPerClusterPerYearDataset || setOpenshiftCostsPerClusterPerYearDataset != null && setOpenshiftCostsPerClusterPerYearDataset !== '')
    vals['setOpenshiftCostsPerClusterPerYearDataset'] = JSON.parse(setOpenshiftCostsPerClusterPerYearDataset);
  if(addOpenshiftCostsPerClusterPerYearDataset != null && addOpenshiftCostsPerClusterPerYearDataset !== '')
    vals['addOpenshiftCostsPerClusterPerYearDataset'] = addOpenshiftCostsPerClusterPerYearDataset;
  var removeOpenshiftCostsPerClusterPerYearDataset = $formValues.querySelector('.removeOpenshiftCostsPerClusterPerYearDataset')?.value;
  if(removeOpenshiftCostsPerClusterPerYearDataset != null && removeOpenshiftCostsPerClusterPerYearDataset !== '')
    vals['removeOpenshiftCostsPerClusterPerYearDataset'] = removeOpenshiftCostsPerClusterPerYearDataset;

  var valueOpenshiftCostsPerYearDataset = $formValues.querySelector('.valueOpenshiftCostsPerYearDataset')?.value;
  var removeOpenshiftCostsPerYearDataset = $formValues.querySelector('.removeOpenshiftCostsPerYearDataset')?.value === 'true';
  var setOpenshiftCostsPerYearDataset = removeOpenshiftCostsPerYearDataset ? null : $formValues.querySelector('.setOpenshiftCostsPerYearDataset')?.value;
  var addOpenshiftCostsPerYearDataset = $formValues.querySelector('.addOpenshiftCostsPerYearDataset')?.value;
  if(removeOpenshiftCostsPerYearDataset || setOpenshiftCostsPerYearDataset != null && setOpenshiftCostsPerYearDataset !== '')
    vals['setOpenshiftCostsPerYearDataset'] = JSON.parse(setOpenshiftCostsPerYearDataset);
  if(addOpenshiftCostsPerYearDataset != null && addOpenshiftCostsPerYearDataset !== '')
    vals['addOpenshiftCostsPerYearDataset'] = addOpenshiftCostsPerYearDataset;
  var removeOpenshiftCostsPerYearDataset = $formValues.querySelector('.removeOpenshiftCostsPerYearDataset')?.value;
  if(removeOpenshiftCostsPerYearDataset != null && removeOpenshiftCostsPerYearDataset !== '')
    vals['removeOpenshiftCostsPerYearDataset'] = removeOpenshiftCostsPerYearDataset;

  patchContractVals(contractId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'contractId:' + contractId}], vals, target, success, error);
}

function patchContractFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterRegion = $formFilters.querySelector('.valueRegion')?.value;
    if(filterRegion != null && filterRegion !== '')
      filters.push({ name: 'fq', value: 'region:' + filterRegion });

    var filterStartDate = $formFilters.querySelector('.valueStartDate')?.value;
    if(filterStartDate != null && filterStartDate !== '')
      filters.push({ name: 'fq', value: 'startDate:' + filterStartDate });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterAbbreviation = $formFilters.querySelector('.valueAbbreviation')?.value;
    if(filterAbbreviation != null && filterAbbreviation !== '')
      filters.push({ name: 'fq', value: 'abbreviation:' + filterAbbreviation });

    var filterInvestmentYearsTotal = $formFilters.querySelector('.valueInvestmentYearsTotal')?.value;
    if(filterInvestmentYearsTotal != null && filterInvestmentYearsTotal !== '')
      filters.push({ name: 'fq', value: 'investmentYearsTotal:' + filterInvestmentYearsTotal });

    var filterInvestmentYears = $formFilters.querySelector('.valueInvestmentYears')?.value;
    if(filterInvestmentYears != null && filterInvestmentYears !== '')
      filters.push({ name: 'fq', value: 'investmentYears:' + filterInvestmentYears });

    var filterInvestmentsPerYear = $formFilters.querySelector('.valueInvestmentsPerYear')?.value;
    if(filterInvestmentsPerYear != null && filterInvestmentsPerYear !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYear:' + filterInvestmentsPerYear });

    var filterInvestmentsPerYearCumulative = $formFilters.querySelector('.valueInvestmentsPerYearCumulative')?.value;
    if(filterInvestmentsPerYearCumulative != null && filterInvestmentsPerYearCumulative !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYearCumulative:' + filterInvestmentsPerYearCumulative });

    var filterAssetClasses = $formFilters.querySelector('.valueAssetClasses')?.value;
    if(filterAssetClasses != null && filterAssetClasses !== '')
      filters.push({ name: 'fq', value: 'assetClasses:' + filterAssetClasses });

    var filterAssetClassesTargetIrr = $formFilters.querySelector('.valueAssetClassesTargetIrr')?.value;
    if(filterAssetClassesTargetIrr != null && filterAssetClassesTargetIrr !== '')
      filters.push({ name: 'fq', value: 'assetClassesTargetIrr:' + filterAssetClassesTargetIrr });

    var filterRevenueStreams = $formFilters.querySelector('.valueRevenueStreams')?.value;
    if(filterRevenueStreams != null && filterRevenueStreams !== '')
      filters.push({ name: 'fq', value: 'revenueStreams:' + filterRevenueStreams });

    var filterEconomicOutputProjections = $formFilters.querySelector('.valueEconomicOutputProjections')?.value;
    if(filterEconomicOutputProjections != null && filterEconomicOutputProjections !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjections:' + filterEconomicOutputProjections });

    var filterTotalGdpImpact = $formFilters.querySelector('.valueTotalGdpImpact')?.value;
    if(filterTotalGdpImpact != null && filterTotalGdpImpact !== '')
      filters.push({ name: 'fq', value: 'totalGdpImpact:' + filterTotalGdpImpact });

    var filterEconomicOutputProjectionsDataset = $formFilters.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
    if(filterEconomicOutputProjectionsDataset != null && filterEconomicOutputProjectionsDataset !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjectionsDataset:' + filterEconomicOutputProjectionsDataset });

    var filterArchitectsPerYear = $formFilters.querySelector('.valueArchitectsPerYear')?.value;
    if(filterArchitectsPerYear != null && filterArchitectsPerYear !== '')
      filters.push({ name: 'fq', value: 'architectsPerYear:' + filterArchitectsPerYear });

    var filterRemoteDevelopersPerYear = $formFilters.querySelector('.valueRemoteDevelopersPerYear')?.value;
    if(filterRemoteDevelopersPerYear != null && filterRemoteDevelopersPerYear !== '')
      filters.push({ name: 'fq', value: 'remoteDevelopersPerYear:' + filterRemoteDevelopersPerYear });

    var filterOnsiteDevelopersPerYear = $formFilters.querySelector('.valueOnsiteDevelopersPerYear')?.value;
    if(filterOnsiteDevelopersPerYear != null && filterOnsiteDevelopersPerYear !== '')
      filters.push({ name: 'fq', value: 'onsiteDevelopersPerYear:' + filterOnsiteDevelopersPerYear });

    var filterInstructorsPerYear = $formFilters.querySelector('.valueInstructorsPerYear')?.value;
    if(filterInstructorsPerYear != null && filterInstructorsPerYear !== '')
      filters.push({ name: 'fq', value: 'instructorsPerYear:' + filterInstructorsPerYear });

    var filterRemoteDeveloperPayPerYear = $formFilters.querySelector('.valueRemoteDeveloperPayPerYear')?.value;
    if(filterRemoteDeveloperPayPerYear != null && filterRemoteDeveloperPayPerYear !== '')
      filters.push({ name: 'fq', value: 'remoteDeveloperPayPerYear:' + filterRemoteDeveloperPayPerYear });

    var filterOnsiteDeveloperPayPerYear = $formFilters.querySelector('.valueOnsiteDeveloperPayPerYear')?.value;
    if(filterOnsiteDeveloperPayPerYear != null && filterOnsiteDeveloperPayPerYear !== '')
      filters.push({ name: 'fq', value: 'onsiteDeveloperPayPerYear:' + filterOnsiteDeveloperPayPerYear });

    var filterArchitectPayPerYear = $formFilters.querySelector('.valueArchitectPayPerYear')?.value;
    if(filterArchitectPayPerYear != null && filterArchitectPayPerYear !== '')
      filters.push({ name: 'fq', value: 'architectPayPerYear:' + filterArchitectPayPerYear });

    var filterInstructorPayPerYear = $formFilters.querySelector('.valueInstructorPayPerYear')?.value;
    if(filterInstructorPayPerYear != null && filterInstructorPayPerYear !== '')
      filters.push({ name: 'fq', value: 'instructorPayPerYear:' + filterInstructorPayPerYear });

    var filterSubscriptionsPerYear = $formFilters.querySelector('.valueSubscriptionsPerYear')?.value;
    if(filterSubscriptionsPerYear != null && filterSubscriptionsPerYear !== '')
      filters.push({ name: 'fq', value: 'subscriptionsPerYear:' + filterSubscriptionsPerYear });

    var filterSubscriptionCostsPerYear = $formFilters.querySelector('.valueSubscriptionCostsPerYear')?.value;
    if(filterSubscriptionCostsPerYear != null && filterSubscriptionCostsPerYear !== '')
      filters.push({ name: 'fq', value: 'subscriptionCostsPerYear:' + filterSubscriptionCostsPerYear });

    var filterTotalSubscriptionCostPerYear = $formFilters.querySelector('.valueTotalSubscriptionCostPerYear')?.value;
    if(filterTotalSubscriptionCostPerYear != null && filterTotalSubscriptionCostPerYear !== '')
      filters.push({ name: 'fq', value: 'totalSubscriptionCostPerYear:' + filterTotalSubscriptionCostPerYear });

    var filterEmployeeSubscriptionCostsPerYear = $formFilters.querySelector('.valueEmployeeSubscriptionCostsPerYear')?.value;
    if(filterEmployeeSubscriptionCostsPerYear != null && filterEmployeeSubscriptionCostsPerYear !== '')
      filters.push({ name: 'fq', value: 'employeeSubscriptionCostsPerYear:' + filterEmployeeSubscriptionCostsPerYear });

    var filterGkeStagingEnvironments = $formFilters.querySelector('.valueGkeStagingEnvironments')?.value;
    if(filterGkeStagingEnvironments != null && filterGkeStagingEnvironments !== '')
      filters.push({ name: 'fq', value: 'gkeStagingEnvironments:' + filterGkeStagingEnvironments });

    var filterOpenshiftDedicatedManagementClusters = $formFilters.querySelector('.valueOpenshiftDedicatedManagementClusters')?.value;
    if(filterOpenshiftDedicatedManagementClusters != null && filterOpenshiftDedicatedManagementClusters !== '')
      filters.push({ name: 'fq', value: 'openshiftDedicatedManagementClusters:' + filterOpenshiftDedicatedManagementClusters });

    var filterOpenshiftDedicatedWorkerClusters = $formFilters.querySelector('.valueOpenshiftDedicatedWorkerClusters')?.value;
    if(filterOpenshiftDedicatedWorkerClusters != null && filterOpenshiftDedicatedWorkerClusters !== '')
      filters.push({ name: 'fq', value: 'openshiftDedicatedWorkerClusters:' + filterOpenshiftDedicatedWorkerClusters });

    var filterOpenshiftControlPlaneNodes = $formFilters.querySelector('.valueOpenshiftControlPlaneNodes')?.value;
    if(filterOpenshiftControlPlaneNodes != null && filterOpenshiftControlPlaneNodes !== '')
      filters.push({ name: 'fq', value: 'openshiftControlPlaneNodes:' + filterOpenshiftControlPlaneNodes });

    var filterOpenshiftControlPlaneCores = $formFilters.querySelector('.valueOpenshiftControlPlaneCores')?.value;
    if(filterOpenshiftControlPlaneCores != null && filterOpenshiftControlPlaneCores !== '')
      filters.push({ name: 'fq', value: 'openshiftControlPlaneCores:' + filterOpenshiftControlPlaneCores });

    var filterOpenshiftControlPlaneHourlyPricePerCore = $formFilters.querySelector('.valueOpenshiftControlPlaneHourlyPricePerCore')?.value;
    if(filterOpenshiftControlPlaneHourlyPricePerCore != null && filterOpenshiftControlPlaneHourlyPricePerCore !== '')
      filters.push({ name: 'fq', value: 'openshiftControlPlaneHourlyPricePerCore:' + filterOpenshiftControlPlaneHourlyPricePerCore });

    var filterOpenshiftInfraNodes = $formFilters.querySelector('.valueOpenshiftInfraNodes')?.value;
    if(filterOpenshiftInfraNodes != null && filterOpenshiftInfraNodes !== '')
      filters.push({ name: 'fq', value: 'openshiftInfraNodes:' + filterOpenshiftInfraNodes });

    var filterOpenshiftInfraCores = $formFilters.querySelector('.valueOpenshiftInfraCores')?.value;
    if(filterOpenshiftInfraCores != null && filterOpenshiftInfraCores !== '')
      filters.push({ name: 'fq', value: 'openshiftInfraCores:' + filterOpenshiftInfraCores });

    var filterOpenshiftInfraHourlyPricePerCore = $formFilters.querySelector('.valueOpenshiftInfraHourlyPricePerCore')?.value;
    if(filterOpenshiftInfraHourlyPricePerCore != null && filterOpenshiftInfraHourlyPricePerCore !== '')
      filters.push({ name: 'fq', value: 'openshiftInfraHourlyPricePerCore:' + filterOpenshiftInfraHourlyPricePerCore });

    var filterManagementClusterNodes = $formFilters.querySelector('.valueManagementClusterNodes')?.value;
    if(filterManagementClusterNodes != null && filterManagementClusterNodes !== '')
      filters.push({ name: 'fq', value: 'managementClusterNodes:' + filterManagementClusterNodes });

    var filterWorkerClusterApplicationNodes = $formFilters.querySelector('.valueWorkerClusterApplicationNodes')?.value;
    if(filterWorkerClusterApplicationNodes != null && filterWorkerClusterApplicationNodes !== '')
      filters.push({ name: 'fq', value: 'workerClusterApplicationNodes:' + filterWorkerClusterApplicationNodes });

    var filterOpenshiftWorkerCores = $formFilters.querySelector('.valueOpenshiftWorkerCores')?.value;
    if(filterOpenshiftWorkerCores != null && filterOpenshiftWorkerCores !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerCores:' + filterOpenshiftWorkerCores });

    var filterOpenshiftManagementClusterWorkerNodesPerYear = $formFilters.querySelector('.valueOpenshiftManagementClusterWorkerNodesPerYear')?.value;
    if(filterOpenshiftManagementClusterWorkerNodesPerYear != null && filterOpenshiftManagementClusterWorkerNodesPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftManagementClusterWorkerNodesPerYear:' + filterOpenshiftManagementClusterWorkerNodesPerYear });

    var filterOpenshiftApplicationClusterWorkerNodesPerYear = $formFilters.querySelector('.valueOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
    if(filterOpenshiftApplicationClusterWorkerNodesPerYear != null && filterOpenshiftApplicationClusterWorkerNodesPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftApplicationClusterWorkerNodesPerYear:' + filterOpenshiftApplicationClusterWorkerNodesPerYear });

    var filterOpenshiftWorkerNodesPerYear = $formFilters.querySelector('.valueOpenshiftWorkerNodesPerYear')?.value;
    if(filterOpenshiftWorkerNodesPerYear != null && filterOpenshiftWorkerNodesPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerNodesPerYear:' + filterOpenshiftWorkerNodesPerYear });

    var filterOpenshiftManagementClusterWorkerCoresPerYear = $formFilters.querySelector('.valueOpenshiftManagementClusterWorkerCoresPerYear')?.value;
    if(filterOpenshiftManagementClusterWorkerCoresPerYear != null && filterOpenshiftManagementClusterWorkerCoresPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftManagementClusterWorkerCoresPerYear:' + filterOpenshiftManagementClusterWorkerCoresPerYear });

    var filterOpenshiftApplicationClusterWorkerCoresPerYear = $formFilters.querySelector('.valueOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
    if(filterOpenshiftApplicationClusterWorkerCoresPerYear != null && filterOpenshiftApplicationClusterWorkerCoresPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftApplicationClusterWorkerCoresPerYear:' + filterOpenshiftApplicationClusterWorkerCoresPerYear });

    var filterOpenshiftWorkerCoresPerYear = $formFilters.querySelector('.valueOpenshiftWorkerCoresPerYear')?.value;
    if(filterOpenshiftWorkerCoresPerYear != null && filterOpenshiftWorkerCoresPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerCoresPerYear:' + filterOpenshiftWorkerCoresPerYear });

    var filterOpenshiftWorkerHourlyPricePerCore = $formFilters.querySelector('.valueOpenshiftWorkerHourlyPricePerCore')?.value;
    if(filterOpenshiftWorkerHourlyPricePerCore != null && filterOpenshiftWorkerHourlyPricePerCore !== '')
      filters.push({ name: 'fq', value: 'openshiftWorkerHourlyPricePerCore:' + filterOpenshiftWorkerHourlyPricePerCore });

    var filterOpenshiftSSDStorageTiBPerYear = $formFilters.querySelector('.valueOpenshiftSSDStorageTiBPerYear')?.value;
    if(filterOpenshiftSSDStorageTiBPerYear != null && filterOpenshiftSSDStorageTiBPerYear !== '')
      filters.push({ name: 'fq', value: 'openshiftSSDStorageTiBPerYear:' + filterOpenshiftSSDStorageTiBPerYear });

    var filterOpenshiftSSDStoragePricePerGiB = $formFilters.querySelector('.valueOpenshiftSSDStoragePricePerGiB')?.value;
    if(filterOpenshiftSSDStoragePricePerGiB != null && filterOpenshiftSSDStoragePricePerGiB !== '')
      filters.push({ name: 'fq', value: 'openshiftSSDStoragePricePerGiB:' + filterOpenshiftSSDStoragePricePerGiB });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterDisplayName = $formFilters.querySelector('.valueDisplayName')?.value;
    if(filterDisplayName != null && filterDisplayName !== '')
      filters.push({ name: 'fq', value: 'displayName:' + filterDisplayName });

    var filterContractId = $formFilters.querySelector('.valueContractId')?.value;
    if(filterContractId != null && filterContractId !== '')
      filters.push({ name: 'fq', value: 'contractId:' + filterContractId });

    var filterEmployeesPerYearDataset = $formFilters.querySelector('.valueEmployeesPerYearDataset')?.value;
    if(filterEmployeesPerYearDataset != null && filterEmployeesPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'employeesPerYearDataset:' + filterEmployeesPerYearDataset });

    var filterSubscriptionCostsPerYearDataset = $formFilters.querySelector('.valueSubscriptionCostsPerYearDataset')?.value;
    if(filterSubscriptionCostsPerYearDataset != null && filterSubscriptionCostsPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'subscriptionCostsPerYearDataset:' + filterSubscriptionCostsPerYearDataset });

    var filterEmployeePayPerYearDataset = $formFilters.querySelector('.valueEmployeePayPerYearDataset')?.value;
    if(filterEmployeePayPerYearDataset != null && filterEmployeePayPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'employeePayPerYearDataset:' + filterEmployeePayPerYearDataset });

    var filterTotalOpenshiftControlPlaneCores = $formFilters.querySelector('.valueTotalOpenshiftControlPlaneCores')?.value;
    if(filterTotalOpenshiftControlPlaneCores != null && filterTotalOpenshiftControlPlaneCores !== '')
      filters.push({ name: 'fq', value: 'totalOpenshiftControlPlaneCores:' + filterTotalOpenshiftControlPlaneCores });

    var filterTotalOpenshiftInfraCores = $formFilters.querySelector('.valueTotalOpenshiftInfraCores')?.value;
    if(filterTotalOpenshiftInfraCores != null && filterTotalOpenshiftInfraCores !== '')
      filters.push({ name: 'fq', value: 'totalOpenshiftInfraCores:' + filterTotalOpenshiftInfraCores });

    var filterOpenshiftCostsPerClusterPerYearDataset = $formFilters.querySelector('.valueOpenshiftCostsPerClusterPerYearDataset')?.value;
    if(filterOpenshiftCostsPerClusterPerYearDataset != null && filterOpenshiftCostsPerClusterPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'openshiftCostsPerClusterPerYearDataset:' + filterOpenshiftCostsPerClusterPerYearDataset });

    var filterOpenshiftCostsPerYearDataset = $formFilters.querySelector('.valueOpenshiftCostsPerYearDataset')?.value;
    if(filterOpenshiftCostsPerYearDataset != null && filterOpenshiftCostsPerYearDataset !== '')
      filters.push({ name: 'fq', value: 'openshiftCostsPerYearDataset:' + filterOpenshiftCostsPerYearDataset });
  }
  return filters;
}

function patchContractVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchContractVals(filters, vals, target, success, error);
}

function patchContractVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/contract?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postContract($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueRegion = $formValues.querySelector('.valueRegion')?.value;
  if(valueRegion != null && valueRegion !== '')
    vals['region'] = valueRegion;

  var valueStartDate = $formValues.querySelector('.valueStartDate')?.value;
  if(valueStartDate != null && valueStartDate !== '')
    vals['startDate'] = valueStartDate;

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueAbbreviation = $formValues.querySelector('.valueAbbreviation')?.value;
  if(valueAbbreviation != null && valueAbbreviation !== '')
    vals['abbreviation'] = valueAbbreviation;

  var valueInvestmentYearsTotal = $formValues.querySelector('.valueInvestmentYearsTotal')?.value;
  if(valueInvestmentYearsTotal != null && valueInvestmentYearsTotal !== '')
    vals['investmentYearsTotal'] = valueInvestmentYearsTotal;

  var valueInvestmentYears = $formValues.querySelector('.valueInvestmentYears')?.value;
  if(valueInvestmentYears != null && valueInvestmentYears !== '')
    vals['investmentYears'] = JSON.parse(valueInvestmentYears);

  var valueInvestmentsPerYear = $formValues.querySelector('.valueInvestmentsPerYear')?.value;
  if(valueInvestmentsPerYear != null && valueInvestmentsPerYear !== '')
    vals['investmentsPerYear'] = JSON.parse(valueInvestmentsPerYear);

  var valueInvestmentsPerYearCumulative = $formValues.querySelector('.valueInvestmentsPerYearCumulative')?.value;
  if(valueInvestmentsPerYearCumulative != null && valueInvestmentsPerYearCumulative !== '')
    vals['investmentsPerYearCumulative'] = JSON.parse(valueInvestmentsPerYearCumulative);

  var valueAssetClasses = $formValues.querySelector('.valueAssetClasses')?.value;
  if(valueAssetClasses != null && valueAssetClasses !== '')
    vals['assetClasses'] = JSON.parse(valueAssetClasses);

  var valueAssetClassesTargetIrr = $formValues.querySelector('.valueAssetClassesTargetIrr')?.value;
  if(valueAssetClassesTargetIrr != null && valueAssetClassesTargetIrr !== '')
    vals['assetClassesTargetIrr'] = JSON.parse(valueAssetClassesTargetIrr);

  var valueRevenueStreams = $formValues.querySelector('.valueRevenueStreams')?.value;
  if(valueRevenueStreams != null && valueRevenueStreams !== '')
    vals['revenueStreams'] = JSON.parse(valueRevenueStreams);

  var valueEconomicOutputProjections = $formValues.querySelector('.valueEconomicOutputProjections')?.value;
  if(valueEconomicOutputProjections != null && valueEconomicOutputProjections !== '')
    vals['economicOutputProjections'] = JSON.parse(valueEconomicOutputProjections);

  var valueTotalGdpImpact = $formValues.querySelector('.valueTotalGdpImpact')?.value;
  if(valueTotalGdpImpact != null && valueTotalGdpImpact !== '')
    vals['totalGdpImpact'] = valueTotalGdpImpact;

  var valueEconomicOutputProjectionsDataset = $formValues.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
  if(valueEconomicOutputProjectionsDataset != null && valueEconomicOutputProjectionsDataset !== '')
    vals['economicOutputProjectionsDataset'] = JSON.parse(valueEconomicOutputProjectionsDataset);

  var valueCumulativeInvestmentChart = $formValues.querySelector('.valueCumulativeInvestmentChart')?.value;
  if(valueCumulativeInvestmentChart != null && valueCumulativeInvestmentChart !== '')
    vals['cumulativeInvestmentChart'] = JSON.parse(valueCumulativeInvestmentChart);

  var valueArchitectsPerYear = $formValues.querySelector('.valueArchitectsPerYear')?.value;
  if(valueArchitectsPerYear != null && valueArchitectsPerYear !== '')
    vals['architectsPerYear'] = JSON.parse(valueArchitectsPerYear);

  var valueRemoteDevelopersPerYear = $formValues.querySelector('.valueRemoteDevelopersPerYear')?.value;
  if(valueRemoteDevelopersPerYear != null && valueRemoteDevelopersPerYear !== '')
    vals['remoteDevelopersPerYear'] = JSON.parse(valueRemoteDevelopersPerYear);

  var valueOnsiteDevelopersPerYear = $formValues.querySelector('.valueOnsiteDevelopersPerYear')?.value;
  if(valueOnsiteDevelopersPerYear != null && valueOnsiteDevelopersPerYear !== '')
    vals['onsiteDevelopersPerYear'] = JSON.parse(valueOnsiteDevelopersPerYear);

  var valueInstructorsPerYear = $formValues.querySelector('.valueInstructorsPerYear')?.value;
  if(valueInstructorsPerYear != null && valueInstructorsPerYear !== '')
    vals['instructorsPerYear'] = JSON.parse(valueInstructorsPerYear);

  var valueRemoteDeveloperPayPerYear = $formValues.querySelector('.valueRemoteDeveloperPayPerYear')?.value;
  if(valueRemoteDeveloperPayPerYear != null && valueRemoteDeveloperPayPerYear !== '')
    vals['remoteDeveloperPayPerYear'] = valueRemoteDeveloperPayPerYear;

  var valueOnsiteDeveloperPayPerYear = $formValues.querySelector('.valueOnsiteDeveloperPayPerYear')?.value;
  if(valueOnsiteDeveloperPayPerYear != null && valueOnsiteDeveloperPayPerYear !== '')
    vals['onsiteDeveloperPayPerYear'] = valueOnsiteDeveloperPayPerYear;

  var valueArchitectPayPerYear = $formValues.querySelector('.valueArchitectPayPerYear')?.value;
  if(valueArchitectPayPerYear != null && valueArchitectPayPerYear !== '')
    vals['architectPayPerYear'] = valueArchitectPayPerYear;

  var valueInstructorPayPerYear = $formValues.querySelector('.valueInstructorPayPerYear')?.value;
  if(valueInstructorPayPerYear != null && valueInstructorPayPerYear !== '')
    vals['instructorPayPerYear'] = valueInstructorPayPerYear;

  var valueSubscriptionsPerYear = $formValues.querySelector('.valueSubscriptionsPerYear')?.value;
  if(valueSubscriptionsPerYear != null && valueSubscriptionsPerYear !== '')
    vals['subscriptionsPerYear'] = JSON.parse(valueSubscriptionsPerYear);

  var valueSubscriptionCostsPerYear = $formValues.querySelector('.valueSubscriptionCostsPerYear')?.value;
  if(valueSubscriptionCostsPerYear != null && valueSubscriptionCostsPerYear !== '')
    vals['subscriptionCostsPerYear'] = JSON.parse(valueSubscriptionCostsPerYear);

  var valueTotalSubscriptionCostPerYear = $formValues.querySelector('.valueTotalSubscriptionCostPerYear')?.value;
  if(valueTotalSubscriptionCostPerYear != null && valueTotalSubscriptionCostPerYear !== '')
    vals['totalSubscriptionCostPerYear'] = valueTotalSubscriptionCostPerYear;

  var valueEmployeeSubscriptionCostsPerYear = $formValues.querySelector('.valueEmployeeSubscriptionCostsPerYear')?.value;
  if(valueEmployeeSubscriptionCostsPerYear != null && valueEmployeeSubscriptionCostsPerYear !== '')
    vals['employeeSubscriptionCostsPerYear'] = JSON.parse(valueEmployeeSubscriptionCostsPerYear);

  var valueEmployeesPerYearChart = $formValues.querySelector('.valueEmployeesPerYearChart')?.value;
  if(valueEmployeesPerYearChart != null && valueEmployeesPerYearChart !== '')
    vals['employeesPerYearChart'] = JSON.parse(valueEmployeesPerYearChart);

  var valueEmployeePayPerYearChart = $formValues.querySelector('.valueEmployeePayPerYearChart')?.value;
  if(valueEmployeePayPerYearChart != null && valueEmployeePayPerYearChart !== '')
    vals['employeePayPerYearChart'] = JSON.parse(valueEmployeePayPerYearChart);

  var valueGkeStagingEnvironments = $formValues.querySelector('.valueGkeStagingEnvironments')?.value;
  if(valueGkeStagingEnvironments != null && valueGkeStagingEnvironments !== '')
    vals['gkeStagingEnvironments'] = valueGkeStagingEnvironments;

  var valueOpenshiftDedicatedManagementClusters = $formValues.querySelector('.valueOpenshiftDedicatedManagementClusters')?.value;
  if(valueOpenshiftDedicatedManagementClusters != null && valueOpenshiftDedicatedManagementClusters !== '')
    vals['openshiftDedicatedManagementClusters'] = valueOpenshiftDedicatedManagementClusters;

  var valueOpenshiftDedicatedWorkerClusters = $formValues.querySelector('.valueOpenshiftDedicatedWorkerClusters')?.value;
  if(valueOpenshiftDedicatedWorkerClusters != null && valueOpenshiftDedicatedWorkerClusters !== '')
    vals['openshiftDedicatedWorkerClusters'] = valueOpenshiftDedicatedWorkerClusters;

  var valueOpenshiftControlPlaneNodes = $formValues.querySelector('.valueOpenshiftControlPlaneNodes')?.value;
  if(valueOpenshiftControlPlaneNodes != null && valueOpenshiftControlPlaneNodes !== '')
    vals['openshiftControlPlaneNodes'] = valueOpenshiftControlPlaneNodes;

  var valueOpenshiftControlPlaneCores = $formValues.querySelector('.valueOpenshiftControlPlaneCores')?.value;
  if(valueOpenshiftControlPlaneCores != null && valueOpenshiftControlPlaneCores !== '')
    vals['openshiftControlPlaneCores'] = valueOpenshiftControlPlaneCores;

  var valueOpenshiftControlPlaneHourlyPricePerCore = $formValues.querySelector('.valueOpenshiftControlPlaneHourlyPricePerCore')?.value;
  if(valueOpenshiftControlPlaneHourlyPricePerCore != null && valueOpenshiftControlPlaneHourlyPricePerCore !== '')
    vals['openshiftControlPlaneHourlyPricePerCore'] = valueOpenshiftControlPlaneHourlyPricePerCore;

  var valueOpenshiftInfraNodes = $formValues.querySelector('.valueOpenshiftInfraNodes')?.value;
  if(valueOpenshiftInfraNodes != null && valueOpenshiftInfraNodes !== '')
    vals['openshiftInfraNodes'] = valueOpenshiftInfraNodes;

  var valueOpenshiftInfraCores = $formValues.querySelector('.valueOpenshiftInfraCores')?.value;
  if(valueOpenshiftInfraCores != null && valueOpenshiftInfraCores !== '')
    vals['openshiftInfraCores'] = valueOpenshiftInfraCores;

  var valueOpenshiftInfraHourlyPricePerCore = $formValues.querySelector('.valueOpenshiftInfraHourlyPricePerCore')?.value;
  if(valueOpenshiftInfraHourlyPricePerCore != null && valueOpenshiftInfraHourlyPricePerCore !== '')
    vals['openshiftInfraHourlyPricePerCore'] = valueOpenshiftInfraHourlyPricePerCore;

  var valueManagementClusterNodes = $formValues.querySelector('.valueManagementClusterNodes')?.value;
  if(valueManagementClusterNodes != null && valueManagementClusterNodes !== '')
    vals['managementClusterNodes'] = valueManagementClusterNodes;

  var valueWorkerClusterApplicationNodes = $formValues.querySelector('.valueWorkerClusterApplicationNodes')?.value;
  if(valueWorkerClusterApplicationNodes != null && valueWorkerClusterApplicationNodes !== '')
    vals['workerClusterApplicationNodes'] = valueWorkerClusterApplicationNodes;

  var valueOpenshiftWorkerCores = $formValues.querySelector('.valueOpenshiftWorkerCores')?.value;
  if(valueOpenshiftWorkerCores != null && valueOpenshiftWorkerCores !== '')
    vals['openshiftWorkerCores'] = valueOpenshiftWorkerCores;

  var valueOpenshiftManagementClusterWorkerNodesPerYear = $formValues.querySelector('.valueOpenshiftManagementClusterWorkerNodesPerYear')?.value;
  if(valueOpenshiftManagementClusterWorkerNodesPerYear != null && valueOpenshiftManagementClusterWorkerNodesPerYear !== '')
    vals['openshiftManagementClusterWorkerNodesPerYear'] = JSON.parse(valueOpenshiftManagementClusterWorkerNodesPerYear);

  var valueOpenshiftApplicationClusterWorkerNodesPerYear = $formValues.querySelector('.valueOpenshiftApplicationClusterWorkerNodesPerYear')?.value;
  if(valueOpenshiftApplicationClusterWorkerNodesPerYear != null && valueOpenshiftApplicationClusterWorkerNodesPerYear !== '')
    vals['openshiftApplicationClusterWorkerNodesPerYear'] = JSON.parse(valueOpenshiftApplicationClusterWorkerNodesPerYear);

  var valueOpenshiftWorkerNodesPerYear = $formValues.querySelector('.valueOpenshiftWorkerNodesPerYear')?.value;
  if(valueOpenshiftWorkerNodesPerYear != null && valueOpenshiftWorkerNodesPerYear !== '')
    vals['openshiftWorkerNodesPerYear'] = JSON.parse(valueOpenshiftWorkerNodesPerYear);

  var valueOpenshiftManagementClusterWorkerCoresPerYear = $formValues.querySelector('.valueOpenshiftManagementClusterWorkerCoresPerYear')?.value;
  if(valueOpenshiftManagementClusterWorkerCoresPerYear != null && valueOpenshiftManagementClusterWorkerCoresPerYear !== '')
    vals['openshiftManagementClusterWorkerCoresPerYear'] = JSON.parse(valueOpenshiftManagementClusterWorkerCoresPerYear);

  var valueOpenshiftApplicationClusterWorkerCoresPerYear = $formValues.querySelector('.valueOpenshiftApplicationClusterWorkerCoresPerYear')?.value;
  if(valueOpenshiftApplicationClusterWorkerCoresPerYear != null && valueOpenshiftApplicationClusterWorkerCoresPerYear !== '')
    vals['openshiftApplicationClusterWorkerCoresPerYear'] = JSON.parse(valueOpenshiftApplicationClusterWorkerCoresPerYear);

  var valueOpenshiftWorkerCoresPerYear = $formValues.querySelector('.valueOpenshiftWorkerCoresPerYear')?.value;
  if(valueOpenshiftWorkerCoresPerYear != null && valueOpenshiftWorkerCoresPerYear !== '')
    vals['openshiftWorkerCoresPerYear'] = JSON.parse(valueOpenshiftWorkerCoresPerYear);

  var valueOpenshiftWorkerHourlyPricePerCore = $formValues.querySelector('.valueOpenshiftWorkerHourlyPricePerCore')?.value;
  if(valueOpenshiftWorkerHourlyPricePerCore != null && valueOpenshiftWorkerHourlyPricePerCore !== '')
    vals['openshiftWorkerHourlyPricePerCore'] = valueOpenshiftWorkerHourlyPricePerCore;

  var valueOpenshiftSSDStorageTiBPerYear = $formValues.querySelector('.valueOpenshiftSSDStorageTiBPerYear')?.value;
  if(valueOpenshiftSSDStorageTiBPerYear != null && valueOpenshiftSSDStorageTiBPerYear !== '')
    vals['openshiftSSDStorageTiBPerYear'] = JSON.parse(valueOpenshiftSSDStorageTiBPerYear);

  var valueOpenshiftSSDStoragePricePerGiB = $formValues.querySelector('.valueOpenshiftSSDStoragePricePerGiB')?.value;
  if(valueOpenshiftSSDStoragePricePerGiB != null && valueOpenshiftSSDStoragePricePerGiB !== '')
    vals['openshiftSSDStoragePricePerGiB'] = valueOpenshiftSSDStoragePricePerGiB;

  var valueOpenshiftCostsPerClusterPerYearChart = $formValues.querySelector('.valueOpenshiftCostsPerClusterPerYearChart')?.value;
  if(valueOpenshiftCostsPerClusterPerYearChart != null && valueOpenshiftCostsPerClusterPerYearChart !== '')
    vals['openshiftCostsPerClusterPerYearChart'] = JSON.parse(valueOpenshiftCostsPerClusterPerYearChart);

  var valueOpenshiftCostsPerYearChart = $formValues.querySelector('.valueOpenshiftCostsPerYearChart')?.value;
  if(valueOpenshiftCostsPerYearChart != null && valueOpenshiftCostsPerYearChart !== '')
    vals['openshiftCostsPerYearChart'] = JSON.parse(valueOpenshiftCostsPerYearChart);

  var valueProjectExpensesChart = $formValues.querySelector('.valueProjectExpensesChart')?.value;
  if(valueProjectExpensesChart != null && valueProjectExpensesChart !== '')
    vals['projectExpensesChart'] = JSON.parse(valueProjectExpensesChart);

  var valueEconomicOutputChart = $formValues.querySelector('.valueEconomicOutputChart')?.value;
  if(valueEconomicOutputChart != null && valueEconomicOutputChart !== '')
    vals['economicOutputChart'] = JSON.parse(valueEconomicOutputChart);

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  var valueDisplayName = $formValues.querySelector('.valueDisplayName')?.value;
  if(valueDisplayName != null && valueDisplayName !== '')
    vals['displayName'] = valueDisplayName;

  var valueContractId = $formValues.querySelector('.valueContractId')?.value;
  if(valueContractId != null && valueContractId !== '')
    vals['contractId'] = valueContractId;

  var valueEmployeesPerYearDataset = $formValues.querySelector('.valueEmployeesPerYearDataset')?.value;
  if(valueEmployeesPerYearDataset != null && valueEmployeesPerYearDataset !== '')
    vals['employeesPerYearDataset'] = JSON.parse(valueEmployeesPerYearDataset);

  var valueSubscriptionCostsPerYearDataset = $formValues.querySelector('.valueSubscriptionCostsPerYearDataset')?.value;
  if(valueSubscriptionCostsPerYearDataset != null && valueSubscriptionCostsPerYearDataset !== '')
    vals['subscriptionCostsPerYearDataset'] = JSON.parse(valueSubscriptionCostsPerYearDataset);

  var valueEmployeePayPerYearDataset = $formValues.querySelector('.valueEmployeePayPerYearDataset')?.value;
  if(valueEmployeePayPerYearDataset != null && valueEmployeePayPerYearDataset !== '')
    vals['employeePayPerYearDataset'] = JSON.parse(valueEmployeePayPerYearDataset);

  var valueTotalOpenshiftControlPlaneCores = $formValues.querySelector('.valueTotalOpenshiftControlPlaneCores')?.value;
  if(valueTotalOpenshiftControlPlaneCores != null && valueTotalOpenshiftControlPlaneCores !== '')
    vals['totalOpenshiftControlPlaneCores'] = valueTotalOpenshiftControlPlaneCores;

  var valueTotalOpenshiftInfraCores = $formValues.querySelector('.valueTotalOpenshiftInfraCores')?.value;
  if(valueTotalOpenshiftInfraCores != null && valueTotalOpenshiftInfraCores !== '')
    vals['totalOpenshiftInfraCores'] = valueTotalOpenshiftInfraCores;

  var valueOpenshiftCostsPerClusterPerYearDataset = $formValues.querySelector('.valueOpenshiftCostsPerClusterPerYearDataset')?.value;
  if(valueOpenshiftCostsPerClusterPerYearDataset != null && valueOpenshiftCostsPerClusterPerYearDataset !== '')
    vals['openshiftCostsPerClusterPerYearDataset'] = JSON.parse(valueOpenshiftCostsPerClusterPerYearDataset);

  var valueOpenshiftCostsPerYearDataset = $formValues.querySelector('.valueOpenshiftCostsPerYearDataset')?.value;
  if(valueOpenshiftCostsPerYearDataset != null && valueOpenshiftCostsPerYearDataset !== '')
    vals['openshiftCostsPerYearDataset'] = JSON.parse(valueOpenshiftCostsPerYearDataset);

  fetch(
    '/en-us/api/contract'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postContractVals(vals, target, success, error) {
  fetch(
    '/en-us/api/contract'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteContract(target, contractId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/contract/' + encodeURIComponent(contractId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportContract($formValues, target, contractId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportContractVals(JSON.parse(json), target, success, error);
}

function putimportContractVals(json, target, success, error) {
  fetch(
    '/en-us/api/contract-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterContract(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/contract'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}
