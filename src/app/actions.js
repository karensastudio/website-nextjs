'use server'

async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY

    if (!secretKey) {
        console.error('reCAPTCHA secret key is not configured')
        return { success: false, error: 'Server configuration error' }
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secretKey}&response=${token}`,
        })

        const data = await response.json()
        
        // reCAPTCHA v3 returns a score between 0.0 and 1.0
        // 0.0 is very likely a bot, 1.0 is very likely a human
        if (data.success && data.score >= 0.5) {
            return { success: true, score: data.score }
        }
        
        return { 
            success: false, 
            error: 'reCAPTCHA verification failed',
            score: data.score 
        }
    } catch (error) {
        console.error('reCAPTCHA verification error:', error)
        return { success: false, error: 'Verification request failed' }
    }
}

export async function handleSubmitAPI(formData) {
    // Verify reCAPTCHA token
    const recaptchaToken = formData.get('recaptchaToken')
    
    if (!recaptchaToken) {
        throw new Error('reCAPTCHA token is missing')
    }

    const verification = await verifyRecaptcha(recaptchaToken)
    
    if (!verification.success) {
        console.error('reCAPTCHA verification failed:', verification)
        throw new Error('reCAPTCHA verification failed. Please try again.')
    }

    // Remove the reCAPTCHA token before sending to the API
    formData.delete('recaptchaToken')

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
