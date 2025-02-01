'use server'

export async function handleSubmitAPI(formData) {

    try {
        let response = await fetch('https://api.e33.shop/contact', {
            method: 'POST',
            body: formData,
        })
        if (response.ok) {
            // toast.success('فرم با موفقیت ارسال شد.', {
            //     duration: 5000,
            // })

            return response.json();

        } else {
            // toast.error('متاسفانه مشکلی در ارسال فرم به وجود آمد.', {
            //     duration: 5000,
            // })

            throw new Error('Network response was not ok.')
        }
    } catch (error) {
        console.error('Error:', error)

        // toast.error('متاسفانه مشکلی در ارسال فرم به وجود آمد.', {
        //     duration: 5000,
        // })

        throw new Error('Network request failed.')
    }
}
