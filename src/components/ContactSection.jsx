import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-slate-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              از مشاوره، تا اجرا و پشتیبانی در کنار شما هستیم
            </h2>
            <div className="mt-6 flex gap-3">
              <Button href="/contact" invert>
                تماس با ما
              </Button>
              <Button href="https://t.me/karensastudio_contact" invert>
                شروع مکالمه در تلگرام
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                راه‌های ارتباطی
              </h3>
              <a href="tel:+989392676126">
                <p className='text-4xl text-white text-end mt-2 tracking-wider font-bold' dir='ltr'>
                  +98 939 267 6126
                </p>
              </a>
              <a href="mailto:info@karensastudio.com">
                <p className='text-lg text-white text-end mt-2 tracking-wider font-light' dir='ltr'>
                  info@karensastudio.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
