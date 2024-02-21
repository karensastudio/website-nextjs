import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'

import PhinixLogo from '@/images/clients/phinix/phinix-logo.png'
import KioskLogo from '@/images/clients/kiosk/kiosk-logo.svg'
import ViwinLogo from '@/images/clients/viwin/viwin-logo.svg'
import GardeshgariLogo from '@/images/clients/gardeshgari/gardeshgari-logo.svg'
import BimeSamanLogo from '@/images/clients/bime-saman/bime-saman-logo.png'
import UnileverLogo from '@/images/clients/unilever/unilever-logo.svg'
import OmnicartLogo from '@/images/clients/omnicart/omnicart-logo.svg'
import ArianDieselLogo from '@/images/clients/arian-diesel/arian-diesel-logo.png'
import IliaAutoLogo from '@/images/clients/ilia-auto/ilia-logo.png'
import FinupLogo from '@/images/clients/finup/finup-logo.svg'
import SimorghTejaratLogo from '@/images/clients/simorgh-tejarat/simorgh-tejarat-logo.png'
import MedpipLogo from '@/images/clients/medpip/medpip-logo.png'

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['بانک گردشگری', GardeshgariLogo],
  ['بیمه سامان', BimeSamanLogo],
  ['یونیلیور ایران', UnileverLogo],
  ['صرافی فینیکس', PhinixLogo],
  ['Omnicart', OmnicartLogo],
  ['صرافی کیوسک', KioskLogo],
  ['آرین دیزل', ArianDieselLogo],
  ['وی‌وین', ViwinLogo],
  ['صنایع خودروسازی ایلیا', IliaAutoLogo],
  ['مجموعه رویدادهای فیناپ', FinupLogo],
  ['سامانه‌های یکپارچه سیمرغ تجارت', SimorghTejaratLogo],
  ['پل ایده‌آل پارس', MedpipLogo],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-slate-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold text-white sm:text-left">
            مورد اعتماد ده‌ ها شرکت و استارتاپ از جمله
          </h2>
          <div className="h-px flex-auto bg-slate-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className='flex items-center justify-center'>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized className="grayscale brightness-[100] opacity-90 max-w-[120px] mx-auto" />
                </FadeIn>
              </li>
            ))}
            {/* <li className='flex items-center justify-center'>
              <FadeIn>
                <span className='text-white'>+ ۳۵ مشتری دیگر</span>
              </FadeIn>
            </li> */}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="هر پروژه، یک داستان و چالش جدید"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          با مطالعه شرح پروژه (case study) های زیر، با توانایی‌ها و تجربه‌های ما آشنا شوید.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-slate-950/5 transition hover:bg-slate-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="w-16 object-contain grayscale brightness-0"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-slate-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-slate-300" aria-hidden="true">
                    /
                  </span>
                  <span>نمونه کار</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-slate-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-slate-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="خدمات ما"
        title="ما در چه زمینه‌هایی فعالیت می‌کنیم؟"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          فعالیت‌های ما محدود به موارد زیر نیست اما این موارد احتمالا خدماتی است که بیشتر به آن‌ها نیاز دارید.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pl-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pr-4">
            <ListItem title="طراحی وب (UI/UX)">
              خدمات ما در زمینه طراحی UI/UX شامل تحلیل کاربری، طراحی رابط کاربری جذاب و متمایز، و ایجاد پروتوتایپ‌های تعاملی به منظور بهبود تجربه کاربری است. با تمرکز بر کیفیت و ارتباط مستقیم با مشتریان، تیم ما به هدف ارائه تجربه کاربری بی‌نظیری برای مشتریان شما می‌پردازد.
            </ListItem>
            <ListItem title="برنامه نویسی و توسعه وب">
              خدمات ما در زمینه برنامه‌نویسی و توسعه وب شامل ایجاد وب‌سایت‌های شخصی و تجاری، توسعه برنامه‌های وب و اپلیکیشن‌های تحت وب، و ارائه راه‌حل‌های نرم‌افزاری سفارشی برای نیازهای منحصر به فرد کسب‌وکارهاست. تیم ما از فناوری‌های روز استفاده می‌کند و با بهره‌گیری از بهترین استانداردهای برنامه‌نویسی، راه‌حل‌هایی انعطاف‌پذیر و قابل اعتماد را برای مشتریان ارائه می‌دهد.
            </ListItem>
            <ListItem title="توسعه اپلیکیشن">
              خدمات ما در زمینه توسعه اپلیکیشن برای سیستم عامل‌های iOS و اندروید متمرکز است. از جمله فعالیت‌های ما طراحی و توسعه اپلیکیشن‌های متنوع برای دو پلتفرم موبایل و تحت وب می‌باشد. تیم ما از تکنولوژی‌های روز و رویکردهای نوآورانه استفاده می‌کند تا به ارائه راه‌حل‌های نرم‌افزاری با کیفیت و عملکرد بالا بپردازد.
            </ListItem>
            <ListItem title="تیم سازی">
              خدمات ما در زمینه تیم سازی شامل ارائه مشاوره و راهکارهایی برای توسعه تیم‌های فنی و تکنولوژی می‌باشد. تیم ما از تجربه و دانش خود در زمینه توسعه و مدیریت تیم‌های فنی استفاده می‌کند تا به کسب‌وکارها کمک کند تا تیم‌های فنی خود را توسعه دهند و به بهترین شکل ممکن به اهداف خود برسند.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-slate-950 [text-wrap:balance] sm:text-7xl">
            استودیو برنامه نویسی با تمرکز بر خلاقیت و کیفیت
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            کارنسا، استودیویی با خلاقیت و کیفیت در برنامه نویسی و طراحی وبسایت و اپلیکیشن موبایل است. تیم ما از افراد متخصص و با تجربه تشکیل شده است و با استفاده از جدیدترین تکنولوژی‌ها و رویکردهای نوآورانه، بهترین راه حل‌های برنامه نویسی را ارائه می‌دهد. با کارنسا، تجربه‌ی کاری متفاوتی خواهید داشت و به طراحی وبسایت‌هایی منحصر به فرد و کارآمد دست خواهید یافت. ما به ارائه خدمات با کیفیت بالا و رضایت مشتریانمان اهمیت می‌دهیم.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
