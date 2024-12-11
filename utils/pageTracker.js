export default defineNuxtPlugin({
    install: (app, {
        gtag,
        useComponentsNameAsFallback = true,
        titlePrefix = '',
        changePageTitle = true,
    } = {}) => {
        if (!gtag || !app.config.globalProperties.$router) return
        
        this.gtag = gtag

        this.setUpRouteWatcher(
            app.config.globalProperties.$router,
            { changePageTitle, titlePrefix, useComponentsNameAsFallback },
        )
        app.provide('gtag', gtag)
    },
    setUpRouteWatcher: (router, {
        changePageTitle,
        titlePrefix,
        useComponentsNameAsFallback,
    }) => {
        router.afterEach(to => {
            const pageName = titlePrefix + (
                to.meta.title ||
                to[useComponentsNameAsFallback ? 'name' : 'path']
            )

            if (changePageTitle) {
                document.title = pageName
            }

            if(globalThis.localStorage.getItem('analytics_storage') !== 'denied'){
                this.gtag('set', 'page', pageName)
                this.gtag('send', 'pageview', { 'anonymize_ip': true })
            }
        })
    }
})