import React from "react";
import './terms.styles.scss';
import Header from "../../components/header/header.component";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

const TermsPage = () => {

    const url = "https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2Fterms.png?alt=media&token=10eb6c0d-b4fe-4b4f-bc93-2c6e93bed8fd";

    return (
        <>
            <Navbar/>
            <Header title="Terms & Conditions" imageUrl={url}/>

            <main className="container">
                <div className="row">
                    <div style={{marginTop: '60px'}}
                         className="col-sm-12 offset-sm-0 col-md-10 offset-md-1 animated fadeIn delay-1s">
                        <h2 style={{fontWeight: 'normal'}}>Terms of service</h2>
                        <p className="term-paragraph">
                            Please be sure to read the terms and conditions for the various services EFIEWURA renders as
                            this
                            contains information about your legal rights, remedies and obligations. By using the
                            EFIEWURA platform,
                            you agree to comply with our terms and are thereby legally bound by these terms.
                        </p>
                        <p style={{textAlign: 'right', fontWeight: 'normal', marginTop: '20px', fontSize: '1em'}}>Last
                            Updated: June 27, 2019.</p>
                        <section className="term-section">
                            <h3 id="privacy-statement">1.0 Privacy Statement</h3>
                            <p className="term-paragraph">
                                We are committed to protecting your privacy. Authorized employees within the company on
                                a need to
                                know basis only use any information collected from individual customers. We constantly
                                review our
                                systems and data to ensure the best possible service to our customers.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>2.0 Confidentiality</h3>
                            <p className="term-paragraph">
                                Client records are regarded as confidential and therefore will not be divulged to any
                                third party,
                                other than [for criminal investigations] if legally required to do so to the appropriate
                                authorities. Clients have the right to request sight of, and copies of any and all
                                Client Records we
                                keep, on the provision that we are given reasonable notice of such a request. Clients
                                are requested
                                to retain copies of any literature issued in relation to the provision of our services.
                            </p>
                            <p style={{fontWeight: 'bold', fontSize: '1.1em'}}>
                                We will not sell, share, or rent your personal information to any third party or use
                                your e-mail
                                address for unsolicited mail. Any emails sent by this Company will only be in connection
                                with the
                                provision of agreed services and products.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>Disclaimer</h3>
                            <h3>3.0 Payment</h3>
                            <p className="term-paragraph">
                                Fund Transfer is the acceptable method of payment. Charges are placed only on the
                                activities of
                                property advertisers.
                                Our Terms are payment in full before ad upload. Our company plays no role in the
                                financial
                                commitment and agreements between property hosts and guests.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>4.0 Termination of Agreements and Refunds Policy</h3>
                            <p className="term-paragraph">
                                Both the Client and us have the right to terminate any Services Agreement for any
                                reason, including
                                the ending of services that are already underway. No refunds shall be offered, where a
                                Service is
                                deemed to have begun and is, for all intents and purposes, underway.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>5.0 Availability</h3>
                            <p className="term-paragraph">
                                Unless otherwise stated, the services featured on this website are only available within
                                Ghana. All
                                advertising is intended solely for the Ghanaian market. You are solely responsible for
                                evaluating
                                the fitness for a particular purpose of any downloads, programs and text available
                                through this
                                site. Redistribution or republication of any part of this site or its content is
                                prohibited,
                                including such by framing or other similar or any other means, without the express
                                written consent
                                of the Company. The Company does not warrant that the service from this site will be
                                uninterrupted,
                                timely or error free, although it is provided to the best ability. By using this service
                                you thereby
                                indemnify this Company, its employees, agents and affiliates against any loss or damage,
                                in whatever
                                manner, howsoever caused.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>6.0 Links to this website</h3>
                            <p className="term-paragraph">
                                You may not create a link to any page of this website without our prior written consent.
                                If you do
                                create a link to a page of this website you do so at your own risk and the exclusions
                                and
                                limitations set out above will apply to your use of this website by linking to it.
                                We do not monitor or review the content of other party’s websites which are linked to
                                from this
                                website. Opinions expressed or materials appearing on such websites are not necessarily
                                shared or
                                endorsed by us and should not be regarded as the publisher of such opinions or material.
                                Please be
                                aware that we are not responsible for the privacy practices, or content, of these sites.
                                We
                                encourage our users to be aware when they leave our site & to read the privacy
                                statements of these
                                sites. You should evaluate the security and trustworthiness of any other site connected
                                to this site
                                or accessed through this site yourself, before disclosing any personal information to
                                them. This
                                Company will not accept any responsibility for any loss or damage in whatever manner,
                                howsoever
                                caused, resulting from your disclosure to third parties of personal information.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>7.0 Copyright Notice</h3>
                            <p className="term-paragraph">
                                Copyright and other relevant intellectual property rights exist on all text relating to
                                the
                                Company’s services and the full content of this website.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>8.0 Communication</h3>
                            <p className="term-paragraph">
                                We have several different e-mail addresses for different queries. These and other
                                contact
                                information, can be found on our Contact us link on our website or via Company
                                literature or via the
                                Company’s stated telephone, facsimile or mobile telephone numbers.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>9.0 Force Majeure</h3>
                            <p className="term-paragraph">
                                Neither party shall be liable to the other for any failure to perform any obligation
                                under any
                                Agreement which is due to an event beyond the control of such party including but not
                                limited to any
                                Act of God, terrorism, war, Political insurgence, insurrection, riot, civil unrest, act
                                of civil or
                                military authority, uprising, earthquake, flood or any other natural or man-made
                                eventuality outside
                                of our control, which causes the termination of an agreement or contract entered into,
                                nor which
                                could have been reasonably foreseen. Any Party affected by such event shall forthwith
                                inform the
                                other Party of the same and shall use all reasonable endeavors to comply with the terms
                                and
                                conditions of any Agreement contained herein.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>10.0 Waiver</h3>
                            <p className="term-paragraph">
                                Failure of either Party to insist upon strict performance of any provision of this or
                                any Agreement
                                or the failure of either Party to exercise any right or remedy to which it, he or they
                                are entitled
                                hereunder shall not constitute a waiver thereof and shall not cause a diminution of the
                                obligations
                                under this or any Agreement. No waiver of any of the provisions of this or any Agreement
                                shall be
                                effective unless it is expressly stated to be such and signed by both Parties.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>11.0 General</h3>
                            <p className="term-paragraph">
                                The laws of Ghana govern these terms and conditions. By accessing this website [and
                                using our
                                services/buying our products] you consent to these terms and conditions and to the
                                exclusive
                                jurisdiction of the Ghanaian courts in all disputes arising out of such access. If any
                                of these
                                terms are deemed invalid or unenforceable for any reason (including, but not limited to
                                the
                                exclusions and limitations set out above), then the invalid or unenforceable provision
                                will be
                                severed from these terms and the remaining terms will continue to apply. Failure of the
                                Company to
                                enforce any of the provisions set out in these Terms and Conditions and any Agreement,
                                or failure to
                                exercise any option to terminate, shall not be construed as waiver of such provisions
                                and shall not
                                affect the validity of these Terms and Conditions or of any Agreement or any part
                                thereof, or the
                                right thereafter to enforce each and every provision. These Terms and Conditions shall
                                not be
                                amended, modified, varied or supplemented except in writing and signed by duly
                                authorized
                                representatives of the Company.
                            </p>
                        </section>
                        <section className="term-section">
                            <h3>12.0 Notification of Changes</h3>
                            <p className="term-paragraph">
                                The Company reserves the right to change these conditions from time to time as it sees
                                fit and your
                                continued use of the site will signify your acceptance of any adjustment to these terms.
                                If there
                                are any changes to our privacy policy, we will announce that these changes have been
                                made on our
                                home page and on other key pages on our site. If there are any changes in how we use our
                                site
                                customers’ Personally Identifiable Information, notification by e-mail or postal mail
                                will be made
                                to those affected by this change. You are therefore advised to re-read this statement on
                                a regular
                                basis
                            </p>
                            <p style={{fontWeight: 'bold', fontSize: '1.1em'}}>
                                These terms and conditions form part of the Agreement between the Client and us.
                                Accessing of this
                                website and/or undertaking of a booking or Agreement indicates your understanding,
                                agreement to and
                                acceptance, of the Disclaimer Notice and the full Terms and Conditions contained herein.
                                Your
                                statutory Consumer Rights are unaffected.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default TermsPage;
