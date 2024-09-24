Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchCompanyWebinar')?.addEventListener('click', (event) => {
            document.querySelector('#patchCompanyWebinarDialog').show();
          });

          document.querySelector('#htmButton_postCompanyWebinar')?.addEventListener('click', (event) => {
            document.querySelector('#postCompanyWebinarDialog').show();
          });

          document.querySelector('#htmButton_putimportCompanyWebinar')?.addEventListener('click', (event) => {
            document.querySelector('#putimportCompanyWebinarDialog').show();
          });

          document.querySelector('#htmButton_searchpageCompanyWebinar')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageCompanyWebinarDialog').show();
          });

          // PATCH created
          document.querySelector('#fqCompanyWebinar_created')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
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
                patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqCompanyWebinar_archived')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_archived')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqCompanyWebinar_name')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqCompanyWebinar_description')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH uri
          document.querySelector('#fqCompanyWebinar_uri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_uri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.reportValidity();
          });

          // PATCH url
          document.querySelector('#fqCompanyWebinar_url')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_url')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_url')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#fqCompanyWebinar_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH webinarUrlAmericas
          document.querySelector('#fqCompanyWebinar_webinarUrlAmericas')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlAmericas')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlAmericas')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_webinarUrlAmericas')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlAmericas');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setWebinarUrlAmericas', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_webinarUrlAmericas')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_webinarUrlAmericas')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlAmericas');
            const valid = form.reportValidity();
          });

          // PATCH webinarUrlApac
          document.querySelector('#fqCompanyWebinar_webinarUrlApac')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlApac')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlApac')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_webinarUrlApac')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlApac');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setWebinarUrlApac', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_webinarUrlApac')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_webinarUrlApac')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlApac');
            const valid = form.reportValidity();
          });

          // PATCH webinarUrlEmea
          document.querySelector('#fqCompanyWebinar_webinarUrlEmea')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlEmea')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlEmea')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_webinarUrlEmea')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlEmea');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setWebinarUrlEmea', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_webinarUrlEmea')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_webinarUrlEmea')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlEmea');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH templateUri
          document.querySelector('#fqCompanyWebinar_templateUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setTemplateUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.reportValidity();
          });

          // PATCH resourceUri
          document.querySelector('#fqCompanyWebinar_resourceUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setResourceUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.reportValidity();
          });

          // PATCH userUri
          document.querySelector('#fqCompanyWebinar_userUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyWebinar', event.target);
          });
          document.querySelector('#buttonFacetCompanyWebinar_userUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_userUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyWebinar', event.target);
          });
          document.querySelector('#Page_userUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userUri');
            const valid = form.reportValidity();
          });
});
