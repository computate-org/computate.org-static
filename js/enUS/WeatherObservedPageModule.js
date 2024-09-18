Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchWeatherObserved')?.addEventListener('click', (event) => {
            document.querySelector('#patchWeatherObservedDialog').show();
          });

          document.querySelector('#htmButton_postWeatherObserved')?.addEventListener('click', (event) => {
            document.querySelector('#postWeatherObservedDialog').show();
          });

          document.querySelector('#htmButton_deleteWeatherObserved')?.addEventListener('click', (event) => {
            var confirmResponse = confirm('Are you sure you want to delete that?'); 
            if(confirmResponse) { 
              var pk =  event.currentTarget.getAttribute('data-pk');
              deleteWeatherObserved([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + pk }]
                  , event.currentTarget
                  , pk
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });

          document.querySelector('#htmButton_putimportWeatherObserved')?.addEventListener('click', (event) => {
            document.querySelector('#putimportWeatherObservedDialog').show();
          });

          document.querySelector('#htmButton_searchpageWeatherObserved')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageWeatherObservedDialog').show();
          });

          // PATCH created
          document.querySelector('#buttonFacetWeatherObserved_created')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#buttonFacetWeatherObserved_archived')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#buttonFacetWeatherObserved_name')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#buttonFacetWeatherObserved_description')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH address
          document.querySelector('#buttonFacetWeatherObserved_address')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_address')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_address')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAddress', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_address')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_address')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#buttonFacetWeatherObserved_location')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH areaServed
          document.querySelector('#buttonFacetWeatherObserved_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_areaServed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_areaServed')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_areaServed');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAreaServed', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_areaServed')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_areaServed')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_areaServed');
            const valid = form.reportValidity();
          });

          // PATCH airQualityIndex
          document.querySelector('#buttonFacetWeatherObserved_airQualityIndex')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_airQualityIndex')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_airQualityIndex')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndex');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAirQualityIndex', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airQualityIndex')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airQualityIndex')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndex');
            const valid = form.reportValidity();
          });

          // PATCH airQualityIndexForecast
          document.querySelector('#buttonFacetWeatherObserved_airQualityIndexForecast')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_airQualityIndexForecast')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_airQualityIndexForecast')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndexForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAirQualityIndexForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airQualityIndexForecast')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airQualityIndexForecast')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndexForecast');
            const valid = form.reportValidity();
          });

          // PATCH aqiMajorPollutant
          document.querySelector('#buttonFacetWeatherObserved_aqiMajorPollutant')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_aqiMajorPollutant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_aqiMajorPollutant')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutant');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAqiMajorPollutant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aqiMajorPollutant')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aqiMajorPollutant')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutant');
            const valid = form.reportValidity();
          });

          // PATCH aqiMajorPollutantForecast
          document.querySelector('#buttonFacetWeatherObserved_aqiMajorPollutantForecast')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_aqiMajorPollutantForecast')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_aqiMajorPollutantForecast')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutantForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAqiMajorPollutantForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aqiMajorPollutantForecast')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aqiMajorPollutantForecast')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutantForecast');
            const valid = form.reportValidity();
          });

          // PATCH atmosphericPressure
          document.querySelector('#buttonFacetWeatherObserved_atmosphericPressure')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_atmosphericPressure')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_atmosphericPressure')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_atmosphericPressure');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAtmosphericPressure', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_atmosphericPressure')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_atmosphericPressure')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_atmosphericPressure');
            const valid = form.reportValidity();
          });

          // PATCH pressureTendency
          document.querySelector('#buttonFacetWeatherObserved_pressureTendency')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_pressureTendency')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_pressureTendency')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pressureTendency');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setPressureTendency', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pressureTendency')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pressureTendency')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pressureTendency');
            const valid = form.reportValidity();
          });

          // PATCH gustSpeed
          document.querySelector('#buttonFacetWeatherObserved_gustSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_gustSpeed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_gustSpeed')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_gustSpeed');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setGustSpeed', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gustSpeed')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gustSpeed')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_gustSpeed');
            const valid = form.reportValidity();
          });

          // PATCH windDirection
          document.querySelector('#buttonFacetWeatherObserved_windDirection')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_windDirection')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_windDirection')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_windDirection');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setWindDirection', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_windDirection')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_windDirection')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_windDirection');
            const valid = form.reportValidity();
          });

          // PATCH windSpeed
          document.querySelector('#buttonFacetWeatherObserved_windSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_windSpeed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_windSpeed')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_windSpeed');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setWindSpeed', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_windSpeed')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_windSpeed')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_windSpeed');
            const valid = form.reportValidity();
          });

          // PATCH precipitation
          document.querySelector('#buttonFacetWeatherObserved_precipitation')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_precipitation')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_precipitation')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_precipitation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setPrecipitation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_precipitation')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_precipitation')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_precipitation');
            const valid = form.reportValidity();
          });

          // PATCH precipitationForecast
          document.querySelector('#buttonFacetWeatherObserved_precipitationForecast')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_precipitationForecast')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_precipitationForecast')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_precipitationForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setPrecipitationForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_precipitationForecast')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_precipitationForecast')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_precipitationForecast');
            const valid = form.reportValidity();
          });

          // PATCH relativeHumidity
          document.querySelector('#buttonFacetWeatherObserved_relativeHumidity')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_relativeHumidity')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_relativeHumidity')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidity');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setRelativeHumidity', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_relativeHumidity')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_relativeHumidity')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidity');
            const valid = form.reportValidity();
          });

          // PATCH relativeHumidityForecast
          document.querySelector('#buttonFacetWeatherObserved_relativeHumidityForecast')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_relativeHumidityForecast')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_relativeHumidityForecast')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidityForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setRelativeHumidityForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_relativeHumidityForecast')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_relativeHumidityForecast')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidityForecast');
            const valid = form.reportValidity();
          });

          // PATCH snowHeight
          document.querySelector('#buttonFacetWeatherObserved_snowHeight')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_snowHeight')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_snowHeight')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_snowHeight');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSnowHeight', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_snowHeight')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_snowHeight')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_snowHeight');
            const valid = form.reportValidity();
          });

          // PATCH airTemperatureForecast
          document.querySelector('#buttonFacetWeatherObserved_airTemperatureForecast')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_airTemperatureForecast')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_airTemperatureForecast')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAirTemperatureForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airTemperatureForecast')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airTemperatureForecast')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureForecast');
            const valid = form.reportValidity();
          });

          // PATCH airTemperatureTSA
          document.querySelector('#buttonFacetWeatherObserved_airTemperatureTSA')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_airTemperatureTSA')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_airTemperatureTSA')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureTSA');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAirTemperatureTSA', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airTemperatureTSA')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airTemperatureTSA')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureTSA');
            const valid = form.reportValidity();
          });

          // PATCH feelsLikeTemperature
          document.querySelector('#buttonFacetWeatherObserved_feelsLikeTemperature')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_feelsLikeTemperature')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_feelsLikeTemperature')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_feelsLikeTemperature');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setFeelsLikeTemperature', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_feelsLikeTemperature')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_feelsLikeTemperature')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_feelsLikeTemperature');
            const valid = form.reportValidity();
          });

          // PATCH temperature
          document.querySelector('#buttonFacetWeatherObserved_temperature')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_temperature')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_temperature')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_temperature');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setTemperature', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_temperature')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_temperature')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_temperature');
            const valid = form.reportValidity();
          });

          // PATCH solarRadiation
          document.querySelector('#buttonFacetWeatherObserved_solarRadiation')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_solarRadiation')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_solarRadiation')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_solarRadiation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSolarRadiation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_solarRadiation')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_solarRadiation')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_solarRadiation');
            const valid = form.reportValidity();
          });

          // PATCH streamGauge
          document.querySelector('#buttonFacetWeatherObserved_streamGauge')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_streamGauge')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_streamGauge')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_streamGauge');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setStreamGauge', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_streamGauge')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_streamGauge')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_streamGauge');
            const valid = form.reportValidity();
          });

          // PATCH uVIndexMax
          document.querySelector('#buttonFacetWeatherObserved_uVIndexMax')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_uVIndexMax')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_uVIndexMax')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uVIndexMax');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUVIndexMax', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uVIndexMax')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uVIndexMax')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_uVIndexMax');
            const valid = form.reportValidity();
          });

          // PATCH visibility
          document.querySelector('#buttonFacetWeatherObserved_visibility')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_visibility')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_visibility')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_visibility');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setVisibility', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_visibility')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_visibility')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_visibility');
            const valid = form.reportValidity();
          });

          // PATCH weatherType
          document.querySelector('#buttonFacetWeatherObserved_weatherType')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_weatherType')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_weatherType')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_weatherType');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setWeatherType', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_weatherType')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_weatherType')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_weatherType');
            const valid = form.reportValidity();
          });

          // PATCH dewPoint
          document.querySelector('#buttonFacetWeatherObserved_dewPoint')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dewPoint')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_dewPoint')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_dewPoint');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDewPoint', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dewPoint')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dewPoint')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_dewPoint');
            const valid = form.reportValidity();
          });

          // PATCH diffuseIrradiation
          document.querySelector('#buttonFacetWeatherObserved_diffuseIrradiation')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_diffuseIrradiation')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_diffuseIrradiation')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_diffuseIrradiation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDiffuseIrradiation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_diffuseIrradiation')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_diffuseIrradiation')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_diffuseIrradiation');
            const valid = form.reportValidity();
          });

          // PATCH directIrradiation
          document.querySelector('#buttonFacetWeatherObserved_directIrradiation')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_directIrradiation')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_directIrradiation')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_directIrradiation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDirectIrradiation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_directIrradiation')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_directIrradiation')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_directIrradiation');
            const valid = form.reportValidity();
          });

          // PATCH illuminance
          document.querySelector('#buttonFacetWeatherObserved_illuminance')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_illuminance')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_illuminance')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_illuminance');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setIlluminance', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_illuminance')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_illuminance')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_illuminance');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#buttonFacetWeatherObserved_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildData')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH entityId
          document.querySelector('#buttonFacetWeatherObserved_entityId')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_entityId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_entityId');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setEntityId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_entityId');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#buttonFacetWeatherObserved_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildTenant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#buttonFacetWeatherObserved_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildPath')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#buttonFacetWeatherObserved_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_ngsildContext')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH seeAlso
          document.querySelector('#buttonFacetWeatherObserved_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_seeAlso')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSeeAlso', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setInheritPk', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH owner
          document.querySelector('#buttonFacetWeatherObserved_owner')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_owner')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_owner')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setOwner', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_owner')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_owner')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.reportValidity();
          });

          // PATCH alternateName
          document.querySelector('#buttonFacetWeatherObserved_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_alternateName')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_alternateName')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setAlternateName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_alternateName')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_alternateName')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.reportValidity();
          });

          // PATCH dataProvider
          document.querySelector('#buttonFacetWeatherObserved_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dataProvider')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDataProvider', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.reportValidity();
          });

          // PATCH dateCreated
          document.querySelector('#buttonFacetWeatherObserved_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateCreated')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDateCreated', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.reportValidity();
          });

          // PATCH dateModified
          document.querySelector('#buttonFacetWeatherObserved_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateModified')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_dateModified')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDateModified', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateModified')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateModified')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.reportValidity();
          });

          // PATCH dateObserved
          document.querySelector('#buttonFacetWeatherObserved_dateObserved')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_dateObserved')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_dateObserved');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDateObserved', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_dateObserved');
            const valid = form.reportValidity();
          });

          // PATCH refDevice
          document.querySelector('#buttonFacetWeatherObserved_refDevice')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_refDevice')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_refDevice')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_refDevice');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setRefDevice', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_refDevice')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_refDevice')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_refDevice');
            const valid = form.reportValidity();
          });

          // PATCH refPointOfInterest
          document.querySelector('#buttonFacetWeatherObserved_refPointOfInterest')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_refPointOfInterest')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_refPointOfInterest')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_refPointOfInterest');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setRefPointOfInterest', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_refPointOfInterest')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_refPointOfInterest')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_refPointOfInterest');
            const valid = form.reportValidity();
          });

          // PATCH source
          document.querySelector('#buttonFacetWeatherObserved_source')?.addEventListener('click', (event) => {
            facetFieldChange('WeatherObserved', event.target);
          });
          document.querySelector('#pageFacetPivotWeatherObserved_source')?.addEventListener('sl-change', (event) => {
            facetPivotChange('WeatherObserved', event.target);
          });
          document.querySelector('#Page_source')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSource', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_source')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_source')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.reportValidity();
          });
});
