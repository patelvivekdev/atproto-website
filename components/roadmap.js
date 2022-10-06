import { CheckIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    content: 'Publish developer preview',
    date: 'Oct 6',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    content: 'Finish the v1 protocol spec',
    date: 'In Progress',
    icon: EllipsisHorizontalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    content: 'Release the v1 beta software',
    icon: EllipsisHorizontalIcon,
    iconBackground: 'bg-gray-400',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Roadmap() {
  return (
    <div className="">
      <h3 className="text-center text-3xl mb-8 font-bold">Roadmap</h3>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {timeline.map((event, eventIdx) => (
            <li key={eventIdx}>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                    >
                      <event.icon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">{event.content}</p>
                    </div>
                    {event.date && (
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {event.date}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}