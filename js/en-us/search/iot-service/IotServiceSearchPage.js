Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeIotService')?.addEventListener('wa-change', (event) => {
    facetRangeChange('IotService', event.target.value);
  });

  document.querySelector('#htmDropdown-ngsildTenant')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-IotService-ngsildTenant').innerText == undefined);
    if (action === 'sort') {
      sort('IotService', 'ngsildTenant', checked ? order : '');
      document.querySelector('#pageFacetSortIotService_ngsildTenant').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortIotService_ngsildTenant')?.addEventListener('wa-change', (event) => {
    sort('IotService', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-ngsildPath')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-IotService-ngsildPath').innerText == undefined);
    if (action === 'sort') {
      sort('IotService', 'ngsildPath', checked ? order : '');
      document.querySelector('#pageFacetSortIotService_ngsildPath').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortIotService_ngsildPath')?.addEventListener('wa-change', (event) => {
    sort('IotService', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-IotService-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('IotService', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortIotService_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortIotService_editPage')?.addEventListener('wa-change', (event) => {
    sort('IotService', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchIotService')?.addEventListener('click', (event) => {
    document.querySelector('#patchIotServiceDialog').open = true;
  });

  document.querySelector('#htmButton_postIotService')?.addEventListener('click', (event) => {
    document.querySelector('#postIotServiceDialog').open = true;
  });

  document.querySelector('#htmButton_deleteIotService')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteIotService(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportIotService')?.addEventListener('click', (event) => {
    document.querySelector('#putimportIotServiceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageIotService')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageIotServiceDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterIotService')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterIotService(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqIotService_created')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_created')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_created')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_archived')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_archived')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_archived')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_entityType')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_entityType')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_entityType')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_apiKey')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_apiKey')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_apiKey')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_resource')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_resource')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_resource')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_ngsildTenant')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_ngsildTenant')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_ngsildPath')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_ngsildPath')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_cbHost')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_cbHost')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_cbHost')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_attributes')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_attributes')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_attributes')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_pageId')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_pageId')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
          document.querySelector('#fqIotService_displayPage')?.addEventListener('wa-change', (event) => {
            fqChange('IotService', event.currentTarget);
          });
          document.querySelector('#buttonFacetIotService_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('IotService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotIotService_displayPage')?.addEventListener('wa-change', (event) => {
            facetPivotChange('IotService', event.currentTarget);
          });
});
