import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { toast } from 'sonner'

const navigation = [
  {
    title: 'نمونه‌کارها',
    links: [
      { title: 'پل ایده‌آل پارس', href: '/work/atlas' },
      { title: 'پازل استودیو', href: '/work/puzzle' },
      { title: 'فیناپ', href: '/work/finup' },
      {
        title: (
          <>
            نمایش همه <span aria-hidden="true">&larr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'کارنسا',
    links: [
      // { title: 'درباره ما', href: '/about' },
      { title: 'روند همکاری', href: '/process' },
      // { title: 'وبلاگ', href: '/blog' },
      { title: 'تماس با ما', href: '/contact' },
    ],
  },
  {
    title: 'شبکه‌های اجتماعی',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-slate-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-slate-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-slate-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {

  function handleSubmit(event) {
    event.preventDefault()

    toast.success('از عضویت شما در خبرنامه‌ی ما متشکریم!', {
      duration: 5000,
    })
  }

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-slate-950">
        ثبت نام در خبرنامه
      </h2>
      <p className="mt-4 text-sm text-slate-700">
        هر هفته آخرین مقالات و مطالب ما را از طریق ایمیل دریافت کنید.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="آدرس ایمیل"
          autoComplete="email"
          aria-label="آدرس ایمیل"
          className="block w-full rounded-2xl border border-slate-300 bg-transparent py-4 pr-6 pl-20 text-base/6 text-slate-950 ring-4 ring-transparent transition placeholder:text-slate-500 focus:border-slate-950 focus:outline-none focus:ring-slate-950/5"
        />
        <div className="absolute inset-y-1 left-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-slate-800"
          >
            <ArrowIcon className="w-4 rotate-180" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-slate-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-slate-700">
            © استودیو کارنسا <span className='ps-1'>{new Date().getFullYear()}</span>
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
