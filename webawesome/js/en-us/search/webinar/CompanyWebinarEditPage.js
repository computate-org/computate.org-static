Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#CompanyWebinar_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#CompanyWebinar_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#CompanyWebinar_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#CompanyWebinar_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#CompanyWebinar_Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#CompanyWebinar_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH webinarUrlAmericas
          document.querySelector('#CompanyWebinar_Page_webinarUrlAmericas')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlAmericas');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setWebinarUrlAmericas', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_webinarUrlAmericas')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_webinarUrlAmericas')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlAmericas');
            const valid = form.reportValidity();
          });

          // PATCH webinarUrlApac
          document.querySelector('#CompanyWebinar_Page_webinarUrlApac')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlApac');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setWebinarUrlApac', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_webinarUrlApac')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_webinarUrlApac')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlApac');
            const valid = form.reportValidity();
          });

          // PATCH webinarUrlEmea
          document.querySelector('#CompanyWebinar_Page_webinarUrlEmea')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlEmea');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setWebinarUrlEmea', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_webinarUrlEmea')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_webinarUrlEmea')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_webinarUrlEmea');
            const valid = form.reportValidity();
          });

          // PATCH icalUrl
          document.querySelector('#CompanyWebinar_Page_icalUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_icalUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setIcalUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_icalUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_icalUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_icalUrl');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#CompanyWebinar_Page_pageId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_pageId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_pageId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#CompanyWebinar_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#CompanyWebinar_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#CompanyWebinar_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#CompanyWebinar_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#CompanyWebinar_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#CompanyWebinar_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#CompanyWebinar_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH joinUri
          document.querySelector('#CompanyWebinar_Page_joinUri')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_joinUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setJoinUri', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_joinUri')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_joinUri')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_joinUri');
            const valid = form.reportValidity();
          });

          // PATCH joinUrl
          document.querySelector('#CompanyWebinar_Page_joinUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_joinUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyWebinarVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setJoinUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#CompanyWebinar_Page_joinUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#CompanyWebinar_Page_joinUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_joinUrl');
            const valid = form.reportValidity();
          });
});
