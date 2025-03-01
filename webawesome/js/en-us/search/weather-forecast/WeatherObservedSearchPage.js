Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeWeatherObserved')?.addEventListener('wa-change', (event) => {
    facetRangeChange('WeatherObserved', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-WeatherObserved-name').innerText == undefined);
    if (action === 'sort') {
      sort('WeatherObserved', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortWeatherObserved_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortWeatherObserved_name')?.addEventListener('wa-change', (event) => {
    sort('WeatherObserved', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-WeatherObserved-description').innerText == undefined);
    if (action === 'sort') {
      sort('WeatherObserved', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortWeatherObserved_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortWeatherObserved_description')?.addEventListener('wa-change', (event) => {
    sort('WeatherObserved', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-WeatherObserved-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('WeatherObserved', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortWeatherObserved_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortWeatherObserved_editPage')?.addEventListener('wa-change', (event) => {
    sort('WeatherObserved', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#patchWeatherObservedDialog').open = true;
  });

  document.querySelector('#htmButton_postWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#postWeatherObservedDialog').open = true;
  });

  document.querySelector('#htmButton_deleteWeatherObserved')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteWeatherObserved(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#putimportWeatherObservedDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageWeatherObserved')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageWeatherObservedDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterWeatherObserved')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterWeatherObserved(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqWeatherObserved_created')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_created')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_created')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_archived')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_archived')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_archived')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_name')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_name')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_name')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_description')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_description')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_description')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_location')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_location')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_location')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_areaServed')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_areaServed')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_id')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_id')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_id')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_ngsildTenant')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildTenant')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_ngsildPath')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildPath')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_ngsildContext')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildContext')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_ngsildData')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildData')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_address')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_address')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_address')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_alternateName')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_alternateName')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_atmosphericPressure')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_atmosphericPressure')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_atmosphericPressure')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dataProvider')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dataProvider')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dateCreated')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateCreated')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dateIssued')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dateIssued')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateIssued')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dateModified')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateModified')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dateRetrieved')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dateRetrieved')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateRetrieved')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dayMaximum')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dayMaximum')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dayMaximum')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_dayMinimum')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_dayMinimum')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dayMinimum')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_feelsLikeTemperature')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_feelsLikeTemperature')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_feelsLikeTemperature')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_gustSpeed')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_gustSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_gustSpeed')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_illuminance')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_illuminance')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_illuminance')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_owner')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_owner')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_owner')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_precipitation')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_precipitation')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_precipitation')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_precipitationProbability')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_precipitationProbability')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_precipitationProbability')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_refPointOfInterest')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_refPointOfInterest')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_refPointOfInterest')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_relativeHumidity')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_relativeHumidity')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_relativeHumidity')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_seeAlso')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_seeAlso')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_source')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_source')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_source')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_temperature')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_temperature')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_temperature')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_uVIndexMax')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_uVIndexMax')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_uVIndexMax')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_validFrom')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_validFrom')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_validFrom')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_validTo')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_validTo')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_validTo')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_validity')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_validity')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_validity')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_visibility')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_visibility')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_visibility')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_weatherType')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_weatherType')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_weatherType')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_windDirection')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_windDirection')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_windDirection')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_windSpeed')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_windSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_windSpeed')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#fqWeatherObserved_displayPage')?.addEventListener('wa-change', (event) => {
            fqChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetWeatherObserved_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_displayPage')?.addEventListener('wa-change', (event) => {
            facetPivotChange('WeatherObserved', event.currentTarget);
          });
});
