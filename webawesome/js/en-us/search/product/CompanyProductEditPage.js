Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {
});
