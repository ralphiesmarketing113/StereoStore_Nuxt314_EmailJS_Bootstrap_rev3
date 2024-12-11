<template>
    <div>
        <div class="w-full block lg:w-auto">
            <HeroImageContact />
        </div>
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 bg-black overflow-hidden shadow sm:rounded-lg p-6">
                <formGeneric />
            </div>
        </div>
    </div>
</template>
<script>
// import { defineNuxtComponent } from 'vue'
import gtag from '../utils/pageTracker'
// import useGtag from 'nuxt-gtag'
import formGeneric from '~/components/contact/generic/formGeneric.vue'
import HeroImageContact from '~/components/contact/HeroImageContact.vue'
// Vue.use(gtag)
// const { gtag } = useGtag();

export default defineNuxtComponent({
    name: 'Contact',
    layout: 'default',
    scrollToTop: true,
    components: {
        formGeneric,
        HeroImageContact,
        gtag
    },
    methods: {
        gtag() {
            page('/Contact'),
                title('Contact page'),
                gtag(window.document.gtag)
        }
    },
    data() {
        return {
            title: 'Car Stereo Customer Support near me | Stereo 1 Oxnard, Ca',
            description: ''
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'og-title',
                    property: 'og:title',
                    name: 'og-title',
                    content: this.title,
                },
                {
                    hid: 'description',
                    property: 'description',
                    name: 'description',
                    content: this.description
                },
                {
                    hid: 'og-description',
                    property: 'og:description',
                    name: 'og-description',
                    content: this.description
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
})
</script>
<style lang="">

</style>