import { CalendarDaysIcon, MapPinIcon, BuildingStorefrontIcon, BellAlertIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Date Voting',
    description:
      'Simplify scheduling by allowing friends to vote on their preferred dates for the gathering.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Location Selection',
    description:
      'Choose and vote on potential venues to find the perfect spot that suits everyones preference.',
    icon: MapPinIcon,
  },
  {
    name: 'Restaurant and Food Options',
    description:
      'Collaboratively decide on the dining experience, from selecting the restaurant to voting on specific food options.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Real-Time Updates',
    description:
      'Stay informed with real-time notifications about votes, changes, and final decisions.',
    icon: BellAlertIcon,
  },
]

const Features = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Meet faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to meet your friends
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features