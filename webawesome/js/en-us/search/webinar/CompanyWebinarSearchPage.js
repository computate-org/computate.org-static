Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebinar')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyWebinar', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebinar-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebinar', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebinar_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebinar_name')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-nextWebinar')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebinar-nextWebinar').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebinar', 'nextWebinar', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebinar_nextWebinar').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebinar_nextWebinar')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'nextWebinar', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-joinUrl')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebinar-joinUrl').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebinar', 'joinUrl', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebinar_joinUrl').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebinar_joinUrl')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'joinUrl', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebinar-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebinar', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebinar_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebinar_description')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebinar-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebinar', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebinar_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebinar_editPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyWebinar')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyWebinar(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyWebinar')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyWebinar(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyWebinar_created')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_archived')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_archived')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_archived')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_name')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_description')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlAmericas')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlApac')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlEmea')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_icalUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_joinUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
});
