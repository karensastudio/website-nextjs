import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import clsx from 'clsx'
import { Tooltip } from '@nextui-org/tooltip'

import PhinixLogo from '@/images/clients/phinix/phinix-logo.png'
import KioskLogo from '@/images/clients/kiosk/kiosk-logo.svg'
import ViwinLogo from '@/images/clients/viwin/viwin-logo.svg'
import GardeshgariLogo from '@/images/clients/gardeshgari/gardeshgari-logo.svg'
import BimeSamanLogo from '@/images/clients/bime-saman/bime-saman-logo.png'
import UnileverLogo from '@/images/clients/unilever/unilever-logo.svg'
import OmnicartLogo from '@/images/clients/omnicart/omnicart-logo-dark.svg'
import ArianDieselLogo from '@/images/clients/arian-diesel/arian-diesel-logo.png'
import IliaAutoLogo from '@/images/clients/ilia-auto/ilia-logo.png'
import FinupLogo from '@/images/clients/finup/finup-logo-dark.svg'
import SimorghTejaratLogo from '@/images/clients/simorgh-tejarat/simorgh-tejarat-logo.png'
import MedpipLogo from '@/images/clients/medpip/medpip-logo.png'
import PuzzleLogo from '@/images/clients/puzzle/puzzle-logo.svg'
import ZeenomeLogo from '@/images/clients/zeenome/zeenome-logo.svg'
import DanielleeLogo from '@/images/clients/daniellee/daniellee-logo.png'
import HaykLogo from '@/images/clients/hayk/hayk-logo.png'
import BrauntabLogo from '@/images/clients/bruntab/bruntab-logo.png'
import AvidfoamLogo from '@/images/clients/avidfoam/avidfoam-logo.png'
import ZivanLogo from '@/images/clients/zivan/zivan-logo.webp'
import AvesLogo from '@/images/clients/aves/aves-logo.png'
import ApadanaLogo from '@/images/clients/apadana/apadana-logo.png'
import IgniteLogo from '@/images/clients/ignite/ignite-logo.png'
import ArtnooshganLogo from '@/images/clients/artnooshgan/artnooshgan-logo.png'
import BehinepardazanLogo from '@/images/clients/behinepardazan/behinepardazan-logo.png'
import MomLogo from '@/images/clients/mom/mom-logo.webp'
import SibcheLogo from '@/images/clients/sibche/sibche-logo.png'
import ZistaLogo from '@/images/clients/zista/zista-logo.png'
import VatandarFranceLogo from '@/images/clients/vatandar-france/vatandar-france-logo.png'
import TedxSutLogo from '@/images/clients/tedx-sut/tedx-sut-logo.png'
import CyrusLogo from '@/images/clients/cyrus/cyrus-festival-logo.png'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-slate-950">
          شرح پروژه‌ها
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none object-contain"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-slate-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-slate-950 after:ml-4 after:font-semibold after:text-slate-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-slate-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-slate-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-slate-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`مطالعه بیشتر: ${caseStudy.client}`}
                    >
                      بیشتر بخوانید
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['بانک گردشگری', GardeshgariLogo, false],
  ['بیمه سامان', BimeSamanLogo, false],
  ['یونیلیور ایران', UnileverLogo, false],
  ['صرافی فینیکس', PhinixLogo, false],
  ['Omnicart', OmnicartLogo, false],
  ['پت‌شاپ ژیوان', ZivanLogo, false],
  ['شرکت کفش دنیلی', DanielleeLogo, false],
  ['آرین دیزل', ArianDieselLogo, false],
  ['صنایع خودروسازی ایلیا', IliaAutoLogo, true],
  ['سامانه‌های یکپارچه سیمرغ تجارت', SimorghTejaratLogo, false],
  ['سیبچه', SibcheLogo, false],
  ['پل ایده‌آل پارس', MedpipLogo, false],
  ['برشته‌کاری قهوه هایک', HaykLogo, false],
  ['وی‌وین', ViwinLogo, true],
  ['مجموعه رویدادهای فیناپ', FinupLogo, false],
  ['صرافی کیوسک', KioskLogo, false],
  ['مجموعه ورزش‌های آبی آوِس', AvesLogo, true],
  ['پازل استودیو', PuzzleLogo, false],
  ['زینوم', ZeenomeLogo, false],
  ['برونتاب انرژی', BrauntabLogo, false],
  ['آوید فوم', AvidfoamLogo, false],
  ['مرکز ناباروری مام', MomLogo, true],
  ['بهینه پردازان', BehinepardazanLogo, false],
  ['تدکس شریف', TedxSutLogo, false],
  ['فستیوال فیلم کورش', CyrusLogo, true],
  ['رستوران آپادانا', ApadanaLogo, false],
  ['Ignite talks', IgniteLogo, false],
  ['آرت نوشگان', ArtnooshganLogo, false],
  ['زیستا صدر سبا', ZistaLogo, false],
  ['Vatandar France', VatandarFranceLogo, false],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-slate-950">
          همکاری با شما باعث افتخار ماست
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo, invert]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden w-full flex items-stretch justify-center h-full">
                <Border className="w-full pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px flex items-center justify-center">
                  <Tooltip position="bottom" content={client} showArrow={true} color='danger'>
                    <Image src={logo} alt={client} className={clsx("grayscale hover:grayscale-0 transition-all opacity-90 max-w-[120px] mx-auto flex items-center justify-center", invert ? 'invert' : 'hover:invert-0')} unoptimized />
                  </Tooltip>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'نمونه کار ها',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="نمونه کار ها"
        title="راه حل‌هایی اجرا شده برای نیاز مشتریان"
      >
        <p>
          در این بخش ما به توصیف و ارائه گزارشی کوتاه از راه حل هایی که با توجه به نیاز کارفرما برای آن ها به شکل وب سایت اجرا شده میپردازیم.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
      >
        We approached <em>Studio</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial> */}

      <Clients />

      <ContactSection />
    </>
  )
}
