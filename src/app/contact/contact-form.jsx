"use client";

import { Button } from "@/components/Button"
import { FadeIn } from "@/components/FadeIn"
import { useId } from "react";

function TextInput({ label, ...props }) {
    let id = useId()

    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type="text"
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border border-slate-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-slate-950 ring-4 ring-transparent transition focus:border-slate-950 focus:outline-none focus:ring-slate-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute right-6 top-1/2 -mt-3 origin-right text-base/6 text-slate-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-950"
            >
                {label}
            </label>
        </div>
    )
}

function RadioInput({ label, ...props }) {
    return (
        <label className="flex gap-x-3">
            <input
                type="radio"
                {...props}
                className="h-6 w-6 flex-none appearance-none rounded-full border border-slate-950/20 outline-none checked:border-[0.5rem] checked:border-slate-950 focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            />
            <span className="text-base/6 text-slate-950">{label}</span>
        </label>
    )
}

export function ContactForm() {

    // send data to https://hooks.zapier.com/hooks/catch/18035987/3epflfs/ zaiper webhook
    async function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        try {
            let response = await fetch('https://hooks.zapier.com/hooks/catch/18035987/3epflfs/', {
                method: 'POST',
                body: JSON.stringify(data),
            })
            if (response.ok) {
                alert('فرم با موفقیت ارسال شد.')
            } else {
                alert('متاسفانه مشکلی در ارسال فرم به وجود آمد.')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('متاسفانه مشکلی در ارسال فرم به وجود آمد.')
        }
    }

    return (
        <FadeIn className="lg:order-last">
            <form onSubmit={handleSubmit}>
                <h2 className="font-display text-base font-semibold text-slate-950">
                    فرم درخواست همکاری
                </h2>
                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label="نام و نام خانوادگی" name="name" autoComplete="name" />

                    <TextInput
                        label="آدرس ایمیل"
                        type="email"
                        name="email"
                        autoComplete="email"
                    />

                    <TextInput
                        label="نام شرکت/سازمان/استارتاپ"
                        name="company"
                        autoComplete="organization"
                    />

                    <TextInput label="شماره موبایل" type="tel" name="phone" autoComplete="tel" />

                    <TextInput label="متن پیام" name="message" />

                    <div className="border border-slate-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                        <fieldset>
                            <legend className="text-base/6 text-slate-500">بودجه حدودی</legend>
                            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <RadioInput label="۱۰ تا ۵ میلیون تومن" name="budget" value="5" />
                                <RadioInput label="۱۰ تا ۲۰ میلیون تومن" name="budget" value="10" />
                                <RadioInput label="۲۰ تا ۵۰ میلیون تومان" name="budget" value="20" />
                                <RadioInput label="۵۰ تا ۱۰۰ میلیون تومان" name="budget" value="50" />
                                <RadioInput label="بالاتر از ۱۰۰ میلیون تومان" name="budget" value="100" />
                            </div>
                        </fieldset>
                    </div>
                </div>
                <Button type="submit" className="mt-10">
                    ارسال فرم
                </Button>
            </form>
        </FadeIn>
    )
}
