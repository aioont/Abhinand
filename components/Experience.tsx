import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, text1, text2 }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
  
      </div>
    </div>
  )
}

export default Experience
