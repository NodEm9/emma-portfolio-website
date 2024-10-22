function Card({title, img, text, video, demoUrl, codeUrl}) {
  return (
    <div className='cards mb-4'>
      <div className='card-images'>
        {video ? (
          <img src={video} alt='Project video' className='video' />
        ) : (
          <img src={img} alt='Project' className='card-img' />
        )}
      </div>
      <div className='card-b'>
        <h3 className='fw-bold pt-4 pb-1'>{title}</h3>
        <p className='fw-medium'>{text}</p>
        <div className='card-link'>
          <a
            href={demoUrl}
            target='_blank'
            rel="noreferrer"
            aria-label='View project'
            title='View project'
            className='links float-start'>Demo</a>
          <a
            href={codeUrl}
            className='links float-end'
            rel="noreferrer"
            aria-label='View code'
            title='View code'
            target='_blank'>Code</a>
        </div>
      </div>
    </div>
  )
}

export default Card