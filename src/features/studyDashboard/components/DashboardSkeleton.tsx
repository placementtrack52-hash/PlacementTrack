import LoadingSkeleton from './LoadingSkeleton'

const DashboardSkeleton = () => (
  <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
    <div className="space-y-6">
      <LoadingSkeleton className="h-[25rem] rounded-2xl" />
      <div className="grid gap-4 md:grid-cols-3">
        <LoadingSkeleton className="h-32 rounded-2xl" />
        <LoadingSkeleton className="h-32 rounded-2xl" />
        <LoadingSkeleton className="h-32 rounded-2xl" />
      </div>
      <LoadingSkeleton className="h-[25rem] rounded-2xl" />
    </div>
    <LoadingSkeleton className="h-[49rem] rounded-2xl" />
    <div className="xl:col-span-2 space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <LoadingSkeleton className="h-28 rounded-2xl" />
        <LoadingSkeleton className="h-28 rounded-2xl" />
        <LoadingSkeleton className="h-28 rounded-2xl" />
        <LoadingSkeleton className="h-28 rounded-2xl" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <LoadingSkeleton className="h-80 rounded-2xl" />
        <LoadingSkeleton className="h-80 rounded-2xl" />
      </div>
      <LoadingSkeleton className="h-44 rounded-2xl" />
    </div>
  </div>
)

export default DashboardSkeleton
