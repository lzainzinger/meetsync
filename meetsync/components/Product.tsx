import { CalendarDaysIcon, MapPinIcon, BuildingStorefrontIcon } from '@heroicons/react/20/solid'

const Product = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary">Meet faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to plan a get-together</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                MeetSync is a revolutionary app designed to simplify the process of organizing social gatherings with friends. Our platform empowers users to effortlessly vote on dates, venues, restaurants, food options, and more, ensuring that planning a get-together is as enjoyable as the event itself.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/img/screenshot_meetsync.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              In todays fast-paced world, coordinating social gatherings with friends can be a daunting task. 
              Endless message threads, conflicting schedules, and differing preferences often turn what should be a fun and exciting process into a stressful and time-consuming ordeal.

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CalendarDaysIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Streamlined Scheduling.</strong> Effortlessly find a date that works for everyone with our simple and intuitive voting system. 
                    No more endless back-and-forth messages.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MapPinIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Simplified Venue Selection.</strong> Quickly agree on a venue that suits everyones preferences through a collaborative voting process, eliminating lengthy debates.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BuildingStorefrontIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hassle-Free Decision Making.</strong> From selecting the type of cuisine to choosing the perfect restaurant, make decisions collectively and easily, reducing the burden on any single individual.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                By addressing these common pain points, MeetSync not only makes the process of planning social gatherings more efficient but also enhances the overall experience, ensuring that spending time with friends is as enjoyable as it should be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product