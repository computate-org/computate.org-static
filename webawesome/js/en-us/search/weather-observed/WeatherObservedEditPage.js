Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('wa-change', (event) => {
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
                patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Page_name')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Page_location')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH areaServed
          document.querySelector('#Page_areaServed')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_areaServed');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAreaServed', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_areaServed')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_areaServed')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_areaServed');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Page_ngsildTenant')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Page_ngsildPath')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Page_ngsildContext')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Page_ngsildData')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH address
          document.querySelector('#Page_address')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAddress', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_address')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_address')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.reportValidity();
          });

          // PATCH airQualityIndex
          document.querySelector('#Page_airQualityIndex')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndex');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAirQualityIndex', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airQualityIndex')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airQualityIndex')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndex');
            const valid = form.reportValidity();
          });

          // PATCH airQualityIndexForecast
          document.querySelector('#Page_airQualityIndexForecast')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndexForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAirQualityIndexForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airQualityIndexForecast')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airQualityIndexForecast')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_airQualityIndexForecast');
            const valid = form.reportValidity();
          });

          // PATCH airTemperatureForecast
          document.querySelector('#Page_airTemperatureForecast')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAirTemperatureForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airTemperatureForecast')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airTemperatureForecast')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureForecast');
            const valid = form.reportValidity();
          });

          // PATCH airTemperatureTSA
          document.querySelector('#Page_airTemperatureTSA')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureTSA');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAirTemperatureTSA', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_airTemperatureTSA')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_airTemperatureTSA')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_airTemperatureTSA');
            const valid = form.reportValidity();
          });

          // PATCH alternateName
          document.querySelector('#Page_alternateName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAlternateName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_alternateName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_alternateName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.reportValidity();
          });

          // PATCH aqiMajorPollutant
          document.querySelector('#Page_aqiMajorPollutant')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutant');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAqiMajorPollutant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aqiMajorPollutant')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aqiMajorPollutant')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutant');
            const valid = form.reportValidity();
          });

          // PATCH aqiMajorPollutantForecast
          document.querySelector('#Page_aqiMajorPollutantForecast')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutantForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAqiMajorPollutantForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_aqiMajorPollutantForecast')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_aqiMajorPollutantForecast')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_aqiMajorPollutantForecast');
            const valid = form.reportValidity();
          });

          // PATCH atmosphericPressure
          document.querySelector('#Page_atmosphericPressure')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_atmosphericPressure');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAtmosphericPressure', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_atmosphericPressure')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_atmosphericPressure')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_atmosphericPressure');
            const valid = form.reportValidity();
          });

          // PATCH dataProvider
          document.querySelector('#Page_dataProvider')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDataProvider', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.reportValidity();
          });

          // PATCH dateCreated
          document.querySelector('#Page_dateCreated')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateCreated', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.reportValidity();
          });

          // PATCH dateModified
          document.querySelector('#Page_dateModified')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateModified', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateModified')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateModified')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.reportValidity();
          });

          // PATCH dateObserved
          document.querySelector('#Page_dateObserved')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_dateObserved');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateObserved', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_dateObserved');
            const valid = form.reportValidity();
          });

          // PATCH dewPoint
          document.querySelector('#Page_dewPoint')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_dewPoint');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDewPoint', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dewPoint')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dewPoint')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_dewPoint');
            const valid = form.reportValidity();
          });

          // PATCH diffuseIrradiation
          document.querySelector('#Page_diffuseIrradiation')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_diffuseIrradiation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDiffuseIrradiation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_diffuseIrradiation')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_diffuseIrradiation')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_diffuseIrradiation');
            const valid = form.reportValidity();
          });

          // PATCH directIrradiation
          document.querySelector('#Page_directIrradiation')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_directIrradiation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDirectIrradiation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_directIrradiation')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_directIrradiation')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_directIrradiation');
            const valid = form.reportValidity();
          });

          // PATCH feelsLikeTemperature
          document.querySelector('#Page_feelsLikeTemperature')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_feelsLikeTemperature');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setFeelsLikeTemperature', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_feelsLikeTemperature')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_feelsLikeTemperature')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_feelsLikeTemperature');
            const valid = form.reportValidity();
          });

          // PATCH gustSpeed
          document.querySelector('#Page_gustSpeed')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_gustSpeed');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setGustSpeed', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gustSpeed')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gustSpeed')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_gustSpeed');
            const valid = form.reportValidity();
          });

          // PATCH illuminance
          document.querySelector('#Page_illuminance')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_illuminance');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIlluminance', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_illuminance')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_illuminance')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_illuminance');
            const valid = form.reportValidity();
          });

          // PATCH owner
          document.querySelector('#Page_owner')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setOwner', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_owner')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_owner')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.reportValidity();
          });

          // PATCH precipitation
          document.querySelector('#Page_precipitation')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_precipitation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPrecipitation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_precipitation')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_precipitation')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_precipitation');
            const valid = form.reportValidity();
          });

          // PATCH precipitationForecast
          document.querySelector('#Page_precipitationForecast')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_precipitationForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPrecipitationForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_precipitationForecast')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_precipitationForecast')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_precipitationForecast');
            const valid = form.reportValidity();
          });

          // PATCH pressureTendency
          document.querySelector('#Page_pressureTendency')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_pressureTendency');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPressureTendency', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pressureTendency')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pressureTendency')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_pressureTendency');
            const valid = form.reportValidity();
          });

          // PATCH refDevice
          document.querySelector('#Page_refDevice')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_refDevice');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRefDevice', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_refDevice')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_refDevice')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_refDevice');
            const valid = form.reportValidity();
          });

          // PATCH refPointOfInterest
          document.querySelector('#Page_refPointOfInterest')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_refPointOfInterest');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRefPointOfInterest', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_refPointOfInterest')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_refPointOfInterest')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_refPointOfInterest');
            const valid = form.reportValidity();
          });

          // PATCH relativeHumidity
          document.querySelector('#Page_relativeHumidity')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidity');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRelativeHumidity', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_relativeHumidity')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_relativeHumidity')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidity');
            const valid = form.reportValidity();
          });

          // PATCH relativeHumidityForecast
          document.querySelector('#Page_relativeHumidityForecast')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidityForecast');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRelativeHumidityForecast', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_relativeHumidityForecast')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_relativeHumidityForecast')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_relativeHumidityForecast');
            const valid = form.reportValidity();
          });

          // PATCH seeAlso
          document.querySelector('#Page_seeAlso')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSeeAlso', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.reportValidity();
          });

          // PATCH snowHeight
          document.querySelector('#Page_snowHeight')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_snowHeight');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSnowHeight', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_snowHeight')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_snowHeight')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_snowHeight');
            const valid = form.reportValidity();
          });

          // PATCH solarRadiation
          document.querySelector('#Page_solarRadiation')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_solarRadiation');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSolarRadiation', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_solarRadiation')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_solarRadiation')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_solarRadiation');
            const valid = form.reportValidity();
          });

          // PATCH source
          document.querySelector('#Page_source')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSource', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_source')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_source')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.reportValidity();
          });

          // PATCH streamGauge
          document.querySelector('#Page_streamGauge')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_streamGauge');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setStreamGauge', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_streamGauge')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_streamGauge')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_streamGauge');
            const valid = form.reportValidity();
          });

          // PATCH temperature
          document.querySelector('#Page_temperature')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_temperature');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setTemperature', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_temperature')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_temperature')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_temperature');
            const valid = form.reportValidity();
          });

          // PATCH uVIndexMax
          document.querySelector('#Page_uVIndexMax')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_uVIndexMax');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUVIndexMax', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uVIndexMax')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uVIndexMax')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_uVIndexMax');
            const valid = form.reportValidity();
          });

          // PATCH visibility
          document.querySelector('#Page_visibility')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_visibility');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setVisibility', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_visibility')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_visibility')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_visibility');
            const valid = form.reportValidity();
          });

          // PATCH weatherType
          document.querySelector('#Page_weatherType')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_weatherType');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWeatherType', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_weatherType')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_weatherType')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_weatherType');
            const valid = form.reportValidity();
          });

          // PATCH windDirection
          document.querySelector('#Page_windDirection')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_windDirection');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWindDirection', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_windDirection')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_windDirection')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_windDirection');
            const valid = form.reportValidity();
          });

          // PATCH windSpeed
          document.querySelector('#Page_windSpeed')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_windSpeed');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWindSpeed', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_windSpeed')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_windSpeed')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_windSpeed');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchWeatherObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });
});
