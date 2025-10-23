import Image from "next/image"

interface TimelineYear {
  year: number
  title: string
  theme: string
  featuredImage?: string
  slug: string
}

interface TimelineProps {
  years: TimelineYear[]
}

export function VerticalTimeline({ years }: TimelineProps) {
  return (
<div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto justify-left">        
     <div className="relative ">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-300"></div>
          {years
            .sort((a, b) => b.year - a.year)
            .map((year, index) => (
              <div key={year.slug} className="mb-12 relative">
                {/* Circle marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full z-10 top-6"></div>

                {/* Content cards */}
                <div className="flex justify-end w-full">
                  <div className="w-5/12 pl-8 text-left">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-gray-800">
                        {year.year} – {year.theme}
                      </h3>
                      {year.featuredImage && (
                        <img
                          src={year.featuredImage}
                          alt={`${year.title} featured`}
                          className="mt-4 rounded-lg w-full h-48 object-cover"
                        />
                      )}
                      <p className="mt-4 text-gray-600">{year.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
