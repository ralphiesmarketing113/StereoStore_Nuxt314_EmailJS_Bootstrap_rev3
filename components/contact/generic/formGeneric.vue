<template>
    <form ref="form" @submit.prevent="sendMail" id="budgetForm">
        <div class="relative z-0 w-full mb-6 group">
            <fieldset>
                <div class="flex items-center mb-4">
                    <h5 class="text-gray-300 text-lg">I am interested in...</h5>
                </div>
                <div class="flex md:justify-start sm:justify-between">
                    <div class="flex flex-none items-center mb-4 pr-2">
                        <input id="generalServices" name="generalServices" v-model="selectedCarAudioService"
                            type="checkbox" value="generalServices"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="generalServices" class="ml-2 text-sm font-medium text-gray-300">General Services
                            for diagnosis etc.</label>
                    </div>

                    <div class="flex flex-none items-center mb-4">
                        <input id="inDashNavigation" name="inDashNavigation" v-model="selectedCarAudioService"
                            type="checkbox" value="inDashNavigation"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="inDashNavigation" class="ml-2 text-sm font-medium text-gray-300">In-Dash
                            Navigation.</label>
                    </div>
                </div>
                <div class="flex md:justify-start sm:justify-between">
                    <div class="flex flex-none items-center mb-4 pr-2">
                        <div class="flex items-center h-5">
                            <input id="cdReceiver" name="cdReceiver" v-model="selectedCarAudioService"
                                aria-describedby="cd-receiver-text" type="checkbox" value="cdReceiver"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="cd-reciever-text" class="font-medium text-gray-300">CD Receivers.</label>
                        </div>
                    </div>
                    <div class="flex flex-none items-center mb-4">
                        <div class="flex items-center h-5">
                            <input id="subwoofers" name="subwoofers" v-model="selectedCarAudioService"
                                aria-describedby="subwoofers-text" type="checkbox" value="subwoofers"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="subwoofer-text" class="font-medium text-gray-300">Subwoofers.</label>
                        </div>
                    </div>
                    <div class="flex flex-none items-center mb-4">
                        <div class="flex items-center h-5">
                            <input id="amplifiers" name="amplifiers" v-model="selectedCarAudioService"
                                aria-describedby="amplifiers-text" type="checkbox" value="amplifiers"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="amplifiers-text" class="font-medium text-gray-300">Amplifiers.</label>
                        </div>
                    </div>
                    <div class="flex flex-none items-center mb-4">
                        <div class="flex items-center h-5">
                            <input id="tweeter" name="tweeter" v-model="selectedCarAudioService"
                                aria-describedby="tweeter-text" type="checkbox" value="tweeter"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="tweeter-text" class="font-medium text-gray-300">Tweeters.</label>
                        </div>
                    </div>
                    <div class="flex flex-none items-center mb-4">
                        <div class="flex items-center h-5">
                            <input id="customEnclosure" name="customEnclosure" v-model="selectedCarAudioService"
                                aria-describedby="custom-enclosure-text" type="checkbox" value="customEnclosure"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="custom-enclosure-text" class="font-medium text-gray-300">Custom
                                Enclosures.</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-start">
                    <div class="flex flex-none mb-4">
                        <div class="flex items-center h-5">
                            <input id="speakers" name="speakers" v-model="selectedCarAudioService"
                                aria-describedby="speakers-text" type="checkbox" value="speakers"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="speakers-text" class="font-medium text-gray-300">Speakers
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <label for="budget" class="block mb-2 text-sm font-medium text-white">Estimated
                budget</label>
            <input type="number" id="budget" name="budget" v-model="budget"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="">
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <input type="email" name="floating_email" id="floating_email" v-model="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="" required />
            <label for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                address</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_first_name" id="floating_first_name" v-model="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="" required />
                <label for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                    name</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_last_name" id="floating_last_name" v-model="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                    name</label>
            </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                    v-model="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="" required />
                <label for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                    number 805-567-1234</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" pattern="[0-9]{5}" name="floating_zipcode" id="floating_zipcode"
                    v-model="floating_zipcode"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="" required />
                <label for="floating_zipcode"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zipcode</label>
            </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Your
                message</label>
            <textarea id="message" name="message" v-model="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."></textarea>
        </div>
        <div class="relative z-0 w-full mb-6 group">
            <fieldset>
                <legend class="sr-only">Terms and Conditions</legend>

                <div class="flex items-center mb-4">
                    <input checked id="checkbox_terms" name="checkbox_terms" v-model="checkbox_terms" type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-300">I agree to
                        the <a href="/termsconditions" class="text-blue-600 hover:underline dark:text-blue-500">terms
                            and
                            conditions</a>.</label>
                </div>
            </fieldset>
        </div>
        <button id="budgetFormSubmit" type="submit" value="Send"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</template>
<script>
// import { defineNuxtComponent } from 'vue'
import { ref } from 'vue'
const selectedCarAudioService = ref([]);
// import emailjs from '@emailjs/browser';
import emailjs from '@emailjs/browser';
export default defineNuxtComponent({
    name: 'formGeneric',
    data() {
        return {
            selectedCarAudioService: [],
            budget: '',
            floating_email: '',
            floating_first_name: '',
            floating_last_name: '',
            floating_phone: '',
            floating_zipcode: '',
            message: '',
            checkbox_terms: '',
        }
    },
    methods: {
        sendMail() {
            emailjs.sendForm('service_3gzvjw9', 'template_9hwn1hk',
                '#budgetForm',
                'FwVFldjud9EERWOLE')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text, this.$refs.form);
                }, (err) => {
                    console.log('FAILED...', err);
                },
                    this.selectedCarAudioService = ' ',
                    this.budget = ' ',
                    this.floating_email = ' ',
                    this.floating_first_name = ' ',
                    this.floating_last_name = ' ',
                    this.floating_phone = ' ',
                    this.floating_zipcode = ' ',
                    this.message = ' ',
                    this.checkbox_terms = ' '
                )
        }
    }
})
</script>
<style></style>