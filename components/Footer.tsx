import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="my-16 flex flex-col">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
            {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>
          <div className="mb-2 mt-2 flex flex-col space-x-2 text-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:flex-row">
            <div>
              {`© ${new Date().getFullYear()}`} {siteMetadata.author}
            </div>
            <div>{` • `}</div>
            {/* <Link href="/">{siteMetadata.title}</Link> */}
            <Link
              href={siteMetadata.rss}
              className="hover:text-primary-500 hover:underline hover:underline-offset-4"
            >
              RSS Feed
            </Link>
            <div>{` • `}</div>
            <Link
              href="https://github.com/reubence/reubence.com"
              className="hover:text-primary-500 hover:underline hover:underline-offset-4"
            >
              Clone Theme
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
