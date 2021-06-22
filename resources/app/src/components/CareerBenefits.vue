<template>
    <section class="container">
        <div class="career__benefits-section">
            <div class="benefits_ttl font-51">Why Work Here</div>
            <div class="career__benefits-container">
                <div class="career__benefit-col"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            benefits: [
                {
                    img: "About Us",
                    list: [
                        {
                            name: "Competitive salary"
                        },
                        {
                            name: "Option to be paid in crypto"
                        },
                        {
                            name: "Flexible working hours"
                        },
                        {
                            name: "Terms"
                        }
                    ]
                },
                {
                    img: "Support",
                    list: [
                        {
                            name: "Request for Proposals"
                        },
                        {
                            name: "Bug Bounty"
                        }
                    ]
                },

                {
                    img: "Learn",
                    list: [
                        {
                            name: "Technology"
                        },
                        {
                            name: "Roadmap"
                        },
                        {
                            name: "Tokenomics"
                        },
                        {
                            name: "Academy"
                        },
                        {
                            name: "Core Paper"
                        }
                    ]
                }
            ]
        };
    }
};
</script>
