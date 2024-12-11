<template>
    <div>
        <miniForm />
        <section>
            <HeroImageAbout />
        </section>
        <section>
            <div class="bd-example">
                <div id="carouselBG" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <!-- Overlay -->
                            <div class="overlay"></div>
                            <img class="d-block" src="/assets/images/Slides/Financing.jpg"
                                style="margin: 0 auto;height:100%;max-height:600px;" alt="First slide">
                            <div class="hero">

                                <h1 class="hero-h1">Special Financing offer availiable</h1>
                                <h3>Get Financed Today – Its Easy to Qualify!</h3>

                                <div class="m-auto" style="max-width: 300px;">
                                    <div class="text-left pl-4" style="list-style-type: none;">
                                        <li><span class="icon icon-check"></span> No Credit Needed*</li>
                                        <li><span class="icon icon-check"></span> 90 Day Purchase Option*</li>
                                        <li><span class="icon icon-check"></span> Early buyout discount after 90 days*
                                        </li>
                                        <li><span class="icon icon-check"></span> You own in 12 months or less*</li>
                                        <li><span class="icon icon-check"></span> Payments match your payday!</li>
                                    </div>
                                </div>
                                <button class="btn btn-hero btn-lg btn-danger" role="button">Get Financed!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block block-inverse text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <ul class="featured-list featured-list-bordered">
                                <li class="m-b-md dot dot_apply">
                                    <div class="row featured-list-icon featured-list-icon-whitebg-black pb-5">
                                        <span class="icon icon-credit-card"></span>
                                    </div>
                                    <div class="row pt-5">
                                        <h3 class="pt-5 mt-5 hero-text">Apply</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <ul class="featured-list featured-list-bordered">
                                <li class="m-b-md dot dot_approve pl-5">
                                    <div class="row featured-list-icon featured-list-icon-whitebg-black pb-5">
                                        <span class="icon icon-check"></span>
                                    </div>
                                    <div class="row pt-5 pl-4">
                                        <h3 class="pt-5 mt-5 hero-text">Approve</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <ul class="featured-list featured-list-bordered">
                                <li class="m-b-md dot dot_shop">
                                    <div class="row featured-list-icon featured-list-icon-whitebg-black pb-5">
                                        <span class="icon icon-shop"></span>
                                    </div>
                                    <div class="row pt-5">
                                        <h3 class="pt-5 mt-5 hero-text">Shop</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <ul class="featured-list featured-list-bordered">
                                <li class="m-b-md dot dot_requirements">
                                    <div class="row pt-5">
                                        <h3 class="pt-5 mt-5 hero-text"></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <section class="col-sm-12 col-md-6 text-left m-auto">
                            <h3><strong>HERE ARE THE REQUIREMENTS:</strong></h3>
                            <ul class="iconlist">
                                <li>
                                    <span class="icon icon-check"></span>MUST have an open CHECKING ACCOUNT that has
                                    been active for the last THREE months.
                                </li>
                                <li><span class="icon icon-check"></span>No NSFs or excessive overdrafts for past 30
                                    DAYS</li>
                                <li><span class="icon icon-check"></span>Must show at least $500 deposited a month and
                                    have at least FIVE transactions to be considered active.</li>
                                <li><span class="icon icon-check"></span>MUST be employed for the past SIX months at the
                                    same job (No temp service)</li>
                                <li><span class="icon icon-check"></span>MUST gross more than $1,000 per month</li>
                            </ul>
                        </section>
                        <hr />
                        <p class="m-auto">You must fill out the credit application at the finance website and a Stereo 1
                            representitive will help you with the rest.</p>
                    </div>
                </div>
            </div>

            <div class="block block-inverse block-bordered-lg p-b-0 app-block-stats text">
                <div class="container">
                    <article class="text-center">
                        <h1>YOU MAY BE REQUIRED TO PROVIDE THE FOLLOWING</h1>
                    </article>
                    <article id="fin_blocks" class="row">
                        <section id="fin_box1" class="col-sm-12 col-md-4 p-5">
                            <h3>DOCUMENTS:</h3>
                            <br>
                            <br>
                            <ul class="iconlist">
                                <li>
                                    <span class="icon icon-check"></span>Most recent 30 day bank statement (all pages,
                                    no ATM printouts)
                                </li>
                                <li><span class="icon icon-check"></span>Most recent paycheck stub with year-to-date
                                    information.</li>
                                <li><span class="icon icon-check"></span>Voided Check – OR – Bank Account Verification
                                    Form (check must match account # on bank statement)</li>
                                <li><span class="icon icon-check"></span>Copy of Photo ID</li>
                            </ul>
                        </section>
                        <section id="fin_box2" class="col-sm-12 col-md-4 p-5">
                            <h3>IF SELF-EMPLOYED:</h3>
                            <br>
                            <br>
                            <ul class="iconlist">
                                <li>
                                    <span class="icon icon-check"></span>Simply provide the last THREE months of bank
                                    statements
                                </li>
                                <li><span class="icon icon-check"></span>A voided check</li>
                                <li><span class="icon icon-check"></span>Photo ID</li>
                            </ul>
                        </section>
                        <section id="fin_box3" class="col-sm-12 col-md-4 p-5">
                            <h3>OTHER TYPES OF INCOME:</h3>
                            <p>(Retirement / SS / VA / Long Term Disability)</p>
                            <ul class="iconlist">
                                <li>
                                    <span class="icon icon-check"></span>Must provide benefit letter verifying income
                                </li>
                                <li><span class="icon icon-check"></span>The last 30 day bank statement</li>
                                <li><span class="icon icon-check"></span>A voided check</li>
                                <li><span class="icon icon-check"></span>Photo ID</li>
                            </ul>
                        </section>
                        <!-- end .content -->
                    </article>
                </div>
            </div>

            <div class="block block-inverse text-center">
                <div class="block-foreground">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-sm-offset-2 text-center m-b-lg">
                                <p class="lead m-x-auto">Choose to get financed by one of our In-Store Options!</p>
                            </div>
                            <div class="callout">
                                <div class="callout-content">
                                    <div class="float-left text-left pl-5">
                                        <h2>Benefits:</h2>
                                        <!-- <p class="pl-4">Up to 80% Approval Rate</p> -->
                                        <p class="pl-4">No Credit Needed*</p>
                                        <p class="pl-4">Finance up to $3000 Today*</p>
                                        <!-- <p class="pl-4">No Credit Check</p> -->
                                        <!-- <p class="pl-4">No Down Payment</p>
                                        <p class="pl-4">No Interest</p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-background">
                    <img src="\assets\images\SpeakerBG.png">
                </div>
                <div class="container">
                    <article id="fin_blocks" class="row bg-primary">
                        <section id="fin_box1" class="col-sm-12 col-md-12 p-5">
                            <h3>Legal Disclaimers:</h3>
                        </section>
                        <section class="col-sm-12 col-6 p-3 mb-2 bg-white text-primary rounded rounded-1 shadow-lg">
                            <ul class="fw-lighter fs-4 font-monospace text-black">
                                <h3>English Disclaimer:</h3>
                                <li class="text-start "><strong>Universal Disclosure</strong> - Ownership by
                                    rental/lease agreement with Progressive Leasing costs more than the retailer’s cash
                                    price. Select items only. Cancel or purchase early at any time. Not available in MN,
                                    NJ, VT, WI, WY.</li>
                                <li class="text-start ">
                                    <strong>No Credit Needed</strong> - No Credit Needed: Progressive Leasing obtains
                                    information from credit bureaus. Not all applicants are approved
                                </li>
                                <li class="text-start ">
                                    <strong>90-Day Purchase Option</strong> - Standard agreement offers 12 months to
                                    ownership. 90-day purchase options cost more than the retailer’s cash price (except
                                    3-month option in CA). To purchase early or to cancel leas e you must call <a
                                        tel="8778981970">(877)898-1970</a>. Retailer cannot activate early purchase
                                    options.
                                </li>
                                <li class="text-start ">
                                    <strong>Early Purchase Options</strong> -Standard agreement offers 12 months to
                                    ownership. Early purchase options cost more than the retailer’s cash price (except
                                    3-month option in CA). To purchase early or to cancel lease you must call <a
                                        tel="8778981970">(877)898-1970</a>. Retailer cannot activate early purchase
                                    options.
                                </li>
                                <li class="text-start ">
                                    <strong>90-Day/Early Purchase Option Combined</strong> - Standard agreement offers
                                    12 months to ownership. 90-day and other early purchase options cost more than the
                                    retailer’s cash price (except 3-month option in CA). To purchase early or to cancel
                                    lease you must call <a tel="8778981970">(877)898-1970</a>. Retailer cannot activate
                                    early purchase options.
                                </li>
                                <li class="text-start ">
                                    <strong>Initial Payment</strong> - The initial payment (plus tax) is charged at
                                    lease signing. Remaining lease payments will be calculated upon item selection
                                </li>
                            </ul>
                        </section>
                        <section class="col-sm-12 col-6 p-3 mb-2 bg-white text-primary rounded rounded-1 shadow-l">
                            <ul class="fw-lighter fs-4 font-monospace text-black">
                                <h3>Spanish Disclaimer</h3>
                                <li class="text-start ">
                                    <strong>Genérico</strong> - La propiedad mediante el contrato de
                                    alquiler/arrendamiento con Progressive Leasing cuesta más que con el precio al
                                    contado del comerciante. Solo aplica a artículos seleccionados. Cancele o utilice
                                    una opción de compra temprana en cualquier momento. No disponible en MN, NJ, VT, WI,
                                    WY.
                                </li>
                                <li class="text-start ">
                                    <strong>Sin Necesidad de Crédito</strong> - Progressive Leasing obtiene información
                                    de agencias de crédito. No todos los aplicantes son aprobados.
                                </li>
                                <li class="text-start ">
                                    <strong>>Opción de compra de 90 días</strong> - El contrato estándar ofrece un
                                    programa de 12 meses para llegar a ser el dueño de la mercancía. La opción de compra
                                    de 90 días cuesta más que el precio al contado del comerciante (excepto la opción de
                                    3 meses en CA). Para cancelar el arrendamiento o utilizar una opción de compra
                                    temprana, llame al <a tel="8778981970">(877)898-1970</a>.
                                </li>
                                <li class="text-start ">
                                    <strong>Opciones de compra temprana</strong> - El contrato estándar ofrece un
                                    programa de 12 meses para llegar a ser el dueño de la mercancía. Las opciones de
                                    compra temprana son más costosas que el precio al contado del comerciante (excepto
                                    la opción de 3 meses en CA). Para cancelar el arrendamiento o utilizar una opción de
                                    compra temprana, llame al <a tel="8778981970">(877)898-1970</a>.
                                </li>
                                <li class="text-start ">
                                    <strong>Opciones de 90 dias/compra temprana</strong> - El acuerdo estándar ofrece un
                                    programa de 12 meses para llegar a ser el dueño de la mercancía. Las opciones de
                                    compra de 90 días y otras opciones de compra temprana con más costosas que el precio
                                    al contado del comerciante (excepto la opción de 3 meses en CA). Para cancelar el
                                    arrendamiento o utilizar una opción de compra temprana, llame al <a
                                        tel="8778981970">(877)898-1970</a>.
                                </li>
                                <li class="text-start ">
                                    <strong>Monto Variable del Pago Inicial</strong> - El pago inicial (más impuesto de
                                    venta) se paga al firmar el contrato. El resto de los pagos del arrendamiento se
                                    determinan al seleccionar el artículo que se va a arrendar.
                                </li>
                            </ul>
                        </section>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
// import { defineNuxtComponent } from 'vue'
// import gtag from '../plugins/pageTracker'
import HeroImageAbout from '../components/About/HeroImageAbout'
import miniForm from '../components/generic/miniForm.vue'
// Vue.use(gtag)

export default defineNuxtComponent({
    name: 'About',
    layout: 'default',
    transition: 'fade',
    scrollToTop: true,
    components: {
        HeroImageAbout,
        miniForm,
        // gtag
    },
    methods: {
        gtag() {
            page('/About'),
                title('About page'),
                gtag(window.document.gtag)
        }
    },
    data() {
        return {
            title: 'Stereo 1 Shop Oxnards offers many services for your car audio needs | Oxnard, Ca | Ventura County | Services',
            description: 'Welcome to Stereo 1 Shop Oxnard, Ca. stereo services, car stereo services, alpine car stereo services, stereo system service, pioneer car stereo service, car stereo system service, viper alarm service, viper car alarm service, window tint service, auto window tint service'
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
    }
})
</script>
<style lang="">

</style>