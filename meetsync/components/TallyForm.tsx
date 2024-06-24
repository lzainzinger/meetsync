"use client"
import Script from 'next/script'

const TallyForm = () => {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    return(
        <>
            <Script src="https://tally.so/widgets/embed.js"
            onLoad={
                async () => {
                    await sleep(10000);
                    Tally.openPopup('waxpx9', {
                        layout: 'default', // Open as a centered modal
                        width: 350, // Set the width of the modal
                        autoClose: 2000, // Close the popup 5 seconds after form was submitted (in ms)
                        hideTitle: true,
                        overlay: false,
                        emoji: {
                            text: "👋",
                            animation: "wave"
                        },
                        doNotShowAfterSubmit: true,

                      });
                      
                }
            } />
        </>
    );
}

export default TallyForm
