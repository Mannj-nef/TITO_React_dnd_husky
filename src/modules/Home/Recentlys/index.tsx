import RecentlyItem from './Item'

const RecentlyProject = () => {
  return (
    <div className='mt-5'>
      <h3 className='capitalize'>recently edited project</h3>

      <div className='overflow-x-auto mt-3'>
        <div className='flex xs:gap-3 gap-5'>
          {Array(4)
            .fill(null)
            .map(() => (
              <RecentlyItem key={Math.random()}></RecentlyItem>
            ))}
        </div>
      </div>
    </div>
  )
}

export default RecentlyProject
