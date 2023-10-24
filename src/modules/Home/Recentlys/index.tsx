import RecentlyItem from './Item'

const RecentlyProject = () => {
  return (
    <div className='mt-5'>
      <h3 className='capitalize'>recently edited project</h3>

      <div className='grid grid-cols-4 gap-5 mt-5 '>
        {Array(4)
          .fill(null)
          .map(() => (
            <RecentlyItem key={Math.random()}></RecentlyItem>
          ))}
      </div>
    </div>
  )
}

export default RecentlyProject
