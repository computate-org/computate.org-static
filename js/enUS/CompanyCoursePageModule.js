Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchCompanyCourse')?.addEventListener('click', (event) => {
            document.querySelector('#patchCompanyCourseDialog').show();
          });

          document.querySelector('#htmButton_postCompanyCourse')?.addEventListener('click', (event) => {
            document.querySelector('#postCompanyCourseDialog').show();
          });

          document.querySelector('#htmButton_putimportCompanyCourse')?.addEventListener('click', (event) => {
            document.querySelector('#putimportCompanyCourseDialog').show();
          });

          document.querySelector('#htmButton_searchpageCompanyCourse')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageCompanyCourseDialog').show();
          });

          // PATCH created
          document.querySelector('#fqCompanyCourse_created')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
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
                patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH objectId
          document.querySelector('#Page_objectId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setObjectId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyCourse_name')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyCourse_description')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyCourse_uri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_uri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyCourse_url')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_url')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH price
          document.querySelector('#fqCompanyCourse_price')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_price')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setPrice', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_price')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#fqCompanyCourse_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH resourceUri
          document.querySelector('#fqCompanyCourse_resourceUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH templateUri
          document.querySelector('#fqCompanyCourse_templateUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH emailTemplate
          document.querySelector('#fqCompanyCourse_emailTemplate')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_emailTemplate')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setEmailTemplate', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.reportValidity();
          });

          // PATCH downloadUri
          document.querySelector('#fqCompanyCourse_downloadUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_downloadUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_downloadUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_downloadUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_downloadUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDownloadUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_downloadUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_downloadUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_downloadUri');
            const valid = form.reportValidity();
          });

          // PATCH userUri
          document.querySelector('#fqCompanyCourse_userUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_userUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_userUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_userUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH storeUrl
          document.querySelector('#fqCompanyCourse_storeUrl')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_storeUrl')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setStoreUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH courseNum
          document.querySelector('#fqCompanyCourse_courseNum')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyCourse', event.target);
          });
          document.querySelector('#buttonFacetCompanyCourse_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_courseNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyCourse', event.target);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyCourseVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setCourseNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.reportValidity();
          });
});
