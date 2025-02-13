Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyEvent')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyEvent', event.target.value);
  });

  document.querySelector('#htmDropdown-startDateTime')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyEvent-startDateTime').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyEvent', 'startDateTime', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyEvent_startDateTime').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'startDateTime', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyEvent-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyEvent', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyEvent_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyEvent_name')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyEvent-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyEvent', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyEvent_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyEvent_description')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyEvent-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyEvent', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyEvent_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyEvent_editPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyEvent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyEvent(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyEvent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyEvent(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyEvent_created')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_name')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_location')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_location')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_location')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_description')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_startDateTime')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_endDateTime')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_price')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
});
