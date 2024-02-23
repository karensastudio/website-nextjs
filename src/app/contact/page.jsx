import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactForm } from './contact-form'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-slate-950">
        شرکای تجاری ما
      </h2>
      <p className="mt-6 text-base text-slate-600">
        کارنسا در طی سال‌های گذشته همکاران و دوستانی در کنار خود در کشور های مختلف جهت ایجاد امکان انجام پروژه برای مشتریان خارج از ایران نیز فراهم کرده.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-slate-950">
          آدرس ایمیل
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['استخدام', 'careers@karensadev.com'],
            ['همکاری', 'hi@karensadev.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-slate-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-slate-600 hover:text-slate-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-slate-950">
          شبکه‌های اجتماعی
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'تماس با ما',
  description: 'از مشاوره، تا اجرا و پشتیبانی در کنار شما هستیم.'
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="شروع یک همکاری متفاوت!">
        <p>بی صبرانه منتظر شنیدن صدای شما هستیم.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
