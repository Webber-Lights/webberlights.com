import SubBanner from '@/components/ui/SubBanner'
import { VerticalTimeline } from './Timeline'
import { allTimelineYears } from 'contentlayer/generated'

export default function TimelinePage() {
  return (
    <div>
        <SubBanner
            title="Timeline"
            subtitle="A Journey Through Our Light Shows Over the Years"
        />
          <VerticalTimeline years={allTimelineYears} />

    </div>
  )};