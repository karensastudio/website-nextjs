import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import clsx from 'clsx'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'

export const metadata = {
  title: {
    template: '%s - کارنسا',
    default: 'کارنسا - استودیو برنامه نویسی خلاق',
  },
}

const PeydaWeb = localFont({
  src: [
    {
      path: '../fonts/woff2/PeydaWeb-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/woff2/PeydaWeb-Black.woff2',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-peyda',
})

export default function Layout({ children }) {
  return (
    <html lang="fa" dir='rtl' className="h-full bg-slate-950 text-base antialiased">
      <body className={clsx("flex min-h-full flex-col", 'font-sans', PeydaWeb.variable)}>
        <Toaster
          dir="rtl"
          toastOptions={{
            classNames: {
              toast: 'font-sans'
            },
          }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
