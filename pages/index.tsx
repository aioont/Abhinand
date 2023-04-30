import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default function Home(): JSX.Element {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="grid grid-cols-1 space-y-10 py-4 sm:space-y-5 sm:py-14 xl:grid-cols-5">
          <div className="col-span-3 justify-center space-y-5 align-middle">
            <span className="relative inset-y-4 ml-24 inline-block px-1 before:absolute before:-inset-1 before:block before:-skew-y-6 before:rounded-lg before:bg-primary-600 before:bg-opacity-20 sm:inset-y-7 sm:ml-40">
              <span className="relative inline-block -rotate-6 text-primary-500">
                <Link
                  href="https://instagram.com/aioont8"
                  className="font-arrow2 text-sm font-bold text-primary-500 transition hover:underline hover:underline-offset-8 sm:text-xl"
                >
                  @aioont8
                </Link>
              </span>
            </span>
            <h1 className="pt-2 text-4xl font-bold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-snug">
              Abhinand
              <span className="relative inset-y-8 ml-2 inline-block -rotate-12 font-arrow text-primary-500 sm:inset-y-14">
                ^
              </span>
              I
            </h1>
            <p className="text-black dark:text-white sm:pr-6 sm:text-lg sm:leading-8">
              Welcome to my portfolio websites – Hi , I am a student from Kerala studying BSC Computer Science at the College of Applied Science IHRD, Kozhikode.
               I am a passionate individual with knowledge of language and development tools who loves to work in the IT field.
              <span className="waving-hand text-2xl">👋🏻</span>
            </p>
            <p className="leading-7 text-gray-500 underline underline-offset-4 sm:pr-6 sm:text-lg">
              <Link
                href="/about"
                className="hover:cursor-pointer hover:text-primary-500 dark:text-gray-500 hover:dark:text-primary-500"
              >
                <a>Read the rest of my bio &rarr;</a>
              </Link>
            </p>
          </div>
          {siteMetadata.newsletter.provider !== '' && (
            <div className="col-span-2 flex xl:items-center xl:justify-center xl:pl-6">
              {/* Newsletter Form */}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
