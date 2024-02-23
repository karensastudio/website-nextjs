import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold after:text-slate-300 after:content-['/_'] before:text-slate-950 before:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="مشاوره" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-slate-600">
        <p>
          در ابتدا با برگزاری جلسات مشاوره به شما کمک می‌کنیم تا دید تکنیکال و پروداکتی از ایده خودتان را به دست آورید. این جلسات به شما کمک می‌کنند تا ایده‌ی خود را به یک پروژه‌ی قابل اجرا تبدیل کنید.
        </p>
        <p>
          در ادامه با مکتوب کردن سوالات مختلف و بررسی‌های امکان‌پذیری، به شما کمک می‌کنیم تا یک RFP (Request for Proposal) کامل و دقیق برای پروژه‌ی خودتان تهیه کنید.
        </p>
        <p>
          پس از برگزاری جلسات، تیم ما با بررسی دقیق این RFP و مشاهده نمونه و رقبای موجود،‌ زمان‌بندی و هزینه اجرای پروژه را در قالب یک پروپوزال به شما ارائه می‌دهد.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-slate-950">
        کلمات کلیدی این فاز
      </h3>
      <TagList className="mt-4 pl-10">
        <TagListItem>پروپوزال</TagListItem>
        <TagListItem>قیمت‌دهی</TagListItem>
        <TagListItem>زمان‌بندی</TagListItem>
        <TagListItem>تحلیل رقبا</TagListItem>
        <TagListItem>پیش‌نویس قرارداد</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="اجرای پروژه" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-slate-600">
        <p>
          همزمان با اجرای قرارداد و پرداخت پیش پرداخت، تیم ما با بررسی دقیق نیازهای پروژه و انتخاب تکنولوژی‌های مناسب، به اجرای پروژه می‌پردازد و در صورت نیاز پروژه به Ui Design پروسه طراحی آن از این نقطه شروع می‌شود.
        </p>
        <p>
          کارفرما بایستی حتما همزمان با انجام پیش‌پرداخت، مواردی همچون سرور، دامنه و... را نیز آماده و تحویل دهد تا تیم بتواند مطابق با زمان‌بندی ارائه شده به اجرای پروژه بپردازد.
        </p>
        <p>
          در این فاز با توجه به زمانبندی ارائه شده، جلساتی به صورت هفتگی یا ماهیانه برگزار می‌شود تا از پیشرفت پروژه مطلع شوید.
        </p>
        <p>
          در طی هفته‌های پایانی اجرای پروژه، تیم ما با برگزاری جلسات تست و ارائه نسخه‌های پیش‌نمایشی به شما اطمینان لازم را می‌دهد که پروژه به شکل درست پیاده‌سازی شده است.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="تحویل پروژه" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-slate-600">
        <p>
          در این مرحله پروژه به شکل کامل به شما تحویل داده می‌شود. این مرحله شامل تحویل کد منبع، داکیومنتیشن پروژه و آموزش‌های لازم برای استفاده از پروژه است.
        </p>
        <p>
          در این مدت با تست کامل پروژه و اطمینان از عملکرد صحیح آن، پروژه به شکل کامل به شما تحویل داده می‌شود. دیباگ و رفع اشکالات پروژه در دو مرحله دیباگ لیست اولیه و دیباگ لیست نهایی انجام می‌شود.
        </p>
        <p>
          نهایتا با تایید کارفرما، گام نهایی پروژه یعنی نصب و راه‌اندازی پروژه بر روی سرورهای کارفرما انجام می‌شود و سرویس به شکل کامل و با بهینه‌سازی سرعت و کشینگ، در دسترس کاربران قرار می‌گیرد.
        </p>
        <p>
         پشتیبانی رایگان پروژه تا مدت ۳ ماه در قالب حل ایرادات (بدون توسعه ویژگی‌های جدید) ادامه خواهد داشت.
        </p>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-slate-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-slate-100 stroke-slate-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'روند همکاری',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="روند همکاری" title="صفر تا صد پروژه">
        <p>
          در این بخش با توصیف کامل روند اجرای یک پروژه از مشاوره تا تحویل و پشتیبانی پروژه، شما را با ساختار کلی اجرای پروژه‌ها توسط تیم کارنسا آشنا می‌کنیم.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
